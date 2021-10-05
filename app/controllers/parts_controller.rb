class PartsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create, :update]
  def index
    render json: Part.all
  end

  def create
    part = Part.create!(part_params)
    render json: part, status: :created
  end

  def update
    partUpdate = Part.find(params[:id])
    partUpdate.update(part_params)
    render json: partUpdate, status: :accepted 
  end

  def destroy
    part = Part.find(params[:id])
    part.destroy
    head :no_content
  end

  private

  def part_params
    params.permit(:user_id, :title, :price, :quantity, :year, :make, :model, :image, :description)
  end
end
