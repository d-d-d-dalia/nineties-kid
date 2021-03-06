class TamagotchisController < ApplicationController
    #possibly want to also be able to see 1 specific tamagotchi (show)
    #skip_before_action :authorize

    def index
        tamagotchis = Tamagotchi.all
        render json: tamagotchis
    end

    def create
        tamagotchi = Tamagotchi.create(tamagotchi_params)
        render json: tamagotchi
    end

    def update
        tamagotchi = Tamagotchi.find(params[:id])
        tamagotchi.update(tamagotchi_params)
        render json: tamagotchi
    end

    def destroy
        tamagotchi = Tamagotchi.find(params[:id])
        tamagotchi.destroy
    end

    def show
        tamagotchi = Tamagotchi.find(params[:id])
        render json: tamagotchi
    end

    private

        def tamagotchi_params
            params.require(:tamagotchi).permit(:name, :age, :fav_food, :user_id)
        end

end
