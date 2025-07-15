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

      field :create_household, Types::HouseholdType do
        argument :name, String, required: true
      end

      field :delete_household, Boolean do
        argument :id, GraphQL::Types::ID, required: true
      end

      field :add_user_to_household, Boolean do
        argument :id, GraphQL::Types::ID, required: true
        argument :user_id, GraphQL::Types::ID, required: true
      end

      field :remove_user_from_household, Boolean do
        argument :id, GraphQL::Types::ID, required: true
        argument :user_id, GraphQL::Types::ID, required: true
      end
    end

    def edit_household(name:)
      return unless current_user
      return unless (household = current_user.household)

      household.update(name: name)
    end

    def set_household(id:)
      return unless current_user
      return unless (household = current_user.households.find(id))

      current_user.update(household: household)

      household
    end

    def create_household(name:)
      return unless current_user
      household = Household.create(name: name)
      current_user.households << household
      household
    end

    def delete_household(id:)
      return unless current_user
      return unless (household = current_user.households.find(id))

      household.destroy
    end

    def add_user_to_household(id:, user_id:)
      return unless current_user
      return unless (household = current_user.households.find(id))
      return unless (user = User.find(user_id))

      household.users << user
    end

    def remove_user_from_household(id:, user_id:)
      return unless current_user
      return unless (household = current_user.households.find(id))
      return unless (user = User.find(user_id))

      household.users.delete(user)
    end
  end
end
