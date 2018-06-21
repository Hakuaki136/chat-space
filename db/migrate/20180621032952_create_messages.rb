class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :message_body
      t.text :image
      t.refrences :group, null: false, foreign_key: true
      t.refrences :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
