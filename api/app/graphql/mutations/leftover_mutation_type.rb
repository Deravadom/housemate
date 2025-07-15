module Mutations
  module LeftoverMutationType
    extend ActiveSupport::Concern

    included do
      field :create_leftover, Types::LeftoverType, null: true do
        argument :name, String
        argument :trash_by, GraphQL::Types::ISO8601DateTime
        with_options required: false do
          argument :allergens, String
          argument :use_by, GraphQL::Types::ISO8601DateTime
        end
      end

      field :edit_leftover, Types::LeftoverType, null: false do
        argument :id, GraphQL::Types::ID
        argument :name, String
        argument :trash_by, GraphQL::Types::ISO8601DateTime
        with_options required: false do
          argument :allergens, String
          argument :use_by, GraphQL::Types::ISO8601DateTime
        end
      end

      field :delete_leftover, GraphQL::Types::Boolean, null: false do
        argument :id, GraphQL::Types::ID
      end
    end

    def create_leftover(**leftover_args)
      return unless current_user
      leftover = Leftover.create!(**leftover_args, user: current_user, household: current_user.household)
    end

    def edit_leftover(id:, **leftover_args)
      return unless current_user
      leftover = current_user.leftovers.find(id)

      leftover.update!(**leftover_args)
      leftover
    end

    def delete_leftover(id:)
      return unless current_user
      current_user.leftovers.find(id)&.destroy!
    end
  end
end