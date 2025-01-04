require 'jwt'
module Mutations
  module UserMutationType
    extend ActiveSupport::Concern

    included do
      field :signup, GraphQL::Types::JSON, null: true do
        argument :email, String, required: true
        argument :password, String, required: true
      end

      field :login, GraphQL::Types::JSON, null: true do
        argument :email, String, required: true
        argument :password, String, required: true
      end
    end

    def signup(email:, password:)
      user = User.create!(email: email, password: password)
      create_auth_token(user)
    end

    def login(email:, password:)
      user = User.find_by!(email: email)
      return unless user.authenticate(password)
      
      token = create_auth_token(user)
      return token unless user.household_id.blank?
      
      if (household = user.households.pluck(:id).first).present?
        user.update_column(household__id: household.id)
      end

      token
    end

    # private
    def create_auth_token(user)
      payload = { user: user.id }
      token = JWT.encode(payload, 'foo')
      {token: token}
    end
  end
end