class PartsController < ApplicationController
    
    def index
        render json: Part.all
    end
end
