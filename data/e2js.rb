#!/usr/bin/ruby1.8
require 'active_support'
require 'yaml'

class Equipment
  attr_accessor :items, :upgrades
  
  def initialize
    @items = {}
    @upgrades = {}
  end
  
  def load_item val, pro, type, where
    tmpl = { 'pro' => pro, 'type' => type, 'where' => where, 
      'effects' => val['effects'] }
    for skin in val['skins']
      out = tmpl.clone
      out.update('code' => skin['code'], 'name' => skin['value'])
      items[out['code']] = out
    end
  end # load_item
  
  def load_upgrade val, pro, where
    tmpl = { 'pro' => pro, 'where' => where, 'name' => val['name'],
      'effects' => val['effects'] }
    for base in val['for']
      out = tmpl.clone
      out.update('code' => base['code'], 'fors' => [ *base['value'] ])
      upgrades[out['code']] = out
    end
  end # load_upgrade
  
  def load_file file
    data = YAML.load_file file
    for pro, types in data
      for type, wheres in types
        for where, items in wheres
          for item in items
            if type == 'upgrades'
              load_upgrade item, pro, where
            else
              load_item item, pro, type, where
            end
          end
        end
      end
    end
  end # load_file

  def rollup(val)
    for effect in val['effects']
      req ||= effect['req']
      attr ||= effect['attr']
      health = effect['value'] + health.to_i if effect['type'] == 'health'
      energy = effect['value'] + energy.to_i if effect['type'] == 'energy'
      recovery = effect['value'] + recovery.to_i if effect['type'] == 'recovery'
    end
  
    { 'health' => health, 'energy' => energy, 'recovery' => recovery,
      'attr' => attr, 'req' => req }
  end # rollup
end # Equipment


def put_args f, base, *args
  pos = base.length
  f.print base
  first = true
  while args.last.nil? do args.pop end
  for raw in args
    val = raw.to_json
    unless first
      f.print "," 
      pos += 1
    end
    first = false
#    if pos + val.length > 78
#      f.print "\n  "
#      pos = 2
#    end
    f.print val
    pos += val.length
  end
  pos    
end


data = Equipment.new
data.load_file 'yaml/armor.yml'
data.load_file 'yaml/weapons.yml'

f = File.open('data-equip.js', 'w+')
f.puts "// Auto-generated #{Time.new}"
f.puts
f.puts "function loadItems() {"
effects = {}
effect_ids = {}
for val in data.items.values.push(*data.upgrades.values)
  for effect in val['effects']
    unless effects.include?(effect.to_a)
      a = effect.to_a
      effects[a] = effect 
      effect_ids[a] = effect_ids.length
    end
  end
end

abbrevs = {
  'No Profession' => 'N/A',
  'Assassin' => 'A',
  'Dervish' => 'D',
  'Elementalist' => 'E',
  'Mesmer' => 'Me',
  'Monk' => 'Mo',
  'Necromancer' => 'N',
  'Paragon' => 'P',
  'Ranger' => 'R',
  'Ritualist' => 'Rt',
  'Warrior' => 'W'
}
type_code = {}
types = data.items.values.collect {|v| v['type']}.uniq.sort
types.each_index do |i1|
  type_code[types[i1]] = 1 << i1
end

# type names
f.puts "// Type mapping"
f.print 'Item.prototype.typeKeys = '
f.puts type_code.invert.to_json
f.print 'Item.prototype.typeCodes = '
f.puts type_code.to_json
f.puts

# put item effects
f.puts "// Item effects"
for pair in effect_ids.invert.sort
  id = pair[0]
  e = effects[pair[1]]
  put_args(f, "g_itemEffects[#{id}] = new ItemEffect(",
    e['value'], e['type'], e['attr'], e['req'], 
    e['dtype'], e['stacking'], e['where'] )
  f.puts ');'
end
f.puts

# put items
f.puts "// Item bases"
for id in data.items.keys.sort
  item = data.items[id]
  pro = item['pro'] == 'No Profession' ? nil : item['pro']
  ids = item['effects'].collect { |e| effect_ids[e.to_a] }
  put_args(f, "g_itemBases[#{id}] = new ItemBase(",
    item['name'], id, abbrevs[pro], type_code[item['type']], 
    item['where'], ids)
  f.puts ');'
end
f.puts

# put upgrades
f.puts "// Item upgrades"
for id in data.upgrades.keys.sort
  val = data.upgrades[id]
  pro = val['pro'] == 'No Profession' ? nil : val['pro']
  ids = val['effects'].collect { |e| effect_ids[e.to_a] }
  tcode = 0
  for k in val['fors'] do tcode |= type_code[k] end
  put_args(f, "g_itemUpgrades[#{id}] = new ItemUpgrade(",
    val['name'], id, abbrevs[pro], val['where'], tcode, ids)
  f.puts ');'
end
f.puts
f.puts "} // loadItems"
f.close