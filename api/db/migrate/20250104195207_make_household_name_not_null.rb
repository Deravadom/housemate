class MakeHouseholdNameNotNull < ActiveRecord::Migration[7.1]
  def change
    change_column_null :households, :name, false
  end
end
