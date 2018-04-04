# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasktracker8.Repo.insert!(%Tasktracker8.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.


defmodule Seeds do
    alias Tasktracker8.Repo
    alias Tasktracker8.Users.User
    alias Tasktracker8.Tasks.Task
  
    def run do
      p = Comeonin.Argon2.hashpwsalt("password1")

  

      Repo.delete_all(User)
      a = Repo.insert!(%User{ name: "alice", email: "alice@abc.com", password_hash: p  })
      b = Repo.insert!(%User{ name: "bob", email: "bob@abc.com", password_hash: p  })
      c = Repo.insert!(%User{ name: "carol", email: "carol@abc.com", password_hash: p  })
      d = Repo.insert!(%User{ name: "dave", email: "dave@abc.com", password_hash: p  })
  
      Repo.delete_all(Task)
      Repo.insert!(%Task{ user_id: a.id, completed: false, description: "task", timetaken: 15, title: "task title" })
      Repo.insert!(%Task{ user_id: b.id, completed: false, description: "task", timetaken: 15, title: "task title" })
      Repo.insert!(%Task{ user_id: b.id, completed: false, description: "task", timetaken: 15, title: "task title" })
      Repo.insert!(%Task{ user_id: c.id, completed: false, description: "task", timetaken: 15, title: "task title" })
      Repo.insert!(%Task{ user_id: d.id, completed: false, description: "task", timetaken: 15, title: "task title" })
    end
  end
  
  Seeds.run
