json.array! @comments do |comment|
    json.content comment.content
    json.image comment.image.url
    json.created_at comment.created_at
    json.user_name comment.user.name
    json.id comment.id
  end