json.array! @messages do |message|
  json.id message.id
  json.name message.user.name
  json.date message.created_at
  json.body message.message_body
  json.image message.image
end
