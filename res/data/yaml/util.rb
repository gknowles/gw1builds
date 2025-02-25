#!/usr/bin/ruby1.8

# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# util.rb - gw1builds data

require 'active_support'

Profession = Struct.new(:name, :code, :abbrev, :campaign, :desc, :attrs)
Attribute = Struct.new(:name, :code, :abbrev, :primary, :skillAdjust, :desc)
Filter = Struct.new(:name, :desc, :effects)

SKILL_ATTRS_SIMPLE = [:name, :gwwName, :code,
  :profession, :attribute, :campaign,
  :elite, :multiple, :monster, :pve, :type,
  :energy, :adrenaline, :activation, :recharge, :upkeep,
  :special,
  :exhaustion, :failure]
Skill = Struct.new(*SKILL_ATTRS_SIMPLE + [:desc, :tags, :progressions])

class Profession
  def self.load_yaml name, val
    val = val || {}
    p = Profession.new(name)
    for a,v in val
      next if a == 'attrs'
      p[a] = v
    end

    p.attrs = {}
    for a,v in val['attrs']
      p.attrs[a] = Attribute.load_yaml a,v
    end
    p
  end
end

class Attribute
  def self.load_yaml name, val
    val = val || {}
    out = Attribute.new(name)
    for a,v in val
      out[a] = v
    end
    out
  end
end

class Skill
  def self.load_yaml name, val
    val = val || {}
    sk = Skill.new(name)
    for k,v in val do
      next if k == 'name'
      if k == 'pve-only'
        sk.pve = val[k]
      elsif k == 'gww-name'
        sk.gwwName = val[k]
      else
        sk[k.to_sym] = val[k]
      end
    end
    for k in [:elite, :multiple, :monster, :pve, :exhaustion]
      sk[k] = false unless sk[k]
    end
    for k in [:code, :energy, :adrenaline, :activation, :recharge, :upkeep,
        :failure]
      sk[k] = 0 unless sk[k]
    end
    sk.profession = 'No Profession' unless sk.profession
    sk.attribute = 'No Attribute' unless sk.attribute
    act = sk.activation.to_f
    sk.activation = (act == act.to_i) ? act.to_i : act
    sk.tags = {} unless sk.tags
    sk.progressions = [] unless sk.progressions
    sk.desc = '' unless sk.desc
    sk
  end

  def to_yaml
    out = name.include?('"') ? name.dump : name
	out += ":\n"
    for a in SKILL_ATTRS_SIMPLE
      next if a == :name
      v = self[a]
      v = v.to_i if a == :activation and v == v.to_i
      a = 'pve-only' if a == :pve
      a = 'gww-name' if a == :gwwName
      out += "  #{a}: #{v}\n" unless v.nil? || v == 0 || v == false
    end
    if desc && desc.length > 0
      out += "  desc: >-\n"
      out += put_wrapped desc, 4, 75
    end
    out += "  tags:\n" if tags.length > 0
    for tag in tags.keys.sort
      out += "    #{tag}:\n"
    end
    out += "  progressions:\n" if progressions.length > 0
    for prog in progressions
      out += "    - [#{prog[0].dump}, #{prog[1..-1].join(', ')}]\n"
    end
    out
  end
end


def put_wrapped val, indent, margin, prefix = nil
  vals = val.split
  out, line = '', prefix
  for v in vals
    if line.nil? || line.length + v.length >= margin
      out += line + "\n" if line
      line = ' ' * (indent - 1)
    end
    line += ' ' + v
  end
  out + (line ? line : '') + "\n"
end

def add_indent val, indent
  vals = val.split("\n")
  ' ' * indent + vals.join("\n" + ' ' * indent)
end
