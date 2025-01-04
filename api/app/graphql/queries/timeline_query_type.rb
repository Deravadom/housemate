module Queries
  module TimelineQueryType
    extend ActiveSupport::Concern

    included do
      field :timeline_items, [Types::TimelineItemType, null: false], null: true

      field :timeline_item, Types::TimelineItemType, null: false do
        argument :id, GraphQL::Types::ID
      end
    end

    def timeline_items
      return unless (user = context[:current_user])
      TimelineItem.where(household: user.household).order(:id)
    end

    def timeline_item(id:)
      return unless (user = context[:current_user])

      user.timeline_items.find(id)
    end
  end
end