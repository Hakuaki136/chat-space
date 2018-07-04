$(function() {
  setInterval(function() {
    $.ajax({
      url: location.href.json
    })
    .done(function(messages) {
      messages.forEach(function(message) {
        appendMessage(message);
      });
    })
  }, 5000);
});
