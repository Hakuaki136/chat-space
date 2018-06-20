class MessagesController < ApplicationController
  def index
    @groups = User_group.where(:user_id = current_user.id).group
  end
end
