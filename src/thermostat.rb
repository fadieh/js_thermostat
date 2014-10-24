require 'sinatra/base'
require 'net/http'

set :public_dir, Proc.new { File.join(root, "src")}

class thermostat < Sinatra::Base
  get '/' do
    erb :index
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
