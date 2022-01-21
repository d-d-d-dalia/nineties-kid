class ApplicationController < ActionController::API
  include ActionController::Cookies

  #to-do
  #back end:
  #where to use authorize before action?

  #front end:
  #test fetch calls first
  #component structure - index, form, tamagotchi card
    #tamagotchi index
    #tamagotchi form
    #tamagotchi update form
    #tamagotchi delete button

    private

      def authorize
        #throw an error unless current user exists
        render json: {errors: "Not authorized"} unless @current_user
      end

      # def current_user
      #   #identify the user that is currently logged in
      #   @current_user = User.find(session[:user_id])
      # end

end
