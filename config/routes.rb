Rails.application.routes.draw do
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :show]
  devise_for :users
  root to: 'messages#index'
end
