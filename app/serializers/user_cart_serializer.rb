class UserCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :part_id, :part_messages
  
  belongs_to :part
  belongs_to :user

  def part_messages
    object.part.part_messages
  end
end
