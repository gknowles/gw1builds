# Wiki update bot

require 'wiki.rb'

wiki = Wiki.new
wiki.bot_user = 'CloudBot'
wiki.bot_password = 'izmnx5'

wiki.login
r = wiki.read_for_modify 'User:CloudBot/Test'

