class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.integer :user_id
      t.integer :post_id

      t.timestamps null: false
    end
  end
end
