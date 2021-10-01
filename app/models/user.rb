class User < ApplicationRecord

    has_secure_password
    has_many :parts
    has_many :user_carts
    
    has_many :listings, through: :user_carts, source: :part


    validates :username, :password_digest, presence: true
    validates :username, uniqueness: true
end
