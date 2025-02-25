require 'util/skill'
require 'net/http'

skills = []
for pro in Skill::PROFESSION_KEYS
  puts "Reading '#{pro}' skills"
  f = File.new("skill-#{pro}.xml", 'r')
  skills += parse_xml(f)
end
puts "Skills read: #{skills.length}"

$prodirs = {
  Skill::NO_PROFESSION => '',
  'Assassin' => '/assassin',
  'Dervish' => '/dervish',
  'Elementalist' => '/elementalist',
  'Mesmer' => '/mesmer',
  'Monk' => '/monk',
  'Necromancer' => '/necro',
  'Paragon' => '/paragon',
  'Ranger' => '/ranger',
  'Ritualist' => '/ritualist',
  'Warrior' => '/warrior'
}

def get_remote_image skill
  user = 'admin'
  password = 'admin'
  hdrs = {
    "Authorization" => "Basic " + ["#{user}:#{password}"].pack('m')
  }  

  name = skill.name.downcase.delete('^a-z')
  prodir = $prodirs[skill.profession]
  path = "/images/professions/skillicons#{prodir}/#{name}.jpg"
  puts path
  h = Net::HTTP.new('www.guildwars.com', 80)
  h.read_timeout = 30
  resp, data = h.get(path) # , hdrs)
  data
end


for skill in skills
  fname = "image/#{skill.code}.jpg"
  puts skill.name + ', ' + fname
  next if File.exists? fname
#  sleep 3
  name = skill.name.downcase.delete('^a-z')
  data = get_remote_image skill
  f = File.new(fname, "w+b");
  f.syswrite(data)
end

  
