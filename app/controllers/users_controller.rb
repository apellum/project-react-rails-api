class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :current_user, only: [:get_current_user]

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      login_user
      render json: @user
    else
      render json: { errors: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def get_current_user
    # session["init"] = true
    if logged_in
      render json: current_user, status: :ok
    else
      render json: { errors: "No user logged in"}, status: :bad_request
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password)
    end
end
