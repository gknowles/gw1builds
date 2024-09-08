class WelcomeController < ApplicationController
  caches_page :index unless is_dev
  
  def index
  end
  
  def download
    send_data params[:content], :filename => params[:filename], 
      :type => params[:type], :disposition => 'attachment'
  end
end
