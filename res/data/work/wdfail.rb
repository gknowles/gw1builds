# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# wdfail.rb - gw1builds data

cache = YAML.load_file 'wiki_raw.g.yml'

if ARGV[0] == 'all'
  d = YAML.load_file '../yaml/skills.yml'
  for k in d['Skills'].keys
    cache.delete k
  end
  for k in d['Skills'].values.collect { |v| v['gww-name'] }.compact
    cache.delete k
  end
else
  File.open('failed.txt') do |f|
    f.each_line do |k|
      k.strip!
      puts "Deleting #{k}..."
      cache.delete k
    end
  end
end

File.open("wiki_raw.g.yml", "w+") do |f|
  YAML.dump cache, f
end
