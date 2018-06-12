# Database blueprint for ChatSpace

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text|   |
|image|text|   |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

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
- has_many :members
- has_many :groups, through: :members

---

## users_groups table

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

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
- has_many :members
- has_many :users, through :members
