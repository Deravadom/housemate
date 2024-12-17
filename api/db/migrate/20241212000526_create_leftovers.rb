class CreateLeftovers < ActiveRecord::Migration[7.1]
  def change
    create_table :leftovers do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.references :household, null: false, foreign_key: true
      t.string :allergens
      t.datetime :use_by
      t.datetime :trash_by

      t.timestamps
    end
  end
end
