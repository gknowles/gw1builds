id = 1
seq = [
  ["skill-common.xml", "Core"],
  ["skill-e.xml", "Core", "Prophecies"],
  ["skill-me.xml", "Core", "Prophecies"],
  ["skill-mo.xml", "Core", "Prophecies"],
  ["skill-n.xml", "Core", "Prophecies"],
  ["skill-r.xml", "Core", "Prophecies"],
  ["skill-w.xml", "Core", "Prophecies"],
  ["skill-a.xml", "Factions"],
  ["skill-rt.xml", "Factions"],
  ["skill-e.xml", "Factions"],
  ["skill-me.xml", "Factions"],
  ["skill-mo.xml", "Factions"],
  ["skill-n.xml", "Factions"],
  ["skill-r.xml", "Factions"],
  ["skill-w.xml", "Factions"],
  ["skill-d.xml", "Nightfall"],
  ["skill-p.xml", "Nightfall"],
  ["skill-e.xml", "Nightfall"],
  ["skill-me.xml", "Nightfall"],
  ["skill-mo.xml", "Nightfall"],
  ["skill-n.xml", "Nightfall"],
  ["skill-r.xml", "Nightfall"],
  ["skill-w.xml", "Nightfall"],
  ["skill-a.xml", "Nightfall"],
  ["skill-rt.xml", "Nightfall"]
]

# load it all
data = {}
seq.each { |a|
  if data[a[0]] == nil 
    puts "Loading #{a[0]}..."
    data[a[0]] = IO.readlines(a[0])
  end
}

# modify
seq.each { |a|
  puts "#{a[0]} (#{a[1..-1].join(', ')}) starting with #{id}"
  data[a[0]].each_index { |i1|
    line = data[a[0]][i1]
    campaign = line.scan(/ campaign=\"([^\"]*)\"/).flatten
    if !(a & campaign).empty?
      data[a[0]][i1] = line.gsub(/Skill id=\"[^\"]*"/, 
        'Skill id="' + id.to_s + '"')
      id += 1 if $~ != nil
    end
  }
}

puts "Skills processed: #{id}"

data.each { |k, v|
  puts "Saving #{k}..."
  File.open(k, "w+") { |f|
    f.puts v
  }  
}

