# == Schema Information
#
# Table name: timeline_items
#
#  id                :bigint           not null, primary key
#  body              :text
#  frequency_unit    :integer          default("days")
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

  enum frequency_unit: [
    :days,
    :weeks,
    :months
  ]

  def frequency_unit_formatted
    return frequency_unit.singularize if frequency_value < 2
  
    frequency_unit
  end
  
  def frequency
    "#{frequency_value} #{frequency_unit_formatted}"
  end

  def due_at
    DateTime.now
  end
end
