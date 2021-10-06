class PartMessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :subject, 
  belongs_to :part
  belongs_to :user
end
