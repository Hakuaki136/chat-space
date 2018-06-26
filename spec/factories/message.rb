FactoryGirl.define do
  factory :message do
    message_body "test message"
    image File.open ("#{Rails.root}/public/uploads/message/image")
    user
    group
  end
end
