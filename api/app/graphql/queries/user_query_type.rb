module Queries
  module UserQueryType
    extend ActiveSupport::Concern

    included do
      field :current_user, Types::UserType, null: true
    end
  end
end