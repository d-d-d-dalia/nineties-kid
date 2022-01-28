class User < ApplicationRecord
    has_many :tamagotchis

    validates :username, presence: true, uniqueness: true
end
