module Types
  class LeftoverType < BaseObject
    field :id, GraphQL::Types::ID, null: false
    field :name, String, null: false
    field :allergens, String
    field :use_by, GraphQL::Types::ISO8601DateTime
    field :trash_by, GraphQL::Types::ISO8601DateTime
  end
end