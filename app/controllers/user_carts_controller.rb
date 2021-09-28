class UserCartsController < ApplicationController
    
    def index
        render json: UserCart.all
    end
end
