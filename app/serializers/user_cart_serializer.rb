class UserCartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :part
  has_one :user
end
