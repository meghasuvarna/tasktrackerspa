defmodule Tasktracker8Web.PageController do
  use Tasktracker8Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
