class UserPartSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :year, :make, :model, :image, :description
  has_one :part
  has_one :user
end
