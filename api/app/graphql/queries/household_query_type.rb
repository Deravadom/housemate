module Queries
  module HouseholdQueryType
    extend ActiveSupport::Concern

    included do
      field :households, [Types::HouseholdType]
    end

    def households
      return unless (user = context[:current_user])
      user.households
    end
  end
end