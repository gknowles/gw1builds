# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# w2w.rb - gw1builds data

# Wiki update bot

require 'wiki.rb'

wiki = Wiki.new
wiki.bot_user = 'CloudBot'
wiki.bot_password = 'izmnx5'

wiki.login
r = wiki.read_for_modify 'User:CloudBot/Test'

