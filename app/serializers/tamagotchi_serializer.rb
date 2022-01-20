class TamagotchiSerializer < ActiveModel::Serializer
  attributes :id, :name, :fav_food, :user_id
end
