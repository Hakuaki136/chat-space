$(function() {
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
  })
})
