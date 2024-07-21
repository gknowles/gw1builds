class CharacterItem < ActiveRecord::Base
  belongs_to :character
  
  validates_associated :character
  validates_presence_of :where, :base, :color
  validates_inclusion_of :where, :in => Character::ITEM_LOCATIONS
  validates_uniqueness_of :where, :scope => [:character_id]
end
