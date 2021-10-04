class SessionsController < ApplicationController
    #login
    def create
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            login_user
            render json: @user, status: :ok
        else
            render json: { errors: "Username or Password did not match" }
        end
    end
    
    def destroy
        session.clear
        render json: { errors: "Logout successful"}
    end
end
