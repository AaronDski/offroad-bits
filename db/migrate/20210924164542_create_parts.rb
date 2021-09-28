class CreateParts < ActiveRecord::Migration[6.1]
  def change
    create_table :parts do |t|
      t.string :title
      t.float :price
      t.integer :quantity
      t.integer :year
      t.string :make
      t.string :model
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
