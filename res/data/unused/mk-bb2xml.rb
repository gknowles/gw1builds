require 'util/put-pro-xml'
require 'util/parse-bb'
load 'util/skill_db.rb'

skills = parse_bb get_bbskills
skills.each do |sk|
  sk[:desc] = nil
end
put_pro_xml skills

