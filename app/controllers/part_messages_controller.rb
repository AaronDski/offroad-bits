class PartMessagesController < ApplicationController
    skip_before_action :authorize, only: [ :create, :show, :destroy]


    def index
        render json: @current_user.part_messages
    end

    def create
        pm = PartMessage.create!(pm_params)
        render json: pm, status: :created
    end

    def update
        pmUpdate = PartMessage.find(params[:id])
        pmUpdate.update(part_params)
        render json: pmUpdate, status: :accepted 
    end

    def destroy
        pmd = PartMessage.find(params[:id])
        pmd.destroy
        head :no_content

    end

    private

    def pm_params
        params.permit(:content, :subject, :user_id, :part_id)

    end



end
