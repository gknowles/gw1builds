$:.unshift('../../wiki/lib')
ENV['MEDIAWIKI_RC'] = 'mediawikirc'
require 'fileutils'
require 'mediawiki/dotfile'
require 'pp'

d = IO.read('skills.yml')
File.open('../yaml/skills.yml', 'w+') do |f|
  f.write d
end
FileUtils.chdir '..'
load 's2js.rb'
FileUtils.cp 'data-skill.js', '../bns/public/javascripts/model'
FileUtils.chdir 'work'

wiki, conf = MediaWiki.dotfile('Skill data yaml')
#MediaWiki.logger.level = Logger::DEBUG
a = wiki.article(conf['page'], 2)
puts a.text
exit
a.text = "== Data ==\n<pre>\n#{d}\n</pre>\n"
a.submit "Updated skill data"
