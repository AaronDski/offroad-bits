class Part < ApplicationRecord
    has_many :user_carts, dependent: :destroy
    belongs_to :user

    # validates :part_id, uniqueness: true
end
