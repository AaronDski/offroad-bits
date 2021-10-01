class UserCart < ApplicationRecord
  belongs_to :part
  belongs_to :user

  validates :part, uniqueness: {scope: :user}
end
