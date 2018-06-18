class UsersController < ApplicationController
  def edit
    @user = User.find(current_user.id)
  end

  def update
    user = User.find(current_user.id)
    user.update(user_params) if user.id == current_user.id
  end

  private
  def user_params
    params.permit(:name, :email)
  end
end
