keys = {}
File.open('skill-names.txt') do |f|
  f.each_line do |k|
    md = /\[\[([a-zA-Z \"!]+)\]\]$/.match(k)
    next unless md
    keys[md[1]] = {}
  end
end

File.open('skill-names.yml', 'w+') do |f|
  YAML.dump({'Skills' => keys}, f)               
end

