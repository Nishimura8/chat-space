$(function(){
  function buildHTML(comment){
    if (comment.image) {
      var img = `<img src="${comment.image}">`
    }else{
     img =""
    }
    var html = `<div class = "contents-main-main">
                    <div class = "contents-main__main__font-box__name">
                      ${comment.user_name}
                    </div>
                    <div class = "contents-main__main__font-box__message">
                      ${comment.created_at}
                    </div>
                  </div>
                  <div class = "contents-main__main__font3">
                    ${comment.content}
                    ${img} 
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
        console.log(data)
        var html = buildHTML(data);
        $('.contents-box').append(html)
        $(".contents-main__main").animate({scrollTop:$('.contents-main__main')[0].scrollHeight});
        $('.form__message').val('')
        $(".form__submit").prop("disabled", false);
      })
      .fail(function(){
        alert('error');
      })
    })
});