load '../yaml/util.rb'

d = YAML.load_file(ARGV[1] || '../yaml/skills.yml')['Skills']
w = YAML.load_file(ARGV[0] || 'swiki.yml')['Skills']

bad = 0
for k in w.keys.sort
  sw = Skill.load_yaml k, w[k]
  sd = Skill.load_yaml k, d[k]

  errors = []
  for a in SKILL_ATTRS_SIMPLE
    next if a == :code or a == :failure
    next if a == :campaign
    if sw[a] != sd[a]
      errors << "  #{a}: #{sd[a]} != #{sw[a]}"
    end
  end
  if sd.desc != sw.desc
    errors << "  desc:"
    errors << "    #{sd.desc}"
    errors << "    #{sw.desc}"
  end
  if errors.length > 0
    bad += 1
    puts k
    puts errors
  end
end

puts
puts "#{bad} inconsistant skills"
