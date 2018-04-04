defmodule Tasktracker8Web.TokenController do
    use Tasktracker8Web, :controller
    alias Tasktracker8.Users.User
  
    action_fallback Tasktracker8Web.FallbackController
  
    def create(conn, %{"email" => email, "pass" => pass}) do
     
      with {:ok, %User{} = user} <- Tasktracker8.Users.get_and_auth_user(email, pass) do
        
        token = Phoenix.Token.sign(conn, "auth token", user.id)
        conn
        |> put_status(:created)
        |> render("token.json", user: user, token: token)
      end
    end
  end