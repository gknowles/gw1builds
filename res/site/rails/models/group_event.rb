# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# group_event.rb - gw1builds rails

class GroupEvent < ActiveRecord::Base
  belongs_to :group

  validates_associated :group
  validates_presence_of :group_id, :event

protected
  def after_create
    num = GroupEvent.count(:all,
      :conditions => ["group_id = ?", self.group_id])
    if num > 75
      events = GroupEvent.find(:all,
        :conditions => ["group_id = ?", self.group_id],
        :limit => num - 50,
        :order => 'created_at')
      ids = events.collect { |evt| evt.id }
      GroupEvent.delete(ids)
    end
  end
end
