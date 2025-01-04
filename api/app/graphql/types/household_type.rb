module Types
  class HouseholdType < BaseObject
    field :name, String, null: false
    field :users, [Types::UserType]
  end
end