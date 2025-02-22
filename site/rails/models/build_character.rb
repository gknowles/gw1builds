# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# build_character.rb - gw1builds rails

class BuildCharacter < ActiveRecord::Base
  belongs_to :build
  belongs_to :character

  validates_associated :build, :character
  validates_presence_of :character_id, :slot, :alternate
  validates_inclusion_of :slot, :in => 0..24
  validates_inclusion_of :alternate, :in => 0..7
  validates_uniqueness_of :alternate, :scope => [:build_id, :slot]

  def before_destroy
    self.character.destroy
  end
end
