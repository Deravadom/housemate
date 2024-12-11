module Types
  class UserType < BaseObject
    field :email, String, null: false
    field :id, ID, null: false
    field :name, String
  end
end