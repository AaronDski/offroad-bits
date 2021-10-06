class CreatePartMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :part_messages do |t|
      t.text :content
      t.string :subject
      t.references :part, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
