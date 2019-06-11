# README
## Groupテーブル

|Column|Type|Options|
|name|string|null: false|
|user_id|integer|null: false, foreign_key: true|

Association 
has_many :comments
has_manu :users

## Usersテーブル
|Colum|Type|Options|
|email|string|unique: true|
|name|string|null :false|
|password|string|null :false|
Association
has_many :group
has_manu :comments

## Commentテーブル
|colum|Type|Options|
|user_id|integer|foreign_key: true|
|text|string|
|img|integer|
|group_id|intger|foreign_key: true|
Association 
belongs_to :user
belongs_to :comment

## Membersテーブル
|Colum|Type|Options|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
Association
has_many :group
has_many :users