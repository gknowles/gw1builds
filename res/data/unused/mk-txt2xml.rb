# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# mk-txt2xml.rb - gw1builds data

require 'util/parse-txt'
require 'util/put-pro-xml'

skills = parse_txt ARGF
put_pro_xml skills

