# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# sall.rb - gw1builds data

names = []
File.open("skills_all.txt") do |f|
  f.each_line do |line|
    md = line.match(/title="(.*?)"/)
    next unless md
    names << md[1]
  end
end

puts "Found #{names.length} potential skill articles"

File.open("smaybe.txt", "w+") do |f|
  f.puts names.sort
end

