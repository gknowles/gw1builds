#!/usr/bin/ruby1.8

# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# e2js.rb - gw1builds data

d = YAML.load_file 'yaml/skills.yml'
tags = {}
for k in d['Skills'].keys.sort
  v = d['Skills'][k]
  next unless v['tags']
  for t in v['tags']
    tags[t] = [] unless tags[t]
    tags[t].push(k)
  end
end

for tag in tags.keys.sort
  puts "#{tag}: "
  for sk in tags[tag].sort
    puts "  - #{sk}"
  end
end


