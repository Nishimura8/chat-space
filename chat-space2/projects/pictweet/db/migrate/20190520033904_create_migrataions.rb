class CreateMigrataions < ActiveRecord::Migration[5.2]
  def change
    create_table :migrataions do |t|
      t.string :AddUsersIdToTweets
      t.integer :user_id

      t.timestamps
    end
  end
end
