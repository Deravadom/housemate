module Types
  class FrequencyEnum < Types::BaseEnum
    value 'days'
    value 'day', value: :day
    value 'weeks'
    value 'week', value: :week
    value 'months'
    value 'month', value: :month
  end
end