defmodule Tasktracker8Web.TokenView do
    use Tasktracker8Web, :view
  
    def render("token.json", %{user: user, token: token}) do
      %{
        user_id: user.id,
        token: token,
      }
    end
  end