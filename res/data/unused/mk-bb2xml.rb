# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# mk-bb2xml.rb - gw1builds data

require 'util/put-pro-xml'
require 'util/parse-bb'
load 'util/skill_db.rb'

skills = parse_bb get_bbskills
skills.each do |sk|
  sk[:desc] = nil
end
put_pro_xml skills

