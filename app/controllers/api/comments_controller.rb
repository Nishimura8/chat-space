class Api::CommentsController < ApplicationController
      
  def index
    @group = Group.find(params[:group_id])
    respond_to do |format| 
      format.html
      format.json{@comments = @group.comments.where('id > ?',params[:id]) }
      # binding.pry
    end
  end
end