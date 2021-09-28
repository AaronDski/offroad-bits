class UserPartsController < ApplicationController

    def index
        render json: UserPart.all
    end

    def create
        userpart = UserPart.create!(part_params)
        
        render json: userpart, status: :created
    end

    private

    def part_params
        params.permit(:title, :price, :quantity, :year, :make, :model, :image, :description)
    end
end
