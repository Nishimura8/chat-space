class CommentsController < ApplicationController
    def create
        Comment.create(text: params[:text], tweet_id: params[:tweet_id], user_id: current_user.id)
        redirect_to tweet_path(params[:tweet_id]) 
      end
      private
  def comment_params
    params.permit(:text, :tweet_id)
  end
end
