class UserCartSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :quantity, :year, :make, :model, :image, :description
  has_many :parts
  has_one :user
end
