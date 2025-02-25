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

