class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #login
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    #logout
    def destroy
        session.delete :user_id
    end

end