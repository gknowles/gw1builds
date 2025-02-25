require 'util/skill'
load 'util/skill_db.rb'

skills = parse_xml ARGF

skills.sort! { |a,b| Skill::compareProAttrName(a,b) }

attr = nil
for sk in skills
  if sk.attribute != attr
    puts unless attr.nil?
    attr = sk.attribute
    puts "== [[#{attr}]] =="
  end
  print "*[[#{sk.name}]]"
  print " ([[Elite]])" if sk.elite
  puts
end


post, multipart/form-data
wiki.guildwars.com//wiki/Special:Upload
wpUploadFile=<actual file>
wpSourceType=file
wpDestFile=<skill>.jpg

curl -c cookies -F wpName=Cloud -F wpPassword=mblx73 -F "wpLoginattempt=Log in" 
  "http://wiki.guildwars.com/index.php?title=Special:Userlogin&amp;action=submitlogin&amp;type=login"


curl -F wpUploadFile=@1.jpg -F wpSourceType=file -F wpDestFile=Healing_Signet.jpg 
  -c cookies
  http://wiki.guildwars.com/wiki/Special:Upload

str = "curl -c cookies -b cookies -F wpUploadFile=@#{localname} " \
  "-F wpDestFile=#{destname} -F \"wpUpload=Upload file\" " \
  "http://wiki.guildwars.com/wiki/Special:Upload"
  
