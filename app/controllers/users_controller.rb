class UsersController < ApplicationController
    #want to be able to create new users (essentially a sign-up functionality)
    
    #sign up
    def create
        user = User.create(user_params)
        render json: user
    end

    #want to be able maybe to see users (thinking about a show action for a user's 
    #profile page?)

    private
        def user_params
            params.permit(:username, :password)
        end
end
