class PartSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :price, :quantity, :year, :make, :model, :image, :description, :username
  has_many :user_carts
  belongs_to :user
  has_many :part_messages

  def username
    object.user.username
  end
end
