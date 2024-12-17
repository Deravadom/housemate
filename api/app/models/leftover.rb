# == Schema Information
#
# Table name: leftovers
#
#  id           :bigint           not null, primary key
#  allergens    :string
#  name         :string
#  trash_by     :datetime
#  use_by       :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  household_id :bigint           not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_leftovers_on_household_id  (household_id)
#  index_leftovers_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (household_id => households.id)
#  fk_rails_...  (user_id => users.id)
#
class Leftover < ApplicationRecord
  belongs_to :user
  belongs_to :household
end
