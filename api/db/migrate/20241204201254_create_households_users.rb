class CreateHouseholdsUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :households_users, id: false do |t|
      t.belongs_to :household
      t.belongs_to :user
    end
  end
end
