defmodule Tasktracker8.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :timetaken, :integer
    field :title, :string
    belongs_to :user, Tasktracker8.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:completed, :description, :timetaken, :title, :user_id])
    |> validate_required([:completed, :description, :timetaken, :title,  :user_id])
  end
end
