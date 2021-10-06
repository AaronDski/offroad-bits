class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :user_carts
  has_many :parts, through: :user_carts
  
end
