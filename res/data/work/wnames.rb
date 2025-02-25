# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# wnames.rb - gw1builds data

keys = {}
File.open('skill-names.txt') do |f|
  f.each_line do |k|
    md = /\[\[([a-zA-Z \"!]+)\]\]$/.match(k)
    next unless md
    keys[md[1]] = {}
  end
end

File.open('skill-names.yml', 'w+') do |f|
  YAML.dump({'Skills' => keys}, f)
end

