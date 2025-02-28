# Copyright Glen Knowles 2006 - 2025.
# Distributed under the Boost Software License, Version 1.0.
#
# wiki.rb - gw1builds data

# GW Wiki framework

require 'pp'
require '../yaml/util.rb'

class Wiki
  attr_accessor :bot_user, :bot_password

  def initialize
    if File.exists?('wiki_raw.g.yml')
      @cache = YAML.load_file 'wiki_raw.g.yml'
    else
      @cache = {}
    end
    @http = Net::HTTP.new('wiki.guildwars.com')
    @unsaved = 0
  end

  def login
    r = @http.request_post(
      "/index.php?title=Special:Userlogin&action=submitlogin&type=login",
      "wpName=#{bot_user}&wpPassword=#{bot_password}&wpRemember=1&wpLoginattempt=Log+in"
      )
    if not r.is_a? Net::HTTPFound
      puts "Login failed"
      exit
    end
    @cookies = {}
    for c in r.get_fields('set-cookie').collect
      pair = c.split('; ')[0].split('=',2)
      @cookies[pair[0]] = pair[1]
    end
  end

  def read_for_modify article
    puts "Loading #{article} for modify..."
    cookies = []
    for a,v in @cookies
      cookies << "#{a}=#{v}"
    end
    headers = {
      'Content-Type' => 'application/x-www-form-urlencoded',
      'Cookie' => cookies.join('; '),
    }
    r = @http.request_get(
      "/wiki/#{URI.escape(article)}?action=edit&maxlag=5",
      headers)
    pp r
    puts r
  end

  def read article
    return @cache[article] if @cache[article]

    puts "Loading #{article}..."
    begin
      r, d = @http.get("/wiki/#{URI.escape(article)}?action=raw&maxlag=5")
    rescue
      save
      raise
    end

    case r.code
    when '503'
      puts "503 error, may be lag"
      pp r
      exit
    when '200'
    else
      puts "#{article} error '#{r.code}'"
      nil
    end

    sleep 1.2
    @cache[article] = d
    if (@unsaved += 1) >= 25
      save
    end

    d
  end

  def save
    if @unsaved
      File.open("wiki_raw.g.yml", "w+") do |f|
        YAML.dump @cache, f
      end
      @unsaved = 0
    end
  end

  def debrace val
    val = val.clone
    # remove [[blah]] and [[blah|long blah]] tags
    val.gsub!( /\[\[.*?([^\|\]]*?)\]\]/, '\1' )
    # remove ''' bolding
    val.gsub!( /(\'\'\')(.*?)\1/, '\2' )
    # normalize whitespace
    val.gsub(/\s+/m, ' ').strip
  end

  def parse_skill article, body
    begin
      sk = parse_skill_i article, body
    rescue
      @cache.delete article
      save
      raise
    end
  end

private
  def parse_skill_i article, body
    sk = Skill.new(article)
    sk.tags = {}
    body.gsub!(/\{\{1\/4\}\}/m, '0.25')
    body.gsub!(/\{\{1\/2\}\}/m, '0.5')
    body.gsub!(/\{\{3\/4\}\}/m, '0.75')
    # convert {{gr|a|b}} to a..b
    body.gsub!( /\{\{\s*gr2?\s*\|\s*(\+?\d+)\s*\|\s*(\d+)\s*\|?\}\}/,
      '\1..\2' )
    # convert {{PAGENAME}} to article name
    body.gsub!( /\{\{PAGENAME\}\}/, article )
    # return nil if /(skill infobox)|(skill progression)/.match(body)
    md = /\{\{Skill infobox(.*?)\}\}.*?\{\{Skill progression(.*?)\}\}/im.match(body)
    unless md
      md = /\{\{Skill infobox(.*?)\}\}/im.match(body)
      unless md
        puts "#{article}: No skill infobox"
        return nil
      end
    end
    # skill infobox
    t = md[1].gsub(/\s+/m, ' ')
    pairs = md[1].split( /^\s*\|/ )
    for pair in pairs
      pair = pair.split('=', 2)
      next unless pair.length == 2
      k,v = pair[0].strip, pair[1].strip
      next if k == 'name' or v == '?'
      if k == 'description'
        rdesc = v
      elsif k == 'pve-only'
        sk.pve = v
      elsif k == 'requires'
        case v
          when 'dual'
          when 'enchantment'
          when 'hexed'
          when 'knockdown'
          when 'lead'
          when 'offhand'
          else
            puts "#{article}: requires = #{v}"
            return nil
        end
      elsif k == 'sacrifice'
        sk.tags[k] = nil
      else
        case k
          when 'checks'
          when 'checks2'
          when 'checks2-true'
          when 'check-health'
          when 'checks-false'
          when 'checks-health'
          when 'checks-true'
          when 'concise description'
          when 'enchantment-removal'
          when 'fixed energy'
          when 'fixed health'
          when 'image'
          when 'interrupt'
          when 'unblockable'
          else
            sk[k] = v
        end
      end
    end
    for k in [:elite, :multiple, :monster, :pve, :exhaustion]
      sk[k] = ['y','yes','true'].include?(sk[k].to_s.downcase)
    end
    sk.pve = true if / rank$/.match(sk.attribute)

    # desc
    if rdesc.include?('{{sic')
      puts "#{article}: Description has {{sic}}"
      return nil
    end
    # remove [[blah]] and [[blah|long blah]] tags
    desc = debrace(rdesc || '')
    # remove any additional {{...}} text
    desc.gsub!( /\{\{.*\}\}/, '' )
    # remove leading skill type
    typedesc = desc.scan( /.*?\.\s/ )[0]
    desc.sub!( /.*?\.\s/, '' )
    sk.desc = desc
    typedesc = debrace(typedesc) if typedesc
    tdesc = (sk.elite ? 'Elite ' : '') + sk.type + '.'
    if typedesc != tdesc
      puts "#{article}: Skill type '#{tdesc}' != '#{typedesc}'"
      return nil
    end

    # progressions
    unless md[2]
      sk.progressions = []
    else
      plines = md[2].scan( /^\s*\|\s*([^\s=]*)([^=]*)=(.*)$/ )
      progs = {}
      for pline in plines
        val = debrace(pline[2])
        if pline[0] == 'attribute' || pline[0] == 'title' && pline[1].strip == 'track'
          val = case val
            when 'Attribute' then sk.attribute
            when 'Inspiration' then 'Inspiration Magic'
            when 'Domination' then 'Domination Magic'
            else val
          end
          if val != sk.attribute
            puts "#{article}: Mismatched progression attribute (#{val})"
            return nil
          end
          next
        elsif pline[0] == 'maximum'
          next
        end
        pos = pline[0][3..-1]
        progs[pos] = [] unless progs[pos]
        case pline[1].strip
          when 'name' then progs[pos][0] = val
          when 'at0' then progs[pos][1] = val.to_i
          when 'at15', 'at10' then progs[pos][2] = val.to_i
          when 'factor' then progs[pos][3] = val.to_i
          else pos = 0
        end
        if pos == 0
          puts "#{article}: Bad progression line: " \
            "'#{pline[0]} #{pline[1]} = #{pline[2]}'"
          return nil
        end
      end
      sk.progressions = progs.values
    end

    sk
  end
end
