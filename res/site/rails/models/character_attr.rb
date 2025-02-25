# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# character_attr.rb - gw1builds rails

class CharacterAttr < ActiveRecord::Base
  belongs_to :character

  validates_associated :character
  validates_presence_of :code
  validates_inclusion_of :value, :in => 0..16
  validates_inclusion_of :rune, :in => Character::RUNE_TYPES.values
  validates_uniqueness_of :code, :scope => :character_id
end
