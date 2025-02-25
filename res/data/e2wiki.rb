#!/usr/bin/ruby1.8

# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# e2wiki.rb - gw1builds data

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


data = Equipment.new
data.load_file 'armor.yml'
data.load_file 'weapons.yml'

File.open('items.txt', 'w+') do |f|
  items = data.items.values.sort {
    |a,b| a['code'] <=> b['code']
  }
  for val in items
    f.print "*#{val['code']} - "
    f.print "PvP " if val['where'] == 'weapon' or
      val['where'] == 'offhand'
    f.print "#{val['name']}"
    f.print " ([[#{val['pro']}]])" unless val['pro'] == 'No Profession'
    req = data.rollup(val)['req']
    f.print " ([[#{req}]])" if val['type'] == 'staff' or
      val['type'] == 'wand' or val['type'] == 'focus'
    f.puts
  end
end

xlate = {
  'prefix' => { 'armor' => 'Insignia', 'axe' => 'Axe Haft',
    'bow' => 'Bow String', 'daggers' => 'Dagger Tang',
    'hammer' => 'Hammer Haft', 'scythe' => 'Scythe Snathe',
    'spear' => 'Spearhead', 'sword' => 'Sword Hilt',
    'staff' => 'Staff Head', 'wand' => 'UNKNOWN',
    'shield' => 'UNKNOWN', 'focus' => 'UNKNOWN'
  },
  'suffix' => { 'armor' => 'Rune', 'axe' => 'Axe Grip',
    'bow' => 'Bow Grip', 'daggers' => 'Dagger Handle',
    'hammer' => 'Hammer Grip',  'scythe' => 'Scythe Grip',
    'spear' => 'Spear Grip',  'sword' => 'Sword Pommel',
    'staff' => 'Staff Wrapping',  'wand' => 'Wand Wrapping',
    'shield' => 'Shield Handle', 'focus' => 'Focus Core'
  },
  'inside' => {}
}

File.open('upgrades.txt', 'w+') do |f|
  upgrades = data.upgrades.values.sort {
    |a,b| a['code'] <=> b['code']
  }
  for val in upgrades
    f.print "*#{val['code']} - "
    for_text = xlate[val['where']][val['fors'][0]];
    f.print case val['where']
      when 'inside' then "\"#{val['name']}\""
      when 'prefix' then "#{val['name']} #{for_text}"
      when 'suffix' then "#{for_text} of #{val['name']}"
    end
    f.print " ([[#{val['pro']}]])" unless val['pro'] == 'No Profession'
    req = data.rollup(val)['req']
    f.print " ([[#{req}]])" if val['type'] == 'staff' or
      val['type'] == 'wand' or val['type'] == 'focus'
    f.puts
  end
end

