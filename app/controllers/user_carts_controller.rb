class UserCartsController < ApplicationController
    skip_before_action :authorize, only: [ :index]

    def index
        render json: UserCart.all
    end
    def create
        
    end
end
