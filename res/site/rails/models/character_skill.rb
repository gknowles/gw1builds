# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# character_skill.rb - gw1builds rails

class CharacterSkill < ActiveRecord::Base
  belongs_to :character

  validates_associated :character
  validates_presence_of :code, :slot, :alternate
  validates_inclusion_of :slot, :alternate, :in => 0..7
  validates_uniqueness_of :alternate, :scope => [:character_id, :slot]
end
