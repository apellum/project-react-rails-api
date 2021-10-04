class CreateSnacks < ActiveRecord::Migration[6.1]
  def change
    create_table :snacks do |t|
      t.string :name
      t.string :category
      t.float :price
      t.integer :rating

      t.timestamps
    end
  end
end
