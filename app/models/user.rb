class User < ApplicationRecord

    has_secure_password
    has_many :user_carts
    has_many :parts, through: :user_carts


    validates :username, :password_digest, presence: true
    validates :username, uniqueness: true
end
