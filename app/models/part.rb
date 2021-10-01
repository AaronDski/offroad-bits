class Part < ApplicationRecord
    has_many :user_carts
    belongs_to :user

end
