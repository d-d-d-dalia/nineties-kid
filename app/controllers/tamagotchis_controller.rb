class TamagotchisController < ApplicationController
    #see all tamagotchis (index)
    #create a tamagotchi (create)
    #update a tamagotchi (update)
    #delete a tamagotchi (destroy)
    #possibly want to also be able to see 1 specific tamagotchi (show)

    def index
        tamagotchis = Tamagotchi.all
        render json: tamagotchis
    end

    def create
        tamagotchi = Tamagotchi.create(tamagotchi_params)
        render json: tamagotchi
    end

    def update
        tamagotchi = Tamagotchi.update(tamagotchi_params)
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
            params.permit(:name, :age, :fav_food, :user_id)
        end

end
