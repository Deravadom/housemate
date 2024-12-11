# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include Queries::UserQueryType

    field :test_field, String, null: false, description: "An example field added by the generator"
    
    def test_field
      context[:current_user]&.email
    end
  end
end
