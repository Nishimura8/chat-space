# README
## Groupテーブル

|Column|Type|Options|
|name|string|null: false|

Association 
has_many :users, through: :members
has_many :comments
has_many :members
## Usersテーブル
|Colum|Type|Options|
|email|string|unique: true|
|name|string|null :false|
|password|string|null :false|
Association
has_many :groups, through: :members
has_many :comments
has_many :mambersa

## Commentテーブル
|colum|Type|Options|
|user_id|integer|foreign_key: true|
|text|string|
|img|string|
|group_id|intger|foreign_key: true|
Association 
belongs_to :user
belongs_to :group

## Membersテーブル
|Colum|Type|Options|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|
Association
belongs_to :group
belons_to :user