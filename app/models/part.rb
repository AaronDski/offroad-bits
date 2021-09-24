class Part < ApplicationRecord
    has_many :user_parts
    has_many :user_carts
    has_many :users, through: :user_parts

end
