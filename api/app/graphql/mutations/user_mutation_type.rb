require 'jwt'
module Mutations
  module UserMutationType
    extend ActiveSupport::Concern

    included do
      field :signup, GraphQL::Types::JSON, null: true do
        argument :email, String, required: true
        argument :password, String, required: true
        argument :name, String
      end

      field :login, GraphQL::Types::JSON, null: true do
        argument :email, String, required: true
        argument :password, String, required: true
      end
    end

    def signup(email:, password:, name:)
      user = User.create!(email:, password:, name:)
      create_auth_token(user)
    end

    def login(email:, password:)
      user = User.find_by!(email:)
      return unless user.authenticate(password)
      
      token = create_auth_token(user)
      return token unless user.household_id.blank?
      
      if (household = user.households.pluck(:id).first).present?
        user.update_column(household_id: household.id)
      end

      token
    end

    def change_household(id:)
      return unless (user = context[:current_user])
      household = user.households.find!(id)

      user.update_column(household_id: household.id)
      household
    end

    # private
    def create_auth_token(user)
      payload = { user: user.id }
      token = JWT.encode(payload, 'foo')
      {token: token}
    end
  end
end