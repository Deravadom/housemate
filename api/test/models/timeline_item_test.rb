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
require "test_helper"

class TimelineItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
