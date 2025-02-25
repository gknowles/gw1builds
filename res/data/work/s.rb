load 'yaml/util.rb'
d = YAML.load_file 'yaml/skills.yml'
for k in d['Skills'].keys.sort
  sk = Skill.load_yaml k, d['Skills'][k]
  for tag in sk.tags.keys
    next unless pos = tag.index(/-aoe$|-ot$/)
    base = tag.slice(0, pos)
    unless sk.tags.include?(base)
#      puts k
      sk.tags[base] = nil 
    end
  end
end

puts "Skills:"
for k in d['Skills'].keys.sort
  sk = Skill.load_yaml k, d['Skills'][k]
  puts add_indent(sk.to_yaml, 2)
end
