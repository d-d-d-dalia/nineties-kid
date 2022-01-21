class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :tamagotchis, serializer: TamagotchiSerializer
end
