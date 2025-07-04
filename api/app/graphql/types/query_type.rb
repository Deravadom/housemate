# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include Queries::UserQueryType
    include Queries::TimelineQueryType
    include Queries::LeftoverQueryType
    include Queries::HouseholdQueryType

    field :test_field, String, null: false, description: "An example field added by the generator"
    
    def test_field
      context[:current_user]&.email || "No current user"
    end
  end
end
