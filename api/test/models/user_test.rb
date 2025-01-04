# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  name            :string
#  password_digest :string           not null
#  tokens          :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  household_id    :bigint
#
# Indexes
#
#  index_users_on_email         (email) UNIQUE
#  index_users_on_household_id  (household_id)
#
# Foreign Keys
#
#  fk_rails_...  (household_id => households.id)
#
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
