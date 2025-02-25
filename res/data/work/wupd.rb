load '../yaml/util.rb'

d = YAML.load_file(ARGV[0] || '../yaml/skills.yml')['Skills']
w = YAML.load_file('swiki.yml')['Skills']
o = {}

num = 0
for k in w.keys.sort
  sw = Skill.load_yaml k, w[k]
  sd = Skill.load_yaml k, d[k]
  changed = false
  
  for a in SKILL_ATTRS_SIMPLE
    next if a == :code or a == :failure or a == :gwwName
    if sd[a] != sw[a]
      sd[a] = sw[a]
      changed = true
    end
  end
  if sd.desc != sw.desc
    sd.desc = sw.desc
    changed = true
  end
  if sd.progressions != sw.progressions
    sd.progressions = sw.progressions
    changed = true
  end

  o[k] = sd
  if changed  
    num += 1
    puts k
  end
end


puts
puts "#{num} skills updated"

File.open('skills.yml', 'w+') do |f|
  f.puts "Skills:"
  for k in o.keys.sort
    f.puts add_indent(o[k].to_yaml, 2)
  end
end

