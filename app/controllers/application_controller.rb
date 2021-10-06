class ApplicationController < ActionController::API
  include ActionController::Cookies

  # session method uses the user_id to update to the big string
  def login_user
    session[:user_id] = @user.id
  end

  # session is true with the user_id
  def logged_in
    !!session[:user_id]
  end

  # current user is the one logged into the session
  def current_user
    User.find_by_id(session[:user_id])
  end

end
