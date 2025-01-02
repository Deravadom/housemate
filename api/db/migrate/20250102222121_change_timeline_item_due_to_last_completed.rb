class ChangeTimelineItemDueToLastCompleted < ActiveRecord::Migration[7.1]
  def change
    rename_column :timeline_items, :due_at, :last_completed_at
  end
end
