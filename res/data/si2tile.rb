require 'RMagick'
include Magick

puts "Reading..."
imgs = []
keys = []
for fn in Dir.glob('images/skills/*.jpg')
  code = File.basename(fn).to_i
  imgs[code] = Image.read(fn)[0]
  keys << code
end
c2p = []
keys.sort!.each_index { |i|  
  c2p[keys[i]] = i
}
File.open('skill-tiles-pos.js', 'w+') do |f|
  f.puts "// Auto-generated #{Time.new}"
  f.puts
  f.puts "function skillTilePos(code) {"
  f.print "  var c2p = ["
  0.upto c2p.length-1 do |i|
    f.print ", " unless i == 0
    f.print "\n    " if (i % 12 == 0)
    f.print(c2p[i] ? c2p[i] : 'null')
  end
  f.puts
  f.puts "  ];"
  f.puts "  return c2p[code];"
  f.puts "} // skillTilePos"
  f.puts
end

tilesize = 28
cols = 40
for size in [18,28]
  print "Tiling #{size}x#{size}..."
  img = Image.new(cols * tilesize, tilesize * ((keys.length / cols) + 1)) {
    self.depth = 8
  }
  0.upto(imgs.length - 1) do |i1|
    next unless imgs[i1]
    pos = c2p[i1]
    xpos = tilesize * (pos % cols)
    ypos = tilesize * (pos / cols)
    img.composite!(imgs[i1].scale(size, size), xpos, ypos, OverCompositeOp)
  end

  print " writing..."
  img.write("skill-tiles-#{size}.png") {
    self.compression = ZipCompression
    self.quality = 0
  }
  puts
end

