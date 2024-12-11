module Queries
  module TimelineQueryType
    extend ActiveSupport::Concern

    included do
      field :timeline_items, [Types::TimelineItemType, null: false], null: true
    end

    def timeline_items
      return unless context[:current_user]
      TimelineItem.all
    end
  end
end