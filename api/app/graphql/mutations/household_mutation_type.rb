module Mutations
  module HouseholdMutationType
    extend ActiveSupport::Concern

    included do
      field :edit_household, Types::HouseholdType do
        argument :name, String, required: true
      end

      field :set_household, Types::HouseholdType do
        argument :id, GraphQL::Types::ID, required: true
      end
    end

    def edit_household(name:)
      return unless (user = context[:current_user])
      return unless (household = user.household)

      household.update(name: name)
    end

    def set_household(id:)
      return unless (user = context[:current_user])
      return unless (household = user.households.find(id))

      user.update(household: household)

      household
    end
  end
end
