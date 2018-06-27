FactoryGirl.define do
  factory :message do
    message_body Faker::Lorem.sentence
    image File.open ("#{Rails.root}/public/uploads/message/image/2/1.png")
    user
    group
  end
end
