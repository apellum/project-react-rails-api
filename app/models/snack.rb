class Snack < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: :true
    validates :name, uniqueness: :true
    validates :name, length: { in: 2..50 }
end
