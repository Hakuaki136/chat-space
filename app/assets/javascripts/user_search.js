$(function() {
  var search_list = $('#user-search-result');
  var member_list = $('#chat-group-users');
  var preWord;
  function appendUser(user) {
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`;
    search_list.append(html);
  }
  function appendMember(user) {
    let html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${ user.data('userId') }'>
                  <input name='group[user_ids][]' type='hidden' value='${ user.data('userId') }'>
                  <p class='chat-group-user__name'>${ user.data('userName') }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`;
    member_list.append(html);
  }
  function removeMember(button) {
    $(button).parents('.chat-group-user').remove();
  }
  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      search_list.empty();
      if (input !== "") {
        users.forEach(function(user) {
          appendUser(user);
        });
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
  $(document).on('click', '.chat-group-user__btn--add', function() {
    removeMember($(this));
    appendMember($(this));
  });
  $(document).on('click', '.chat-group-user__btn--remove', function() {
    removeMember($(this));
  });
})
