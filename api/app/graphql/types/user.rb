module Types
  class User < BaseObject
    field :email, String, null: false
    field :id, ID, null: false
  end
end