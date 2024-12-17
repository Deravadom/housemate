module Queries
  module LeftoverQueryType
    extend ActiveSupport::Concern

    included do
      field :leftovers, [Types::LeftoverType, null: false], null: true

      field :leftover, Types::LeftoverType, null: false do
        argument :id, GraphQL::Types::ID
      end
    end

    def leftovers
      return unless (user = context[:current_user])
      user.leftovers.order(:use_by)
    end

    def leftover(id:)
      return unless (user = context[:current_user])

      user.leftovers.find(id)
    end
  end
end