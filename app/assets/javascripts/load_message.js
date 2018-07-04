$(function() {
  setInterval(function() {
    $.ajax({
      url: location.href.json
    })
    .done(function(messages) {

    })
  }, 5000);
});
