$(function(){
    var search_list = $("#user-search-result");
    function   appendUserName(user){
        var html = `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${ user.name }</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
      </div>`;
    search_list.append(html);
   }
   function appendNoUserName(fail) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${fail}</p>
                </div>`
    search_list.append(html);
  }
    $("#user-search-field").on("keyup", function() {
        var input = $(this).val();
        $.ajax({
          type: 'GET',
          url: '/users/',
          data: { keyword: input },
          dataType: 'json'
        })
        .done(function(users) {
            $("#user-search-result").empty();
            if (users.length !== 0) {
              users.forEach(function(user){
                appendUserName(user);
              });
            }
            else {
              appendNoUserName("一致する名前はありません");
            }
          })
          .fail(function() {
            alert('映画検索に失敗しました');
          })
    })

    });
    function appendUserNameAdd(user_name, user_id) {
        var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                     <input name='group[user_ids][]' type='hidden' value='${user_id}' >
                     <p class='chat-group-user__name'>${user_name}</p>
                     <a class='user-search-remove btn'>削除</a>
                   </div>`
            
                   $("#chat-group-users").append(html)
     }
    $(document).on("click", ".user-search-add ", function () {
      var user_name = $(this).data("user-name");
      var user_id = $(this).data("user-id");
      appendUserNameAdd(user_name, user_id);
      $(this).parent().remove();
    });
    $(document).on("click", ".user-search-remove", function () {
      $(this).parent().remove();
    });

  

