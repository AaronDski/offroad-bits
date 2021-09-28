class UserPartsController < ApplicationController

    def index
        render json: UserPart.all
    end
end
