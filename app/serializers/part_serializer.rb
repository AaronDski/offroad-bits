class PartSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :quantity, :year, :make, :model, :image, :description
end
