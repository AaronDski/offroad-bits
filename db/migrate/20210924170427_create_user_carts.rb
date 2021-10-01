class CreateUserCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_carts do |t|
      
      t.references :part, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
