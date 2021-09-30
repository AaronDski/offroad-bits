class UserCartsController < ApplicationController
    skip_before_action :authorize, only: [ :create, :index, :show]

    def index
        render json: UserCart.all
    end

    def show 
        render json: @current_user, include: [:user]
    end

    def create
        usercart = UserCart.create!(part_params)
        # session[:user_id] = user.id
        render json: usercart, status: :created
    end

    private

    def part_params
        params.permit(:user_id, :part_id, :title, :price, :quantity, :year, :make, :model, :image, :description)
    end
end
