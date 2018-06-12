# Database blueprint for ChatSpace

## Messages table

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

## Users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|srting|null: false|
|password|text|null: false|

### Association

- has_many :messages
- has_many :groups, through: :members
- has_many :members

---

## Members table

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association

- belongs_to :group
- belongs_to :user

---

## Groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association

- has_many :messages
- has_many :users, through :members
- has_many :members
