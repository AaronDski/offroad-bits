class PartsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]
  def index
    render json: Part.all
  end

  def create
    part = Part.create!(part_params)
    render json: part, status: :created
  end

  private

  def part_params
    params.permit(:user_id, :title, :price, :quantity, :year, :make, :model, :image, :description)
  end
end
