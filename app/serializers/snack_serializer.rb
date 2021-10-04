class SnackSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :rating
  has_many :reviews
end
