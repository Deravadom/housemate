module Queries
  module UserQueryType
    extend ActiveSupport::Concern

    included do
      field :foo, String
      field :current_user, Types::User
    end

    def current_user
    end
  end
end