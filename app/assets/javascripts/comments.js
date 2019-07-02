$(document).on('turbolinks:load', function() {
  function buildHTML(comment){
    var image = comment.image ? `<img src='${comment.image}'> ` : ''
    var html = ` <div class="contents-box2" data-data-id="${comment.id}">
    <div class="contents-main__main__font-box">
    <div class="contents-main__main__font-box__name">
    ${comment.user_name}
    </div>
    <div class="contents-main__main__font-box__message">
    ${comment.created_at}
    </div
    </div>
    <div class="contents-main__main__font3">
    <p>a</p>
    <p class="chat-group-user__name">${ comment.content}</p>
    ${image} 
    </div>
    </div>`
    return html;
  }

  $('#new_comment').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $('#new_comment').attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.contents-box').append(html)
        $(".contents-main__main").animate({scrollTop:$('.contents-main__main')[0].scrollHeight});
        $('#new_comment')[0].reset();
        $(".form__submit").prop("disabled", false);
      })
      .fail(function(){
        alert('error');
      })
    })
      var reloadMessages = function() {
        //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
        
        if(location.href.match(/\/groups\/\d+\/comments/)){
          var last_comment_id = $('.contents-box2:last').data('data-id')
          var group_id = $('.contents-main').data('group-id')
          $.ajax({
            //ルーティングで設定した通りのURLを指定
            url: '/groups/'+ group_id +'/api/comments',
            //ルーティングで設定した通りhttpメソッドをgetに指定
            type: 'get',
            dataType: 'json',
            //dataオプションでリクエストに値を含める
            data: {id: last_comment_id}
          })
          .done(function(comments) {
            //追加するHTMLの入れ物を作る
            //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
            comments.forEach(function(comment){
            //メッセージが入ったHTMLを取得
            var insertHTML = buildHTML(comment)
            //メッセージを追加
            $('.contents-box').append(insertHTML);
            $(".contents-main__main").animate({scrollTop:$('.contents-main__main')[0].scrollHeight});
            })
          })
          .fail(function() {
            alert('自動更新に失敗しました');
          })
        }
      };
  setInterval(reloadMessages, 10000)
});