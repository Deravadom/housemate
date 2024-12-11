module Mutations
  module TimelineMutationType
    extend ActiveSupport::Concern

    included do
      field :create_timeline_item, Types::TimelineItemType, null: true do
        argument :title, String
        argument :body, String, required: false
        argument :color, String, required: false
        argument :frequency_unit, String, required: false
        argument :frequency_value, Integer, required: false
        argument :due_at, GraphQL::Types::ISO8601DateTime, required: false
      end
    end

    def create_timeline_item(**item_args)
      return unless context[:current_user]

      item = TimelineItem.create(**item_args)
    end
  end
end