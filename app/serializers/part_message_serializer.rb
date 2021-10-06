class PartMessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :subject, :username, :user_id
  belongs_to :part
  belongs_to :user

  def username
    object.user.username
  end
  def user_id
    object.user.id
  end
end
