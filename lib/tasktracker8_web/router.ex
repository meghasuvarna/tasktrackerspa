defmodule Tasktracker8Web.Router do
  use Tasktracker8Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Tasktracker8Web do
    pipe_through :browser # Use the default browser stack
    get "/", PageController, :index
    get "/users", PageController, :index
    get "/users/:user_id", PageController, :index
    get "/tasks/:task_id", PageController, :index
    get "/tasks/edit/:id", PageController, :index
  
   
  end

  # Other scopes may use custom stacks.
   scope "/api/v1", Tasktracker8Web do
   pipe_through :api
   post "/token", TokenController, :create
   resources "/users", UserController, except: [:new, :edit]
   resources "/tasks", TaskController, except: [:new, :edit]

  end
end
