# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# sdiff2h.rb - gw1builds data

require 'diff/lcs'
require 'yaml/util.rb'

baseline = ARGV[0] || 'yaml/gwshack.yml'
current = ARGV[1] || 'yaml/skills.yml'
w = YAML.load_file(baseline)['Skills']
d = YAML.load_file(current)['Skills']

f = File.open('gwshack-diff.html', 'w+')

f.puts "<html><head>"
f.puts "  <style type='text/css'>"
f.puts "  body { background-color: white }"
f.puts "  tr { vertical-align: top; background-color: #F2FFF0 }"
f.puts "  tr.listBar { background-color: #C4DBC0 }"
f.puts "  td { border: 1px solid }"
f.puts "  td.skill { text-weight: bold }"
f.puts "  td.attrs { white-space: nowrap }"
f.puts "  span.add { background-color: lavender; color: blue }"
f.puts "  span.delete { background-color: mistyrose; color: red }"
f.puts "  span.caseonly span.add { background-color: #C0FFD0; color: black }"
f.puts "  </style>"
f.puts "</head><body>"
f.puts "GWW download #{File.new(current).mtime}<br>"
f.puts "OCR of screen captures generated #{File.new(baseline).mtime}<br>"
f.puts "<p>This table shows the changes required to make GWW match the " \
  "screen shots taken of the in game descriptions. This list only includes " \
  "skills that appear at the Priest's of Balthazar.</p>"
f.puts "<table cellspacing='0' border='0'>"
f.puts "<tr><th>Skill</th><th>Attributes</th><th>Description</th></tr>"

bad = 0
bad_case = 0
failed = []

for k in w.keys.sort
  sw = Skill.load_yaml k, w[k]
  sd = Skill.load_yaml k, d[k]
  next if (sw.pve or sd.pve) and baseline.include?('gwshack')
  next if sw.name == 'No Skill' or sw.name == 'Claim Resource'

  vals = []
  for a in SKILL_ATTRS_SIMPLE
    next if a == :code or a == :failure or a == :exhaustion
    next if a == :campaign
    sd.upkeep = -1 if sd.upkeep
    sw.upkeep = -1 if sw.upkeep
    if sw[a] != sd[a]
      vals << [a, sd[a], sw[a]]
    end
  end
  ddiff = nil
  if sd.desc != sw.desc
    ddiff, a = '', '='
    ddiff += '<span class="caseonly">' if
      sd.desc.downcase == sw.desc.downcase
    for dv in Diff::LCS.sdiff(sd.desc, sw.desc)
      if dv.action != a
        ddiff += '</span>' if a != '='
        a = dv.action
        if a != '='
          ddiff += '<span class="' + (a == '-' ? 'delete' : 'add') + '">'
        end
      end
      ddiff += (a == '-') ? dv.old_element : dv.new_element
    end
    ddiff += '</span>' if a != '='
    ddiff += '</span>' if
      sd.desc.downcase == sw.desc.downcase
  end

  if vals.length > 0 || ddiff
    f.print "<tr"
    f.print " class='listBar'" if (bad / 2) % 2 == 0
    f.puts "><td class='skill'>#{k}</td><td class='attrs'>"
    for a,o,n in vals
      f.puts "#{a}: #{o} => #{n}<br>"
    end
    f.puts "&nbsp;</td><td>";
    f.puts ddiff if ddiff
    f.puts "&nbsp;</td></tr>"
    bad_case += 1 if sd.desc.downcase == sw.desc.downcase
    bad += 1
    failed << k
  end
end

f.puts "</table>"
f.puts "</body></html>"

f.close

puts "#{bad} differences, #{bad - bad_case} substantive, " \
  "#{bad_case} case only"

if failed.length
  File.open("failed.txt", "w+") do |f|
    f.puts failed
  end
end

