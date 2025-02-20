require 'bcrypt'
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
class User < ApplicationRecord
  # include BCrypt
  has_secure_password :password, validations: false
  validates :email, presence: true, uniqueness: true
  
  has_and_belongs_to_many :households
  belongs_to :household, optional: true
  has_many :timeline_items
  has_many :leftovers

  alias current_household household
end
