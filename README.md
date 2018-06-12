# Database blueprint for ChatSpace

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text|   |
|image|text|   |
|group|reference|null: false, foreign_key: true|
|user|reference|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

---

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|srting|null: false|
|password|text|null: false|

### Association

- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

---

## users_groups table

|Column|Type|Options|
|------|----|-------|
|group|reference|null: false, foreign_key: true|
|user|reference|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user

---

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association

- has_many :messages
- has_many :users_groups
- has_many :users, through :users_groups
