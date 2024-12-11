class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :name
      t.string :email, null: false
      t.json :tokens
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
