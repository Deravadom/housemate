module Types
  class TimelineItemType < BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :body, String
    field :due_at, GraphQL::Types::ISO8601DateTime
    field :last_completed_at, GraphQL::Types::ISO8601DateTime
    field :frequency, String
    field :frequency_unit, String
    field :frequency_value, Integer
    field :color, String
  end
end