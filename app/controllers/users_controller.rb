class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        #user = User.find(@current_user.id)
        render json: user
    end

    #sign up
    def create
        user = User.create(user_params)
        render json: user
    end

    private
        def user_params
            params.permit(:username, :password)
        end
end
