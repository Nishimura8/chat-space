json.content  @comment.content
json.created_at  @comment.created_at.strftime("%Y-%m-%d %H:%M")
json.user_name  @comment.user.name
json.image  @comment.image.url
json.id     @comment.id
