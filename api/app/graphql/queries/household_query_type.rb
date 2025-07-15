module Queries
  module HouseholdQueryType
    extend ActiveSupport::Concern

    included do
      field :households, [Types::HouseholdType]
    end

    def households
      return unless current_user
      current_user.households
    end
  end
end