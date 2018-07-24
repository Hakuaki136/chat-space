$(document).on('turbolinks:load', function() {
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
      let image = message.image_url ? `<img src="${ message.image_url }" alt="">` : ``
      html += image + `</div></div>`
      message_list.prepend(html);
    }

    function scrollToTop(element) {
      $("html,body").animate({scrollTop: $(element).offset().top});
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
        appendMessage(message);
        scrollToTop(".chat-main__body--messages-list");
      })
      .fail(function() {
        alert('メッセージの通信に失敗しました');
      })
    })
  })
}
