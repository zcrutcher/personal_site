class CreateArticles < ActiveRecord::Migration[8.1]
  def change
    create_table :articles do |t|
      t.string :slug, null: false
      t.string :title, null: false
      t.string :tag, null: false
      t.text :body, null: false
      t.boolean :featured, default: false, null: false
      t.timestamps
    end
  end
end
