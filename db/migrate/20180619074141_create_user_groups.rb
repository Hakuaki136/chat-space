class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups do |t|
      t.reference :group, foreign_key: true
      t.reference :user, foreign_key: true
      t.timestamps
    end
  end
end
