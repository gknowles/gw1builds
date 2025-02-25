require 'util/parse-txt'
require 'util/put-pro-xml'

skills = parse_txt ARGF
put_pro_xml skills

