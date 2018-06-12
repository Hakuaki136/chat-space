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
