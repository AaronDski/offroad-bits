class PartsController < ApplicationController
  skip_before_action :authorize, only: [:index]
  def index
    render json: Part.all
  end

  def create
    part = Part.create!(part_params)
    session[:user_id] = user.id
    render json: part, status: :created
  end

  private

  def part_params
    params.permit(:user_id, :title, :price, :quantity, :year, :make, :model, :image, :description)
  end
end
