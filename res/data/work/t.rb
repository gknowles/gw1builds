# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# t.rb - gw1builds data

load '../yaml/util.rb'
d = YAML.load_file '../yaml/tags.yml'
tags = {}
for k in d['Tags'].keys.sort
  v = d['Tags'][k]
  puts "|-"
  puts "| '''#{k}'''"
  puts "|| #{[*v['sample']].join('<br>')}"
  puts "|| #{v['desc']}"
end
