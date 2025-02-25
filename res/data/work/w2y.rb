# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# w2y.rb - gw1builds data

require 'pp'
require '../yaml/util.rb'
require 'wiki.rb'

wiki = Wiki.new
d = YAML.load_file '../yaml/skills.yml'
#d = YAML.load_file 'skill-names.yml'
keys = d['Skills'].keys.sort
#keys = ['Aura of Stability']
w = {}
failed = []
for k in keys
  rk = d['Skills'][k]['gww-name'] || k
  if / \((.+)\)$/.match(rk)
    allegiance = $1
    body = wiki.read rk[0, $~.begin(0)]
  else
    body = wiki.read rk
  end
  begin
    sk = wiki.parse_skill k, body
  rescue
    wiki.save
  end
  unless sk
    failed << k
    next
  end
  sk.attribute = "#{allegiance} rank" if sk.attribute == 'Allegiance rank'
  w[k] = sk
  v = sk.to_yaml
end
wiki.save

File.open('failed.txt', 'w+') do |f|
  f.puts failed
end

File.open('swiki.yml', 'w+') do |f|
  f.puts "Skills:"
  for k in w.keys.sort
    f.puts add_indent(w[k].to_yaml, 2)
  end
end
