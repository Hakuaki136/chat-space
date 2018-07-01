Rails.application.routes.draw do
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :index, :show] do
    resources :messages, only: [:index, :create]
  end
  devise_for :users
  root to: 'groups#index'
end
