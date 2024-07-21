load '../yaml/util.rb'
d = YAML.load_file '../yaml/skills.yml'
vals = []
for k in d['Skills'].keys.sort
  val = Skill.load_yaml k, d['Skills'][k]
  next unless val.campaign == 'Eye of the North'
  vals << val
end

puts "* 0 - No Skill"
for val in vals.sort { |a,b| a.code <=> b.code }
  vals = val.name.split(/( \(.*\)$)/)
  vals << ' (Sunspear)' if val.attribute == 'Sunspear rank'
  vals << ' (Kurzick)' if val.attribute == 'Kurzick rank'
  vals << ' (Luxon)' if val.attribute == 'Luxon rank'
  vals << ' (Lightbringer)' if val.attribute == 'Lightbringer rank'
#  vals << " (#{val.profession})" if val.profession and 
#    val.profession != 'No Profession'
  puts "* #{val.code} - [[#{vals[0]}]]#{vals[1] if vals[1]}"
end
puts
