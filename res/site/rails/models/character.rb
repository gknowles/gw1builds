# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# character.rb - gw1builds rails

class Character < ActiveRecord::Base
  include ModelHelper

  belongs_to :owner,
    :class_name => 'Group', :foreign_key => 'owner_id'
  belongs_to :viewer,
    :class_name => 'Group', :foreign_key => 'viewer_id'
  has_many :character_attrs, :dependent => :destroy
  has_many :character_skills, :dependent => :destroy
  has_many :character_items, :dependent => :destroy

  validates_presence_of :primary_code, :secondary_code
  validates_length_of :name, :in => 1..20
  validates_format_of :name,
    :with => /^[A-Za-z0-9]+(\s[A-Za-z0-9]+)*$/
  validates_inclusion_of :level, :within => 0..20
  validates_inclusion_of :attr_bonus_pts, :within => [0,15,30]

  RUNE_TYPES = { 'None'=>0, 'Minor'=>1, 'Major'=>2, 'Superior'=>3 }
  #             0         1         2
  #             012345678901234567890123456
  NAME_CHARS = " abcdefghijklmnopqrstuvwxyz"
  ITEM_LOCATIONS = [ 'weapon', 'offhand',
    'head', 'chest', 'hands', 'legs', 'feet' ]

  def pack(skipName = true)
    codec = Base64Codec.new
    # version
    codec.put 8, 4
    # professions
    width = 4 # bit width of profession codes
    codec.put(width - 4, 2)
    codec.put(self.primary_code, width)
    codec.put(self.secondary_code, width)
    # level, attr bonus
    codec.put(self.level, 5)
    codec.put self.attr_bonus_pts / 15, 2
    # attrs with runes and headgear
    width = 6 # bit width of attr codes
    codec.put width - 4, 4
    num = self.character_attrs.collect { |ca|
      ca.value == 0 ? nil : ca
    }.nitems
    codec.put num, 4
    for cattr in self.character_attrs
      next if cattr.value == 0
      runeBonus = cattr.rune
      hgBonus = cattr.code == self.headgear_attr_code ? 1 : 0
      codec.put cattr.code, width
      codec.put cattr.value - runeBonus - hgBonus, 4
      codec.put runeBonus, 2
      codec.put hgBonus, 1
    end
    # skills
    width = 9 # bit width of skill codes
    # sort the skills into slots, alternates first
    # and size max code width
    slots = Array.new(8)
    for slot in 0...slots.length do slots[slot] = [] end
    for cskill in self.character_skills
      slots[cskill.slot][cskill.alternate] = cskill
      width += 1 while cskill.code >= (1 << width)
    end
    codec.put width - 8, 4
    # put skills, slot/alt inherent by position
    for slot in 0...slots.length
      cskills = slots[slot]
      for alt in (1...cskills.length).to_a + [0]
        cskill = cskills[alt]
        codec.put alt != 0 ? 1 : 0, 1 # is alternate?
        if cskill.nil?
          codec.put 0, width
        else
          codec.put cskill.code, width
        end
      end
    end

    # items
    width = 1; uwidth = 1;
    num = 0
    # size codes
    for citem in self.character_items
      num += 1
      width += 1 while citem.base >= (1 << width)
      max = [citem.mod1, citem.mod2, citem.mod3, 0].compact.max
      uwidth += 1 while max >= (1 << uwidth)
    end
    codec.put width, 4
    codec.put uwidth, 4
    # put items
    codec.put num, 3
    for citem in self.character_items
      codec.put ITEM_LOCATIONS.index(citem.where), 3
      codec.put citem.base, width
      mods = [citem.mod1, citem.mod2, citem.mod3].compact
      codec.put mods.length, 2
      codec.put citem.color, 4
      for mod in mods
        codec.put mod, uwidth
      end
    end

    # name
    unless skipName
      codec.put 1,2
      name.downcase.each_byte do |ch|
        codec.put Character::NAME_CHARS.index(ch) + 1, 5
      end
      codec.put 0,5
    end
    # end
    codec.flush
    codec.str
  end # pack(skipName)


  def self.unpack(src)
    toon = Character.new({:name => 'Unnamed'})
    codec = Base64Codec.new(src)
    # version
    ver = codec.get(4)
    raise ArgumentError unless ver == 8
    # professions
    width = 4 + codec.get(2)
    toon.primary_code = codec.get(width)
    toon.secondary_code = codec.get(width)
    # level, attr bonus
    toon.level = codec.get(5)
    toon.attr_bonus_pts = 15 * codec.get(2)
    # attrs with rune and headgear
    width = 4 + codec.get(4)
    num = codec.get(4)
    1.upto num do
      code = codec.get(width)
      raw, runeBonus, hgBonus = codec.get(4), codec.get(2), codec.get(1)
      # TODO: validate attr is good for pri/sec profession
      cattr = toon.character_attrs.build
      cattr.code = code
      cattr.value = raw + runeBonus + hgBonus
      cattr.rune = runeBonus
      toon.headgear_attr_code = code if hgBonus == 1
    end
    # skills, alts come before the skill per slot
    width = 8 + codec.get(4);
    slot, alt = 0, 1
    while slot < 8
      is_alt = codec.get(1) != 0
      code = codec.get(width)
      if code != 0
        # TODO: validate skill is good for pri/sec profession
        cskill = toon.character_skills.build
        cskill.code = code
        cskill.slot = slot
        cskill.alternate = is_alt ? alt : 0
      end
      if is_alt
        alt += 1
      else
        slot, alt = slot + 1, 1
      end
    end
    # items
    width = codec.get(4)
    uwidth = codec.get(4)
    num = codec.get(3)
    1.upto num do
      citem = toon.character_items.build
      citem.where = ITEM_LOCATIONS[codec.get(3)]
      citem.base = codec.get(width)
      unum = codec.get(2)
      citem.color = codec.get(4)
      citem.mod1 = codec.get(uwidth) if unum > 0
      citem.mod2 = codec.get(uwidth) if unum > 1
      citem.mod3 = codec.get(uwidth) if unum > 2
    end
#    # name
#    n = ''
#    while true
#      ch = codec.get(5)
#      break if ch == 0
#      ch = Character::NAME_CHARS[ch - 1]
#      raise ArgumentError if ch.nil?
#      n += ch
#    end
#    toon.name = n if n.length > 0
    toon
  end # self.unpack(str)


  def to_json(current_user)
    ret = {
      :id => self.id,
      :name => self.name,
      :packed => self.pack,
      :desc => self.description,
    }
    ret
  end # to_json


  def self.find_for_update(name, owner, current_user)
    toon = Character.find_by_name(name,
      :conditions => ['group_users.user_id = ?' +
        ' and group_users.role >= ? and groups.name = ?',
        current_user.id, User::EDITOR, owner],
      :joins => 'left join groups on groups.id = characters.owner_id ' \
        'left join group_users on groups.id = group_users.group_id',
      :select => 'characters.*',
      :include => [:character_attrs, :character_skills])
    toon
  end # find_for_update


  def update_from_unpacked(toon)
    self.primary_code = toon.primary_code
    self.secondary_code = toon.secondary_code
    self.level = toon.level
    self.attr_bonus_pts = toon.attr_bonus_pts
    self.headgear_attr_code = toon.headgear_attr_code
    Character.update_associated(self.character_attrs, toon.character_attrs,
      :code, :value, :rune)
    Character.update_associated(self.character_skills, toon.character_skills,
      [:slot, :alternate], :code)
    Character.update_associated(self.character_items, toon.character_items,
      :where, :base, :color, :mod1, :mod2, :mod3)
    self.name = toon.name if toon.name? and toon.name != 'Unnamed'
    self.description = toon.description if toon.description?
  end

end
