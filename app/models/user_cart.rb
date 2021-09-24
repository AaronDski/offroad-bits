class UserCart < ApplicationRecord
  belongs_to :part
  belongs_to :user
end
