class RemoveColorFromItem < ActiveRecord::Migration[7.1]
  def change
    remove_column :timeline_items, :color
  end
end
