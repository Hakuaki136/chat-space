$(function() {
  setInterval(function() {
    $.ajax({
      url: location.href.json
    })
  }, 5000);
});
