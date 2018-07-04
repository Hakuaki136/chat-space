$(function() {
  var search_list = $('#user-search-result');
  var member_list = $('#chat-group-users');
  var preWord;
  function appendUser(user) {
    let html = `
      <div class="chat-group-user js-chat-member clearfix">
        <p class="chat-group-user__name">${ user.name }</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
      </div>`;
    search_list.append(html);
  }
  function appendMember(user) {
    let html = `
      <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${ user.data('userId') }'>
        <input name='group[user_ids][]' type='hidden' value='${ user.data('userId') }'>
        <p class='chat-group-user__name'>${ user.data('userName') }</p>
        <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
      </div>`;
    member_list.append(html);
  }
  function removeMember(button) {
    $(button).parents('.js-chat-member').remove();
  }
  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    if (input !== preWord) {
      search_list.empty();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users) {
        if (input) {
          users.forEach(function(user) {
            appendUser(user);
          });
        }
        preWord = input;
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    }
  });
  $('#user-search-result').on('click', '.js-add-btn', function() {
    removeMember($(this));
    appendMember($(this));
  });
  $('#chat-group-users').on('click', '.js-remove-btn', function() {
    removeMember($(this));
  });
})
