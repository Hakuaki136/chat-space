class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # allow access only for user logged in
  before_action :authenticate_user!
  # change strong parameter for devise to allow register user_name
  before_action :configure_permitted_parameters, if: :devise_controller?

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit :sign_up, keys: [:name]
  end
end
