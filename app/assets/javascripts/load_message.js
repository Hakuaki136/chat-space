$(document).on('turbolinks:load', function() {
  $(function() {
    const INTERVAL = 5000
    var message_list = $('.chat-main__body--messages-list');
    function buildHTML(message) {
      let html = `
        <div class="chat-main__message clearfix" data-id="${ message.id }">
          <div class="chat-main__message-name">
            ${ message.name }
          </div>
          <div class="chat-main__message-time">
            ${ message.date }
          </div>
          <div class="chat-main__message-body">
            ${ message.body }`;
      let image = message.image ? `<img src="${ message.image }" alt="">` : ``;
      return html + image + `</div></div>`;
    };

    var reloading =
          setInterval(function() {
            if (window.location.href.match(/\/groups\/\d+\/messages/)) {
              $.ajax({
                type: 'GET',
                url: window.location.href,
                dataType: 'json'
              })
              .done(function(messages) {
                let html = ``;
                let newestId = $('.chat-main__message').data('id');
                messages.forEach(function(message) {
                  if (newestId < message.id) {
                    html += buildHTML(message);
                  }
                });
                message_list.prepend(html);
              })
              .fail(function() {
                alert('自動更新に失敗しました');
              });
            } else {
              clearInterval(reloading);
            }
          }, INTERVAL);
  });  
}
