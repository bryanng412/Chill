class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true
      t.text :description
      t.timestamps null: false
    end
  end
end
