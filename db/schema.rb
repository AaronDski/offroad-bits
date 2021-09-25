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

ActiveRecord::Schema.define(version: 2021_09_24_170427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "parts", force: :cascade do |t|
    t.float "price"
    t.integer "quantity"
    t.integer "year"
    t.string "make"
    t.string "model"
    t.string "image"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_carts", force: :cascade do |t|
    t.float "price"
    t.integer "quantity"
    t.integer "year"
    t.string "make"
    t.string "model"
    t.string "image"
    t.text "description"
    t.bigint "part_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["part_id"], name: "index_user_carts_on_part_id"
    t.index ["user_id"], name: "index_user_carts_on_user_id"
  end

  create_table "user_parts", force: :cascade do |t|
    t.float "price"
    t.integer "quantity"
    t.integer "year"
    t.string "make"
    t.string "model"
    t.string "image"
    t.text "description"
    t.bigint "part_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["part_id"], name: "index_user_parts_on_part_id"
    t.index ["user_id"], name: "index_user_parts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_carts", "parts"
  add_foreign_key "user_carts", "users"
  add_foreign_key "user_parts", "parts"
  add_foreign_key "user_parts", "users"
end
