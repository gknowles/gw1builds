# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# skill.rb - gw1builds data
require 'rexml/document'

class Skill
  NO_ATTRIBUTE = 'No Attribute'
  NO_PROFESSION = 'No Profession'
  NO_SKILL = 'No Skill'
  PROFESSION_KEYS = [ 'common',
    'e', 'me', 'mo', 'n', 'r',
    'w', 'a',  'rt', 'd', 'p'
  ]

  attr_accessor :name,
    :profession, :attribute, :campaign,
    :type, :desc, :desc2, :desc3
  attr_accessor :effects # hash of arrays by effect name
  attr_reader :code, :elite,
    :en_cost, :ad_cost, :activation, :recharge,
    :upkeep
  def code=(val) @code = val.to_i end
  def elite=(val) @elite = val.nil? ? nil : (val == true) end
  def en_cost=(val) @en_cost = val.nil? ? nil : val.to_s.to_i end
  def ad_cost=(val) @ad_cost = val.nil? ? nil : val.to_s.to_i end
  def activation=(val) @activation = val.nil? ? nil : val.to_s.to_f end
  def recharge=(val) @recharge = val.nil? ? nil : val.to_s.to_i end
  def upkeep=(val) @upkeep = val.nil? ? nil : val.to_s.to_i end

  def desc_ranged
    tokens = @desc.gsub(/\s+/, ' ').strip.split '$'
    out = ""
    for i1 in 0...tokens.length
      if i1 % 2 == 0
        out += tokens[i1]
      else
        vals = @effects[tokens[i1]]
        out += vals[0].to_s
        if (vals.length == 2)
          out += "..#{vals[1].to_s}"
        end
      end
    end
    if @effects['failure']
      out += " (50% failure chance with #{@attribute} " +
        "#{@effects['failure'][0]} or less.)"
    end
    out
  end

  def self.compareProAttrName(a,b)
    rc = a.profession <=> b.profession
    if rc == 0
      rc = a.attribute <=> b.attribute
      if rc != 0
        rc = 1 if a.attribute == NO_ATTRIBUTE
        rc = -1 if b.attribute == NO_ATTRIBUTE
      end
    end
    rc = a.name <=> b.name if rc == 0
    rc
  end

end

Profession = Struct.new('Profession',
  :name, :code, :abbrev, :campaign, :desc, :attrs)
Attribute = Struct.new('Attribute',
  :name, :code, :abbrev, :primary, :skillAdjust, :desc)


#################################################
# Parse gwbbcode data (www.gwshack.us)
#
def parse_bb bbskills
  skills = []
  bbskills.each_pair do |code,bsk|
    sk = Skill.new
    sk.code = code
    sk.name = bsk['name']
    sk.profession = bsk['profession']
    sk.attribute = bsk['attribute']
    sk.campaign = ['Core','Prophecies','Factions','Nightfall'][bsk['chapter']]
    sk.type = bsk['type']
    sk.elite = (bsk['elite'] == 1)
    sk.en_cost = bsk['energy']
    sk.ad_cost = bsk['adrenaline'] if bsk['adrenaline'] != 0
    sk.activation = bsk['casting']
    sk.recharge = bsk['recharge']
    sk.upkeep = -bsk['eregen'] if bsk['eregen'] != 0
    sk.desc = bsk['desc']
    sk.effects = {}

    #puts "#{sk.id} #{sk.name} (#{sk.campaign})"
    skills << sk
  end

  skills
end


#################################################
# Parse from trascribed text
#
def parse_txt file
  campaign = 'Nightfall'
  profession = 'Nightclerk'
  attribute = 'Whistling'

  # modes
  #  pending
  #  type
  #  desc
  #  effect
  mode = :pending
  skills = []
  skill = Skill.new

  file.each do |line|
    tokens = line.split
    #puts '[' + mode.to_s + ']: ' + line
    if tokens.length > 0
      case tokens[0]
        when ':pro'
          profession = tokens[1..-1].join(' ')
          next
        when ':camp'
          campaign = tokens[1..-1].join(' ')
          next
      end
      if tokens[0][0..0] == '>'
        attribute = tokens.join(' ')[1..-1]
        next
      end
    end

    case mode
      when :pending
        skill = Skill.new
        skill.name = tokens.join(' ')
        skill.campaign = campaign
        skill.profession = profession
        skill.attribute = attribute
        skill.effects = {}
        mode = :type
      when :type
        if tokens[0] == "Elite" then
          skill.elite = true
          tokens.shift
        end
        skill.recharge = tokens.pop
        skill.activation = tokens.pop
        skill.en_cost = tokens.pop
        if tokens[-1] == tokens[-1].to_i.to_s then
          skill.ad_cost = skill.en_cost
          skill.en_cost = tokens.pop
        end
        skill.type = tokens.join ' '
        skill.type = 'Enchantment Spell' if skill.type == 'Enchant'
        skill.type = 'Hex Spell' if skill.type == 'Hex'
        mode = :desc
      when :desc
        skill.desc = tokens.join ' '
        mode = :effect
      when :effect
        if tokens.length == 0
          mode = :complete
        else
          skill.effects[tokens[0]] = tokens[1..-1]
        end
    end
    if mode == :complete then
      skills << skill
      mode = :pending
    end
  end

  skills
end


#################################################
# Parse from XML
#
def parse_xml file
  skills = []
  doc = REXML::Document.new file
  doc.elements.each("//Profession") do |xpro|
    pro = xpro.attributes['name']
    xpro.elements.each("Attribute") do |xattr|
      aname = xattr.attributes['name']
      xattr.elements.each("Skill") do |xsk|
        sk = Skill.new
        sk.profession = pro
        sk.attribute = aname
        sk.code = xsk.attributes['code']
        sk.name = xsk.attributes['name']
        sk.campaign = xsk.attributes['campaign']
        sk.type = xsk.attributes['type']
        sk.elite = xsk.attributes['elite'] == 'true'
        sk.en_cost = xsk.attributes['enCost']
        sk.ad_cost = xsk.attributes['adCost']
        sk.activation = xsk.attributes['activation']
        sk.recharge = xsk.attributes['recharge']
        sk.upkeep = xsk.attributes['upkeep']
        sk.desc = xsk.attributes['desc']
        sk.effects = {}

        xsk.elements.each("Effect") do |xef|
          sk.effects[xef.text()] = [
            xef.attributes['fixed'],
            xef.attributes['at0'],
            xef.attributes['at15']
            ].compact
        end

        skills << sk
      end
    end
  end

  skills
end


#################################################
# Parse profession and attributes from XML
#
def parse_pro_xml file
  pros = []
  doc = REXML::Document.new file
  doc.elements.each("//Profession") do |xpro|
    pro = Profession.new
    pro.name = xpro.attributes['name']
    next if pro.name == Skill::NO_PROFESSION
    pro.code = xpro.attributes['code']
    pro.abbrev = xpro.attributes['abbrev']
    pro.campaign = xpro.attributes['campaign']
    pro.desc = xpro.attributes['desc'].gsub(/\s+/, ' ')
    pro.attrs = {}
    xpro.elements.each("Attribute") do |xattr|
      attr = Attribute.new
      attr.name = xattr.attributes['name']
      next if attr.name == Skill::NO_ATTRIBUTE
      attr.code = xattr.attributes['code']
      attr.abbrev = xattr.attributes['abbrev']
      attr.primary = xattr.attributes['primary']
      attr.skillAdjust = xattr.attributes['skillAdjust']
      attr.desc = xattr.attributes['desc'].gsub(/\s+/, ' ')
      pro.attrs[attr.name] = attr
    end
    pros << pro
  end

  pros
end


#################################################
# Put XML
#
def put_xml skills
  skills.sort! { |a,b| Skill::compareProAttrName(a,b) }

  puts '<SkillData>'
  profession = ''
  attribute = ''
  skills.each { |skill|
    if skill.profession != profession
      if profession != ''
        puts '</Attribute>'
        puts '</Profession>'
      end
      profession = skill.profession
      attribute = skill.attribute
      puts '<Profession name="' + profession + '">'
      puts '<Attribute name="' + attribute + '">'
    elsif skill.attribute != attribute
      puts '</Attribute>'
      attribute = skill.attribute
      puts '<Attribute name="' + attribute + '">'
    end

    puts '<Skill code="' + (skill.code.nil? ? '0' : skill.code.to_s) + '"' +
      " name=\"#{skill.name.gsub('"','&quot;')}\"" +
      ' campaign="' + skill.campaign + '"'
    puts '  type="' + skill.type + '"' +
      (skill.elite ? ' elite="true"' : '')
    print '  enCost="',skill.en_cost,'"'
    print ' adCost="',skill.ad_cost,'"' unless
      skill.ad_cost.nil? or skill.ad_cost == 0
    print ' activation="',case skill.activation
      when 0.25 then '.25'
      when 0.5 then '.5'
      when 0.75 then '.75'
      else skill.activation.to_i.to_s
      end,
      '"'
    print ' recharge="',skill.recharge,'"'
    print ' upkeep="',skill.upkeep,'"' unless
      skill.upkeep.nil? or skill.upkeep == 0

    if skill.desc
      puts
      print '  desc="',skill.desc.gsub('"','&quot;'),'"'
    end
    if skill.desc2
      puts
      print ' desc2="',skill.desc2.gsub('"','&quot;'),'"'
    end
    if skill.desc3
      puts
      print ' desc3="',skill.desc3,'"'
    end
    puts '>'

    skill.effects.each { |k,v|
      case v.length
        when 0
          puts '  <Effect>' + k + '</Effect>'
        when 1
          puts '  <Effect fixed="' + v[0] + '">' + k + '</Effect>'
        when 2
          puts '  <Effect at0="' + v[0] + '" at15="' + v[1] + '">' +
            k + '</Effect>'
      end
    }
    puts '</Skill>'
  }

  if skills.length > 0
    puts '</Attribute>'
    puts '</Profession>'
  end
  puts '</SkillData>'
end


#################################################
# Put YAML
#
def put_pro_yaml pros
  pros.sort! { |a,b| a.name <=> b.name }
  puts "Professions:"

  for pro in pros
    puts "  #{pro.name}:"
    puts "    code: #{pro.code.nil? ? 0 : pro.code.to_s}"
    puts "    abbrev: #{pro.abbrev}"
    puts "    campaign: #{pro.campaign}"
    puts "    desc: >-"
    put_wrapped pro.desc.gsub(/\s+/, ' '), 6, 75, nil
    puts "    attrs:" if pro.attrs.length > 0
    attrs = pro.attrs.values.sort { |a,b|
      if a.primary != b.primary
        a.primary == true ? 1 : -1
      else
        a.name <=> b.name
      end
    }
    for attr in attrs
      puts "      #{attr.name}:"
      puts "        code: #{attr.code.to_s}"
      puts "        abbrev: #{attr.abbrev}"
      puts "        primary: #{attr.primary}" if attr.primary
      puts "        skillAdjust: #{attr.skillAdjust}" if attr.skillAdjust
      puts "        desc: >-"
      put_wrapped attr.desc.gsub(/\s+/, ' '), 10, 75, nil
    end
  end
end


def put_yaml skills
  skills.sort! { |a,b| Skill::compareProAttrName(a,b) }
  puts "Skills:"

  for sk in skills
    puts "  #{sk.name}:"
    puts "    code: #{sk.code.nil? ? 0 : sk.code.to_s}"
    puts "    pro: #{sk.profession}"
    puts "    attr: #{sk.attribute}"
    puts "    campaign: #{sk.campaign}"
    puts "    type: #{sk.type}"
    puts "    elite: true" if sk.elite
    puts "    enCost: #{sk.en_cost}"
    puts "    adCost: #{sk.ad_cost}" unless
      sk.ad_cost.nil? or sk.ad_cost == 0
    puts "    activation: " + case sk.activation
      when 0.25 then '.25'
      when 0.5 then '.5'
      when 0.75 then '.75'
      else sk.activation.to_i.to_s
      end
    puts "    recharge: #{sk.recharge}"
    puts "    upkeep: #{sk.upkeep}" unless
      sk.upkeep.nil? or sk.upkeep == 0
    puts "    desc: >-"
    put_wrapped sk.desc.gsub(/\s+/, ' '), 6, 75, nil
    if sk.effects.length > 0
      puts "    effects:"
      for e in sk.effects
        puts "      #{e[0]}: [#{e[1].join(',')}]"
      end
    end
  end
end

def put_wrapped val, indent, margin, prefix, f = $stdout
  vals = val.split
  out = prefix
  for v in vals
    if out.nil? || out.length + v.length >= margin
      f.puts out if out
      out = ' ' * (indent - 1)
    end
    out += ' ' + v
  end
  f.puts out
end
