class UserCartsController < ApplicationController
    skip_before_action :authorize, only: [ :create, :show, :destroy]

    def index
        
        render json: @current_user.user_carts, include: 'part.part_messages'
    end

    def show 
        render json: @current_user, include: [:user]
    end

    def create
        usercart = UserCart.create!(part_params)
        render json: usercart, status: :created
    end

    def destroy
        usercart = UserCart.find(params[:id])
        usercart.destroy
        head :no_content

    end

    private

    def part_params
        params.permit(:user_id, :part_id)
    end
end
