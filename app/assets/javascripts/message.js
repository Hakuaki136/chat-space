$(function() {
  var message_list = $('.chat-main__body--messages-list');

  function appendMessage(message) {
    let html = `<div class="chat-main__message clearfix">
                  <div class="chat-main__message-name">
                    ${ message.user_name }
                  </div>
                  <div class="chat-main__message-time">
                    ${ message.created_at }
                  </div>
                  <div class="chat-main__message-body">
                    message.message_body
                    <img src="${ message.image_url }" alt="">
                  </div>
                </div>`
    message_list.append(html);
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var messageData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: messageData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      appendMessage
    })
  })
})
