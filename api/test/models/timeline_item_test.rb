# == Schema Information
#
# Table name: timeline_items
#
#  id              :bigint           not null, primary key
#  body            :text
#  color           :string
#  due_at          :datetime
#  frequency_unit  :string
#  frequency_value :integer
#  title           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require "test_helper"

class TimelineItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
