class TamagotchiSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :fav_food, :user_id
  belongs_to :user, serializer: UserSerializer
end
