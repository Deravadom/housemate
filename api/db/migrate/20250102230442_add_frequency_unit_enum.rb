class AddFrequencyUnitEnum < ActiveRecord::Migration[7.1]
  def change
    add_column :timeline_items, :frequency_unit, :integer, default: 0
  end
end
