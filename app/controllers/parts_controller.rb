class PartsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        render json: Part.all
    end
end
