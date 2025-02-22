# Copyright Glen Knowles 2006.
# Distributed under the Boost Software License, Version 1.0.
#
# welcome_controller.rb - gw1builds rails

class WelcomeController < ApplicationController
  caches_page :index unless is_dev

  def index
  end

  def download
    send_data params[:content], :filename => params[:filename],
      :type => params[:type], :disposition => 'attachment'
  end
end
