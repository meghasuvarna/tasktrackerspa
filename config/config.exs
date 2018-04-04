# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tasktracker8,
  ecto_repos: [Tasktracker8.Repo]

# Configures the endpoint
config :tasktracker8, Tasktracker8Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "+dLtQRUhBa8T1npNqIBCG0/NrEDJYe+tmjs/r8Mj4A+wbca5JEqR23BOIK3IF5G9",
  render_errors: [view: Tasktracker8Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tasktracker8.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
