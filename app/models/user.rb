class User < ApplicationRecord
    has_many :reviews
    has_many :snacks, through: :reviews

    validates :username, presence: true, uniqueness: true
    
    has_secure_password
end
