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
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
class User < ApplicationRecord
  # include BCrypt
  has_secure_password :password, validations: false
  validates :email, presence: true, uniqueness: true
  
  has_and_belongs_to_many :households
  has_many :timeline_items
  has_many :leftovers
end
