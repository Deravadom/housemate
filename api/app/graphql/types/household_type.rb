module Types
  class HouseholdType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :users, [Types::UserType]
  end
end