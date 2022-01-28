Rails.application.routes.draw do

  resources :tamagotchis
  resources :users

  # 2 routes for sessions, 1 for login and 1 for logout
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
