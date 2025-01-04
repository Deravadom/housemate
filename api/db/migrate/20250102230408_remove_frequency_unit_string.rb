class RemoveFrequencyUnitString < ActiveRecord::Migration[7.1]
  def change
    remove_column :timeline_items, :frequency_unit
  end
end
