# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_01_04_195207) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "households", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "households_users", id: false, force: :cascade do |t|
    t.bigint "household_id"
    t.bigint "user_id"
    t.index ["household_id"], name: "index_households_users_on_household_id"
    t.index ["user_id"], name: "index_households_users_on_user_id"
  end

  create_table "leftovers", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.bigint "household_id", null: false
    t.string "allergens"
    t.datetime "use_by"
    t.datetime "trash_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["household_id"], name: "index_leftovers_on_household_id"
    t.index ["user_id"], name: "index_leftovers_on_user_id"
  end

  create_table "timeline_items", force: :cascade do |t|
    t.string "title", null: false
    t.text "body"
    t.integer "frequency_value"
    t.datetime "last_completed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "household_id", null: false
    t.integer "frequency_unit", default: 0
    t.index ["household_id"], name: "index_timeline_items_on_household_id"
    t.index ["user_id"], name: "index_timeline_items_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "name"
    t.string "email", null: false
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "household_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["household_id"], name: "index_users_on_household_id"
  end

  add_foreign_key "leftovers", "households"
  add_foreign_key "leftovers", "users"
  add_foreign_key "timeline_items", "households"
  add_foreign_key "timeline_items", "users"
  add_foreign_key "users", "households"
end
