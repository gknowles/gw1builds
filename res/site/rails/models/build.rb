# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# build.rb - gw1builds rails

class Build < ActiveRecord::Base
  include ModelHelper

  belongs_to :owner,
    :class_name => 'Group', :foreign_key => 'owner_id'
  belongs_to :viewer,
    :class_name => 'Group', :foreign_key => 'viewer_id'
  has_many :build_characters, :dependent => :destroy
  has_many :characters, :through => :build_characters,
    :dependent => :destroy

  validates_presence_of :owner_id
  validates_length_of :name, :in => 1..20
  validates_format_of :name,
    :with => /^[A-Za-z0-9]+(\s[A-Za-z0-9]+)*$/

  def to_json(current_user)
    ret = {
      :id => self.id,
      :name => self.name,
      :isTeam => self.is_team,
      :isPve => self.is_pve,
      :type => self.build_type,
      :desc => self.description,
      :size => self.size,
      :list => self.build_characters.collect { |tc|
        { :pos => tc.slot, :alt => tc.alternate,
          :value => tc.character.to_json(current_user)
        }
      },
      :access => {
        :owner => self.owner.name,
        :viewer => self.viewer_id? ? self.viewer.name : '~',
        :created => self.created_at,
        :updated => self.updated_at
      }
    }
    if current_user
      ug = self.owner.group_users.find_by_user_id(current_user.id)
      ret[:access][:role] = ug.role if ug
    end
    ret
  end # to_json


  def self.find_for_update(name, owner, current_user)
    team = self.find_by_name(name,
      :conditions => ['group_users.user_id = ?' +
        ' and group_users.role >= ? and groups.name = ?',
        current_user.id, User::EDITOR, owner],
      :joins => 'left join groups on groups.id = builds.owner_id ' \
        'left join group_users on groups.id = group_users.group_id',
      :select => 'builds.*',
      :include => [:build_characters])
    team
  end # find_for_update


  def update_from_unpacked(build)
    self.name = build.name if build.name?
    self.size = build.size
    self.is_team = build.is_team
    self.is_pve = build.is_pve
    self.build_type = build.build_type if build.build_type?
    self.description = build.description if build.description?
    Build.update_associated(self.build_characters, build.build_characters,
      [:slot, :alternate])
    for ntc in build.build_characters
      otc = self.build_characters.find_by_slot_and_alternate(
        ntc.slot, ntc.alternate)
      otc = self.build_characters.build(
        :slot => ntc.slot,
        :alternate => ntc.alternate) unless otc
      if otc.character.nil?
        ntc.character.save!
        otc.character = ntc.character
        otc.save!
      else
        otc.character.update_from_unpacked(ntc.character)
        otc.character.save!
      end
    end
  end # update_from_unpacked

end
