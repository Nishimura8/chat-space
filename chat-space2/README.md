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
has_many :mambers

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

.contents-main__bottom__icon
          = f.label :image, class: 'form__mask__image' do
            = fa_icon 'picture-o', class: 'icon'
            = f.file_field :image, class: 'hidden'
        = f.submit 'Send', class: 'contents-main__bottom__send-btn'
      .contents-main__bottom__icon

      test