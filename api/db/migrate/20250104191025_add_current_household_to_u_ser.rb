class AddCurrentHouseholdToUSer < ActiveRecord::Migration[7.1]
  def change
    add_reference :users, :household, null: true, foreign_key: true
  end
end
