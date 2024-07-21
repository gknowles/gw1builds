#!/usr/bin/ruby1.8
require 'active_support'
require 'yaml/util.rb'

class Skill
  def to_js data
    re = /(\d+)\.\.(\d+)/
  
    pro_abbrev = profession == 'No Profession' ? nil :
      data['Professions'][profession]['abbrev']
    
    out = "g_skillsById[#{code}] = new Skill(#{name.dump}," \
      "#{code},#{campaign.dump}," \
      "#{pro_abbrev.to_json}," \
      "#{attribute.dump},\n"
    out += "  #{elite},#{multiple},#{monster},#{pve}," \
      "#{type.dump},#{energy},#{adrenaline},#{activation}," \
      "#{recharge},#{upkeep},#{exhaustion},#{failure},\n"
      
    ta = desc.split(re)
    dc = ''
    while ta.length > 1
      dc += ta.shift.dump
      dc += ",[#{ta.shift},#{ta.shift}],"
    end
    dc += ta.shift.dump
    out += "  [#{dc}],\n"
    
    out += "  {"
    tags.keys.sort.each_with_index do |tag, pos|
      out += ", " unless pos == 0
      out += "#{tag.dump}: true"
    end
    out += "}, [\n"
    first = true
    for prog in progressions
      out += ",\n" unless first
      first = false
      out += "  [#{prog[0].dump},#{prog[1..-1].join(',')}]"
    end
    out += " ] );\n"
    out
  end
end

def put_args f, base, *args
  pos = base.length
  f.print base
  first = true
  while args.last.nil? do args.pop end
  for raw in args
    val = raw.to_json
    unless first
      f.print "," 
      pos += 1
    end
    first = false
#    if pos + val.length > 78
#      f.print "\n  "
#      pos = 2
#    end
    f.print val
    pos += val.length
  end
  pos    
end

data = {}
for fn in Dir['yaml/*.yml'] do
  next if fn == 'yaml/gwshack.yml'
  puts "Loading #{fn}..."
  d = YAML.load_file fn
  for type in d.keys
    if data[type]
      data[type].update(d[type])
    else 
      data[type] = d[type]
    end
  end
end

f = File.open('data-skill.js', 'w+')
f.puts "// Auto-generated #{Time.new}"
f.puts
f.puts "function loadSkills() {"

# attributes
puts "Attributes..."
f.puts "// Attributes"
attrs = data['Professions']['No Profession']['attrs']
first = true
for aname in attrs.keys
  attr = attrs[aname]
  put_args f, "g_attrs['#{aname}'] = new Attribute(",
    aname, attr['code'], attr['abbrev'], attr['primary'] || false,
    attr['skillAdjust'] || false, attr['desc'], ''
  f.puts ');'
end
f.puts

# professions
puts "Professions..."
f.puts "// Professions"
for name in data['Professions'].keys.sort
  next if name == 'No Profession'
  pro = data['Professions'][name]
  put_args f, "g_pros['#{pro['abbrev']}'] = new Profession(",
    name, pro['code'], pro['abbrev'], pro['campaign']
  f.puts ","
  f.puts "  #{pro['desc'].to_json}, {"
  first = true
  for aname in pro['attrs'].keys
    attr = pro['attrs'][aname]
    f.puts "," unless first
    first = false
    put_args f, "  #{aname.to_json}: new Attribute(",
      aname, attr['code'], attr['abbrev'], attr['primary'] || false,
      attr['skillAdjust'] || false, attr['desc']
    f.print ')'
  end
  f.puts
  f.puts "  } );"
end
f.puts

# filters
puts "Filters..."
f.puts "// Filters"
for name in data['Filters'].keys.sort
  val = data['Filters'][name]
  f.puts "g_skillFilters[#{name.dump}] = new SkillFilter(#{name.dump},"
  f.puts "  #{val['desc'].dump}, {"
  val['tags'].sort.each_with_index do |tag, pos|
    f.puts "," unless pos == 0
    f.print "  #{tag.dump}: true"
  end
  f.puts "} );"
end
f.puts

# tags
puts "Tags..."
f.puts "// Tags"
for key in data['Tags'].keys.sort
  val = data['Tags'][key]
  f.puts "g_skillTags[#{key.dump}] = {" \
    " key: #{key.dump}," \
    " desc: #{val['desc'].dump}}"
end
f.puts

# skills
puts "Skills..."
f.puts "// Skills"
for name in data['Skills'].keys.sort
  sk = Skill.load_yaml name, data['Skills'][name]
  next if sk.code == 0
  sk.attribute = 'No Attribute' if sk.attribute == 'Unlinked'
#  next if sk.pve
  f.print sk.to_js(data)
end
f.puts

# close
f.puts
f.puts "} // loadSkills"
f.close
