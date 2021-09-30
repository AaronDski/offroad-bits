class UserCartSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :quantity, :year, :make, :model, :image, :description, :user_id, :part_id
  belongs_to :part
  belongs_to :user
end
