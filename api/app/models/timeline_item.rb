# == Schema Information
#
# Table name: timeline_items
#
#  id                :bigint           not null, primary key
#  body              :text
#  color             :string
#  frequency_unit    :string
#  frequency_value   :integer
#  last_completed_at :datetime
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  household_id      :bigint           not null
#  user_id           :bigint           not null
#
# Indexes
#
#  index_timeline_items_on_household_id  (household_id)
#  index_timeline_items_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (household_id => households.id)
#  fk_rails_...  (user_id => users.id)
#
class TimelineItem < ApplicationRecord
  belongs_to :household
  belongs_to :user
  
  def frequency
    "#{frequency_value} #{frequency_unit}"
  end

  def due_at
    DateTime.now
  end
end
