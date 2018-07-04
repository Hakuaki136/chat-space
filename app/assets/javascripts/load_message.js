$(function() {
  var = message_list = $('.chat-main__body--messages-list');
  function appendMessage(message) {
    let html = `
      <div class="chat-main__message clearfix" data-id="${ message.id }">
        <div class="chat-main__message-name">
          ${ message.name }
        </div>
        <div class="chat-main__message-time">
          ${ message.date }
        </div>
        <div class="chat-main__message-body">
          ${ message.message_body }`;
    let image = message.image ? `<img src="${ message.image }" alt="">` : ``;
    html += html + image + `</div></div>`;
    message_list.append(html);
  };
  setInterval(function() {
    $.ajax({
      url: location.href.json,
      processData: false,
      contentType: false
    })
    .done(function(messages) {
      messages.forEach(function(message) {
        appendMessage(message);
      });
      console.log($('.chat-main__message').data());
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    })
  }, 5000);
});
