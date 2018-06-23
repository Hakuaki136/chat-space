class Group < ApplicationRecord
  has_many :messages
  has_many :user_groups
  has_many :users, through: :user_groups
  validates :name, presence: true

  def show_last_message
    if (last_message = messages.last).present?
      last_message.message_body? ? last_message.message_body : '画像が投稿されています'
    else
      'まだメッセージが存在しません'
    end

  end
end
