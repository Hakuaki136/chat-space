class GroupsController < ApplicationController
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    binding.pry
    @group = Group.new
  end

  def edit
  end

  def update
  end

  def show
  end

  private
  def group_params
    params.require()
  end
end
