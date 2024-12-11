module Queries
  module UserQueryType
    extend ActiveSupport::Concern

    included do
      field :foo, String
      field :current_user, Types::UserType, null: true
    end

    def current_user
      context[:current_user]
    end
  end
end