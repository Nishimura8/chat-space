class CommentsController < ApplicationController
  before_action :set_group 
def index
  @comment = Comment.new
  @comments = @group.comments.includes(:user)
end

def create
    @comment = @group.comments.new(message_params)
    if @comment.save
      redirect_to group_messages_path(@group), notice: 'メッセージが送信されました'
    else
        @messages = @group.messages.includes(:user)
        flash.now[:alert] = 'メッセージを入力してください。'
        render :index
    end
 end
def set_group
  @group = Group.find(params[:group_id])
end
def message_params
  params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
end
end
