require 'pp'
require '../yaml/util.rb'
require 'wiki.rb'

keys = []
File.open('smaybe.txt') do |f|
  f.each_line do |k|
    keys << k.strip.gsub('&quot;', '"')
  end
end

puts "#{keys.length} keys"

skills = []
adjust = []
wiki = Wiki.new
for k in keys
  body = wiki.read k
  if body.match( /\{\{\s*skill\s+infobox/im )
    skills << k
    sk = wiki.parse_skill k, body
    adjust << k if sk.nil? or sk.desc == ''
  end
end
wiki.save

puts "#{keys.length} keys => #{skills.length} skills, #{adjust.length} need fixing"

File.open('sfound.txt', 'w+') do |f|
  f.puts skills
end

File.open('sadjust.txt', 'w+') do |f|
  for a in adjust
    f.puts "* [[#{a}]]"
  end
end

