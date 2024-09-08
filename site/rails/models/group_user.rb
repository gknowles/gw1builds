class GroupUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :group

  validates_associated :user, :group  
  validates_presence_of :user_id, :group_id, :role
  validates_inclusion_of :role, :in => User::Roles.values
  validates_uniqueness_of :user_id, :scope => :group_id
  
  def before_save
    return if self.new_record?
    self.user.rev += 1
    self.group.rev += 1
    self.user.save and self.group.save
  end
end

