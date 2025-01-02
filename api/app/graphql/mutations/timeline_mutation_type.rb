module Mutations
  module TimelineMutationType
    extend ActiveSupport::Concern

    included do
      field :create_timeline_item, Types::TimelineItemType, null: true do
        argument :title, String
        with_options required: false do
          argument :body, String
          argument :color, String
          argument :frequency_unit, String
          argument :frequency_value, Integer
          argument :last_completed_at, GraphQL::Types::ISO8601DateTime
        end
      end

      field :edit_timeline_item, Types::TimelineItemType, null: false do
        argument :id, GraphQL::Types::ID
        argument :title, String
        with_options required: false do
          argument :body, String
          argument :color, String
          argument :frequency_unit, String
          argument :frequency_value, Integer
          argument :last_completed_at, GraphQL::Types::ISO8601DateTime
        end
      end

      field :delete_timeline_item, GraphQL::Types::Boolean, null: false do
        argument :id, GraphQL::Types::ID
      end
    end

    def create_timeline_item(**item_args)
      return unless (user = context[:current_user])

      item = TimelineItem.create!(**item_args, user: user, household: user.households.first)
    end

    def edit_timeline_item(id:, **item_args)
      return unless (user = context[:current_user])
      item = user.timeline_items.find(id)

      item.update!(**item_args)
      item
    end

    def delete_timeline_item(id:)
      return unless (user = context[:current_user])
      user.timeline_items.find(id)&.destroy!
    end
  end
end