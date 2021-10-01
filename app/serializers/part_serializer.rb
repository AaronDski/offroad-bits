class PartSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :quantity, :year, :make, :model, :image, :description
  has_many :user_carts
  belongs_to :user
end
