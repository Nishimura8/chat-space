class CommentsController < ApplicationController
def index
    end
def create
    Comment.create(text: params[:text], tweet_id: params[:tweet_id], user_id: current_user.id)
    redirect_to root_path
end
end
