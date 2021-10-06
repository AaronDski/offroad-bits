class Part < ApplicationRecord
    has_many :user_carts, dependent: :destroy
    belongs_to :user
    has_many :part_messages, dependent: :destroy

    # validates :part_id, uniqueness: true
end
