class CreateUserParts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_parts do |t|
      t.float :price
      t.integer :quantity
      t.integer :year
      t.string :make
      t.string :model
      t.string :image
      t.text :description
      t.references :part, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
