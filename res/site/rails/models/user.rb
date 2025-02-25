# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# user.rb - gw1builds rails

class User < ActiveRecord::Base
  GUEST = 0
  MEMBER = 1
  EDITOR = 2
  ADMIN = 3
  Roles = { :guest => GUEST, :member => MEMBER, :editor => EDITOR,
    :admin => ADMIN }

  has_many :group_users, :dependent => :destroy
  has_many :groups, :through => :group_users,
    :order => 'name'

  validates_length_of :name, :within => 3..19
  validates_presence_of :name
  validates_uniqueness_of :name, :case_sensitive => false
  validates_format_of :name,
    :with => /^\~?[A-Za-z0-9]+(\s[A-Za-z0-9]+)*$/

  attr_protected :id, :role


protected

  def before_create
    # first user becomes admin automatically
    self.role = User.count == 0 ? ADMIN : MEMBER;
    self.rev = 1

    # create ~personal group
    group = Group.new(:name => "~#{self.name}")
    group.save(true) # allow otherwise illegal ~ in group name
    if group.errors.empty?
      self.group_users.build(:group_id => group.id, :role => ADMIN)
      return true
    end

    for msg in group.errors.full_messages
      self.errors.add_to_base("Group: #{msg}");
    end
    false
  end

  def before_destroy
    # destroy personal group
    group = self.groups.find_by_name("~#{self.name}")
    group.destroy unless group.nil?
  end

end
