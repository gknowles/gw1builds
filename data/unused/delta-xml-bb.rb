require 'util/skill'
load 'util/skill_db.rb'

sarrs = parse_bb get_bbskills
bbskills = {}
for sk in sarrs
  bbskills[sk.name] = sk
end

skills = parse_xml ARGF

sout = []
for sk in skills
  bbsk = bbskills[sk.name]
  next if bbsk.nil?
  same = true
  found = {}
  for k in bbsk.instance_variables
    k = k[1..-1] # name sans leading '@'
    found[k] = true
    next if k == 'desc' or k == 'effects'
    v = bbsk.send(k)
    ov = sk.send(k)
    next if v.nil? && ov.nil? or v == ov
    same = false
    #puts "#{sk.name}.#{k}: '#{ov}' => '#{v}'"
    sk.send(k+'=',v)
  end
  for k in sk.instance_variables
    k = k[1..-1] # name sans leading '@'
    ov = sk.send(k)
    next if found[k] or ov.nil?
    same = false
    #puts "#{sk.name}.#{k}: '#{sk.send(k)}' => '#{nil}'"
    sk.send(k+'=',nil)    
  end
  bbsk.desc.gsub!(/\{.*\}/, '')
  if bbsk.desc == sk.desc_ranged
    sk.desc = nil
    sk.effects = {}
  else
    same = false
    sk.desc = sk.desc.gsub(/\s+/, ' ').strip
    sk.desc2 = bbsk.desc.gsub('"','&quot;')

    sd = sk.desc_ranged.gsub('"','&quot;')
    for i1 in 0..sd.length
      break if sd[i1] != sk.desc2[i1]
    end
    sk.desc3 = ' ' * i1 + '#'
  end
  sout << sk unless same
end

put_xml sout

