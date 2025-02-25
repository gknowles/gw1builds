# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# upd-reformat.rb - gw1builds data

seq = [
  "skill-common.xml",
  "skill-e.xml",
  "skill-me.xml",
  "skill-mo.xml",
  "skill-n.xml",
  "skill-r.xml",
  "skill-w.xml",
  "skill-a.xml",
  "skill-rt.xml",
  "skill-d.xml",
  "skill-p.xml"
]

# load it all
seq.each { |src|
  puts "Reformatting #{src}..."
  `copy #{src} old /y`
  result = `java -jar /app/saxonb8-8j/saxon8.jar #{src} format-skill.xsl`
  File.open(src, "w+") { |f|
    f.puts result
  }
}
