load '../yaml/util.rb'
d = YAML.load_file '../yaml/skills.yml'
di = YAML.load_file 'sid.yml'
for k,v in di
  unless d['Skills'][v]
    d['Skills'][v] = {}
  end
  ok = d['Skills'][v]['code']
  if ok != k
#    puts "#{v}: #{ok} => #{k}"
    d['Skills'][v]['code'] = k
  end
end

vals = []
for k in d['Skills'].keys.sort
  val = Skill.load_yaml k, d['Skills'][k]
  vals << val
end


puts "Skills:"
for val in vals.sort { |a,b| a.name <=> b.name }
  puts add_indent(val.to_yaml, 2)
end
puts

