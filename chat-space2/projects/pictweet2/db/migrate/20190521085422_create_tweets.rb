class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t. string    :text
      t. string    :image
      t.timestamps null: true
    end
  end
end
