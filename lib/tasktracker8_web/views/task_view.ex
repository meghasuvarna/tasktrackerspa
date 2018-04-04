defmodule Tasktracker8Web.TaskView do
  use Tasktracker8Web, :view
  alias Tasktracker8Web.TaskView
  alias Tasktracker8Web.UserView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      completed: task.completed,
      description: task.description,
      timetaken: task.timetaken,
      title: task.title,
      user: render_one(task.user, UserView, "user.json")}
  end
end
