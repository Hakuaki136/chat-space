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
                    ${ message.message_body }`
        image = message.image_url ? `<img src="${ message.image_url }" alt="">` : ``
    html += image + `</div></div>`
    message_list.append(html);
  }
  function scrtollToTop(element) {
    $(element).animate({scrollTop: $(this).offset().top;});
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var messageData = new FormData(this);
    var url = $(this).attr('action')
    console.log(url);
    $.ajax({
      url: url,
      type: 'POST',
      data: messageData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      appendMessage(message);
      scrtollToTop(".chat-main__body--messages-list");
    })
    .fail(function() {
      alert('メッセージの通信に失敗しました')
    })
  })
})
