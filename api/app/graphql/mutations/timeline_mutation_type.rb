module Mutations
  module TimelineMutationType
    extend ActiveSupport::Concern

    included do
      field :create_timeline_item, Types::TimelineItemType, null: true do
        argument :title, String
        with_options required: false do
          argument :body, String
          argument :frequency_unit, Types::FrequencyEnum
          argument :frequency_value, Integer
          argument :last_completed_at, GraphQL::Types::ISO8601DateTime
        end
      end

      field :edit_timeline_item, Types::TimelineItemType, null: false do
        argument :id, GraphQL::Types::ID
        argument :title, String
        with_options required: false do
          argument :body, String
          argument :frequency_unit, Types::FrequencyEnum
          argument :frequency_value, Integer
          argument :last_completed_at, GraphQL::Types::ISO8601DateTime
        end
      end

      field :delete_timeline_item, GraphQL::Types::Boolean, null: false do
        argument :id, GraphQL::Types::ID
      end
    end

    def create_timeline_item(**item_args)
      return unless current_user

      item = TimelineItem.create!(**item_args, user: current_user, household: current_user.household)
    end

    def edit_timeline_item(id:, **item_args)
      return unless current_user
      item = current_user.timeline_items.find(id)

      item.update!(**item_args)
      item
    end

    def delete_timeline_item(id:)
      return unless current_user
      current_user.timeline_items.find(id)&.destroy!
    end
  end
end