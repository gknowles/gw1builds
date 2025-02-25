# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# character_item.rb - gw1builds rails

class CharacterItem < ActiveRecord::Base
  belongs_to :character

  validates_associated :character
  validates_presence_of :where, :base, :color
  validates_inclusion_of :where, :in => Character::ITEM_LOCATIONS
  validates_uniqueness_of :where, :scope => [:character_id]
end
