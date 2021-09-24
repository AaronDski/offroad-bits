class User < ApplicationRecord
    has_many :user_parts
    has_many :parts, through: :user_parts
    has_one :user_cart
end
