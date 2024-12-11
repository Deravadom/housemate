class CreateTimelineItems < ActiveRecord::Migration[7.1]
  def change
    create_table :timeline_items do |t|
      t.string :title, null: false
      t.text :body
      t.string :frequency_unit
      t.integer :frequency_value
      t.datetime :due_at
      t.string :color

      t.timestamps
    end
  end
end
