class Part < ApplicationRecord
    has_many :user_carts, dependent: :destroy
    belongs_to :user
    has_many :part_messages

    # validates :part_id, uniqueness: true
end
