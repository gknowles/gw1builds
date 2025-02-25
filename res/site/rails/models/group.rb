# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# group.rb - gw1builds rails

class Group < ActiveRecord::Base
  before_destroy { |rec| rec.group_users.count == 0 }
  before_create { |rec| rec.rev = 1 }
  has_many :group_users, :dependent => :destroy
  has_many :users, :through => :group_users
  has_many :group_events, :dependent => :destroy
  has_many :characters, :dependent => :destroy,
    :foreign_key => 'owner_id'

  validates_length_of :name, :in => 3..20
  validates_uniqueness_of :name, :case_sensitive => false
  validates_format_of :name,
    :with => /^\~?[A-Za-z0-9]+(\s[A-Za-z0-9]+)*$/

end
