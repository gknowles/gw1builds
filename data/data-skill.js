// Auto-generated Sat May 17 10:58:21 -0700 2008

function loadSkills() {
// Attributes
g_attrs['Norn rank'] = new Attribute("Norn rank",null,"NoR",false,false,"None","");
g_attrs['Deldrimor rank'] = new Attribute("Deldrimor rank",null,"DdR",false,false,"None","");
g_attrs['Kurzick rank'] = new Attribute("Kurzick rank",null,"KrR",false,false,"Rank gained by helping the Kurzicks in their battle against the Luxons.","");
g_attrs['Ebon Vanguard rank'] = new Attribute("Ebon Vanguard rank",null,"EVR",false,false,"None","");
g_attrs['Lightbringer rank'] = new Attribute("Lightbringer rank",null,"LBR",false,false,"Each rank you gain as a Lightbringer will make you more powerful. Once you gain a high enough rank, you will be taught skills known  only to the Order of Whispers.","");
g_attrs['Luxon rank'] = new Attribute("Luxon rank",null,"LuR",false,false,"Rank gained by helping the Luxons in their battle against the Kurzicks.","");
g_attrs['Asura rank'] = new Attribute("Asura rank",null,"AsR",false,false,"None","");
g_attrs['Sunspear rank'] = new Attribute("Sunspear rank",null,"SSR",false,false,"Sunspear ranks are titles earned through valor on the field of  battle. As you gain ranks you will be rewarded with more abilities; and with that comes more responsibility.","");

// Professions
g_pros['A'] = new Profession("Assassin",7,"A","Factions",
  "A swift, silent master of shadows, daggers, and death. The Assassin can chain together increasingly deadly strikes that target a foe's critical areas, killing quickly and efficiently.", {
  "Critical Strikes": new Attribute("Critical Strikes",35,"CS",true,false,"For each rank of Critical Strikes you have, you gain an additional 1% chance to critical hit. Whenever you critical hit, you gain 1 Energy at 3 ranks and above, 2 Energy at 8 ranks and above, and 3 Energy at 13 ranks and above."),
  "Dagger Mastery": new Attribute("Dagger Mastery",29,"Dag",false,false,"Dagger Mastery increases the damage you do with daggers and your chance to inflict a critical hit when using a dagger. There is a 2% chance per rank of Dagger Mastery that attacks from your daggers will double strike. Many skills, especially dagger attack skills, become more effective with higher Dagger Mastery."),
  "Shadow Arts": new Attribute("Shadow Arts",31,"SA",false,false,"No inherent effect. Many Assassin skills, especially those related to defense and moving as a shadow, become more effective with higher Shadow Arts."),
  "Deadly Arts": new Attribute("Deadly Arts",30,"DA",false,false,"No inherent effect. Many Assassin skills, especially those related to harming enemies, become more effective with higher Deadly Arts.")
  } );
g_pros['D'] = new Profession("Dervish",10,"D","Nightfall",
  "Bolstered by the blessings of the gods, these holy warriors reap the benefits of multiple Enhancements. With a sharpened scythe, the Dervish can unleash a whirlwind of destruction.", {
  "Earth Prayers": new Attribute("Earth Prayers",43,"EP",false,false,"No inherent effect. Many Dervish Spells, especially those dealing with defense of Earth damage, become more effective with higher Earth Prayers."),
  "Wind Prayers": new Attribute("Wind Prayers",42,"WP",false,false,"No inherent effect. Many Paragon Spells, especially those dealing with movement or cold damage, become more effective with higher Wind Prayers."),
  "Scythe Mastery": new Attribute("Scythe Mastery",41,"Scy",false,false,"Scythe Mastery increases the damage you do with scythes and your chance to inflict a critical hit when using a scythe. Many skills, especially scythe attack skills, become more effective with higher Scythe Mastery."),
  "Mysticism": new Attribute("Mysticism",44,"Myt",true,false,"Whenever an Enchantment ends, you gain 3 Health for each rank of Mysticism and 1 Energy for every 2 ranks of Mysticism.")
  } );
g_pros['E'] = new Profession("Elementalist",6,"E","Core",
  "The master of arcane lore and magical aptitude, the Elementalist calls upon the power of fire, earth, air and water to obliterate enemies.", {
  "Fire Magic": new Attribute("Fire Magic",10,"Fr",false,false,"No inherent effect. Many Elementalist skills, especially spells that burn your foes or deal fire damage in large areas, become more effective with higher Fire Magic."),
  "Water Magic": new Attribute("Water Magic",11,"Wat",false,false,"No inherent effect. Many Elementalist skills, especially spells that deal cold damage or slow and hinder your foes, become more effective with higher Water Magic."),
  "Earth Magic": new Attribute("Earth Magic",9,"Eth",false,false,"No inherent effect. Many Elementalist skills, especially spells that protect you and your allies or deal earth damage, become more effective with higher Earth Magic."),
  "Air Magic": new Attribute("Air Magic",8,"Air",false,false,"No inherent effect. Many Elementalist skills, especially spells that deal lightning damage to or debilitate a single enemy, become more effective with higher Air Magic."),
  "Energy Storage": new Attribute("Energy Storage",12,"ES",true,false,"For each rank of Energy Storage, your maximum Energy raises by 3. Several skills, related to gaining Health or Energy, become more effective with higher Energy Storage.")
  } );
g_pros['Me'] = new Profession("Mesmer",5,"Me","Core",
  "A master of illusion, misdirection, and control, the Mesmer subverts the damage-dealing capabilities of others, manipulating their perceptions to achieve personal goals.", {
  "Inspiration Magic": new Attribute("Inspiration Magic",3,"Ins",false,false,"No inherent effect. Many Mesmer skills, especially spells which generate Energy and reduce damage, become more effective with higher Inspiration Magic."),
  "Illusion Magic": new Attribute("Illusion Magic",1,"Ill",false,false,"No inherent effect. Many Mesmer skills, especially spells which deceive your foes and hinder their movement and attacks, become more effective with higher Illusion Magic."),
  "Fast Casting": new Attribute("Fast Casting",0,"FC",true,true,"Fast Casting increases the casting time of your Spells. Additionally, each rank in this attribute decreases your Signet activation times  by 3%."),
  "Domination Magic": new Attribute("Domination Magic",2,"Dom",false,false,"No inherent effect. Many Mesmers skills, especially spells which disrupt spell-casting and deal direct damage, become more effective with higher Domination Magic.")
  } );
g_pros['Mo'] = new Profession("Monk",3,"Mo","Core",
  "The server of divine spirits, the Monk uses prayer to protect, preserve, and restore the well-being of companions.", {
  "Healing Prayers": new Attribute("Healing Prayers",13,"HP",false,false,"No inherent effect. Many Monk skills, especially spells related to healing, become more effective with higher Healing Prayers."),
  "Divine Favor": new Attribute("Divine Favor",16,"DF",true,false,"For each rank of Divine Favor, allies are healed for 3.2 whenever you cast Monk spells on them. Several Monk skills, especially spells realted to Energy gain and healing, become more effective with higher Divine Favor."),
  "Smiting Prayers": new Attribute("Smiting Prayers",14,"SP",false,false,"No inherent effect. Many Monk skills, especially those related to dealing holy damage, become more effective with higher Smiting Prayers. Holy damage is especially powerful against the undead."),
  "Protection Prayers": new Attribute("Protection Prayers",15,"PP",false,false,"No inherent effect. Many Monk skills, especially enchantments which prevent damage or provide healing, become more effective with higher Protection Prayers.")
  } );
g_pros['N'] = new Profession("Necromancer",4,"N","Core",
  "One who has learned to draw power from the blood sacrifice and communion with death, the Necromancer uses black magic to cast curses and raise undead minions.", {
  "Soul Reaping": new Attribute("Soul Reaping",6,"SR",true,false,"For each point of Soul Reaping, you gain 1 Energy whenever a creature near you dies. You may only gain Energy this way 3 times every 15 seconds. Spirits only provide you with Energy  if they are under your control."),
  "Death Magic": new Attribute("Death Magic",5,"Dth",false,false,"No inherent effect. Many Necromancer skills, especially those which animate undead servants, manipulate corpses, and deal cold damage, become more effective with higher Death Magic."),
  "Curses": new Attribute("Curses",7,"Crs",false,false,"No inherent effect. Many Necromancer skills, especially hex spells that reduce your foes' effectiveness in battle, become more effective with higher Curses."),
  "Blood Magic": new Attribute("Blood Magic",4,"Bld",false,false,"No inherent effect. Many Necromancer skills, especially spells that damage and steal Health from your foes, become mor effective with higher Blood Magic.")
  } );
g_pros['P'] = new Profession("Paragon",9,"P","Nightfall",
  "With a commanding voice and charismatic presence, the Paragon rallies the valiant through inspiration, motivation, and leadership.", {
  "Motivation": new Attribute("Motivation",39,"Mo",false,false,"No inherent effect. Many Paragon skills, especially those related to Energy management or that inspire your allies, become more effective with higher Motivation."),
  "Command": new Attribute("Command",38,"Cmd",false,false,"No inherent effect. Many Paragon skills, especially those that protect your allies or increase your tactical position on the battlefield, become more effective with higher Command."),
  "Leadership": new Attribute("Leadership",40,"Ld",true,false,"You gain 1 Energy for each ally affected by one of your Shouts or Chants (maximum 1 Energy for every 3 ranks)."),
  "Spear Mastery": new Attribute("Spear Mastery",37,"Spr",false,false,"Spear Mastery increases the damage you do with spears and your chance to inflict a critical hit when using a spear. Many skills, especially spear attack skills, become more effective with higher Spear Mastery.")
  } );
g_pros['R'] = new Profession("Ranger",2,"R","Core",
  "An agile and wily suvivor, the Ranger specializes in archery, beast mastery, and attunement to nature.", {
  "Beast Mastery": new Attribute("Beast Mastery",22,"Bst",false,false,"Beast Mastery increases the damage dealt by your animal companion and its chance to inflict a critical hit. Many Ranger skills, especially those related to making your animal companion stronger, become more effective with higher Beast Mastery."),
  "Wilderness Survival": new Attribute("Wilderness Survival",24,"WS",false,false,"No inherent effect. Many Ranger skills, especially Rituals, Preparations and Traps, become more effective with higher Wilderness Survival."),
  "Marksmanship": new Attribute("Marksmanship",25,"Mks",false,false,"Marksmanship increases the damage you do with bows and your chance to inflict a critical hit when using a bow. Many Ranger skills, especially bow attack skills, become more effective with higher Marksmanship."),
  "Expertise": new Attribute("Expertise",23,"Ex",true,true,"For each rank of Expertise the Energy cost of your [non-Spell skills] Attack skills, Preparations, and Traps decreases by 4%. Several skills, especially those related to Energy costs and skill recharge times, become more effective with higher Expertise.")
  } );
g_pros['Rt'] = new Profession("Ritualist",8,"Rt","Factions",
  "A living conduit to the Spirit world, the Ritualist spawns powerful Spirit allies that inflict harm on foes, and can channel restorative magic that heals and protects injured companions.", {
  "Communing": new Attribute("Communing",32,"Com",false,false,"No inherent effect. Many Ritualist skills, especially those related to summoning spirits, become more effective with higher Communing."),
  "Restoration Magic": new Attribute("Restoration Magic",33,"Res",false,false,"No inherent effect. Many Ritualist skills, especially those related to healing, life-stealing, and defense, become more effective with higher Restoration Magic."),
  "Spawning Power": new Attribute("Spawning Power",36,"Spn",true,false,"For each rank of Spawning Power you have, creatures you create (or animate) have 4% more Health, and weapon Spells you cast last 2% longer. Some Ritualist skills, especially those related  to spirit creatures, become more effective with higher Spawning  Power."),
  "Channeling Magic": new Attribute("Channeling Magic",34,"Chn",false,false,"No inherent effect. Many Ritualist skills, especially thos related to lightning damage and Energy, become more effective with higher Channeling Magic.")
  } );
g_pros['W'] = new Profession("Warrior",1,"W","Core",
  "The mightiest of mighty, the bravest of the brave, the Warrior is the master of melee combat and heavy armor.", {
  "Swordsmanship": new Attribute("Swordsmanship",20,"Sw",false,false,"Swordsmanship increases the damage you do with swords and your chance to inflict a critical hit when using a sword. Many skills, especially sword attack skills, become more effective with higher Swordsmanship."),
  "Hammer Mastery": new Attribute("Hammer Mastery",19,"Ham",false,false,"Hammer Mastery increases the damage you do with hammers and your chance to inflict a critical hit when using a hammer. Many skills, especially hammer attack skills, become more effective with higher Hammer Mastery."),
  "Tactics": new Attribute("Tactics",21,"Tac",false,false,"No inherent effect. Many skills, especially defensive skills and skills that aid your allies, become more effective with higher Tactics."),
  "Strength": new Attribute("Strength",17,"Str",true,false,"When you use attack skills, each point of Strength gives you 1% armor penetration. Many skills, especially those related to surviving and inflicting damage, become more effective with higher Strength."),
  "Axe Mastery": new Attribute("Axe Mastery",18,"Axe",false,false,"Axe Mastery increases the damage you do with axes and your chance to inflict a critical hit when using an axe. Many skills, especially axe attack skills, become more effective with higher Axe Mastery.")
  } );

// Filters
g_skillFilters["Adrenaline Rate"] = new SkillFilter("Adrenaline Rate",
  "Skills that enhance or reduce the gaining of Adrenaline.", {
  "adrenal": true,
  "adrenal-counter": true,
  "adrenal-drain": true,
  "adrenal-drain-aoe": true,
  "adrenal-gain": true} );
g_skillFilters["Armor Bonuses"] = new SkillFilter("Armor Bonuses",
  "Skills that enhance your character with armor boosts", {
  "armor-buff": true} );
g_skillFilters["Attack Speed Buffs"] = new SkillFilter("Attack Speed Buffs",
  "Skills that increase attack speed", {
  "attackspeed-buff": true} );
g_skillFilters["Condition Inflicting"] = new SkillFilter("Condition Inflicting",
  "Skills that inflict conditions upon foes", {
  "bleeding": true,
  "blind": true,
  "burning": true,
  "crippled": true,
  "dazed": true,
  "deepwound": true,
  "disease": true,
  "poison": true,
  "weakness": true} );
g_skillFilters["Condition Removal"] = new SkillFilter("Condition Removal",
  "Skills that remove or transfer conditions", {
  "blind-remove": true,
  "condition-remove": true,
  "condition-transfer": true,
  "crippled-remove": true,
  "disease-remove": true,
  "poison-remove": true} );
g_skillFilters["Corpse Spells"] = new SkillFilter("Corpse Spells",
  "Skills that require a corpse as fuel", {
  "corpse": true} );
g_skillFilters["Damage"] = new SkillFilter("Damage",
  "Skills that deal damage to foes", {
  "damage": true} );
g_skillFilters["Damage (AOE)"] = new SkillFilter("Damage (AOE)",
  "Skills that deal damage to all foes in an area", {
  "damage-aoe": true} );
g_skillFilters["Deep Wound"] = new SkillFilter("Deep Wound",
  "Skills that apply the Deep Wound condition to foes", {
  "deepwound": true} );
g_skillFilters["Enchantment Punish"] = new SkillFilter("Enchantment Punish",
  "Skills that punish foes with enchantments", {
  "enchant-punish": true} );
g_skillFilters["Enchantment Removal"] = new SkillFilter("Enchantment Removal",
  "Skills that remove enchantments", {
  "enchant-remove": true} );
g_skillFilters["Energy Denial"] = new SkillFilter("Energy Denial",
  "Skills that destroy or steal a foe's energy", {
  "energy-degen": true,
  "energy-drain": true} );
g_skillFilters["Energy Management"] = new SkillFilter("Energy Management",
  "Skills that create energy or steal energy from a foe", {
  "energy-gain": true,
  "energy-regen": true} );
g_skillFilters["Healing"] = new SkillFilter("Healing",
  "Skills used to heal allies", {
  "heal": true} );
g_skillFilters["Healing Support"] = new SkillFilter("Healing Support",
  "Skill that making healing more effective", {
  "heal-buff": true} );
g_skillFilters["Health Degeneration"] = new SkillFilter("Health Degeneration",
  "Skills that cause an enemy to slowly degenerate health", {
  "bleeding": true,
  "burning": true,
  "disease": true,
  "health-degen": true,
  "poison": true} );
g_skillFilters["Health Regeneration"] = new SkillFilter("Health Regeneration",
  "Skills that cause a player to regenerate health", {
  "health-regen": true} );
g_skillFilters["Hex Removal"] = new SkillFilter("Hex Removal",
  "Skills that remove hexes from an ally", {
  "hex-remove": true} );
g_skillFilters["Interrupt Prevention"] = new SkillFilter("Interrupt Prevention",
  "Skills that prevent you being interrupted or knocked down", {
  "interrupt-counter": true,
  "knockdown-counter": true} );
g_skillFilters["Interrupts"] = new SkillFilter("Interrupts",
  "Skills used to interrupt a foe by interrupting or knocking him down", {
  "interrupt": true,
  "knockdown": true} );
g_skillFilters["Knockdowns"] = new SkillFilter("Knockdowns",
  "Skills that cause knockdown or have extra effects against knocked down foes", {
  "knockdown": true,
  "knockdown-buff": true,
  "knockdown-punish": true} );
g_skillFilters["Minions"] = new SkillFilter("Minions",
  "Skills that assist in the creation or maintenance of undead minions", {
  "minion": true} );
g_skillFilters["Movement Buffs"] = new SkillFilter("Movement Buffs",
  "Skills that increase movement speed", {
  "move-buff": true} );
g_skillFilters["Recharge Boosts"] = new SkillFilter("Recharge Boosts",
  "Skills that reduce the recharge time of other skills, either by explicitly lowering recharge times or by copying that spell", {
  "recharge-buff": true} );
g_skillFilters["Skill Locks"] = new SkillFilter("Skill Locks",
  "Skills that prevent the target from using skills", {
  "lock": true} );
g_skillFilters["Snares"] = new SkillFilter("Snares",
  "Skills that slow movement speed", {
  "crippled": true,
  "move-nerf": true} );
g_skillFilters["Spell-cast Counters"] = new SkillFilter("Spell-cast Counters",
  "Skills that punish an opponent for casting spells or by increasing his spell-cast times", {
  "dazed": true,
  "hex-counter": true,
  "skill-counter": true,
  "spell-counter": true} );
g_skillFilters["Touch Skills"] = new SkillFilter("Touch Skills",
  "Skills that have touch range", {
  "touch": true} );

// Tags
g_skillTags["adrenal-counter"] = { key: "adrenal-counter", desc: "Prevents adrenaline gain or use"}
g_skillTags["adrenal-drain"] = { key: "adrenal-drain", desc: "Causes loss of adrenaline"}
g_skillTags["adrenal-drain-aoe"] = { key: "adrenal-drain-aoe", desc: "Causes loss to multiple targets"}
g_skillTags["adrenal-gain"] = { key: "adrenal-gain", desc: "Gives adrenaline directly or increases the rate its gained"}
g_skillTags["adrenal-gain-aoe"] = { key: "adrenal-gain-aoe", desc: "Gives adrenaline directly or increases the rate for multiple targets"}
g_skillTags["adrenal-gone"] = { key: "adrenal-gone", desc: "You lose all adrenaline"}
g_skillTags["adrenal-punish"] = { key: "adrenal-punish", desc: "Extra effect against users of adrenal skills"}
g_skillTags["armor-buff"] = { key: "armor-buff", desc: "Increases target armor rating"}
g_skillTags["armor-nerf"] = { key: "armor-nerf", desc: "Reduces target armor rating"}
g_skillTags["armor-nerf-self"] = { key: "armor-nerf-self", desc: "Reduces users armor rating"}
g_skillTags["attack-counter"] = { key: "attack-counter", desc: "Prevents or causes attacks to miss (not blocking)"}
g_skillTags["attack-punish"] = { key: "attack-punish", desc: "Target gets damage, conditions, or energy loss when attacking"}
g_skillTags["attackspeed-buff"] = { key: "attackspeed-buff", desc: "Increases attack rate"}
g_skillTags["attackspeed-nerf"] = { key: "attackspeed-nerf", desc: "Reduces targets attack rate"}
g_skillTags["bleeding"] = { key: "bleeding", desc: "Causes bleeding"}
g_skillTags["bleeding-punish"] = { key: "bleeding-punish", desc: "Extra effect against bleeding targets"}
g_skillTags["bleeding-self"] = { key: "bleeding-self", desc: "Makes user start bleeding"}
g_skillTags["blind"] = { key: "blind", desc: "Causes blindness"}
g_skillTags["blind-aoe"] = { key: "blind-aoe", desc: "Causes blindness to multiple targets"}
g_skillTags["blind-punish"] = { key: "blind-punish", desc: "Extra effect against blind targets"}
g_skillTags["blind-remove"] = { key: "blind-remove", desc: "Removes blindness"}
g_skillTags["block"] = { key: "block", desc: "May block incoming attacks"}
g_skillTags["block-counter"] = { key: "block-counter", desc: "Prevents or reduces the chance of target blocking attacks"}
g_skillTags["block-punish"] = { key: "block-punish", desc: "Extra effect against blocking foe"}
g_skillTags["burning"] = { key: "burning", desc: "Causes burning"}
g_skillTags["burning-punish"] = { key: "burning-punish", desc: "Extra effect against burning targets"}
g_skillTags["burning-self"] = { key: "burning-self", desc: "Sets youreself on fire"}
g_skillTags["cast-buff"] = { key: "cast-buff", desc: "Reduces time to cast spells"}
g_skillTags["cast-nerf"] = { key: "cast-nerf", desc: "Increases cast time of spells"}
g_skillTags["cast-punish"] = { key: "cast-punish", desc: "Extra effect if target is casting a spell"}
g_skillTags["condition-aoe"] = { key: "condition-aoe", desc: "Spreads conditions to multiple targets"}
g_skillTags["condition-buff"] = { key: "condition-buff", desc: "Increase condition duration"}
g_skillTags["condition-counter"] = { key: "condition-counter", desc: "Prevents or reduces duration of conditions"}
g_skillTags["condition-punish"] = { key: "condition-punish", desc: "Extra effect against target suffering from condtion"}
g_skillTags["condition-remove"] = { key: "condition-remove", desc: "Condition removal, works on any condition"}
g_skillTags["condition-remove-aoe"] = { key: "condition-remove-aoe", desc: "Remove conditions of any type from multiple allies"}
g_skillTags["condition-remove-foe"] = { key: "condition-remove-foe", desc: "Removes one or more conditions from foe"}
g_skillTags["condition-self"] = { key: "condition-self", desc: "Causes user to contract conditions"}
g_skillTags["condition-transfer"] = { key: "condition-transfer", desc: "Transfers condition from you to target, imples condition removal"}
g_skillTags["condition-transfer-aoe"] = { key: "condition-transfer-aoe", desc: "Transfers condition from you to multiple targets"}
g_skillTags["condition-uses"] = { key: "condition-uses", desc: "Extra effect when target ally has a condition"}
g_skillTags["corpse"] = { key: "corpse", desc: "Requires and exploits an unexploited corpse"}
g_skillTags["corpse-counter"] = { key: "corpse-counter", desc: "Prevents corpse exploitation"}
g_skillTags["corpse-uses"] = { key: "corpse-uses", desc: "Added effect when corpse is present"}
g_skillTags["crippled"] = { key: "crippled", desc: "Causes crippling"}
g_skillTags["crippled-punish"] = { key: "crippled-punish", desc: "Better against crippled foes"}
g_skillTags["crippled-remove"] = { key: "crippled-remove", desc: "Crippled removal"}
g_skillTags["crippled-self"] = { key: "crippled-self", desc: "Cripples user of the skill"}
g_skillTags["critical-buff"] = { key: "critical-buff", desc: "Causes or increases chance of a critical hit"}
g_skillTags["critical-counter"] = { key: "critical-counter", desc: "Prevents critical hits from occuring"}
g_skillTags["damage"] = { key: "damage", desc: "Direct damage, or bonus damage on a weapon"}
g_skillTags["damage-aoe"] = { key: "damage-aoe", desc: "Causes damage to multiple targets"}
g_skillTags["damage-buff"] = { key: "damage-buff", desc: "Enhances damage done"}
g_skillTags["damage-limit"] = { key: "damage-limit", desc: "Limits damage received"}
g_skillTags["damage-nerf"] = { key: "damage-nerf", desc: "Reduces damage when it is taken"}
g_skillTags["damage-ot"] = { key: "damage-ot", desc: "Inflicts damage over time"}
g_skillTags["damage-self"] = { key: "damage-self", desc: "Damage to self, but not a sacrifice"}
g_skillTags["dazed"] = { key: "dazed", desc: "Causes dazed"}
g_skillTags["dazed-counter"] = { key: "dazed-counter", desc: "Ignores, prevents, or reduces the duration of dazed"}
g_skillTags["deepwound"] = { key: "deepwound", desc: "Causes deep wound"}
g_skillTags["deepwound-punish"] = { key: "deepwound-punish", desc: "Added effect against targets with Deep Wound"}
g_skillTags["disease"] = { key: "disease", desc: "Causes disease"}
g_skillTags["disease-remove"] = { key: "disease-remove", desc: "Removes disease"}
g_skillTags["dual-require"] = { key: "dual-require", desc: "Must follow dual attack"}
g_skillTags["ecost-buff"] = { key: "ecost-buff", desc: "Reduces energy cost of skills"}
g_skillTags["ecost-nerf"] = { key: "ecost-nerf", desc: "Increases energy cost of skills"}
g_skillTags["enchant-buff"] = { key: "enchant-buff", desc: "Makes enchantments last longer"}
g_skillTags["enchant-counter"] = { key: "enchant-counter", desc: "Makes enchantments harder to apply or expire sooner"}
g_skillTags["enchant-punish"] = { key: "enchant-punish", desc: "Better against enchanted foes"}
g_skillTags["enchant-remove"] = { key: "enchant-remove", desc: "Enchantment removal"}
g_skillTags["enchant-uses"] = { key: "enchant-uses", desc: "Better when target ally is enchanted"}
g_skillTags["energy-buff"] = { key: "energy-buff", desc: "Increases maximum energy"}
g_skillTags["energy-degen"] = { key: "energy-degen", desc: "Energy degeneration"}
g_skillTags["energy-degen-self"] = { key: "energy-degen-self", desc: "Energy degeneration"}
g_skillTags["energy-drain"] = { key: "energy-drain", desc: "Removes energy from target"}
g_skillTags["energy-drain-aoe"] = { key: "energy-drain-aoe", desc: "Removes energy from multiple targets"}
g_skillTags["energy-drain-ot"] = { key: "energy-drain-ot", desc: "Removes energy from target or targets over time"}
g_skillTags["energy-gain"] = { key: "energy-gain", desc: "Restores energy"}
g_skillTags["energy-gain-aoe"] = { key: "energy-gain-aoe", desc: "Restores energy to multiple allies"}
g_skillTags["energy-gain-foe"] = { key: "energy-gain-foe", desc: "Restores energy to foe"}
g_skillTags["energy-gain-ot"] = { key: "energy-gain-ot", desc: "Restores energy whenever event occurs"}
g_skillTags["energy-gone"] = { key: "energy-gone", desc: "You lose all energy"}
g_skillTags["energy-leak"] = { key: "energy-leak", desc: "You lose energy whenever event occurs"}
g_skillTags["energy-regen"] = { key: "energy-regen", desc: "Energy regeneration"}
g_skillTags["exhaust"] = { key: "exhaust", desc: "Causes or increases exhaustion"}
g_skillTags["heal"] = { key: "heal", desc: "Heals"}
g_skillTags["heal-aoe"] = { key: "heal-aoe", desc: "Healing multiple targets"}
g_skillTags["heal-buff"] = { key: "heal-buff", desc: "Improves heals or causes heals as side effect"}
g_skillTags["heal-counter"] = { key: "heal-counter", desc: "Reduces or prevents healing"}
g_skillTags["heal-nerf"] = { key: "heal-nerf", desc: "Prevents or reduces effectiveness of healing"}
g_skillTags["heal-ot"] = { key: "heal-ot", desc: "Healing per second or per event"}
g_skillTags["heal-pet"] = { key: "heal-pet", desc: "Heals animal companion"}
g_skillTags["heal-self"] = { key: "heal-self", desc: "Pure self-heal, or heals self as a side effect"}
g_skillTags["health-buff"] = { key: "health-buff", desc: "Increase maximum health"}
g_skillTags["health-degen"] = { key: "health-degen", desc: "Health degeneration"}
g_skillTags["health-degen-self"] = { key: "health-degen-self", desc: "User gets health degeneration"}
g_skillTags["health-regen"] = { key: "health-regen", desc: "Health regeneration"}
g_skillTags["health-steal"] = { key: "health-steal", desc: "Life stealing"}
g_skillTags["hex-buff"] = { key: "hex-buff", desc: "Increases duration of hexes"}
g_skillTags["hex-counter"] = { key: "hex-counter", desc: "Prevents hexes, reduces effect, or makes them harder to apply"}
g_skillTags["hex-punish"] = { key: "hex-punish", desc: "Added effect against hexed targets"}
g_skillTags["hex-remove"] = { key: "hex-remove", desc: "Hex removal"}
g_skillTags["hex-remove-aoe"] = { key: "hex-remove-aoe", desc: "Removes hexes from multiple allies"}
g_skillTags["hex-uses"] = { key: "hex-uses", desc: "Better when target ally is hexed"}
g_skillTags["interrupt"] = { key: "interrupt", desc: "Interrupts skill or action"}
g_skillTags["interrupt-aoe"] = { key: "interrupt-aoe", desc: "Interrupts multiple targets"}
g_skillTags["interrupt-counter"] = { key: "interrupt-counter", desc: "Prevents or mitigates interruptions"}
g_skillTags["item-uses"] = { key: "item-uses", desc: "Better when caster and/or target is holding an item"}
g_skillTags["knockdown"] = { key: "knockdown", desc: "Causes knockdown"}
g_skillTags["knockdown-buff"] = { key: "knockdown-buff", desc: "Increases knockdown duration"}
g_skillTags["knockdown-counter"] = { key: "knockdown-counter", desc: "Prevents knockdowns"}
g_skillTags["knockdown-punish"] = { key: "knockdown-punish", desc: "Better against knocked down foes"}
g_skillTags["lead-attack"] = { key: "lead-attack", desc: "Functions as a lead attack for Assassin skill chains"}
g_skillTags["lock"] = { key: "lock", desc: "Foe skill is unusable for period of time"}
g_skillTags["lock-ally"] = { key: "lock-ally", desc: "Locks skills of ally (e.g. Rebirth)"}
g_skillTags["lock-self"] = { key: "lock-self", desc: "Locks some or all of your skills"}
g_skillTags["minion"] = { key: "minion", desc: "Creation and maintainence of undead minions"}
g_skillTags["minion-punish"] = { key: "minion-punish", desc: "Better when the target foe is a minion"}
g_skillTags["minion-uses"] = { key: "minion-uses", desc: "Requires or benefits from the use of a minion"}
g_skillTags["move-buff"] = { key: "move-buff", desc: "Increases movement speed"}
g_skillTags["move-nerf"] = { key: "move-nerf", desc: "Reduces movement speed, but not by crippling"}
g_skillTags["move-nerf-self"] = { key: "move-nerf-self", desc: "Reduces users movement speed, but not by crippling"}
g_skillTags["move-punish"] = { key: "move-punish", desc: "Better against moving foes"}
g_skillTags["off-hand-attack"] = { key: "off-hand-attack", desc: "Functions as an off-hand attack for Assassin skill chains"}
g_skillTags["poison"] = { key: "poison", desc: "Causes target to be poisoned"}
g_skillTags["poison-remove"] = { key: "poison-remove", desc: "Poison removal"}
g_skillTags["poison-self"] = { key: "poison-self", desc: "Makes yourself poisoned"}
g_skillTags["preparation-buff"] = { key: "preparation-buff", desc: "Make preparations last longer"}
g_skillTags["recharge-buff"] = { key: "recharge-buff", desc: "Recharages skills or reduces recharge time (directly or by creating a duplicate)"}
g_skillTags["recharge-nerf"] = { key: "recharge-nerf", desc: "Increases skill recharge time"}
g_skillTags["recharge-nerf-self"] = { key: "recharge-nerf-self", desc: "Increases users skill recharge time"}
g_skillTags["rez"] = { key: "rez", desc: "Resurrect party members"}
g_skillTags["rez-buff"] = { key: "rez-buff", desc: "Increased initial health and energy when resurrected"}
g_skillTags["rez-pet"] = { key: "rez-pet", desc: "Resurrect animal companions"}
g_skillTags["rez-temp"] = { key: "rez-temp", desc: "Temporary ressurection (e.g. Vengence, Unyielding Aura)"}
g_skillTags["sacrifice"] = { key: "sacrifice", desc: "Skill activation involves a life sacrifice"}
g_skillTags["sacrifice-nerf"] = { key: "sacrifice-nerf", desc: "Makes sacrifices hurt more"}
g_skillTags["sacrifice-punish"] = { key: "sacrifice-punish", desc: "Extra health or energy loss when target does sacrifices"}
g_skillTags["shadowstep"] = { key: "shadowstep", desc: "Skill involves shadow stepping"}
g_skillTags["shout-buff"] = { key: "shout-buff", desc: "Increase duration of shouts or chants"}
g_skillTags["signet-buff"] = { key: "signet-buff", desc: "Improves signets, generally by reducing recharge or activation"}
g_skillTags["signet-counter"] = { key: "signet-counter", desc: "Prevents signets or makes them more difficult to use"}
g_skillTags["skill-copy"] = { key: "skill-copy", desc: "Duplicates another skill"}
g_skillTags["skill-punish"] = { key: "skill-punish", desc: "Punishes the use of skills in general (e.g. Spiteful Spirit)"}
g_skillTags["spell-counter"] = { key: "spell-counter", desc: "Prevents, makes more difficult, or works to counteract spell casting"}
g_skillTags["spell-punish"] = { key: "spell-punish", desc: "Punishes the use of spells"}
g_skillTags["spirit"] = { key: "spirit", desc: "Creates a spirit"}
g_skillTags["spirit-counter"] = { key: "spirit-counter", desc: "Prevents, destroys, or otherwise makes spirits less effective"}
g_skillTags["spirit-punish"] = { key: "spirit-punish", desc: "Added effects with enemy spirits"}
g_skillTags["spirit-uses"] = { key: "spirit-uses", desc: "Better when spirits are present"}
g_skillTags["stance-counter"] = { key: "stance-counter", desc: "Prevents, ends, or shortens duration of stances"}
g_skillTags["stance-uses"] = { key: "stance-uses", desc: "Added effect when target is in stance"}
g_skillTags["teleport"] = { key: "teleport", desc: "Teleportation, not shadow-stepping. (e.g. Consume Corpse, Rebirth)"}
g_skillTags["touch"] = { key: "touch", desc: "Skill is a touch skill"}
g_skillTags["touch-counter"] = { key: "touch-counter", desc: "Prevents touch skills"}
g_skillTags["weakness"] = { key: "weakness", desc: "Causes weakness"}
g_skillTags["weakness-punish"] = { key: "weakness-punish", desc: "Better against targets with weakness"}
g_skillTags["weapon-uses"] = { key: "weapon-uses", desc: "Better depending on if the user and target are under weapon spells"}

// Skills
g_skillsById[1572] = new Skill("\"Brace Yourself!\"",1572,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,12,0,false,0,
  ["For ",[5,15]," seconds, the next time target other ally would be knocked down, 1 nearby foe takes ",[15,75]," damage instead."],
  {"damage": true, "damage-aoe": true, "knockdown-counter": true}, [
  ["Duration",5,15],
  ["Damage",15,75] ] );
g_skillsById[2217] = new Skill("\"By Ural's Hammer!\"",2217,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Shout",5,0,0,30,0,false,0,
  ["For each ally within earshot who is under 50% Health, you have ",[5,10]," seconds of +2 Health regeneration and do 25% more damage."],
  {}, [
  ["Duration",5,10] ] );
g_skillsById[1780] = new Skill("\"Can't Touch This!\"",1780,"Nightfall","P","Command",
  false,false,false,false,"Shout",10,0,0,20,0,false,0,
  ["For 20 seconds, the next ",[1,5]," touch Skills used against you fail."],
  {"touch-counter": true}, [
  ["Failures",1,5] ] );
g_skillsById[364] = new Skill("\"Charge!\"",364,"Core","W","Tactics",
  true,false,false,false,"Shout",5,0,0,20,0,false,0,
  ["For ",[5,11]," seconds, all allies within earshot move 33% faster."],
  {"move-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[869] = new Skill("\"Coward!\"",869,"Factions","W","No Attribute",
  true,false,false,false,"Shout",0,4,0,0,0,false,0,
  ["If target foe is moving, that foe is knocked down."],
  {}, [
 ] );
g_skillsById[2354] = new Skill("\"Dodge This!\"",2354,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",0,4,0,0,0,false,0,
  ["For ",[12,20]," seconds, your next attack cannot be blocked and does +",[10,20]," damage."],
  {}, [
  ["Duration",12,20],
  ["+ Damage",10,20] ] );
g_skillsById[2216] = new Skill("\"Don't Trip!\"",2216,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Shout",10,0,0,20,0,false,0,
  ["For ",[3,5]," seconds, party members within earshot cannot be knocked down."],
  {}, [
  ["Duration",3,5] ] );
g_skillsById[1595] = new Skill("\"Fall Back!\"",1595,"Nightfall","P","Command",
  false,false,false,false,"Shout",10,0,0,25,0,false,0,
  ["For ",[4,10]," seconds, all allies within earshot gain ",[5,15]," Health per second while moving and move 33% faster. \"Fall Back!\" ends on an ally affected by this Shout when that ally successfully hits with an attack."],
  {"heal": true, "move-buff": true}, [
  ["Duration",4,10],
  ["Health Gain",5,15] ] );
g_skillsById[366] = new Skill("\"Fear Me!\"",366,"Prophecies","W","Tactics",
  false,false,false,false,"Shout",0,4,0,6,0,false,0,
  ["All nearby foes lose ",[1,4]," Energy."],
  {"energy-drain": true}, [
  ["Energy drain",1,4] ] );
g_skillsById[1781] = new Skill("\"Find Their Weakness!\"",1781,"Nightfall","P","Command",
  false,false,false,false,"Shout",10,0,0,15,0,false,0,
  ["For ",[5,20]," seconds, the next time target ally criticals, that ally also inflicts a Deep Wound for ",[5,20]," seconds."],
  {"deepwound": true}, [
  ["Duration",5,20],
  ["Deep Wound",5,20] ] );
g_skillsById[2353] = new Skill("\"Finish Him!\"",2353,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",10,0,0,15,0,false,0,
  ["If target foe has less than 50% Health, that foe takes ",[20,80]," damage and suffers from Cracked Armor and a Deep Wound for ",[5,20]," seconds."],
  {}, [
  ["Damage",20,80],
  ["Cracked Armor and",5,20] ] );
g_skillsById[343] = new Skill("\"For Great Justice!\"",343,"Core","W","No Attribute",
  false,false,false,false,"Shout",5,0,0,45,0,false,0,
  ["For 20 seconds, whenever you gain adrenaline, you gain 100% more."],
  {"adrenal-gain": true}, [
 ] );
g_skillsById[1558] = new Skill("\"Go for the Eyes!\"",1558,"Nightfall","P","Command",
  false,false,false,false,"Shout",0,4,0,4,0,false,0,
  ["For 10 seconds, the next time each ally within earshot makes an attack, that attack has an additional ",[30,75],"% chance to critical."],
  {"critical-buff": true}, [
  ["+Chance %",30,75] ] );
g_skillsById[1594] = new Skill("\"Help Me!\"",1594,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,15,0,false,0,
  ["For ",[1,10]," seconds, other allies' Spells targeting you cast 50% faster."],
  {"cast-buff": true}, [
  ["Duration",1,10] ] );
g_skillsById[2355] = new Skill("\"I Am The Strongest!\"",2355,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",5,0,0,20,0,false,0,
  ["Your next ",[4,8]," attacks do an additional +",[10,20]," damage."],
  {}, [
  ["# of attacks",4,8],
  ["Additional damage",10,20] ] );
g_skillsById[2356] = new Skill("\"I Am Unstoppable!\"",2356,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",5,0,0,30,0,false,0,
  ["For ",[12,20]," seconds, you have +24 armor and cannot be knocked down or Crippled."],
  {}, [
  ["Duration",12,20] ] );
g_skillsById[2067] = new Skill("\"I Meant to Do That!\"",2067,"Eye of the North","W","Strength",
  false,false,false,false,"Shout",5,0,0,8,0,false,0,
  ["If you are knocked down, you gain ",[1,5]," strikes of adrenaline."],
  {}, [
  ["Adrenaline gain",1,5] ] );
g_skillsById[333] = new Skill("\"I Will Avenge You!\"",333,"Prophecies","W","Strength",
  false,false,false,false,"Shout",5,0,0,45,0,false,0,
  ["For each dead ally, you gain 10 seconds of +",[3,7]," Health regeneration and your attack speed increases by 25%."],
  {"attackspeed-buff": true, "health-regen": true}, [
  ["Health regeneration",3,7] ] );
g_skillsById[368] = new Skill("\"I Will Survive!\"",368,"Prophecies","W","Strength",
  false,false,false,false,"Shout",5,0,0,30,0,false,0,
  ["You gain +3 Health regeneration for each condition you are suffering. This regeneration expires after ",[5,11]," seconds."],
  {"health-regen": true}, [
  ["Duration",5,11] ] );
g_skillsById[1596] = new Skill("\"Incoming!\"",1596,"Nightfall","P","Command",
  true,false,false,false,"Shout",10,0,0,20,0,false,0,
  ["For ",[1,3]," seconds, all party members within earshot take 50% less damage."],
  {"damage-nerf": true}, [
  ["Duration",1,3] ] );
g_skillsById[1599] = new Skill("\"It's just a flesh wound.\"",1599,"Nightfall","P","Motivation",
  true,false,false,false,"Shout",5,0,0,1,0,false,0,
  ["You suffer from a Deep Wound for ",[10,5]," seconds, and target other ally loses all Conditions."],
  {"deepwound": true}, [
  ["Deep Wound duration",10,5] ] );
g_skillsById[1590] = new Skill("\"Lead the Way!\"",1590,"Nightfall","P","Leadership",
  false,false,false,false,"Shout",10,0,0,8,0,false,0,
  ["Target ally moves 25% faster for ",[1,5]," seconds for each ally within earshot (maximum of 20 seconds)."],
  {}, [
  ["Duration",1,5] ] );
g_skillsById[1591] = new Skill("\"Make Haste!\"",1591,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,10,0,false,0,
  ["For ",[5,20]," seconds, target other ally moves 33% faster. This Skill ends if that ally successfully hits with an attack."],
  {"move-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[1779] = new Skill("\"Make Your Time!\"",1779,"Nightfall","P","Leadership",
  false,false,false,false,"Shout",10,0,0,30,0,false,0,
  ["You gain 1 strike of adrenaline for each party member within earshot (maximum ",[1,5]," adrenaline)."],
  {"adrenal-gain": true}, [
  ["Adrenaline",1,5] ] );
g_skillsById[1593] = new Skill("\"Never Give Up!\"",1593,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,20,0,false,0,
  ["All allies within earshot and below 75% Health gain ",[1,10]," Energy."],
  {"energy-gain": true, "energy-gain-aoe": true}, [
  ["Energy Gain",1,10] ] );
g_skillsById[1598] = new Skill("\"Never Surrender!\"",1598,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,20,0,false,0,
  ["For 15 seconds, all party members within earshot and below 75% Health gain +",[1,5]," Health regeneration."],
  {"health-regen": true}, [
  ["Health regeneration",1,5] ] );
g_skillsById[891] = new Skill("\"None Shall Pass!\"",891,"Factions","W","Tactics",
  false,false,false,false,"Shout",10,0,0,45,0,false,0,
  ["All nearby foes that are moving are knocked down."],
  {}, [
 ] );
g_skillsById[906] = new Skill("\"On Your Knees!\"",906,"Factions","W","No Attribute",
  false,false,false,false,"Shout",0,6,0,0,0,false,0,
  ["Lose all adrenaline. If any adjacent foes are knocked down, all of your Stances are recharged."],
  {"adrenal-gone": true, "knockdown-punish": true, "recharge-buff": true}, [
 ] );
g_skillsById[839] = new Skill("\"Retreat!\"",839,"Factions","W","Tactics",
  false,false,false,false,"Shout",5,0,0,20,0,false,0,
  ["If there are any dead allies within earshot, your party moves 33% faster for ",[5,11]," seconds."],
  {"move-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[2097] = new Skill("\"Save Yourselves!\" (Kurzick)",2097,"Factions","W","Kurzick rank",
  false,false,false,true,"Shout",0,8,0,0,0,false,0,
  ["For ",[3,6]," seconds, all other party members gain 100 armor."],
  {}, [
 ] );
g_skillsById[1954] = new Skill("\"Save Yourselves!\" (Luxon)",1954,"Factions","W","Luxon rank",
  false,false,false,true,"Shout",0,8,0,0,0,false,0,
  ["For ",[3,6]," seconds, all other party members gain 100 armor."],
  {}, [
 ] );
g_skillsById[367] = new Skill("\"Shields Up!\"",367,"Core","W","Tactics",
  false,false,false,false,"Shout",10,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, you and all party members within earshot gain 60 armor against incoming projectile attacks."],
  {"armor-buff": true, "block": true}, [
  ["Duration",5,11] ] );
g_skillsById[1589] = new Skill("\"Stand Your Ground!\"",1589,"Nightfall","P","Command",
  false,false,false,false,"Shout",15,0,0,30,0,false,0,
  ["For ",[5,20]," seconds, all party members within earshot receive +24 armor when not moving."],
  {"armor-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[1782] = new Skill("\"The Power Is Yours!\"",1782,"Nightfall","P","Motivation",
  true,false,false,false,"Shout",10,0,0,20,0,false,0,
  ["All party members within earshot gain ",[1,8]," Energy. For 10 seconds, you have -10 Energy degeneration."],
  {"energy-degen-self": true, "energy-gain": true, "energy-gain-aoe": true}, [
  ["Energy gain",1,8] ] );
g_skillsById[2112] = new Skill("\"There's Nothing to Fear!\"",2112,"Nightfall","P","Sunspear rank",
  false,false,false,true,"Shout",15,0,0,20,0,false,0,
  ["For 4 seconds and 1 second for every 2 ranks in Leadership, all party members within earshot take ",[15,35],"% less damage. Affected party members are healed for ",[20,60]," Health when this Shout ends."],
  {}, [
  ["% Damage reduction",15,35],
  ["Healing",20,60] ] );
g_skillsById[1597] = new Skill("\"They're on Fire!\"",1597,"Nightfall","P","Leadership",
  false,false,false,false,"Shout",10,0,0,10,0,false,0,
  ["For 10 seconds, party members within earshot take ",[5,35],"% less damage from foes suffering from Burning."],
  {"damage-nerf": true}, [
  ["Damage Reduction %",5,35] ] );
g_skillsById[316] = new Skill("\"To the Limit!\"",316,"Prophecies","W","Tactics",
  false,false,false,false,"Shout",5,0,0,20,0,false,0,
  ["For each foe within earshot (maximum ",[1,6],"), you gain one strike of adrenaline."],
  {"adrenal-gain": true}, [
  ["Foes",1,6] ] );
g_skillsById[365] = new Skill("\"Victory is Mine!\"",365,"Prophecies","W","Tactics",
  true,false,false,false,"Shout",5,0,0,15,0,false,0,
  ["You gain ",[10,68]," Health and ",[3,7]," Energy for each Condition suffered by target foe."],
  {"condition-punish": true, "energy-gain": true, "heal-self": true}, [
  ["Health gain",10,68],
  ["Energy gain",3,7] ] );
g_skillsById[348] = new Skill("\"Watch Yourself!\"",348,"Core","W","Tactics",
  false,false,false,false,"Shout",0,4,0,4,0,false,0,
  ["Party members within earshot gain +",[5,25]," armor for 10 seconds. This shout ends after ",[1,3]," incoming attacks."],
  {"armor-buff": true}, [
  ["+Armor",5,25],
  ["Attacks",1,3] ] );
g_skillsById[1592] = new Skill("\"We Shall Return!\"",1592,"Nightfall","P","Command",
  false,false,false,false,"Shout",5,0,0,15,0,false,0,
  ["For 10 seconds, whenever party members within earshot use a resurrection Skill, their fallen allies return with ",[10,75],"% more Health and ",[5,50],"% more Energy."],
  {"rez-buff": true}, [
  ["More Health %",10,75],
  ["More Energy %",5,50] ] );
g_skillsById[2359] = new Skill("\"You Are All Weaklings!\"",2359,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",10,0,0,12,0,false,0,
  ["Target foe and foes adjacent to target are Weakened for ",[6,12]," seconds."],
  {}, [
  ["Weakness duration",6,12] ] );
g_skillsById[2358] = new Skill("\"You Move Like a Dwarf!\"",2358,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",10,0,0,10,0,false,0,
  ["Target foe is knocked down and takes ",[20,80]," damage. When that foe gets up, it is Crippled for ",[5,15]," seconds."],
  {}, [
  ["Damage",20,80],
  ["Crippled duration",5,15] ] );
g_skillsById[1141] = new Skill("\"You Will Die!\"",1141,"Factions","W","Strength",
  false,false,false,false,"Shout",5,0,0,15,0,false,0,
  ["If target foe is below 50% Health, you gain ",[1,3]," strikes of adrenaline."],
  {"adrenal-gain": true}, [
  ["Adrenaline",1,3] ] );
g_skillsById[1412] = new Skill("\"You're All Alone!\"",1412,"Nightfall","W","No Attribute",
  true,false,false,false,"Shout",5,0,0,10,0,false,0,
  ["If target foe isn't near an ally, that foe suffers from Cripple and Weakness for 8 seconds."],
  {"crippled": true, "weakness": true}, [
 ] );
g_skillsById[2357] = new Skill("A Touch of Guile",2357,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Hex Spell",5,0,0.75,15,0,false,0,
  ["Target touched foe takes ",[20,80]," damage. If target foe was knocked down, that foe cannot attack for ",[4,8]," seconds."],
  {}, [
  ["Damage",20,80],
  ["Attack disable duration",4,8] ] );
g_skillsById[1052] = new Skill("Accumulated Pain",1052,"Factions","Me","Illusion Magic",
  false,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["Target foe takes ",[10,35]," damage. If target foe is suffering from 2 or more Hexes, that foe suffers a Deep Wound for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true, "hex-punish": true}, [
  ["Damage",10,35],
  ["Deep Wound duration",5,20] ] );
g_skillsById[257] = new Skill("Aegis",257,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,30,0,false,0,
  ["For ",[5,11]," seconds, all party members within earshot have a 50% chance to block attacks."],
  {"block": true}, [
  ["Duration",5,11] ] );
g_skillsById[174] = new Skill("Aftershock",174,"Core","E","Earth Magic",
  false,false,false,false,"Spell",10,0,0.75,10,0,false,0,
  ["Adjacent foes are struck for ",[26,100]," earth damage. Knocked down foes are struck for ",[10,68]," additional earth damage."],
  {"damage": true, "damage-aoe": true, "knockdown-punish": true}, [
  ["Earth damage",26,100],
  ["+Earth damage",10,68] ] );
g_skillsById[1774] = new Skill("Aggressive Refrain",1774,"Nightfall","P","Leadership",
  false,false,false,false,"Echo",25,0,2,20,0,false,0,
  ["For ",[5,25]," seconds, you attack 25% faster but have Cracked Armor for 20 seconds. This Echo is reapplied every time a Chant or Shout ends on you."],
  {"attackspeed-buff": true}, [
  ["Duration",5,25] ] );
g_skillsById[1403] = new Skill("Agonizing Chop",1403,"Nightfall","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,6,1,0,0,false,0,
  ["When this attack hits, you deal +",[5,20]," damage. If target foe is suffering from a Deep Wound, you interrupt that foe's action."],
  {"damage": true, "deepwound-punish": true, "interrupt": true}, [
  ["+Damage",5,20] ] );
g_skillsById[2205] = new Skill("Agony",2205,"Eye of the North","Rt","Channeling Magic",
  false,false,false,false,"Binding Ritual",10,0,3,30,0,false,0,
  ["Create a level ",[1,8]," Spirit. This Spirit causes ",[3,10]," Health loss each second to foes within earshot. This Spirit loses ",[3,10]," Health for each foe hurt in this way. This Spirit dies after ",[30,90]," seconds."],
  {}, [
  ["Spirit level",1,8],
  ["Health loss to foes per second",3,10],
  ["Health loss per foe affected",3,10],
  ["Spirit duration",30,90] ] );
g_skillsById[225] = new Skill("Air Attunement",225,"Core","E","Air Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[36,60]," seconds, you are attuned to Air. You gain 1 Energy plus 30% of the base Energy cost of the Skill whenever you use Air Magic."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",36,60] ] );
g_skillsById[1656] = new Skill("Air of Disenchantment",1656,"Nightfall","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,0.25,20,0,false,0,
  ["For 10 seconds, target foe and all adjacent foes cast Enchantments ",[10,100],"% slower. When Air of Disenchantment ends, it removes one Enchantment from each affected foe."],
  {"spell-counter": true}, [
  ["% slowed<sup>1</sup>",10,100] ] );
g_skillsById[1115] = new Skill("Air of Enchantment",1115,"Factions","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,8,0,false,0,
  ["For ",[4,10]," seconds, Enchantments cast on target other ally cost 5 less Energy (minimum 1 Energy)."],
  {}, [
  ["Duration",4,10] ] );
g_skillsById[2416] = new Skill("Air of Superiority",2416,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Skill",5,0,0,20,0,false,0,
  ["For ",[10,30]," seconds you gain a random Asura benefit every time you earn experience from killing an enemy."],
  {}, [
  ["Duration",10,30] ] );
g_skillsById[2211] = new Skill("Alkar's Alchemical Acid",2211,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Spell",10,0,1,10,0,false,0,
  ["Throw Alkar's Alchemical Acid at target foe. Target and adjacent foes are struck for ",[30,50]," damage. Destroyers take an additional ",[30,70]," damage and they have Cracked Armor for ",[10,20]," seconds."],
  {}, [
  ["Damage",30,50],
  ["Additional damage",30,70],
  ["Cracked Armor duration",10,20] ] );
g_skillsById[265] = new Skill("Amity",265,"Prophecies","Mo","Protection Prayers",
  true,false,false,false,"Hex Spell",5,0,0.25,45,0,false,0,
  ["For ",[8,20]," seconds, adjacent foes cannot attack. For each foe, Amity ends if that foe takes damage."],
  {"attack-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[1054] = new Skill("Ancestor's Visage",1054,"Factions","Me","Illusion Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[4,10]," seconds, whenever target ally is hit by a melee attack, all adjacent foes lose all adrenaline and 3 Energy."],
  {"adrenal-drain": true, "adrenal-drain-aoe": true, "energy-drain": true, "energy-drain-aoe": true}, [
  ["Duration",4,10] ] );
g_skillsById[1246] = new Skill("Ancestors' Rage",1246,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Skill",5,0,0.25,8,0,false,0,
  ["For 1 second, nothing happens. When this skill ends, all foes adjacent to target ally are struck for ",[5,110]," lightning damage."],
  {"damage": true}, [
  ["Lightning damage",5,110] ] );
g_skillsById[2055] = new Skill("Aneurysm",2055,"Eye of the North","Me","Domination Magic",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Target foe regains all Energy. For each point of Energy gained in this way, that foe takes ",[1,3]," damage."],
  {}, [
  ["Damage per energy gain",1,3] ] );
g_skillsById[1587] = new Skill("Angelic Bond",1587,"Nightfall","P","Leadership",
  true,false,false,false,"Skill",10,0,2,5,0,false,0,
  ["For ",[10,35]," seconds, all damage suffered by target other ally is divided equally with you."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[1586] = new Skill("Angelic Protection",1586,"Nightfall","P","Leadership",
  false,false,false,false,"Skill",5,0,0,30,0,false,0,
  ["For 10 seconds, any time target other ally takes more than ",[250,100]," damage per second, that ally is healed for any damage over that amount."],
  {}, [
  ["Damage",250,100] ] );
g_skillsById[2189] = new Skill("Angorodon's Gaze",2189,"Eye of the North","N","Blood Magic",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Steal ",[10,40]," Health from target foe. If you are suffering from a condition, you gain ",[1,9]," Energy."],
  {}, [
  ["Life stealing",10,40],
  ["Energy gained",1,9] ] );
g_skillsById[1745] = new Skill("Anguish",1745,"Nightfall","Rt","Communing",
  false,false,false,false,"Binding Ritual",25,0,3,45,0,false,0,
  ["Create a level ",[1,7]," Spirit. This Spirit's attacks deal ",[5,20]," damage and deal double damage to Hexed foes. This Spirit dies after ",[15,45]," seconds."],
  {"damage": true, "hex-punish": true, "spirit": true}, [
  ["Spirit level",1,7],
  ["Damage",5,20],
  ["Spirit duration",15,45] ] );
g_skillsById[1223] = new Skill("Anguished Was Lingwah",1223,"Factions","Rt","Communing",
  false,false,false,false,"Item Spell",15,0,3,30,0,false,0,
  ["Hold Lingwah's ashes for up to ",[30,150]," seconds. Dropping her ashes summons a level ",[1,10]," Spirit of Pain that does ",[5,30]," damage. This Spirit dies after ",[30,150]," seconds."],
  {"damage": true, "damage-aoe": true, "damage-ot": true, "spirit": true}, [
  ["Duration (Ashes)",30,150],
  ["Level",1,10],
  ["Damage",5,30],
  ["Duration (Spirit)",30,150] ] );
g_skillsById[84] = new Skill("Animate Bone Fiend",84,"Core","N","Death Magic",
  false,false,false,false,"Spell",25,0,3,5,0,false,0,
  ["Exploit nearest corpse to animate a level ",[1,17]," bone fiend. Bone fiends can attack at range."],
  {"corpse": true, "minion": true}, [
  ["Level",1,17] ] );
g_skillsById[83] = new Skill("Animate Bone Horror",83,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",10,0,3,5,0,false,0,
  ["Exploit nearest corpse to animate a level ",[1,17]," bone horror."],
  {"corpse": true, "minion": true}, [
  ["Level",1,17] ] );
g_skillsById[85] = new Skill("Animate Bone Minions",85,"Core","N","Death Magic",
  false,false,false,false,"Spell",15,0,3,5,0,false,0,
  ["Exploit nearest corpse to animate two level ",[0,12]," bone minions."],
  {"corpse": true, "minion": true}, [
  ["Level",0,12] ] );
g_skillsById[832] = new Skill("Animate Flesh Golem",832,"Factions","N","Death Magic",
  true,false,false,false,"Spell",10,0,3,30,0,false,0,
  ["Exploit nearest corpse to animate a level ",[3,25]," Flesh Golem. The Flesh Golem leaves an exploitable corpse. You can have only one Flesh Golem at a time."],
  {"corpse": true, "minion": true}, [
  ["Flesh Golem level",3,25] ] );
g_skillsById[1351] = new Skill("Animate Shambling Horror",1351,"Nightfall","N","Death Magic",
  false,false,false,false,"Spell",15,0,3,25,0,false,0,
  ["Exploit nearest corpse to create a level ",[1,17]," shambling horror. When the shambling horror dies, it is replaced by a level ",[0,15]," jagged horror that causes Bleeding with each of its attacks."],
  {"corpse": true, "minion": true}, [
  ["Shambling Horror level",1,17],
  ["Jagged Horror level",0,15] ] );
g_skillsById[805] = new Skill("Animate Vampiric Horror",805,"Factions","N","Death Magic",
  false,false,false,false,"Spell",15,0,3,15,0,false,0,
  ["Exploit nearest corpse to animate a level ",[1,17]," Vampiric Horror. Whenever a Vampiric Horror you control deals damage, you gain the same amount of Health."],
  {"corpse": true, "minion": true}, [
  ["Level",1,17] ] );
g_skillsById[2018] = new Skill("Anthem of Disruption",2018,"Eye of the North","P","Command",
  false,false,false,false,"Chant",10,0,2,15,0,false,0,
  ["For ",[1,10]," seconds, the next attack Skill used by each ally within earshot also interrupts an action."],
  {}, [
  ["Duration",1,10] ] );
g_skillsById[1559] = new Skill("Anthem of Envy",1559,"Nightfall","P","Command",
  false,false,false,false,"Chant",0,6,1,0,0,false,0,
  ["For 10 seconds, the next attack Skill used by each ally within earshot deals +",[10,25]," damage against foes with more than 50% Health."],
  {"damage": true}, [
  ["Damage",10,25] ] );
g_skillsById[1557] = new Skill("Anthem of Flame",1557,"Nightfall","P","Leadership",
  false,false,false,false,"Chant",5,0,1,10,0,false,0,
  ["For 10 seconds, the next attack Skill used by each party member within earshot also causes Burning for ",[1,3]," seconds."],
  {"burning": true}, [
  ["Burning",1,3] ] );
g_skillsById[1553] = new Skill("Anthem of Fury",1553,"Nightfall","P","Leadership",
  true,false,false,false,"Chant",5,0,1,10,0,false,0,
  ["For 10 seconds, all party members within earshot gain ",[1,4]," strikes of adrenaline the next time they use an attack Skill."],
  {"adrenal-gain": true}, [
  ["Adrenaline gain",1,4] ] );
g_skillsById[1568] = new Skill("Anthem of Guidance",1568,"Nightfall","P","Command",
  true,false,false,false,"Chant",0,4,1,0,0,false,0,
  ["For 10 seconds, the next attack Skill used by each party member within earshot cannot be blocked."],
  {}, [
 ] );
g_skillsById[2017] = new Skill("Anthem of Weariness",2017,"Eye of the North","P","Command",
  false,false,false,false,"Chant",5,0,1,10,0,false,0,
  ["For 8 seconds, the next attack Skill used by each ally within earshot also causes Weakness for ",[1,16]," seconds."],
  {}, [
  ["Weakness duration",1,16] ] );
g_skillsById[427] = new Skill("Antidote Signet",427,"Core","R","No Attribute",
  false,false,false,false,"Signet",0,0,1,4,0,false,0,
  ["Cleanse yourself of Poison, Disease, and Blindness."],
  {"blind-remove": true, "disease-remove": true, "poison-remove": true}, [
 ] );
g_skillsById[435] = new Skill("Apply Poison",435,"Core","R","Wilderness Survival",
  false,false,false,false,"Preparation",15,0,2,12,0,false,0,
  ["For 24 seconds, foes struck by your physical attacks become Poisoned for ",[3,15]," seconds."],
  {"poison": true}, [
  ["Duration",3,15] ] );
g_skillsById[842] = new Skill("Arc Lightning",842,"Factions","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,6,0,false,0,
  ["Target foe is struck for ",[5,50]," lightning damage. If that foe is suffering from a Water Magic Hex, one foe near your target is struck for ",[15,60]," lightning damage. Damage from Arc Lightning has 25% armor penetration."],
  {"damage": true, "damage-aoe": true, "hex-punish": true}, [
  ["Lightning damage",5,50],
  ["Lightning damage<br/>if Water Magic hexed",15,60] ] );
g_skillsById[36] = new Skill("Arcane Conundrum",36,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,2,20,0,false,0,
  ["For ",[5,15]," seconds, Spells cast by target foe and all adjacent foes take twice as long to cast."],
  {"spell-counter": true}, [
  ["Duration",5,15] ] );
g_skillsById[75] = new Skill("Arcane Echo",75,"Core","Me","No Attribute",
  false,false,false,false,"Enchantment Spell",15,0,2,20,0,false,0,
  ["If you cast a Spell in the next 20 seconds, Arcane Echo is replaced with that Spell for 20 seconds. Arcane Echo ends prematurely if you use a non-Spell skill."],
  {"recharge-buff": true, "skill-copy": true}, [
 ] );
g_skillsById[804] = new Skill("Arcane Languor",804,"Factions","Me","Fast Casting",
  true,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[1,10]," seconds, all spells cast by target foe cause Exhaustion."],
  {"exhaust": true}, [
  ["Duration",1,10] ] );
g_skillsById[1062] = new Skill("Arcane Larceny",1062,"Factions","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["For ",[5,35]," seconds, one random spell is disabled for target foe and Arcane Larceny is replaced by that spell."],
  {"lock": true, "skill-copy": true}, [
  ["Duration",5,35] ] );
g_skillsById[65] = new Skill("Arcane Mimicry",65,"Core","Me","No Attribute",
  false,false,false,false,"Spell",15,0,2,60,0,false,0,
  ["For 20 seconds, Arcane Mimicry becomes the non-Form Elite skill from target other ally."],
  {"skill-copy": true}, [
 ] );
g_skillsById[81] = new Skill("Arcane Thievery",81,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["For ",[5,35]," seconds, one random spell is disabled for target foe, and Arcane Thievery is replaced by that spell."],
  {"lock": true, "skill-copy": true}, [
  ["Duration",5,35] ] );
g_skillsById[1502] = new Skill("Arcane Zeal",1502,"Nightfall","D","Mysticism",
  true,false,false,false,"Enchantment Spell",10,0,1,5,0,false,0,
  ["For 10 seconds, whenever you cast a Spell, you gain 1 Energy for each Enchantment on you (maximum ",[1,7]," Energy)."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Max Energy gain",1,7] ] );
g_skillsById[1200] = new Skill("Archer's Signet",1200,"Factions","R","Expertise",
  true,false,false,false,"Signet",0,0,2,45,0,false,0,
  ["All your non-attack skills are disabled for ",[15,5]," seconds. For 30 seconds, your next ",[1,7]," bow attacks cost no Energy."],
  {"lock-self": true}, [
  ["Disabled",15,5],
  ["Subsequent attacks",1,7] ] );
g_skillsById[1467] = new Skill("Arcing Shot",1467,"Nightfall","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,6,0,false,0,
  ["If this arrow hits, it strikes for +",[10,25]," damage. This arrow cannot be blocked, but it moves 50% slower."],
  {"damage": true}, [
  ["+Damage",10,25] ] );
g_skillsById[1566] = new Skill("Aria of Restoration",1566,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",10,0,1,20,0,false,0,
  ["For 10 seconds, the next time each party member within earshot uses a Spell, that party member gains ",[30,90]," Health."],
  {"heal": true}, [
  ["Health gained",30,90] ] );
g_skillsById[1562] = new Skill("Aria of Zeal",1562,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",10,0,2,20,0,false,0,
  ["For 10 seconds, the next time each ally within earshot uses a Spell, that ally gains ",[1,6]," Energy."],
  {"energy-gain": true, "energy-gain-aoe": true}, [
  ["Energy gained",1,6] ] );
g_skillsById[165] = new Skill("Armor of Earth",165,"Core","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",10,0,0.75,15,0,false,0,
  ["For 30 seconds, you gain ",[24,60]," armor, but move ",[50,14],"% slower."],
  {"armor-buff": true, "move-nerf": true}, [
  ["Armor",24,60],
  ["% slower",50,14] ] );
g_skillsById[206] = new Skill("Armor of Frost",206,"Prophecies","E","Water Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,45,0,false,0,
  ["For ",[10,34]," seconds, you gain +40 armor against physical damage. Armor of Frost ends if you use any Fire Magic."],
  {"armor-buff": true}, [
  ["Duration",10,34] ] );
g_skillsById[238] = new Skill("Armor of Mist",238,"Prophecies","E","Water Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[8,20]," seconds, you gain +",[10,40]," armor and move 33% faster."],
  {"armor-buff": true, "move-buff": true}, [
  ["Duration",8,20],
  ["+Armor",10,40] ] );
g_skillsById[1515] = new Skill("Armor of Sanctity",1515,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,5,0,false,0,
  ["For 10 seconds, you take ",[5,20]," less damage from foes suffering from a Condition."],
  {"damage-nerf": true}, [
  ["-Damage",5,20] ] );
g_skillsById[1232] = new Skill("Armor of Unfeeling",1232,"Factions","Rt","Communing",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[10,35]," seconds, you have 10 base damage reduction while casting Binding Rituals."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[1085] = new Skill("Ash Blast",1085,"Factions","E","Earth Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe is struck for ",[35,65]," earth damage. If Ash Blast strikes a knocked-down foe, that foe is Blinded for ",[3,15]," seconds."],
  {"blind": true, "damage": true, "knockdown-punish": true}, [
  ["Earth damage",35,65],
  ["Blind duration",3,15] ] );
g_skillsById[1035] = new Skill("Assassin's Promise",1035,"Factions","A","Deadly Arts",
  true,false,false,false,"Hex Spell",5,0,0.75,45,0,false,0,
  ["For ",[5,15]," seconds, if target foe dies, you gain ",[5,20]," Energy and all your skills are recharged."],
  {"energy-gain": true, "recharge-buff": true}, [
  ["Duration",5,15],
  ["Energy gain",5,20] ] );
g_skillsById[1639] = new Skill("Assassin's Remedy",1639,"Nightfall","A","Critical Strikes",
  false,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For 30 seconds, the next ",[1,10]," attack skills you use remove one Condition."],
  {}, [
  ["Attacks",1,10] ] );
g_skillsById[1643] = new Skill("Assault Enchantments",1643,"Nightfall","A","Critical Strikes",
  true,false,false,false,"Skill",5,0,0.25,2,0,false,0,
  ["Must follow a dual attack. Target foe loses all Enchantments."],
  {}, [
 ] );
g_skillsById[2415] = new Skill("Asuran Scan",2415,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Hex Spell",5,0,2,5,0,false,0,
  ["For ",[6,12]," seconds your attacks against this foe deal an additional ",[25,75],"% damage."],
  {}, [
  ["Duration",6,12],
  ["Additional damage %",25,75] ] );
g_skillsById[2237] = new Skill("Atrophy",2237,"Eye of the North","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For ",[3,7]," seconds, target foe's primary attribute is reduced to 0."],
  {}, [
  ["Duration",3,7] ] );
g_skillsById[1764] = new Skill("Attacker's Insight",1764,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,15,0,false,0,
  ["For 20 seconds, your next ",[1,3]," attack skills cost ",[5,20]," less Energy."],
  {"ecost-buff": true}, [
  ["Attacks",1,3],
  ["Energy",5,20] ] );
g_skillsById[1220] = new Skill("Attuned Was Songkai",1220,"Factions","Rt","Spawning Power",
  true,false,false,false,"Item Spell",10,0,2,60,0,false,0,
  ["Hold Songkai's ashes for up to 45 seconds. While you hold her ashes, your spells and Binding Rituals cost -",[5,50],"% of the base Energy to cast."],
  {"ecost-buff": true}, [
  ["Energy cost reduction (%)",5,50] ] );
g_skillsById[1646] = new Skill("Augury of Death",1646,"Nightfall","A","Deadly Arts",
  false,false,false,false,"Hex Spell",5,0,1,20,0,false,0,
  ["For ",[5,35]," seconds, the next time damage would drop target foe's Health below 50%, you inflict a Deep Wound for ",[5,20]," seconds and Shadow Step to that foe. This Spell has half the normal range."],
  {"deepwound": true}, [
  ["Duration",5,35],
  ["Deep Wound duration",5,20] ] );
g_skillsById[2070] = new Skill("Aura Slicer",2070,"Eye of the North","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,10,0,false,0,
  ["If this attack hits, you deal +",[10,25]," damage. If this attack hits a foe with Cracked Armor, that foe loses one Enchantment."],
  {}, [
  ["+ Damage",10,25] ] );
g_skillsById[771] = new Skill("Aura of Displacement",771,"Factions","A","No Attribute",
  true,false,false,false,"Enchantment Spell",10,0,0.25,20,-1,false,0,
  ["When you cast Aura of Displacement, Shadow Step to target foe. When you stop maintaining Aura of Displacement you return to your original location."],
  {"shadowstep": true}, [
 ] );
g_skillsById[260] = new Skill("Aura of Faith",260,"Prophecies","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",10,0,1,15,0,false,0,
  ["For 60 seconds, target ally gains ",[24,50],"% more Health when healed."],
  {"heal-buff": true}, [
  ["% extra Healing",24,50] ] );
g_skillsById[2098] = new Skill("Aura of Holy Might (Kurzick)",2098,"Factions","D","Kurzick rank",
  false,false,false,true,"Enchantment Spell",10,0,0.75,25,0,false,0,
  ["All nearby foes take ",[30,50]," holy damage. For 20 seconds, you deal ",[20,32],"% more damage with your scythe. When this Enchantment ends, all nearby foes take ",[30,50]," holy damage."],
  {}, [
 ] );
g_skillsById[1955] = new Skill("Aura of Holy Might (Luxon)",1955,"Factions","D","Luxon rank",
  false,false,false,true,"Enchantment Spell",10,0,0.75,25,0,false,0,
  ["All nearby foes take ",[30,50]," holy damage. For 20 seconds, you deal ",[20,32],"% more damage with your scythe. When this Enchantment ends, all nearby foes take ",[30,50]," holy damage."],
  {}, [
 ] );
g_skillsById[180] = new Skill("Aura of Restoration",180,"Core","E","Energy Storage",
  false,false,false,false,"Enchantment Spell",10,0,0.25,5,0,false,0,
  ["For 60 seconds, you are healed for ",[152,400],"% of the Energy cost each time you cast a Spell."],
  {"heal-buff": true}, [
  ["% of Energy cost",152,400] ] );
g_skillsById[2063] = new Skill("Aura of Stability",2063,"Eye of the North","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["For ",[3,10]," seconds, target other ally cannot be knocked down."],
  {}, [
  ["Duration",3,10] ] );
g_skillsById[1495] = new Skill("Aura of Thorns",1495,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.75,12,0,false,0,
  ["All nearby foes are Crippled for ",[4,10]," seconds. For 30 seconds, this Enchantment does nothing. When this Enchantment ends, all nearby foes begin Bleeding for ",[5,15]," seconds."],
  {"bleeding": true, "crippled": true}, [
  ["Crippled",4,10],
  ["Bleeding",5,15] ] );
g_skillsById[114] = new Skill("Aura of the Lich",114,"Prophecies","N","Death Magic",
  true,false,false,false,"Enchantment Spell",10,0,2,20,0,false,0,
  ["For ",[15,45]," seconds, your maximum Health is reduced by half, but you take half damage from all sources. When Aura of the Lich ends, you're healed for ",[50,240]," Health."],
  {"damage-nerf": true, "heal-self": true, "health-buff": true}, [
  ["Duration",15,45],
  ["Healed",50,240] ] );
g_skillsById[905] = new Skill("Auspicious Blow",905,"Factions","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,8,0,0,0,false,0,
  ["If Auspicious Blow hits, you strike for +",[5,20]," damage. If it hits a foe suffering from Weakness you gain ",[3,8]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["+Damage",5,20],
  ["Energy",3,8] ] );
g_skillsById[930] = new Skill("Auspicious Incantation",930,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,25,0,false,0,
  ["For 20 seconds, the next spell you cast is disabled for an additional ",[10,5]," seconds, and you gain ",[110,200],"% of that spell's Energy cost."],
  {"energy-gain": true, "energy-gain-ot": true, "lock-self": true}, [
  ["Disabled",10,5],
  ["% of cost",110,200] ] );
g_skillsById[1142] = new Skill("Auspicious Parry",1142,"Factions","W","Tactics",
  true,false,false,false,"Stance",0,1,0,2,0,false,0,
  ["For ",[5,11]," seconds, the next attack against you is Blocked and you gain ",[1,4]," strikes of Adrenaline."],
  {"adrenal-gain": true}, [
  ["Duration",5,11],
  ["Adrenaline gain",1,4] ] );
g_skillsById[1518] = new Skill("Avatar of Balthazar",1518,"Nightfall","D","Mysticism",
  true,false,false,false,"Form",10,0,2,30,0,false,0,
  ["For ",[10,90]," seconds, you gain +40 armor, you move 33% faster, and your attacks deal holy damage. This Skill is disabled for 120 seconds."],
  {"armor-buff": true, "move-buff": true}, [
  ["Duration",10,90] ] );
g_skillsById[1519] = new Skill("Avatar of Dwayna",1519,"Nightfall","D","Mysticism",
  true,false,false,false,"Form",5,0,2,30,0,false,0,
  ["For ",[10,75]," seconds, whenever you use a Skill, you gain ",[15,60]," Health and lose 1 Hex. This Skill is disabled for 120 seconds."],
  {"heal-buff": true, "hex-remove": true}, [
  ["Duration",10,75],
  ["Healing",15,60] ] );
g_skillsById[1520] = new Skill("Avatar of Grenth",1520,"Nightfall","D","Mysticism",
  true,false,false,false,"Form",15,0,2,30,0,false,0,
  ["For ",[10,90]," seconds, you cannot be blocked by enchanted foes, and your attacks deal cold damage. This skill is disabled for 120 seconds."],
  {"enchant-remove": true}, [
  ["Duration",10,90] ] );
g_skillsById[1521] = new Skill("Avatar of Lyssa",1521,"Nightfall","D","Mysticism",
  true,false,false,false,"Form",5,0,2,30,0,false,0,
  ["For ",[10,90]," seconds, you have +20 maximum Energy and your attacks deal +",[5,50]," damage to foes activating Skills. This Skill is disabled for 120 seconds."],
  {"damage": true}, [
  ["Duration",10,90],
  ["+ Damage",5,50] ] );
g_skillsById[1522] = new Skill("Avatar of Melandru",1522,"Nightfall","D","Mysticism",
  true,false,false,false,"Form",25,0,2,30,0,false,0,
  ["For ",[10,70]," seconds, you have +100 Health, you are unaffected by Conditions, and your attacks deal earth damage. This Skill is disabled for 120 seconds."],
  {"condition-counter": true, "health-buff": true}, [
  ["Duration",10,70] ] );
g_skillsById[111] = new Skill("Awaken the Blood",111,"Prophecies","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For ",[20,44]," seconds, you gain +2 Blood Magic and +2 Curses, but whenever you sacrifice Health, you sacrifice 50% more than the normal amount."],
  {"sacrifice-nerf": true}, [
  ["Duration",20,44] ] );
g_skillsById[1573] = new Skill("Awe",1573,"Nightfall","P","Leadership",
  false,false,false,false,"Skill",10,0,0.75,10,0,false,0,
  ["If this Skill hits a knocked-down foe, that foe becomes Dazed for ",[5,15]," seconds. Awe has half the normal range."],
  {"dazed": true, "knockdown-punish": true}, [
  ["Dazed duration",5,15] ] );
g_skillsById[334] = new Skill("Axe Rake",334,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If this attack hits a foe suffering from a Deep Wound, you strike for +",[1,10]," damage, and that foe becomes Crippled for 15 seconds."],
  {"crippled": true, "damage": true, "deepwound-punish": true}, [
  ["+Damage",1,10] ] );
g_skillsById[342] = new Skill("Axe Twist",342,"Prophecies","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If this attack hits a foe suffering from a Deep Wound, you strike for ",[1,20]," more damage and that foe suffers from Weakness for 20 seconds."],
  {"damage": true, "deepwound-punish": true, "weakness": true}, [
  ["+Damage",1,20] ] );
g_skillsById[358] = new Skill("Backbreaker",358,"Prophecies","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,10,0,0,0,false,0,
  ["If Backbreaker hits, you strike for +",[1,20]," damage and your target is knocked down for 4 seconds."],
  {"damage": true, "knockdown": true}, [
  ["+ Damage",1,20] ] );
g_skillsById[28] = new Skill("Backfire",28,"Core","Me","Domination Magic",
  false,false,false,false,"Hex Spell",15,0,3,20,0,false,0,
  ["For 10 seconds, whenever target foe casts a spell, that foe takes ",[35,140]," damage."],
  {"damage": true, "damage-ot": true, "spell-punish": true}, [
  ["Damage",35,140] ] );
g_skillsById[371] = new Skill("Balanced Stance",371,"Core","W","Tactics",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[8,20]," seconds, you cannot be knocked down and you do not suffer extra damage from a critical attack."],
  {"critical-counter": true, "knockdown-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[1564] = new Skill("Ballad of Restoration",1564,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",10,0,1,20,0,false,0,
  ["For 10 seconds, the next time each party member within earshot takes damage, that party member gains ",[15,75]," Health."],
  {"heal": true}, [
  ["Healing",15,75] ] );
g_skillsById[272] = new Skill("Balthazar's Aura",272,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",25,0,2,25,0,false,0,
  ["For 8 seconds, foes adjacent to target ally take ",[10,25]," holy damage each second."],
  {"damage": true, "damage-aoe": true}, [
  ["Damage",10,25] ] );
g_skillsById[1395] = new Skill("Balthazar's Pendulum",1395,"Nightfall","Mo","Smiting Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,5,0,false,0,
  ["For ",[5,20]," seconds, the next time target ally would be knocked down by a foe, that foe is knocked down instead."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1496] = new Skill("Balthazar's Rage",1496,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",10,0,0.75,15,0,false,0,
  ["All adjacent foes take ",[15,60]," holy damage. For 20 seconds, this Enchantment does nothing. When this Enchantment ends, you gain ",[4,10]," Health for each successful hit while under the effects of this Enchantment."],
  {"damage": true, "heal-buff": true}, [
  ["Holy damage",15,60],
  ["Health gain",4,10] ] );
g_skillsById[242] = new Skill("Balthazar's Spirit",242,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, target ally gains adrenaline and Energy after taking damage. (The amount of adrenaline gained increases depending on your rank in Smiting Prayers.)"],
  {"adrenal-gain": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Adrenaline Unit",2,5] ] );
g_skillsById[296] = new Skill("Bane Signet",296,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["Target foe takes ",[26,56]," holy damage. If target foe was attacking, that foe is knocked down."],
  {"damage": true, "knockdown": true}, [
  ["Holy damage",26,56] ] );
g_skillsById[252] = new Skill("Banish",252,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Target foe takes ",[20,56]," holy damage. This spell does double damage to summoned creatures."],
  {"damage": true}, [
  ["Holy damage",20,56] ] );
g_skillsById[1483] = new Skill("Banishing Strike",1483,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If it hits a summoned creature, all nearby foes take ",[10,85]," holy damage."],
  {"damage": true, "minion-punish": true, "spirit-punish": true}, [
  ["+Damage",5,20],
  ["Holy damage",10,85] ] );
g_skillsById[1416] = new Skill("Barbarous Slice",1416,"Nightfall","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,6,0,0,0,false,0,
  ["If this attack hits, you deal +",[5,30]," damage. If you are currently not in a Stance, you also inflict Bleeding for ",[5,15]," seconds."],
  {"bleeding": true, "damage": true}, [
  ["+Damage",5,30],
  ["Bleeding Duration",5,15] ] );
g_skillsById[1470] = new Skill("Barbed Arrows",1470,"Nightfall","R","Wilderness Survival",
  false,false,false,false,"Preparation",10,0,2,12,0,false,0,
  ["For 18 seconds, your arrows cause Bleeding for ",[3,15]," seconds. This Skill is easily interrupted."],
  {"bleeding": true}, [
  ["Bleeding duration",3,15] ] );
g_skillsById[131] = new Skill("Barbed Signet",131,"Core","N","Blood Magic",
  false,false,false,false,"Signet",0,0,2,20,0,false,0,
  ["You steal up to ",[18,60]," Health from target foe."],
  {"health-steal": true, "sacrifice": true}, [
  ["Life stealing",18,60] ] );
g_skillsById[1600] = new Skill("Barbed Spear",1600,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,2,0,0,0,false,0,
  ["If this attack hits, your target begins Bleeding for ",[5,15]," seconds."],
  {"bleeding": true}, [
  ["Bleeding duration",5,15] ] );
g_skillsById[458] = new Skill("Barbed Trap",458,"Core","R","Wilderness Survival",
  false,false,false,false,"Trap",15,0,2,20,0,false,0,
  ["When Barbed Trap is triggered, all nearby foes are struck for ",[7,23]," piercing damage, become Crippled, and begin Bleeding for ",[3,25]," seconds. Barbed Trap ends after 90 seconds. While activating this skill, you are easily interrupted."],
  {"bleeding": true, "crippled": true, "damage": true}, [
  ["Piercing damage",7,23],
  ["Conditions duration",3,25] ] );
g_skillsById[101] = new Skill("Barbs",101,"Core","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["For 30 seconds, target foe takes ",[1,15]," more damage when hit by physical damage."],
  {"damage-buff": true}, [
  ["Damage",1,15] ] );
g_skillsById[395] = new Skill("Barrage",395,"Core","R","Marksmanship",
  true,false,false,false,"Bow Attack",5,0,0,1,0,false,0,
  ["All your Preparations are removed. Shoot arrows at target foe and up to 6 foes adjacent to your target. These arrows strike for +",[5,20]," damage if they hit."],
  {"damage": true}, [
  ["+Damage",5,20] ] );
g_skillsById[317] = new Skill("Battle Rage",317,"Core","W","Strength",
  true,false,false,false,"Stance",0,4,0,0,0,false,0,
  ["For ",[5,20]," seconds, you move 33% faster and gain double adrenaline from attacks. Battle Rage ends if you use any non-attack skills. When Battle Rage ends, you lose all adrenaline."],
  {"adrenal-gain": true, "adrenal-gone": true, "move-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[825] = new Skill("Bed of Coals",825,"Factions","E","Fire Magic",
  false,false,false,false,"Spell",10,0,1,30,0,false,0,
  ["Create a Bed of Coals at your location. For 10 seconds, foes standing still near this location are struck for ",[5,29]," fire damage each second. Any foe knocked down on the Bed of Coals is set on fire for ",[3,7]," seconds."],
  {"burning": true, "damage": true}, [
  ["Fire damage",5,29],
  ["Burning duration",3,7] ] );
g_skillsById[799] = new Skill("Beguiling Haze",799,"Factions","A","Shadow Arts",
  true,false,false,false,"Spell",15,0,0.25,20,0,false,0,
  ["Shadow Step to target foe. That foe becomes Dazed for ",[3,9]," seconds."],
  {"dazed": true, "shadowstep": true}, [
  ["Dazed duration",3,9] ] );
g_skillsById[350] = new Skill("Belly Smash",350,"Prophecies","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",5,0,1,30,0,false,0,
  ["If this attack strikes a foe who is on the ground, the resulting dust cloud will blind adjacent foes for ",[3,10]," seconds."],
  {"blind": true, "knockdown-punish": true}, [
  ["Blind",3,10] ] );
g_skillsById[370] = new Skill("Berserker Stance",370,"Core","W","Strength",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,11]," seconds, you attack 33% faster and gain 50% more adrenaline. Berserker Stance ends if you use a skill."],
  {"adrenal-gain": true, "attackspeed-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[1209] = new Skill("Bestial Fury",1209,"Factions","R","Beast Mastery",
  false,false,false,false,"Stance",10,0,0,10,0,false,0,
  ["All your non-attack skills are disabled for 5 seconds. For ",[5,11]," seconds, you attack 25% faster."],
  {"attackspeed-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[1203] = new Skill("Bestial Mauling",1203,"Factions","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,20,0,false,0,
  ["Your animal companion attempts a Bestial Mauling that deals +",[5,20]," damage. If the attack strikes a knocked-down foe, that foe is Dazed for ",[4,10]," seconds."],
  {"damage": true, "dazed": true}, [
  ["Damage",5,20],
  ["Dazed",4,10] ] );
g_skillsById[437] = new Skill("Bestial Pounce",437,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,10,0,false,0,
  ["Your animal companion attempts a Bestial Pounce that deals +",[5,20]," damage. If the attack strikes a foe who is casting a Spell, that foe is knocked down."],
  {"damage": true, "knockdown": true}, [
  ["+Damage",5,20] ] );
g_skillsById[1236] = new Skill("Binding Chains",1236,"Factions","Rt","Communing",
  false,false,false,false,"Hex Spell",15,0,2,30,0,false,0,
  ["For ",[5,17]," seconds, target foe moves 90% slower and cannot attack. Binding Chains ends if that foe takes damage."],
  {"move-nerf": true}, [
  ["Duration",5,17] ] );
g_skillsById[1068] = new Skill("Bitter Chill",1068,"Factions","N","Death Magic",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Target foe is struck for ",[15,60]," cold damage. If that foe had more Health than you, Bitter Chill recharges instantly."],
  {"damage": true}, [
  ["Cold damage",15,60] ] );
g_skillsById[779] = new Skill("Black Lotus Strike",779,"Factions","A","Critical Strikes",
  false,false,false,false,"Lead Attack",10,0,0,12,0,false,0,
  ["If it hits, Black Lotus Strike strikes for +",[10,31]," damage. If target foe is suffering from a Hex, you gain ",[5,18]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["+ Damage",10,31],
  ["Energy gain",5,18] ] );
g_skillsById[1024] = new Skill("Black Mantis Thrust",1024,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,4,0,false,0,
  ["If this attack hits, you strike for +",[8,20]," damage. If target foe is suffering from a Hex, that foe is Crippled for ",[3,15]," seconds."],
  {"crippled": true, "damage": true}, [
  ["+ Damage",8,20],
  ["Crippled duration",3,15] ] );
g_skillsById[2223] = new Skill("Black Powder Mine",2223,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Trap",10,0,2,20,0,false,0,
  ["When Black Powder Mine is triggered, all nearby foes are struck for ",[10,30]," damage, become Blinded, and begin Bleeding for ",[5,10]," seconds. Black Powder Mine ends after 90 seconds. While activating this Skill, you are easily interrupted."],
  {}, [
  ["Damage",10,30],
  ["Blindness and Bleeding duration",5,10] ] );
g_skillsById[1636] = new Skill("Black Spider Strike",1636,"Nightfall","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",10,0,0,12,0,false,0,
  ["Must strike a Hexed foe. If it hits, this attack strikes for +",[5,20]," damage and target foe is Poisoned for ",[5,20]," seconds."],
  {"damage": true, "poison": true}, [
  ["Damage",5,20],
  ["Poison duration",5,20] ] );
g_skillsById[29] = new Skill("Blackout",29,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Skill",10,0,1,12,0,false,0,
  ["For ",[2,6]," seconds, all of touched target foe's skills are disabled, and all of your skills are disabled for 5 seconds."],
  {"lock": true, "touch": true}, [
  ["Duration",2,6] ] );
g_skillsById[1020] = new Skill("Blades of Steel",1020,"Factions","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0,8,0,false,0,
  ["Must follow an off-hand attack. If it hits, this attack strikes for +",[5,16]," damage (maximum bonus 60) for each recharging dagger attack."],
  {"damage": true}, [
  ["+ Damage",5,16] ] );
g_skillsById[1580] = new Skill("Bladeturn Refrain",1580,"Nightfall","P","Command",
  false,false,false,false,"Echo",5,0,1,8,0,false,0,
  ["For 20 seconds, target non-Spirit ally has +",[10,40]," armor against slashing damage. This Echo is reapplied every time a Chant or Shout ends on that ally."],
  {"armor-buff": true}, [
  ["+Armor",10,40] ] );
g_skillsById[1575] = new Skill("Blazing Finale",1575,"Nightfall","P","Leadership",
  false,false,false,false,"Echo",5,0,1,8,0,false,0,
  ["For ",[10,35]," seconds, whenever a Chant or Shout ends on target non-Spirit ally, all foes adjacent to that ally are set on Fire for ",[1,3]," seconds."],
  {"burning": true}, [
  ["Duration",10,35],
  ["Burning duration",1,3] ] );
g_skillsById[1546] = new Skill("Blazing Spear",1546,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,6,0,0,0,false,0,
  ["If this attack hits, it deals +",[5,25]," damage and sets target foe on Fire for ",[1,3]," seconds."],
  {"burning": true, "damage": true}, [
  ["+ Damage",5,25],
  ["Burning duration",1,3] ] );
g_skillsById[256] = new Skill("Blessed Aura",256,"Prophecies","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",10,0,2,2,-1,false,0,
  ["While you maintain this Enchantment, Monk Enchantments you cast last ",[10,35],"% longer."],
  {"enchant-buff": true}, [
  ["% longer",10,35] ] );
g_skillsById[941] = new Skill("Blessed Light",941,"Factions","Mo","Divine Favor",
  true,false,false,false,"Spell",10,0,0.75,3,0,false,0,
  ["Heal target ally for ",[10,140]," Health and remove one Condition and one Hex."],
  {"heal": true}, [
  ["Healing",10,140] ] );
g_skillsById[297] = new Skill("Blessed Signet",297,"Core","Mo","Divine Favor",
  false,false,false,false,"Signet",0,0,2,10,0,false,0,
  ["For each enchantment you are maintaining, you gain 3 Energy. You cannot gain more than ",[3,24]," Energy in this way."],
  {"energy-gain": true}, [
  ["Energy",3,24] ] );
g_skillsById[788] = new Skill("Blind Was Mingson",788,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",5,0,1,20,0,false,0,
  ["Hold Mingson's ashes for up to ",[15,60]," seconds. When you drop his ashes, all nearby foes are Blinded for ",[3,8]," seconds."],
  {"blind": true}, [
  ["Duration",15,60],
  ["Blind",3,8] ] );
g_skillsById[220] = new Skill("Blinding Flash",220,"Core","E","Air Magic",
  false,false,false,false,"Spell",15,0,0.75,4,0,false,0,
  ["Target foe is Blinded for ",[3,8]," seconds."],
  {"blind": true}, [
  ["Blind duration",3,8] ] );
g_skillsById[973] = new Skill("Blinding Powder",973,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,20,0,false,0,
  ["Must follow an off-hand attack. Target foe and all adjacent foes become Blinded for ",[3,15]," seconds."],
  {"blind": true}, [
  ["Blind duration",3,15] ] );
g_skillsById[1367] = new Skill("Blinding Surge",1367,"Nightfall","E","Air Magic",
  true,false,false,false,"Spell",10,0,0.75,4,0,false,0,
  ["Target foe is struck for ",[5,50]," lightning damage and Blinded for ",[3,8]," seconds. If that foe is under the effects of an Enchantment, all adjacent foes are also Blinded for ",[3,8]," seconds. This Spell has 25% armor penetration."],
  {"blind": true, "blind-aoe": true, "damage": true, "enchant-punish": true}, [
  ["Lightning damage",5,50],
  ["Target Blind duration",3,8],
  ["Adjacent foes Blind duration",3,8] ] );
g_skillsById[835] = new Skill("Blood Bond",835,"Factions","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,2,0,false,0,
  ["For ",[5,20]," seconds, target other ally gains +",[1,6]," Health regeneration and you suffer -3 Health degeneration."],
  {"health-degen": true, "health-regen": true}, [
  ["Duration",5,20],
  ["Health Regen",1,6] ] );
g_skillsById[1076] = new Skill("Blood Drinker",1076,"Factions","N","Blood Magic",
  false,false,false,false,"Spell",5,0,2,8,0,false,0,
  ["If your Health is above 50%, you begin Bleeding for 10 seconds. Steal up to ",[20,65]," Health from target foe."],
  {"bleeding-self": true, "health-steal": true}, [
  ["Life stealing",20,65] ] );
g_skillsById[115] = new Skill("Blood Renewal",115,"Prophecies","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",1,0,1,10,0,false,0,
  ["For 10 seconds, you gain +",[3,6]," Health regeneration. When Blood Renewal ends, you gain ",[40,190]," Health."],
  {"heal": true, "health-regen": true, "sacrifice": true}, [
  ["Regeneration",3,6],
  ["Health",40,190] ] );
g_skillsById[157] = new Skill("Blood Ritual",157,"Prophecies","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",5,0,2,2,0,false,0,
  ["For ",[8,14]," seconds, target touched ally gains +3 Energy regeneration. Blood Ritual cannot be used on the caster."],
  {"energy-regen": true, "sacrifice": true, "touch": true}, [
  ["Duration",8,14] ] );
g_skillsById[119] = new Skill("Blood is Power",119,"Core","N","Blood Magic",
  true,false,false,false,"Enchantment Spell",1,0,0.25,0,0,false,0,
  ["For 10 seconds, target other ally gains +",[3,6]," Energy regeneration."],
  {"energy-regen": true, "sacrifice": true}, [
  ["Energy regeneration",3,6] ] );
g_skillsById[902] = new Skill("Blood of the Aggressor",902,"Nightfall","N","Blood Magic",
  false,false,false,false,"Spell",5,0,1,3,0,false,0,
  ["If target foe is attacking, you steal up to ",[5,50]," Health. Otherwise, that foe takes ",[5,50]," damage."],
  {"damage": true, "health-steal": true, "sacrifice": true}, [
  ["Life stealing or Damage",5,50] ] );
g_skillsById[120] = new Skill("Blood of the Master",120,"Core","N","Death Magic",
  false,false,false,false,"Spell",5,0,1,2,0,false,0,
  ["All of your undead allies are healed for ",[30,116]," Health. You sacrifice an additional 2% maximum Health per minion healed in this way."],
  {"minion": true, "sacrifice": true}, [
  ["Healing",30,116] ] );
g_skillsById[1253] = new Skill("Bloodsong",1253,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Binding Ritual",5,0,3,30,0,false,0,
  ["Create a level ",[1,8]," Spirit who dies after ",[30,150]," seconds. Attacks by that Spirit steal up to ",[5,25]," Health."],
  {"health-steal": true, "spirit": true}, [
  ["Spirit level",1,8],
  ["Duration",30,150],
  ["Life stealing",5,25] ] );
g_skillsById[235] = new Skill("Blurred Vision",235,"Core","E","Water Magic",
  false,false,false,false,"Hex Spell",10,0,1,12,0,false,0,
  ["For ",[4,10]," seconds, target foe and adjacent foes are Hexed with Blurred Vision. While Hexed, those foes have a 50% chance to miss with attacks."],
  {"attack-counter": true}, [
  ["Duration",4,10] ] );
g_skillsById[2197] = new Skill("Body Blow",2197,"Eye of the North","W","Strength",
  false,false,false,false,"Melee Attack",0,7,0,0,0,false,0,
  ["If this attack hits, target foe takes +",[10,40]," damage. If target foe has Cracked Armor, that foe suffers from a Deep Wound for ",[5,15]," seconds."],
  {}, [
  ["+ Damage",10,40],
  ["Deep Wound duration",5,15] ] );
g_skillsById[2198] = new Skill("Body Shot",2198,"Eye of the North","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,8,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If it hits a foe with Cracked Armor, you gain ",[5,10]," Energy."],
  {}, [
  ["+Damage",5,20],
  ["Energy gain",5,10] ] );
g_skillsById[380] = new Skill("Bonetti's Defense",380,"Prophecies","W","Tactics",
  false,false,false,false,"Stance",0,8,0,0,0,false,0,
  ["For ",[5,11]," seconds, you have a 75% chance to block melee and projectile attacks. You gain 5 Energy for each successful melee attack blocked. Bonetti's Defense ends if you use a skill."],
  {"block": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",5,11] ] );
g_skillsById[847] = new Skill("Boon Signet",847,"Factions","Mo","Divine Favor",
  true,false,false,false,"Signet",0,0,1,5,0,false,0,
  ["Heal target ally for ",[5,35]," Health. For each Enchantment on that ally, you gain 2 Energy. (Maximum ",[1,6]," Energy.)"],
  {"energy-gain": true, "heal": true}, [
  ["Healing",5,35],
  ["Max Energy gain",1,6] ] );
g_skillsById[1230] = new Skill("Boon of Creation",1230,"Factions","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[15,60]," seconds, whenever you create a creature, you gain ",[5,50]," Health and ",[1,6]," Energy."],
  {"energy-gain": true, "energy-gain-ot": true, "heal-self": true}, [
  ["Duration",15,60],
  ["Health Gain",5,50],
  ["Energy Gain",1,6] ] );
g_skillsById[947] = new Skill("Brambles",947,"Factions","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",10,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures that are knocked down in its range take 5 damage and begin Bleeding for ",[5,20]," seconds. This Spirit dies after ",[30,150]," seconds."],
  {"bleeding": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Bleeding duration",5,20],
  ["Spirit duration",30,150] ] );
g_skillsById[2215] = new Skill("Brawling Headbutt",2215,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Skill",0,7,0.75,0,0,false,0,
  ["You headbutt target touched foe dealing ",[30,70]," damage and knocking down that foe if it hits."],
  {}, [
  ["Damage",30,70] ] );
g_skillsById[1094] = new Skill("Breath of Fire",1094,"Factions","E","Fire Magic",
  false,false,false,false,"Spell",5,0,2,30,0,false,0,
  ["Create Breath of Fire at target foe's current location. For 5 seconds, foes adjacent to that location are struck for ",[10,40]," fire damage each second."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage",10,40] ] );
g_skillsById[2221] = new Skill("Breath of the Great Dwarf",2221,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Spell",10,0,0.25,15,0,false,0,
  ["All party members are relieved of Burning and are healed for ",[40,60]," Health."],
  {}, [
  ["Healing",40,60] ] );
g_skillsById[1198] = new Skill("Broad Head Arrow",1198,"Factions","R","Marksmanship",
  true,false,false,false,"Bow Attack",15,0,0,15,0,false,0,
  ["You shoot a broad head arrow that moves slower than normal. If it hits, target foe is Dazed for ",[5,20]," seconds, and if target foe is casting a Spell that Spell is interrupted."],
  {"dazed": true}, [
  ["Dazed duration",5,20] ] );
g_skillsById[444] = new Skill("Brutal Strike",444,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Pet Attack",10,0,0,5,0,false,0,
  ["Your animal companion attempts a Brutal Strike that deals +",[5,35]," damage. If that attack strikes a foe whose Health is below 50%, that foe takes an additional +",[5,35]," damage."],
  {"damage": true}, [
  ["+Damage",5,35] ] );
g_skillsById[1258] = new Skill("Brutal Weapon",1258,"Factions","Rt","Communing",
  false,false,false,false,"Weapon Spell",10,0,1,15,0,false,0,
  ["Give target ally a Brutal Weapon for ",[15,45]," seconds. The bearer's weapon strikes for +",[5,15]," damage as long as the bearer is under no Enchantments."],
  {"damage-buff": true}, [
  ["Duration",15,45],
  ["+Damage",5,15] ] );
g_skillsById[379] = new Skill("Bull's Charge",379,"Prophecies","W","Strength",
  true,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,11]," seconds, you move 25% faster and if you strike a moving foe in melee, that foe is knocked down. Bull's Charge ends if you use a skill."],
  {"knockdown": true, "move-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[332] = new Skill("Bull's Strike",332,"Core","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0,10,0,false,0,
  ["If this attack hits a moving foe, you strike for +",[5,30]," damage, and your target is knocked down."],
  {"damage": true, "knockdown": true, "move-punish": true}, [
  ["+Damage",5,30] ] );
g_skillsById[1466] = new Skill("Burning Arrow",1466,"Nightfall","R","Marksmanship",
  true,false,false,false,"Bow Attack",10,0,0,5,0,false,0,
  ["If this attack hits, you strike for +",[10,30]," damage and cause Burning for ",[1,5]," seconds."],
  {"burning": true, "damage": true}, [
  ["+ Damage",10,30],
  ["Burning duration",1,5] ] );
g_skillsById[1576] = new Skill("Burning Refrain",1576,"Nightfall","P","Leadership",
  false,false,false,false,"Echo",10,0,1,10,0,false,0,
  ["For 20 seconds, if target non-Spirit ally hits a foe with more Health than that ally, that foe is set on Fire for ",[1,3]," seconds. This Echo is reapplied every time a Chant or Shout ends on that ally."],
  {"burning": true}, [
  ["Burning duration",1,3] ] );
g_skillsById[2208] = new Skill("Burning Shield",2208,"Eye of the North","P","Leadership",
  false,false,false,false,"Skill",5,0,0,20,0,false,0,
  ["For ",[3,9]," seconds, while wielding a shield, the next attack Skill used against you is blocked. If it was a melee attack, your attacker is set on fire for ",[1,6]," seconds."],
  {}, [
  ["Duration",3,9],
  ["Burning duration",1,6] ] );
g_skillsById[823] = new Skill("Burning Speed",823,"Factions","E","Fire Magic",
  false,false,false,false,"Enchantment Spell",10,0,0.25,0,0,false,0,
  ["For 5 seconds, you are set on fire and move ",[30,45],"% faster. When Burning Speed ends, all adjacent foes are set on fire for ",[3,9]," seconds."],
  {"burning": true, "move-buff": true}, [
  ["% faster",30,45],
  ["Burning",3,9] ] );
g_skillsById[1413] = new Skill("Burst of Aggression",1413,"Nightfall","W","Strength",
  false,false,false,false,"Stance",5,0,0,12,0,false,0,
  ["For ",[2,10]," seconds, you attack 33% faster. When this Stance ends, you lose all adrenaline."],
  {"adrenal-gone": true, "attackspeed-buff": true}, [
  ["Duration",2,10] ] );
g_skillsById[1998] = new Skill("Cacophony",1998,"Eye of the North","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For 10 seconds, whenever target foe uses a shout or chant, that foe takes ",[35,105]," damage."],
  {}, [
  ["Damage",35,105] ] );
g_skillsById[2053] = new Skill("Calculated Risk",2053,"Eye of the North","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,1,10,0,false,0,
  ["For ",[4,10]," seconds, target foe has a 50% chance to miss with attacks but does +",[25,10]," damage."],
  {}, [
  ["Duration",4,10],
  ["+ Damage",25,10] ] );
g_skillsById[415] = new Skill("Call of Haste",415,"Core","R","Beast Mastery",
  false,false,false,false,"Shout",10,0,0,25,0,false,0,
  ["For 30 seconds, your animal companion has a 25% faster attack speed and moves 25% faster."],
  {"attackspeed-buff": true, "move-buff": true}, [
 ] );
g_skillsById[412] = new Skill("Call of Protection",412,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Shout",5,0,0,90,0,false,0,
  ["For 120 seconds, your animal companion has a ",[5,20]," base damage reduction."],
  {"damage-nerf": true}, [
  ["Damage reduction",5,20] ] );
g_skillsById[403] = new Skill("Called Shot",403,"Core","R","No Attribute",
  false,false,false,false,"Bow Attack",5,0,0,3,0,false,0,
  ["Shoot an arrow that moves 3 times faster and cannot be blocked."],
  {"block-counter": true}, [
 ] );
g_skillsById[985] = new Skill("Caltrops",985,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",10,0,0.25,10,0,false,0,
  ["Target foe and all foes adjacent to your target are Crippled for ",[5,15]," seconds. Caltrops has half the normal range."],
  {"crippled": true}, [
  ["Crippled duration",5,15] ] );
g_skillsById[1744] = new Skill("Caretaker's Charge",1744,"Nightfall","Rt","Channeling Magic",
  true,false,false,false,"Spell",5,0,1,4,0,false,0,
  ["Target foe is struck for ",[20,75]," lightning damage. If you are holding an item, you gain 5 Energy and ",[5,50]," Health."],
  {"damage": true, "energy-gain": true, "heal-self": true, "item-uses": true}, [
  ["Lightning damage",20,75],
  ["Health gain",5,50] ] );
g_skillsById[2006] = new Skill("Castigation Signet",2006,"Eye of the North","Mo","Smiting Prayers",
  false,false,false,false,"Signet",0,0,1,15,0,false,0,
  ["Target foe takes ",[26,56]," holy damage. If that foe was attacking, you gain ",[1,10]," Energy."],
  {}, [
  ["Holy damage",26,56],
  ["Energy gain",1,10] ] );
g_skillsById[1588] = new Skill("Cautery Signet",1588,"Nightfall","P","No Attribute",
  true,false,false,false,"Signet",0,0,2,15,0,false,0,
  ["All party members lose all Conditions. You are set on Fire for 1 second for each Condition removed in this way."],
  {"burning-self": true, "condition-remove": true}, [
 ] );
g_skillsById[223] = new Skill("Chain Lightning",223,"Prophecies","E","Air Magic",
  false,false,false,false,"Spell",10,0,3,10,0,true,0,
  ["Target foe and up to two other foes near your target are struck for ",[10,85]," lightning damage. This Spell has 25% armor penetration and causes Exhaustion."],
  {"damage": true}, [
  ["Lightning damage",10,85] ] );
g_skillsById[1225] = new Skill("Channeled Strike",1225,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",10,0,2,4,0,false,0,
  ["Target foe is struck for ",[5,95]," lightning damage. That foe is struck for an additional ",[5,35]," lightning damage if you are holding an item."],
  {"damage": true, "item-uses": true}, [
  ["Damage",5,95],
  ["Additional damage",5,35] ] );
g_skillsById[38] = new Skill("Channeling",38,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,15,0,false,0,
  ["For ",[8,56]," seconds, whenever you cast a Spell, you gain 1 Energy for each foe in the area."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",8,56] ] );
g_skillsById[77] = new Skill("Chaos Storm",77,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Spell",15,0,1,30,0,false,0,
  ["Create a Chaos Storm at target foe's location. For 10 seconds, foes adjacent to this location suffer ",[5,14]," damage each second. Chaos Storm drains ",[1,7]," Energy whenever it strikes a foe casting a spell."],
  {"damage": true, "damage-aoe": true, "energy-drain": true}, [
  ["Damage",5,14],
  ["Energy",1,7] ] );
g_skillsById[1405] = new Skill("Charging Strike",1405,"Nightfall","W","Strength",
  true,false,false,false,"Stance",5,0,0,5,0,false,0,
  ["For ",[1,10]," seconds, you run 33% faster. Your next successful melee hit does +",[10,40]," damage and this Stance ends. This Stance ends if you use a Skill."],
  {"damage": true}, [
  ["Duration",1,10],
  ["+ Damage",10,40] ] );
g_skillsById[411] = new Skill("Charm Animal",411,"Core","R","Beast Mastery",
  false,false,false,false,"Skill",10,0,10,0,0,false,0,
  ["Charm target animal. Once charmed, your animal companion will travel with you whenever you have Charm Animal equipped."],
  {}, [
 ] );
g_skillsById[2074] = new Skill("Chest Thumper",2074,"Eye of the North","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0,5,0,false,0,
  ["If this attack hits a foe with Cracked Armor, that foe suffers a Deep Wound for ",[5,20]," seconds."],
  {}, [
  ["Deep Wound duration",5,20] ] );
g_skillsById[144] = new Skill("Chilblains",144,"Core","N","Curses",
  false,false,false,false,"Spell",25,0,2,8,0,false,0,
  ["You become Poisoned for 10 seconds. Foes in the area of your target are struck for ",[10,44]," cold damage and lose ",[1,2]," enchantments."],
  {"damage": true, "enchant-remove": true, "poison-self": true}, [
  ["Cold damage",10,44],
  ["Enchantments removed",1,2] ] );
g_skillsById[1539] = new Skill("Chilling Victory",1539,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",10,0,0,10,0,false,0,
  ["If it hits, this attack strikes for +",[5,20]," damage. Whenever it hits a foe who has less Health than you, target foe and all adjacent foes are struck for ",[15,60]," cold damage."],
  {"damage": true}, [
  ["+Damage",5,20],
  ["Cold damage",15,60] ] );
g_skillsById[1368] = new Skill("Chilling Winds",1368,"Nightfall","E","Air Magic",
  false,false,false,false,"Hex Spell",5,0,1,8,0,false,0,
  ["Target foe is struck for ",[25,50]," cold damage. For 30 seconds, the next water Hex targeting that foe lasts ",[25,100],"% longer."],
  {"damage": true, "hex-buff": true}, [
  ["Cold damage",25,50],
  ["% longer",25,100] ] );
g_skillsById[434] = new Skill("Choking Gas",434,"Core","R","Wilderness Survival",
  false,false,false,false,"Preparation",15,0,2,24,0,false,0,
  ["For ",[1,12]," seconds, your arrows deal ",[1,8]," more damage and spread Choking Gas to all adjacent foes on impact. Choking Gas interrupts foes attempting to cast Spells."],
  {"damage": true, "interrupt": true, "interrupt-aoe": true}, [
  ["Duration",1,12],
  ["+ Damage",1,8] ] );
g_skillsById[1565] = new Skill("Chorus of Restoration",1565,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",0,4,1,5,0,false,0,
  ["For 10 seconds, the next time each ally within earshot uses a Shout or Chant, that ally is healed for ",[30,90]," Health."],
  {"heal": true}, [
  ["Amount healed",30,90] ] );
g_skillsById[844] = new Skill("Churning Earth",844,"Factions","E","Earth Magic",
  false,false,false,false,"Spell",15,0,3,30,0,false,0,
  ["Create Churning Earth at target foe's location. For the next 5 seconds, Churning Earth strikes foes near that location for ",[10,40]," earth damage each second. Any foe moving faster than normal when struck by Churning Earth is knocked down."],
  {"damage": true, "knockdown": true}, [
  ["Earth damage",10,40] ] );
g_skillsById[1215] = new Skill("Clamor of Souls",1215,"Factions","Rt","Channeling Magic",
  true,false,false,false,"Spell",10,0,1,12,0,false,0,
  ["For each nearby ally, one nearby foe is struck for ",[10,115]," lightning damage. (The same foe cannot be struck more than once.)"],
  {"damage": true}, [
  ["Lightning damage",10,115] ] );
g_skillsById[335] = new Skill("Cleave",335,"Core","W","Axe Mastery",
  true,false,false,false,"Axe Attack",0,4,0,0,0,false,0,
  ["If this attack hits, you strike for +",[10,30]," damage."],
  {"damage": true}, [
  ["+Damage",10,30] ] );
g_skillsById[2361] = new Skill("Club of a Thousand Bears",2361,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Melee Attack",5,0,0,12,0,false,0,
  ["If this attack hits, it deals +",[5,9]," damage for each adjacent foe (maximum 60 damage). If target foe is non-human it is knocked down."],
  {}, [
  ["+ Damage per foe",5,9] ] );
g_skillsById[43] = new Skill("Clumsiness",43,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For 4 seconds, target and adjacent foes are hexed with Clumsiness. The next time each foe attacks, the attack is interrupted and that foe suffers ",[10,92]," damage."],
  {"attack-counter": true, "damage": true}, [
  ["Damage",10,92] ] );
g_skillsById[436] = new Skill("Comfort Animal",436,"Core","R","Beast Mastery",
  false,false,false,false,"Skill",10,0,1,1,0,false,0,
  ["You heal your animal companion for ",[20,104]," Health. If your companion is dead, it is resurrected with ",[10,58],"% Health."],
  {"heal-pet": true, "rez-pet": true}, [
  ["Healing",20,104],
  ["%Health",10,58] ] );
g_skillsById[2141] = new Skill("Companionship",2141,"Eye of the North","R","Beast Mastery",
  false,false,false,false,"Skill",5,0,2,10,0,false,0,
  ["If you have less Health than your pet, you are healed for ",[30,120]," Health. If your pet has less Health than you, it is healed for ",[30,120]," Health."],
  {}, [
  ["Healing (master)",30,120],
  ["Healing (pet)",30,120] ] );
g_skillsById[932] = new Skill("Complicate",932,"Factions","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,0.25,20,0,false,0,
  ["Interrupt target foe's action. If that action was to use a signet, it and all other signets are disabled for ",[1,16]," seconds."],
  {"interrupt": true, "signet-counter": true}, [
  ["Disabled",1,16] ] );
g_skillsById[408] = new Skill("Concussion Shot",408,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",25,0,0.5,5,0,false,0,
  ["If Concussion Shot hits while target foe is casting a Spell, the Spell is interrupted and your target is Dazed for ",[5,20]," seconds. This attack deals only ",[1,16]," damage."],
  {"damage": true, "dazed": true, "interrupt": true}, [
  ["Dazed",2,20],
  ["Damage",1,16] ] );
g_skillsById[466] = new Skill("Conflagration",466,"Factions","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, all arrows that hit strike for fire damage. This Spirit dies after ",[30,150]," seconds."],
  {"spirit": true}, [
  ["Spirit level",1,10],
  ["Duration",30,150] ] );
g_skillsById[2137] = new Skill("Confusing Images",2137,"Eye of the North","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",5,0,1,15,0,false,0,
  ["For 6 seconds, the next spell cast by target and all adjacent foes takes ",[45,140],"% longer to cast."],
  {}, [
  ["Longer activation time %",45,140] ] );
g_skillsById[182] = new Skill("Conjure Flame",182,"Core","E","Fire Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For 60 seconds, if you're wielding a fire weapon, your attacks strike for an additional ",[5,20]," fire damage."],
  {"damage-buff": true}, [
  ["Additional fire damage",5,20] ] );
g_skillsById[207] = new Skill("Conjure Frost",207,"Core","E","Water Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For 60 seconds, if you're wielding a cold weapon, your attacks strike for an additional ",[5,20]," cold damage."],
  {"damage-buff": true}, [
  ["Additional cold damage",5,20] ] );
g_skillsById[221] = new Skill("Conjure Lightning",221,"Core","E","Air Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For 60 seconds, if you're wielding a lightning weapon, your attacks strike for an additional ",[5,20]," lightning damage."],
  {"damage-buff": true}, [
  ["Additional lightning damage",5,20] ] );
g_skillsById[859] = new Skill("Conjure Nightmare",859,"Factions","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",15,0,1,5,0,false,0,
  ["For ",[2,16]," seconds, target foe suffers -8 Health degeneration."],
  {"health-degen": true}, [
  ["Duration",2,16] ] );
g_skillsById[31] = new Skill("Conjure Phantasm",31,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["For ",[2,16]," seconds, target foe experiences -5 Health degeneration."],
  {"health-degen": true}, [
  ["Duration",2,16] ] );
g_skillsById[98] = new Skill("Consume Corpse",98,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["Exploit a random target. You teleport to that corpse's location and gain ",[25,100]," Health and ",[5,20]," Energy."],
  {"corpse": true, "energy-gain": true, "heal-self": true, "teleport": true}, [
  ["Health",25,100],
  ["Energy",5,20] ] );
g_skillsById[914] = new Skill("Consume Soul",914,"Factions","Rt","Spawning Power",
  true,false,false,false,"Spell",5,0,0.75,2,0,false,0,
  ["Target touched Spirit is destroyed. All allies within the area of the destroyed Spirit are healed for ",[30,240]," Health."],
  {"heal": true, "heal-aoe": true, "spirit-counter": true, "touch": true}, [
  ["Healing",30,240] ] );
g_skillsById[1356] = new Skill("Contagion",1356,"Nightfall","N","Death Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For 60 seconds, whenever you suffer from a new condition, all foes in the area suffer from that same condition and you sacrifice ",[10,5],"% maximum Health."],
  {"sacrifice": true}, [
  ["%Sacrifice",10,5] ] );
g_skillsById[300] = new Skill("Contemplation of Purity",300,"Prophecies","Mo","Divine Favor",
  false,false,false,false,"Skill",5,0,0.25,10,0,false,0,
  ["Lose all Enchantments. For each one lost, you gain ",[0,80]," Health, lose one Hex, and lose one Condition (maximum ",[1,8]," Hexes and Conditions)."],
  {"condition-remove": true, "heal-self": true, "hex-remove": true}, [
  ["Health gain",0,80],
  ["Maximum lost",1,8] ] );
g_skillsById[303] = new Skill("Convert Hexes",303,"Core","Mo","Protection Prayers",
  false,false,false,false,"Spell",15,0,1,12,0,false,0,
  ["Remove all Hexes from target other ally. For ",[8,20]," seconds, that ally gains +10 armor for each Necromancer Hex that was removed."],
  {"armor-buff": true, "hex-remove": true}, [
  ["Duration",8,20] ] );
g_skillsById[1540] = new Skill("Conviction",1540,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[10,35]," seconds, you have +24 armor while enchanted, otherwise you have +",[1,4]," Health regeneration."],
  {"health-regen": true}, [
  ["Duration",10,35],
  ["Health regeneration",1,4] ] );
g_skillsById[1362] = new Skill("Corrupt Enchantment",1362,"Nightfall","N","Curses",
  true,false,false,false,"Hex Spell",5,0,0.75,10,0,false,0,
  ["Remove one enchantment from target foe. If an enchantment is removed in this way, that foe suffers from -",[1,8]," Health degeneration for 10 seconds."],
  {"health-degen": true}, [
  ["Health degeneration",1,8] ] );
g_skillsById[357] = new Skill("Counter Blow",357,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,4,0,0,0,false,0,
  ["If this attack hits an attacking foe, that foe is knocked down."],
  {"knockdown": true}, [
 ] );
g_skillsById[1693] = new Skill("Counterattack",1693,"Nightfall","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you strike for +",[5,35]," damage. If you hit an attacking foe, you gain ",[2,6]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["+Damage",5,35],
  ["Energy",2,6] ] );
g_skillsById[54] = new Skill("Crippling Anguish",54,"Core","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",15,0,1,20,0,false,0,
  ["For ",[8,20]," seconds, target moves 50% slower and suffers -",[1,3]," Health degeneration."],
  {"health-degen": true, "move-nerf": true}, [
  ["Duration",8,20],
  ["Health degeneration",1,3] ] );
g_skillsById[1554] = new Skill("Crippling Anthem",1554,"Nightfall","P","Command",
  true,false,false,false,"Chant",0,4,1,0,0,false,0,
  ["For 10 seconds, the next attack Skill used by each party member within earshot causes Crippling for ",[5,15]," seconds."],
  {"crippled": true}, [
  ["Cripple duration",5,15] ] );
g_skillsById[1038] = new Skill("Crippling Dagger",1038,"Factions","A","Deadly Arts",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Send out a Crippling Dagger at target foe. Crippling Dagger strikes for ",[15,60]," earth damage if it hits, and Cripples moving foes for ",[3,15]," seconds. This spell has half the normal range."],
  {"crippled": true, "damage": true}, [
  ["Earth damage",15,60],
  ["Crippled duration",3,15] ] );
g_skillsById[393] = new Skill("Crippling Shot",393,"Prophecies","R","Marksmanship",
  true,false,false,false,"Bow Attack",10,0,0,2,0,false,0,
  ["If Crippling Shot hits, your target becomes Crippled for ",[1,8]," seconds. This attack cannot be blocked."],
  {"block-counter": true, "crippled": true}, [
  ["Cripple duration",1,8] ] );
g_skillsById[1415] = new Skill("Crippling Slash",1415,"Nightfall","W","Swordsmanship",
  true,false,false,false,"Sword Attack",0,6,0,0,0,false,0,
  ["If this attack hits, target foe is Crippled for ",[5,15]," seconds and begins Bleeding for ",[10,25]," seconds."],
  {"bleeding": true, "crippled": true}, [
  ["Crippled duration",5,15],
  ["Bleeding duration",10,25] ] );
g_skillsById[1535] = new Skill("Crippling Sweep",1535,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,6,0,false,0,
  ["If this attack hits, target foe is Crippled for 7 seconds for each Enchantment on you (maximum ",[10,20]," seconds)."],
  {"crippled": true}, [
  ["Cripple duration",10,20] ] );
g_skillsById[2147] = new Skill("Crippling Victory",2147,"Eye of the North","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,12,0,false,0,
  ["If you have more Health than target foe, that foe is Crippled for ",[5,15]," seconds. This attack does +",[5,10]," damage."],
  {}, [
  ["Crippled duration",5,15],
  ["+ Damage",5,10] ] );
g_skillsById[2101] = new Skill("Critical Agility",2101,"Nightfall","A","Sunspear rank| pve-only = y",
  false,false,false,false,"Enchantment Spell",5,0,1,30,0,false,0,
  ["For 4 seconds and 1 second for each rank of Critical Strikes you attack 33% faster and gain ",[10,25]," armor. This Skill reapplies itself every time you land a critical hit."],
  {}, [
 ] );
g_skillsById[1402] = new Skill("Critical Chop",1402,"Nightfall","W","Axe Mastery",
  false,false,false,false,"Axe Attack",5,0,1,15,0,false,0,
  ["If this attack hits, you inflict +",[5,20]," damage. If this attack results in a critical hit, target foe is interrupted."],
  {"damage": true, "interrupt": true}, [
  ["+Damage",5,20] ] );
g_skillsById[1027] = new Skill("Critical Defenses",1027,"Factions","A","Critical Strikes",
  false,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[4,10]," seconds, you have a 75% chance to block. Critical Defenses refreshes every time you land a critical hit."],
  {"block": true}, [
  ["Duration",4,10] ] );
g_skillsById[1018] = new Skill("Critical Eye",1018,"Factions","A","Critical Strikes",
  false,false,false,false,"Skill",5,0,0,30,0,false,0,
  ["For ",[10,35]," seconds, you have an additional ",[3,15],"% chance to land a critical hit when attacking. You gain 1 Energy whenever you score a critical hit."],
  {"critical-buff": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",10,35],
  ["% for Critical hit",3,15] ] );
g_skillsById[1019] = new Skill("Critical Strike",1019,"Factions","A","Critical Strikes",
  false,false,false,false,"Dual Attack",5,0,0,6,0,false,0,
  ["Must follow an off-hand attack. If it hits, this attack strikes for +",[10,30]," damage, results in a critical hit, and you gain ",[1,3]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["Damage",10,30],
  ["Energy",1,3] ] );
g_skillsById[1469] = new Skill("Crossfire",1469,"Nightfall","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,4,0,false,0,
  ["If this attack hits target foe, it deals +",[5,20]," damage. If that foe is near any of your allies, this attack cannot be blocked."],
  {"block-counter": true, "damage": true}, [
  ["+Damage",5,20] ] );
g_skillsById[353] = new Skill("Crude Swing",353,"Prophecies","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",5,0,0,5,0,false,0,
  ["Attack all adjacent foes. Each foe you hit is struck for +",[1,20]," damage. You have -40 armor while activating this Skill."],
  {"damage": true, "damage-aoe": true}, [
  ["+ Damage",1,20] ] );
g_skillsById[1548] = new Skill("Cruel Spear",1548,"Nightfall","P","Spear Mastery",
  true,false,false,false,"Spear Attack",0,7,0,0,0,false,0,
  ["If this attack hits, you deal +",[1,31]," damage. If it hits a non-moving target, you inflict a Deep Wound for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["+ Damage",1,31],
  ["Deep Wound duration",5,20] ] );
g_skillsById[1218] = new Skill("Cruel Was Daoshen",1218,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Item Spell",15,0,1,5,0,false,0,
  ["Hold Daoshen's ashes for up to ",[15,60]," seconds. When you drop his ashes, all nearby foes are struck for ",[10,115]," lightning damage."],
  {"damage": true}, [
  ["Duration",15,60],
  ["Lightning damage",10,115] ] );
g_skillsById[352] = new Skill("Crushing Blow",352,"Prophecies","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",5,0,0,10,0,false,0,
  ["If this attack hits, you strike for +",[1,20]," damage. If you hit a knocked-down foe you inflict a Deep Wound, lowering your target's maximum Health by 20% for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true, "knockdown-punish": true}, [
  ["+ Damage",1,20],
  ["Deep Wound duration",5,20] ] );
g_skillsById[57] = new Skill("Cry of Frustration",57,"Core","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,0.25,15,0,false,0,
  ["If target foe is using a skill, that foe and all foes in the area are interrupted and suffer ",[10,44]," damage."],
  {"damage": true, "damage-aoe": true, "interrupt": true, "interrupt-aoe": true}, [
  ["Damage",10,44] ] );
g_skillsById[2102] = new Skill("Cry of Pain",2102,"Nightfall","Me","Sunspear rank",
  false,false,false,true,"Spell",10,0,0.25,12,0,false,0,
  ["Interrupt target foe's skill. If that foe was suffering from a Mesmer Hex, that foe and all foes in the area take ",[40,100]," damage."],
  {}, [
 ] );
g_skillsById[217] = new Skill("Crystal Wave",217,"Prophecies","E","Earth Magic",
  false,false,false,false,"Spell",15,0,0.75,20,0,false,0,
  ["Foes adjacent to you are struck for ",[10,100]," damage but are cured of any negative Conditions."],
  {"condition-remove-foe": true, "damage": true, "damage-aoe": true}, [
  ["Damage",10,100] ] );
g_skillsById[806] = new Skill("Cultist's Fervor",806,"Factions","N","Blood Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,30,0,false,0,
  ["For ",[5,20]," seconds, your spells cost -7 Energy to cast but you sacrifice ",[30,15],"% maximum Health each time you cast a spell."],
  {"ecost-buff": true, "sacrifice-nerf": true}, [
  ["Duration",5,20],
  ["Sacrifice",30,15] ] );
g_skillsById[2003] = new Skill("Cure Hex",2003,"Eye of the North","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,12,0,false,0,
  ["Remove one Hex from target ally. If a Hex was removed, that ally is healed for ",[30,120]," Health."],
  {}, [
  ["Healing",30,120] ] );
g_skillsById[330] = new Skill("Cyclone Axe",330,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",5,0,0,4,0,false,0,
  ["Perform a spinning axe attack striking for +",[4,12]," damage to all adjacent opponents."],
  {"damage": true, "damage-aoe": true}, [
  ["+Damage",4,12] ] );
g_skillsById[858] = new Skill("Dancing Daggers",858,"Factions","A","Deadly Arts",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Send out three Dancing Daggers at target foe, each striking for ",[5,35]," earth damage if they hit. Dancing Daggers has half the normal range. This skill counts as a lead attack."],
  {"damage": true, "lead-attack": true}, [
  ["Earth damage",5,35] ] );
g_skillsById[1029] = new Skill("Dark Apostasy",1029,"Factions","A","Critical Strikes",
  true,false,false,false,"Enchantment Spell",10,0,0.25,15,0,false,0,
  ["For ",[3,17]," seconds, every time you successfully land a critical hit, you remove one Enchantment from your target. If you remove an Enchantment in this way, you lose ",[10,4]," Energy or Dark Apostasy ends."],
  {"energy-leak": true}, [
  ["Duration",3,17],
  ["Energy lost",10,4] ] );
g_skillsById[116] = new Skill("Dark Aura",116,"Core","N","Death Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,10,0,false,0,
  ["For 30 seconds, whenever target ally sacrifices Health, Dark Aura deals ",[5,50]," shadow damage to adjacent foes, and you lose ",[5,20]," Health."],
  {"damage": true, "damage-aoe": true, "damage-self": true}, [
  ["Shadow damage",5,50],
  ["Health Loss",5,20] ] );
g_skillsById[138] = new Skill("Dark Bond",138,"Core","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",5,0,2,20,0,false,0,
  ["For the next ",[30,60]," seconds, whenever you receive damage, your closest minion suffers 75% of that damage for you."],
  {}, [
  ["Duration",30,60] ] );
g_skillsById[1037] = new Skill("Dark Escape",1037,"Factions","A","Shadow Arts",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[5,15]," seconds, you move 25% faster and take half damage. Dark Escape ends if you successfully hit with an attack."],
  {"move-buff": true}, [
  ["Duration",5,15] ] );
g_skillsById[147] = new Skill("Dark Fury",147,"Prophecies","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",10,0,0.75,5,0,false,4,
  ["For 5 seconds, whenever any party member hits with an attack, that party member gains one hit of adrenaline. (50% failure chance with Blood Magic of 4 or less.)"],
  {"adrenal-gain": true, "adrenal-gain-aoe": true, "sacrifice": true}, [
 ] );
g_skillsById[133] = new Skill("Dark Pact",133,"Core","N","Blood Magic",
  false,false,false,false,"Spell",1,0,1,2,0,false,0,
  ["Deal ",[10,48]," shadow damage to target foe."],
  {"damage": true, "sacrifice": true}, [
  ["Shadow damage",10,48] ] );
g_skillsById[1044] = new Skill("Dark Prison",1044,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",10,0,0.25,30,0,false,0,
  ["Shadow Step to target foe. For ",[1,6]," seconds, that foe moves 33% slower."],
  {"move-nerf": true, "shadowstep": true}, [
  ["Duration",1,6] ] );
g_skillsById[1043] = new Skill("Dash",1043,"Factions","A","No Attribute",
  false,false,false,false,"Stance",5,0,0,8,0,false,0,
  ["For 3 seconds, you run 50% faster."],
  {"move-buff": true}, [
 ] );
g_skillsById[1638] = new Skill("Deadly Haste",1638,"Nightfall","A","Critical Strikes",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[10,35]," seconds, half-ranged spells cast ",[5,50],"% faster and recharge ",[5,50],"% faster."],
  {}, [
  ["Duration",10,35],
  ["Casting %",5,50],
  ["Recharge %",5,50] ] );
g_skillsById[572] = new Skill("Deadly Paradox",572,"Nightfall","A","Deadly Arts",
  false,false,false,false,"Stance",15,0,0,10,0,false,0,
  ["All of your attack Skills are disabled for 10 seconds. For ",[5,15]," seconds, your Assassin Skills activate and recharge 33% faster."],
  {}, [
  ["Duration",5,15] ] );
g_skillsById[388] = new Skill("Deadly Riposte",388,"Prophecies","W","Tactics",
  false,false,false,false,"Skill",5,0,0,10,0,false,0,
  ["For 8 seconds, while you have a sword equipped, you block the next melee attack against you, and your attacker is struck for ",[15,90]," damage and begins Bleeding for ",[3,25]," seconds."],
  {"bleeding": true, "block": true, "damage": true}, [
  ["Damage",15,90],
  ["Bleeding",3,25] ] );
g_skillsById[775] = new Skill("Death Blossom",775,"Factions","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0,2,0,false,0,
  ["Must follow an off-hand attack. If it hits, Death Blossom strikes target foe for +",[20,45]," damage and all adjacent foes take ",[20,45]," damage."],
  {"damage": true, "damage-aoe": true}, [
  ["+ Damage",20,45],
  ["Damage (adjacent foes)",20,45] ] );
g_skillsById[104] = new Skill("Death Nova",104,"Core","N","Death Magic",
  false,false,false,false,"Enchantment Spell",5,0,2,0,0,false,0,
  ["For 30 seconds, if target ally dies, all adjacent foes take ",[26,100]," damage and are Poisoned for 15 seconds."],
  {"damage": true, "damage-aoe": true, "poison": true}, [
  ["Damage",26,100] ] );
g_skillsById[1481] = new Skill("Death Pact Signet",1481,"Nightfall","Rt","Restoration Magic",
  false,false,false,false,"Signet",0,0,3,12,0,false,0,
  ["Resurrect target party member with your current Health and ",[15,100],"% Energy. The next time that ally dies within 120 seconds, so do you."],
  {}, [
  ["Energy gain",15,100] ] );
g_skillsById[952] = new Skill("Death's Charge",952,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,30,0,false,0,
  ["Shadow Step to target foe. If that foe has more Health than you, you are healed for ",[65,200],"."],
  {"heal-self": true, "shadowstep": true}, [
  ["Healing",65,200] ] );
g_skillsById[1651] = new Skill("Death's Retreat",1651,"Nightfall","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,20,0,false,0,
  ["Shadow Step to target ally. If you have less Health than that ally, you gain ",[40,130]," Health."],
  {"heal-self": true, "shadowstep": true}, [
  ["Healing",40,130] ] );
g_skillsById[89] = new Skill("Deathly Chill",89,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Target foe is struck for ",[5,50]," cold damage. If that foe's Health is above 50%, you deal an additional ",[5,50]," shadow damage."],
  {"damage": true}, [
  ["Cold damage",5,50],
  ["Shadow damage",5,50] ] );
g_skillsById[105] = new Skill("Deathly Swarm",105,"Core","N","Death Magic",
  false,false,false,false,"Spell",10,0,2,6,0,false,0,
  ["Deathly Swarm flies out slowly and strikes for ",[30,90]," cold damage on up to three targets in the area."],
  {"damage": true, "damage-aoe": true}, [
  ["Damage",30,90] ] );
g_skillsById[406] = new Skill("Debilitating Shot",406,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,10,0,false,0,
  ["If Debilitating Shot hits, your target loses ",[1,10]," Energy."],
  {"energy-drain": true}, [
  ["Energy lost",1,10] ] );
g_skillsById[1696] = new Skill("Decapitate",1696,"Nightfall","W","Axe Mastery",
  true,false,false,false,"Axe Attack",0,8,0,0,0,false,0,
  ["You lose all adrenaline and all Energy. If this attack hits, you deal +",[5,50]," damage and cause a Deep Wound for ",[5,20]," seconds. This attack always results in a critical hit."],
  {"adrenal-gone": true, "critical-buff": true, "damage": true, "deepwound": true, "energy-gone": true}, [
  ["+ Damage",5,50],
  ["Deep Wound duration",5,20] ] );
g_skillsById[234] = new Skill("Deep Freeze",234,"Core","E","Water Magic",
  false,false,false,false,"Hex Spell",25,0,2,15,0,false,0,
  ["You cause a Deep Freeze at target foe's location. All foes in this location are struck for ",[10,85]," cold damage, and for 10 seconds, they move 66% slower."],
  {"damage": true, "damage-aoe": true, "move-nerf": true}, [
  ["Cold damage",10,85] ] );
g_skillsById[1688] = new Skill("Defender's Zeal",1688,"Nightfall","Mo","Smiting Prayers",
  true,false,false,false,"Hex Spell",5,0,1,5,0,false,0,
  ["For ",[5,25]," seconds, whenever target foe hits with an attack, you gain 2 Energy."],
  {}, [
  ["Duration",5,25] ] );
g_skillsById[1555] = new Skill("Defensive Anthem",1555,"Nightfall","P","Leadership",
  true,false,false,false,"Chant",15,0,2,25,0,false,0,
  ["For ",[4,10]," seconds, each party member within earshot has a 50% chance to block incoming attacks. This Chant ends if that party member hits with an attack Skill."],
  {"block": true}, [
  ["Duration",4,10] ] );
g_skillsById[345] = new Skill("Defensive Stance",345,"Core","W","Tactics",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[1,8]," seconds, you have +24 armor and you have a 75% chance to block melee and projectile attacks. Defensive Stance ends if you use a skill."],
  {"armor-buff": true, "block": true}, [
  ["Duration",1,8] ] );
g_skillsById[812] = new Skill("Defiant Was Xinrae",812,"Factions","Rt","Communing",
  true,false,false,false,"Item Spell",5,0,0.25,5,0,false,0,
  ["Hold Xinrae's ashes for up to ",[5,15]," seconds. While you hold her ashes, enemy Spells that the caster and the caster's allies use against you are disabled for an additional ",[5,20]," seconds."],
  {"spell-counter": true}, [
  ["Duration",5,15],
  ["Disabled",5,20] ] );
g_skillsById[2188] = new Skill("Defile Defenses",2188,"Eye of the North","N","Curses",
  false,false,false,false,"Hex Spell",5,0,1,5,0,false,0,
  ["For ",[5,20]," seconds, the next time target foe blocks, that foe takes ",[30,120]," damage."],
  {}, [
  ["Duration",5,20],
  ["Damage",30,120] ] );
g_skillsById[1070] = new Skill("Defile Enchantments",1070,"Factions","N","Curses",
  false,false,false,false,"Spell",10,0,2,15,0,false,0,
  ["Target foe and all nearby foes take ",[6,60]," shadow damage and ",[4,20]," shadow damage for each enchantment on them."],
  {"damage": true, "enchant-punish": true}, [
  ["Damage",6,60],
  ["Damage/Enchant",4,20] ] );
g_skillsById[129] = new Skill("Defile Flesh",129,"Core","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,10,0,false,0,
  ["For ",[5,35]," seconds, target foe gains only two-thirds Health from healing."],
  {"heal-nerf": true, "sacrifice": true}, [
  ["Duration",5,35] ] );
g_skillsById[373] = new Skill("Deflect Arrows",373,"Prophecies","W","Tactics",
  false,false,false,false,"Stance",5,0,0,10,0,false,0,
  ["For ",[1,8]," seconds, you have a 75% chance to block projectile attacks. This effect ends if you successfully hit with an attack."],
  {"block": true}, [
  ["Duration",1,8] ] );
g_skillsById[2228] = new Skill("Deft Strike",2228,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Ranged Attack",5,0,0.5,8,0,false,0,
  ["If this attack hits, target foe takes ",[10,30]," damage. If that foe has Cracked Armor, it begins Bleeding for ",[10,30]," seconds."],
  {}, [
  ["Damage",10,30],
  ["Bleeding duration",10,30] ] );
g_skillsById[318] = new Skill("Defy Pain",318,"Prophecies","W","Strength",
  true,false,false,false,"Skill",0,6,0,0,0,false,0,
  ["For 12 seconds you have an additional ",[90,300]," Health and an additional 20 armor."],
  {"armor-buff": true, "health-buff": true}, [
  ["+ Max Health",90,300] ] );
g_skillsById[130] = new Skill("Demonic Flesh",130,"Core","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",1,0,1,60,0,false,0,
  ["For ",[30,60]," seconds, your maximum Health is increased by ",[80,200],"."],
  {"health-buff": true, "sacrifice": true}, [
  ["Duration",30,60],
  ["+Max Health",80,200] ] );
g_skillsById[991] = new Skill("Deny Hexes",991,"Factions","Mo","Divine Favor",
  false,false,false,false,"Spell",5,0,1,12,0,false,0,
  ["Remove one Hex from target ally for each recharging Divine Favor skill you have."],
  {}, [
 ] );
g_skillsById[820] = new Skill("Depravity",820,"Nightfall","N","Curses",
  true,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[5,20]," seconds, whenever target foe casts a spell, that foe and one nearby foe lose ",[1,5]," Energy."],
  {"energy-drain": true}, [
  ["Duration",5,20],
  ["Energy lost",1,5] ] );
g_skillsById[112] = new Skill("Desecrate Enchantments",112,"Prophecies","N","Curses",
  false,false,false,false,"Spell",10,0,2,15,0,false,0,
  ["Target foe and all nearby foes take ",[6,60]," shadow damage and ",[4,20]," shadow damage for each enchantment on them."],
  {"damage": true, "enchant-punish": true}, [
  ["Damage",6,60],
  ["Damage per Enchantment",4,20] ] );
g_skillsById[948] = new Skill("Desperate Strike",948,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,6,0,false,0,
  ["If you have less than ",[50,80],"% Health, you deal +",[15,60]," damage."],
  {"damage": true}, [
  ["%Health",50,80],
  ["+ Damage",15,60] ] );
g_skillsById[323] = new Skill("Desperation Blow",323,"Prophecies","W","Tactics",
  false,false,false,false,"Melee Attack",5,0,0,7,0,false,0,
  ["If this attack hits, you strike for +",[10,40]," damage, and your target suffers from one of the following Conditions: Deep Wound (for 20 seconds), Weakness (for 20 seconds), Bleeding (for 25 seconds), or Crippled (for 15 seconds). After making a Desperation Blow, you are knocked down."],
  {"bleeding": true, "crippled": true, "damage": true, "deepwound": true, "weakness": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[920] = new Skill("Destruction",920,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Binding Ritual",5,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit that dies after 30 seconds. When this Spirit dies, all foes in the area take ",[1,5]," damage for each second the Spirit was alive."],
  {"damage": true, "spirit": true}, [
  ["Level",1,10],
  ["Damage",1,5] ] );
g_skillsById[1732] = new Skill("Destructive Was Glaive",1732,"Nightfall","Rt","Channeling Magic",
  true,false,false,false,"Spell",10,0,1,10,0,false,0,
  ["Hold Glaive's ashes for up to 10 seconds. While you hold her ashes, all Ritualist skills have 10% armor penetration. When you drop her ashes, you lose all Enchantments and all foes in the area are struck for ",[10,100]," lightning damage."],
  {"damage": true, "damage-buff": true}, [
  ["Lightning damage",10,100] ] );
g_skillsById[402] = new Skill("Determined Shot",402,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,10,0,false,0,
  ["If Determined Shot hits, you strike for +",[5,20]," damage. If Determined Shot fails to hit, all of your attack skills are recharged."],
  {"damage": true, "recharge-buff": true}, [
  ["+Damage",5,17] ] );
g_skillsById[355] = new Skill("Devastating Hammer",355,"Core","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,7,0,0,0,false,0,
  ["If Devastating Hammer hits, your target is knocked down and suffers from Weakness for ",[5,20]," seconds."],
  {"knockdown": true, "weakness": true}, [
  ["Weakness duration",5,20] ] );
g_skillsById[2066] = new Skill("Disarm",2066,"Eye of the North","W","Strength",
  false,false,false,false,"Sword Attack",5,0,0.5,12,0,false,0,
  ["Interrupt target foe's action. If that action was an attack, all of that foe's attack Skills are disabled for ",[0,5]," seconds."],
  {}, [
  ["Disabled duration",0,5] ] );
g_skillsById[1347] = new Skill("Discharge Enchantment",1347,"Nightfall","Me","Inspiration Magic",
  false,false,false,false,"Spell",10,0,1,15,0,false,0,
  ["Remove one Enchantment from target foe. If that foe is Hexed, this Skill recharges ",[20,50],"% faster."],
  {"enchant-remove": true, "recharge-buff": true}, [
  ["% faster",20,50] ] );
g_skillsById[376] = new Skill("Disciplined Stance",376,"Prophecies","W","Tactics",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[1,6]," seconds, you gain +24 armor and have a 75% chance to block attacks. Disciplined Stance ends if you use an adrenal skill."],
  {"armor-buff": true, "block": true}, [
  ["Duration",1,6] ] );
g_skillsById[817] = new Skill("Discord",817,"Factions","N","Death Magic",
  true,false,false,false,"Spell",5,0,2,2,0,false,0,
  ["If target foe is suffering from a condition and under the effects of a hex or an enchantment, that foe suffers ",[30,110]," damage."],
  {"damage": true}, [
  ["Damage",30,110] ] );
g_skillsById[923] = new Skill("Disenchantment",923,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",25,0,5,45,0,false,0,
  ["Create a level ",[1,8]," Spirit. This Spirit deals ",[5,20]," damage and anyone struck by its attack loses one Enchantment. This Spirit dies after ",[10,35]," seconds."],
  {"damage": true, "damage-aoe": true, "enchant-remove": true, "spirit": true}, [
  ["Spirit level",1,8],
  ["Damage",5,20],
  ["Spirit duration",10,35] ] );
g_skillsById[337] = new Skill("Dismember",337,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If it hits, this axe blow will inflict a Deep Wound on the target foe, lowering that foe's maximum Health by 20% for ",[5,20]," seconds."],
  {"deepwound": true}, [
  ["Deep Wound duration",5,20] ] );
g_skillsById[1691] = new Skill("Dismiss Condition",1691,"Nightfall","Mo","Protection Prayers",
  false,false,false,false,"Spell",5,0,0.75,3,0,false,0,
  ["Remove one Condition from target ally. If that ally is under the effects of an Enchantment, that ally is healed for ",[15,75]," Health."],
  {"heal": true}, [
  ["Healing",15,75] ] );
g_skillsById[1249] = new Skill("Displacement",1249,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",15,0,3,45,0,false,0,
  ["Create a level ",[1,10]," Spirit. All non-Spirit allies within its range have a 75% chance to block incoming attacks. Every time an attack is blocked in this way, this Spirit takes 60 damage. This Spirit dies after ",[30,60]," seconds."],
  {"block": true, "spirit": true}, [
  ["Level",1,10],
  ["Duration",30,60] ] );
g_skillsById[1723] = new Skill("Disrupting Accuracy",1723,"Nightfall","R","Marksmanship",
  false,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For 36 seconds, whenever your arrows critical, they also interrupt your target."],
  {}, [
 ] );
g_skillsById[340] = new Skill("Disrupting Chop",340,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,6,0,0,0,false,0,
  ["If it hits, this attack interrupts the target's current action. If that action was a skill, that skill is disabled for an additional 20 seconds."],
  {"interrupt": true, "lock": true}, [
 ] );
g_skillsById[571] = new Skill("Disrupting Dagger",571,"Nightfall","A","Deadly Arts",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["Send out a Disrupting Dagger at target foe that strikes for ",[10,35]," earth damage. If that foe was activating a Skill, that Skill is interrupted. This Spell has half the normal range."],
  {"damage": true, "interrupt": true}, [
  ["Earth damage",10,35] ] );
g_skillsById[445] = new Skill("Disrupting Lunge",445,"Core","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,10,0,false,0,
  ["Your animal companion attempts a Disrupting Lunge that deals +",[1,12]," damage. If that attack strikes a foe using a skill that skill is interrupted and is disabled for an additional 20 seconds."],
  {"damage": true, "interrupt": true, "lock": true}, [
  ["+Damage",1,12] ] );
g_skillsById[2143] = new Skill("Disrupting Shot",2143,"Eye of the North","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0.5,15,0,false,0,
  ["If this attack hits, target foe's action is interrupted. If that action was a Skill, you strike for +",[10,40]," damage."],
  {}, [
  ["+ Damage",10,40] ] );
g_skillsById[1025] = new Skill("Disrupting Stab",1025,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,10,0,false,0,
  ["If this attack hits, it interrupts target foe's action. If that action was a Spell, it is disabled for ",[3,10]," seconds."],
  {"lock": true}, [
  ["Disabled duration",3,10] ] );
g_skillsById[1604] = new Skill("Disrupting Throw",1604,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0.5,10,0,false,0,
  ["If this attack hits a foe suffering from a Condition, that foe is interrupted."],
  {"condition-punish": true}, [
 ] );
g_skillsById[921] = new Skill("Dissonance",921,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",25,0,5,45,0,false,0,
  ["Create a level ",[1,8]," Spirit. This Spirit deals ",[5,20]," damage and anyone struck by its attack is interrupted. This Spirit dies after ",[10,25]," seconds."],
  {"damage": true, "damage-aoe": true, "interrupt": true, "spirit": true}, [
  ["Spirit level",1,8],
  ["Damage",5,20],
  ["Spirit duration",10,25] ] );
g_skillsById[11] = new Skill("Distortion",11,"Prophecies","Me","Illusion Magic",
  false,false,false,false,"Stance",5,0,0,5,0,false,0,
  ["For ",[1,5]," seconds, you have a 75% chance to block attacks. Whenever you block an attack this way, you lose 2 Energy or Distortion ends."],
  {"block": true, "energy-leak": true}, [
  ["Duration",1,5] ] );
g_skillsById[325] = new Skill("Distracting Blow",325,"Core","W","No Attribute",
  false,false,false,false,"Melee Attack",5,0,0.5,10,0,false,0,
  ["Swipe your weapon at the target, dealing no damage but disrupting the target's current action (and the actions of foes adjacent to your target)."],
  {"interrupt": true, "interrupt-aoe": true}, [
 ] );
g_skillsById[399] = new Skill("Distracting Shot",399,"Core","R","Expertise",
  false,false,false,false,"Bow Attack",5,0,0.5,10,0,false,0,
  ["If Distracting Shot hits, it interrupts target foe's action but deals only ",[1,16]," damage. If the interrupted action was a skill, that skill is disabled for an additional 20 seconds."],
  {"damage": true, "interrupt": true, "lock": true}, [
  ["Damage",1,16] ] );
g_skillsById[2194] = new Skill("Distracting Strike",2194,"Eye of the North","W","No Attribute",
  false,false,false,false,"Melee Attack",5,0,0.5,15,0,false,0,
  ["If Distracting Strike hits, it interrupts target foe's action. If target foe has Cracked Armor, that skill is disabled for 20 seconds."],
  {}, [
 ] );
g_skillsById[30] = new Skill("Diversion",30,"Core","Me","Domination Magic",
  false,false,false,false,"Hex Spell",10,0,3,12,0,false,0,
  ["For 6 seconds, the next time target foe uses a skill, that skill takes an additional ",[10,56]," seconds to recharge."],
  {"lock": true}, [
  ["+Recharge",10,56] ] );
g_skillsById[1692] = new Skill("Divert Hexes",1692,"Nightfall","Mo","Protection Prayers",
  true,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Remove up to ",[1,3]," Hexes from target ally. For each Hex removed in this way, that ally loses one Condition and gains ",[15,75]," Health."],
  {"heal": true, "hex-remove": true}, [
  ["Hexes removed",1,3],
  ["Healing",15,75] ] );
g_skillsById[284] = new Skill("Divine Boon",284,"Core","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",5,0,0.25,10,-1,false,0,
  ["While you maintain this Enchantment, whenever you cast a Monk Spell that targets an ally, that ally is healed for ",[15,60]," Health, and you lose 2 Energy."],
  {"energy-leak": true, "heal-buff": true}, [
  ["Healing",15,60] ] );
g_skillsById[279] = new Skill("Divine Healing",279,"Prophecies","Mo","Divine Favor",
  false,false,false,false,"Spell",5,0,1,15,0,false,0,
  ["Heal yourself and party members within earshot for ",[15,60]," points."],
  {"heal": true, "heal-aoe": true}, [
  ["Healing",15,60] ] );
g_skillsById[246] = new Skill("Divine Intervention",246,"Core","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["For 10 seconds, the next time target ally receives damage that would be fatal, the damage is negated and that ally is healed for ",[26,240]," Health."],
  {"damage-limit": true, "heal": true}, [
  ["Health",26,240] ] );
g_skillsById[310] = new Skill("Divine Spirit",310,"Prophecies","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",10,0,0.25,60,0,false,0,
  ["For ",[1,14]," seconds, Monk Spells cost you 5 less Energy to cast. (Minimum cost: 1 Energy.)"],
  {"ecost-buff": true}, [
  ["Duration",1,14] ] );
g_skillsById[425] = new Skill("Dodge",425,"Prophecies","R","Expertise",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, you move 33% faster and have a ",[27,75],"% chance to block incoming projectiles. Dodge ends if you attack."],
  {"block": true, "move-buff": true}, [
  ["Duration",5,11],
  ["%Block chance",27,75] ] );
g_skillsById[361] = new Skill("Dolyak Signet",361,"Prophecies","W","Strength",
  false,false,false,false,"Signet",0,0,0,20,0,false,0,
  ["For ",[8,20]," seconds, you have +",[10,40]," armor and cannot be knocked down, but your movement is slowed by 75%."],
  {"armor-buff": true, "knockdown-counter": true}, [
  ["Duration",8,20],
  ["+Armor",10,40] ] );
g_skillsById[1264] = new Skill("Doom",1264,"Factions","Rt","Spawning Power",
  false,false,false,false,"Spell",10,0,1,8,0,false,0,
  ["Strike target foe for ",[10,40]," lightning (maximum 135) damage for every recharging Binding Ritual you have."],
  {"damage": true}, [
  ["Lightning damage",10,40] ] );
g_skillsById[1091] = new Skill("Double Dragon",1091,"Factions","E","Fire Magic",
  true,false,false,false,"Spell",15,0,0.75,30,0,false,0,
  ["For two seconds, foes adjacent to this location are struck for ",[7,112]," fire damage each second."],
  {"damage": true, "damage-aoe": true, "damage-ot": true}, [
  ["Fire damage",7,112] ] );
g_skillsById[907] = new Skill("Dragon Slash",907,"Factions","W","Swordsmanship",
  true,false,false,false,"Sword Attack",0,10,0,0,0,false,0,
  ["If Dragon Slash hits, you strike for +",[10,40]," damage and gain ",[1,5]," strikes of adrenaline."],
  {"adrenal-gain": true, "damage": true}, [
  ["+ Damage",10,40],
  ["Adrenaline",1,5] ] );
g_skillsById[1086] = new Skill("Dragon's Stomp",1086,"Factions","E","Earth Magic",
  false,false,false,false,"Spell",25,0,3,15,0,true,0,
  ["You invoke a Dragon's Stomp at target foe's location. All foes near this location are knocked down and are struck for ",[26,100]," earth damage. This Spell causes Exhaustion."],
  {"damage": true, "damage-aoe": true}, [
  ["Earth damage",26,100] ] );
g_skillsById[1337] = new Skill("Drain Delusions",1337,"Nightfall","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["Remove one Mesmer Hex from target foe. If a Hex was removed in this way, that foe loses ",[1,5]," Energy and you gain 2 Energy for each point lost."],
  {"energy-drain": true, "energy-gain": true}, [
  ["Energy gain",1,5,2],
  ["Energy loss",1,5] ] );
g_skillsById[68] = new Skill("Drain Enchantment",68,"Core","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,2,20,0,false,0,
  ["Remove an Enchantment from target foe. If an Enchantment is removed, you gain ",[8,13]," Energy and ",[40,120]," Health."],
  {"enchant-remove": true, "energy-gain": true}, [
  ["Energy Gain",8,13],
  ["Health Gain",40,120] ] );
g_skillsById[311] = new Skill("Draw Conditions",311,"Core","Mo","Protection Prayers",
  false,false,false,false,"Spell",5,0,0.25,2,0,false,0,
  ["All negative Conditions are transferred from target other ally to yourself. For each Condition acquired, you gain ",[6,26]," Health."],
  {"condition-remove": true, "condition-self": true, "heal-self": true}, [
  ["Health gain",6,26] ] );
g_skillsById[1224] = new Skill("Draw Spirit",1224,"Factions","Rt","No Attribute",
  false,false,false,false,"Spell",5,0,0.25,5,0,false,0,
  ["Teleport target allied Spirit to your location."],
  {}, [
 ] );
g_skillsById[1133] = new Skill("Drunken Blow",1133,"Factions","W","Tactics",
  false,false,false,false,"Melee Attack",5,0,0,7,0,false,0,
  ["If this attack hits, you strike for +",[10,40]," damage and your target suffers from one of the following Conditions: Deep Wound (for 20 seconds), Weakness (for 20 seconds), Bleeding (for 25 seconds), or Crippled (for 15 seconds). After making a Drunken Blow, you are knocked down."],
  {"bleeding": true, "crippled": true, "damage": true, "deepwound": true, "weakness": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[2218] = new Skill("Drunken Master",2218,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Stance",5,0,0,60,0,false,0,
  ["For ",[60,90]," seconds, your movement and attack speeds are increased by ",[10,15],"%. If you are drunk while activating this Skill, your movement and attack speeds are increased by ",[25,33],"% instead."],
  {}, [
  ["Duration",60,90],
  ["Speed increase (if sober)",10,15],
  ["Speed increase (if drunk)",25,33] ] );
g_skillsById[452] = new Skill("Dryder's Defenses",452,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Stance",5,0,0,60,0,false,0,
  ["For ",[5,11]," seconds, you gain 75% chance to block attacks and ",[34,60]," armor against elemental damage."],
  {"armor-buff": true, "block": true}, [
  ["Duration",5,11],
  ["+Armor",34,60] ] );
g_skillsById[396] = new Skill("Dual Shot",396,"Core","R","No Attribute",
  false,false,false,false,"Bow Attack",10,0,0,10,0,false,0,
  ["Shoot two arrows simultaneously at target foe. These arrows deal 25% less damage."],
  {}, [
 ] );
g_skillsById[1235] = new Skill("Dulled Weapon",1235,"Factions","Rt","Communing",
  false,false,false,false,"Hex Spell",10,0,1,12,0,false,0,
  ["For ",[5,20]," seconds, target foe and all nearby foes cannot achieve a critical hit."],
  {"critical-counter": true}, [
  ["Duration",5,20] ] );
g_skillsById[1497] = new Skill("Dust Cloak",1497,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.75,15,0,false,0,
  ["All adjacent foes are struck for ",[20,80]," earth damage. For 30 seconds, your attacks deal earth damage. When this Enchantment ends, all adjacent foes are Blinded for ",[1,5]," seconds."],
  {"blind": true, "damage": true}, [
  ["Earth damage",20,80],
  ["Blind Duration",1,5] ] );
g_skillsById[457] = new Skill("Dust Trap",457,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Trap",25,0,2,30,0,false,0,
  ["When Dust Trap is triggered, every second (for 5 seconds total), all nearby foes are Blinded for ",[3,8]," seconds and take ",[10,25]," damage. While activating this skill, you are easily interrupted. Dust Trap ends after 90 seconds."],
  {"blind": true, "damage": true}, [
  ["Blind duration",3,8],
  ["Earth damage",10,25] ] );
g_skillsById[375] = new Skill("Dwarven Battle Stance",375,"Prophecies","W","Strength",
  true,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[5,11]," seconds, you attack 33% faster, and if your hammer attacks hit, your target is interrupted. Dwarven Battle Stance ends if you use a skill."],
  {"attackspeed-buff": true, "interrupt": true}, [
  ["Duration",5,11] ] );
g_skillsById[2423] = new Skill("Dwarven Stability",2423,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["For ",[20,30]," seconds, your Stances last ",[30,100],"% longer. If you activated this Skill while drunk, you cannot be knocked down."],
  {}, [
  ["Duration",20,30],
  ["Stance duration increase %",30,100] ] );
g_skillsById[283] = new Skill("Dwayna's Kiss",283,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,3,0,false,0,
  ["Heal target other ally for ",[15,60]," Health and an additional ",[10,35]," Health for each Enchantment or Hex on that ally."],
  {"enchant-uses": true, "heal": true, "hex-uses": true}, [
  ["Healing",15,60],
  ["Additional healing",10,35] ] );
g_skillsById[838] = new Skill("Dwayna's Sorrow",838,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,5,0,false,0,
  ["For 30 seconds, target ally and all nearby allies are Enchanted with Dwayna's Sorrow. If an ally dies while under the effects of Dwayna's Sorrow, your party is healed for ",[5,50],"."],
  {"heal": true, "heal-aoe": true}, [
  ["Healing",5,50] ] );
g_skillsById[1528] = new Skill("Dwayna's Touch",1528,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",5,0,0.75,2,0,false,0,
  ["Target touched ally is healed for ",[15,60]," Health for each Enchantment on you (maximum 150)."],
  {"heal": true, "touch": true}, [
  ["Healing",15,60] ] );
g_skillsById[2213] = new Skill("Ear Bite",2213,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Skill",0,4,0.75,0,0,false,0,
  ["Target touched foe begins Bleeding for ",[10,25]," seconds."],
  {}, [
  ["Bleeding duration",10,25] ] );
g_skillsById[169] = new Skill("Earth Attunement",169,"Core","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[36,60]," seconds, you are attuned to Earth. You gain 1 Energy plus 30% of the base Energy cost of the Skill each time you use Earth Magic."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",36,60] ] );
g_skillsById[354] = new Skill("Earth Shaker",354,"Prophecies","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,8,0,0,0,false,4,
  ["Target foe and all adjacent foes are knocked down. (50% failure chance with Hammer Mastery 4 or less.)"],
  {"knockdown": true}, [
 ] );
g_skillsById[1252] = new Skill("Earthbind",1252,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",15,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. All non-Spirit foes knocked down within its range are knocked down for at least 3 seconds. Whenever this happens, this Spirit loses ",[50,25]," Health. This Spirit dies after ",[15,45]," seconds."],
  {"damage-self": true, "knockdown-buff": true, "spirit": true}, [
  ["Level",1,10],
  ["Health Lost",50,25],
  ["Duration",15,45] ] );
g_skillsById[2000] = new Skill("Earthen Shackles",2000,"Eye of the North","E","Earth Magic",
  false,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[5,20]," seconds, target foe moves 90% slower while Burning."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[170] = new Skill("Earthquake",170,"Prophecies","E","Earth Magic",
  false,false,false,false,"Spell",25,0,3,15,0,true,0,
  ["You invoke an Earthquake at target foe's location. All foes near this location are knocked down and are struck for ",[26,100]," earth damage. This Spell causes Exhaustion."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Earth damage",26,100] ] );
g_skillsById[2231] = new Skill("Ebon Battle Standard of Courage",2231,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Ward Spell",10,0,1,20,0,false,0,
  ["You plant an Ebon Battle Standard of Courage at your current location. For <span style=\"color: green; font-weight: bold;\">10...20</span> seconds, non-Spirit allies in this area gain +24 armor and an additional +24 armor against Charr."],
  {}, [
  ["Duration",10,20] ] );
g_skillsById[2233] = new Skill("Ebon Battle Standard of Honor",2233,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Ward Spell",10,0,1,20,0,false,0,
  ["You plant an Ebon Battle Standard of Honor at your current location. For <span style=\"color: green; font-weight: bold;\">10...20</span> seconds, non-Spirit allies in this area strike for +<span style=\"color: green; font-weight: bold;\">5...15</span> damage and an additional +<span style=\"color: green; font-weight: bold;\">5...10</span> vs. Charr."],
  {}, [
  ["Duration",10,20],
  ["Bonus damage",5,15],
  ["Bonus damage vs. Charr",5,10] ] );
g_skillsById[2232] = new Skill("Ebon Battle Standard of Wisdom",2232,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Ward Spell",10,0,1,20,0,false,0,
  ["You plant an Ebon Battle Standard of Wisdom at your current location. For ",[10,20]," seconds, non-Spirit allies in this area have a ",[30,60],"% chance to halve skill recharge of spells they cast."],
  {}, [
  ["Duration",10,20],
  ["HSR chance %",30,60] ] );
g_skillsById[1760] = new Skill("Ebon Dust Aura",1760,"Nightfall","D","Earth Prayers",
  true,false,false,false,"Enchantment Spell",10,0,0.25,20,0,false,0,
  ["For ",[5,35]," seconds, if you are wielding an earth weapon, your attack Skills also cause Blindness for ",[4,10]," seconds."],
  {"blind": true}, [
  ["Duration",5,35],
  ["Blind duration",4,10] ] );
g_skillsById[2420] = new Skill("Ebon Escape",2420,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Spell",5,0,0.25,10,0,false,0,
  ["Shadow Step to target other ally. You and that other ally are healed for ",[40,90]," health."],
  {}, [
  ["Healing",40,90] ] );
g_skillsById[1374] = new Skill("Ebon Hawk",1374,"Nightfall","E","Earth Magic",
  false,false,false,false,"Spell",10,0,2,5,0,false,0,
  ["Send a projectile that strikes for ",[45,100]," earth damage if it hits. If this Spell hits a moving or attacking foe, that foe suffers from Weakness for ",[5,15]," seconds."],
  {"damage": true, "weakness": true}, [
  ["Earth damage",45,100],
  ["Weakness Duration",5,15] ] );
g_skillsById[2235] = new Skill("Ebon Vanguard Assassin Support",2235,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Spell",10,0,1,30,0,false,0,
  ["Summon a level ",[10,20]," Ebon Vanguard Assassin that has Iron Palm, Fox Fangs and Nine Tail Strike. This summoned Assassin Shadow Steps to target foe. If that foe is a Charr, the Assassin lives for ",[20,30]," seconds. If target foe is not a Charr, the Assassin lives for ",[10,15]," seconds."],
  {}, [
  ["Assassin Level",10,20],
  ["Duration (if Charr)",20,30],
  ["Duration (if not Charr)",10,15] ] );
g_skillsById[2234] = new Skill("Ebon Vanguard Sniper Support",2234,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Spell",10,0,1,15,0,false,0,
  ["Target foe and all adjacent foes are stuck for ",[30,90]," piercing damage. If this attack hits a Charr, it also begins Bleeding for ",[10,20]," seconds."],
  {}, [
  ["Damage",30,90],
  ["Bleeding duration vs. Charr",10,20] ] );
g_skillsById[74] = new Skill("Echo",74,"Core","Me","No Attribute",
  true,false,false,false,"Enchantment Spell",5,0,1,10,0,false,0,
  ["For 30 seconds, Echo is replaced with the next Skill you use. Echo acts as this Skill for 30 seconds."],
  {"recharge-buff": true, "skill-copy": true}, [
 ] );
g_skillsById[464] = new Skill("Edge of Extinction",464,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. If a non-Spirit creature within range dies, Edge of Extinction deals ",[14,50]," damage to all creatures of the same type that are below 90% Health and within range of the Spirit. This Spirit dies after ",[30,150]," seconds."],
  {"damage": true, "spirit": true}, [
  ["Level",1,10],
  ["Damage",14,50],
  ["Duration",30,150] ] );
g_skillsById[164] = new Skill("Elemental Attunement",164,"Core","E","Energy Storage",
  true,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[30,55]," seconds, you are attuned to Air, Fire, Water, and Earth. You gain 50% of the base Energy cost of the skill each time you use magic associated with any of these elements."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",30,55] ] );
g_skillsById[1663] = new Skill("Elemental Flame",1663,"Nightfall","E","Fire Magic",
  false,false,false,false,"Hex Spell",5,0,1,5,0,false,0,
  ["For ",[5,20]," seconds, whenever an Elemental Hex ends on target foe, that foe is set on fire for ",[3,5]," seconds."],
  {"burning": true}, [
  ["Duration",5,20],
  ["Burning",3,5] ] );
g_skillsById[2094] = new Skill("Elemental Lord (Kurzick)",2094,"Factions","E","Kurzick rank",
  false,false,false,true,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For ",[30,60]," seconds, your elemental attributes are boosted by 1."],
  {}, [
 ] );
g_skillsById[1951] = new Skill("Elemental Lord (Luxon)",1951,"Factions","E","Luxon rank",
  false,false,false,true,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For ",[30,60]," seconds, your elemental attributes are boosted by 1."],
  {}, [
 ] );
g_skillsById[72] = new Skill("Elemental Resistance",72,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, You gain +40 armor against elemental damage, but you lose ",[24,12]," armor against physical damage."],
  {"armor-buff": true, "armor-nerf-self": true}, [
  ["Duration",30,90],
  ["Armor loss",24,12] ] );
g_skillsById[1126] = new Skill("Empathic Removal",1126,"Factions","Mo","No Attribute",
  true,false,false,false,"Spell",5,0,1,7,0,false,0,
  ["You and target other ally lose 1 Condition and 1 Hex."],
  {}, [
 ] );
g_skillsById[26] = new Skill("Empathy",26,"Core","Me","Domination Magic",
  false,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For ",[5,15]," seconds, whenever target foe attacks, that foe takes ",[10,55]," damage."],
  {"attack-punish": true, "damage": true, "damage-ot": true}, [
  ["Duration",5,15],
  ["Damage",10,55] ] );
g_skillsById[1747] = new Skill("Empowerment",1747,"Nightfall","Rt","Spawning Power",
  false,false,false,false,"Binding Ritual",5,0,3,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. All allies within its range holding an item gain ",[15,45]," maximum Health and 10 maximum Energy. This Spirit dies after ",[15,60]," seconds."],
  {"energy-buff": true, "health-buff": true, "item-uses": true, "spirit": true}, [
  ["Level",1,10],
  ["+Max Health",15,45],
  ["Duration",15,60] ] );
g_skillsById[1541] = new Skill("Enchanted Haste",1541,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[5,20]," seconds, if you are under the effects of an Enchantment, you move 25% faster."],
  {"move-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[1345] = new Skill("Enchanter's Conundrum",1345,"Nightfall","Me","Domination Magic",
  true,false,false,false,"Hex Spell",10,0,2,20,0,false,0,
  ["For 10 seconds, target foe casts enchantments 100% slower. When this hex is applied, that foe takes ",[30,120]," damage if not under the effects of an enchantment or hex spell."],
  {"damage": true}, [
  ["Damage",30,120] ] );
g_skillsById[347] = new Skill("Endure Pain",347,"Core","W","Strength",
  false,false,false,false,"Skill",5,0,0,30,0,false,0,
  ["For ",[7,18]," seconds you have an additional ",[90,300]," Health."],
  {"health-buff": true}, [
  ["Duration",7,18],
  ["+Maximum health",90,300] ] );
g_skillsById[1574] = new Skill("Enduring Harmony",1574,"Nightfall","P","Leadership",
  false,false,false,false,"Echo",5,0,1,10,0,false,0,
  ["For ",[10,35]," seconds, Chants and Shouts last 50% longer on target non-Spirit ally."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[800] = new Skill("Enduring Toxin",800,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",5,0,0.25,10,0,false,0,
  ["For 5 seconds, target foe suffers -",[1,5]," Health degeneration. If that foe is moving when Enduring Toxin would end, Enduring Toxin is renewed for another 5 seconds."],
  {"health-degen": true}, [
  ["Health Degeneration",1,5] ] );
g_skillsById[2016] = new Skill("Energetic Was Lee Sa",2016,"Eye of the North","Rt","Spawning Power",
  false,false,false,false,"Item Spell",10,0,2,20,0,false,0,
  ["Hold Lee Sa's ashes for ",[5,15]," seconds. While you hold her ashes, you gain +2 Energy regeneration. When you drop her ashes, you gain +",[1,10]," Energy."],
  {}, [
  ["Duration",5,15],
  ["Energy gain",1,10] ] );
g_skillsById[1569] = new Skill("Energizing Chorus",1569,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",0,4,1,0,0,false,0,
  ["For 10 seconds, the next Shout or Chant used by each ally within earshot costs ",[3,7]," less Energy."],
  {"ecost-buff": true}, [
  ["-Energy cost",3,7] ] );
g_skillsById[1775] = new Skill("Energizing Finale",1775,"Nightfall","P","Motivation",
  false,false,false,false,"Echo",10,0,1,5,0,false,0,
  ["For ",[10,35]," seconds, whenever a Shout or Chant ends on target non-Spirit ally, that ally gains 1 Energy."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",10,35] ] );
g_skillsById[474] = new Skill("Energizing Wind",474,"Core","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",15,0,5,60,0,false,0,
  ["Create a level ",[1,6]," Spirit. For non-Spirit creatures within its range, all skills cost 15 less Energy (minimum cost 10 Energy), and skills recharge 25% slower. This Spirit dies after ",[1,31]," seconds."],
  {"ecost-buff": true, "spirit": true}, [
  ["Level",1,6],
  ["Duration",1,31] ] );
g_skillsById[2193] = new Skill("Energy Blast",2193,"Eye of the North","E","Energy Storage",
  false,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["Target foe takes ",[1,2]," damage for each point of Energy you have (maximum 130 damage)."],
  {}, [
  ["Damage per energy",1,2] ] );
g_skillsById[837] = new Skill("Energy Boon",837,"Factions","E","Energy Storage",
  true,false,false,false,"Spell",5,0,1,15,0,true,0,
  ["You gain ",[10,20]," Energy. Energy Boon causes Exhaustion."],
  {"energy-gain": true}, [
  ["Energy gain",10,20] ] );
g_skillsById[42] = new Skill("Energy Burn",42,"Core","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["Target foe loses ",[3,8]," Energy and takes 12 damage for each point of Energy lost."],
  {"damage": true, "energy-drain": true}, [
  ["Damage",3,8,12],
  ["Energy loss",3,8] ] );
g_skillsById[79] = new Skill("Energy Drain",79,"Core","Me","Inspiration Magic",
  true,false,false,false,"Spell",5,0,1,25,0,false,0,
  ["Target foe loses ",[2,9]," Energy. You gain 2 Energy for each point of Energy lost."],
  {"energy-drain": true, "energy-gain": true}, [
  ["Energy gain",2,9,2],
  ["Energy loss",2,9] ] );
g_skillsById[39] = new Skill("Energy Surge",39,"Core","Me","Domination Magic",
  true,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["Target foe loses ",[3,8]," Energy. For each point of Energy lost, that foe and all nearby foes take 12 damage."],
  {"damage": true, "damage-aoe": true, "energy-drain": true}, [
  ["Damage",3,8,12],
  ["Energy loss",3,8] ] );
g_skillsById[80] = new Skill("Energy Tap",80,"Core","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,3,25,0,false,0,
  ["Target foe loses ",[4,7]," Energy. You gain 2 Energy for each point of Energy lost."],
  {"energy-drain": true, "energy-gain": true}, [
  ["Energy gain",4,7,2],
  ["Energy loss",4,7] ] );
g_skillsById[224] = new Skill("Enervating Charge",224,"Core","E","Air Magic",
  false,false,false,false,"Spell",10,0,1,8,0,false,0,
  ["Target foe is struck for ",[25,50]," lightning damage and suffers from Weakness for ",[5,20]," seconds. This Spell has 25% armor penetration."],
  {"damage": true, "weakness": true}, [
  ["Lightning damage",25,50],
  ["Weakness duration",5,20] ] );
g_skillsById[117] = new Skill("Enfeeble",117,"Prophecies","N","Curses",
  false,false,false,false,"Spell",5,0,0.25,5,0,false,0,
  ["Target suffers from Weakness for ",[10,30]," seconds."],
  {"weakness": true}, [
  ["Weakness",10,30] ] );
g_skillsById[118] = new Skill("Enfeebling Blood",118,"Core","N","Curses",
  false,false,false,false,"Spell",1,0,1,8,0,false,0,
  ["Target foe and all nearby foes suffer from Weakness for ",[5,20]," seconds."],
  {"sacrifice": true, "weakness": true}, [
  ["Weakness duration",5,20] ] );
g_skillsById[1079] = new Skill("Enfeebling Touch",1079,"Factions","N","Curses",
  false,false,false,false,"Skill",5,0,0.75,5,0,false,0,
  ["Target touched foe loses ",[5,50]," Health and suffers from Weakness for ",[5,20]," seconds."],
  {"damage": true, "touch": true, "weakness": true}, [
  ["Health",5,50],
  ["Weakness",5,20] ] );
g_skillsById[1202] = new Skill("Enraged Lunge",1202,"Factions","R","Beast Mastery",
  true,false,false,false,"Pet Attack",5,0,0,5,0,false,0,
  ["Your animal companion attempts an Enraged Lunge that deals +",[3,23]," damage (maximum bonus 80) for each recharging Beast Mastery skill."],
  {"damage": true}, [
  ["+ Damage",3,23] ] );
g_skillsById[993] = new Skill("Enraged Smash",993,"Factions","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,2,0,0,0,false,0,
  ["If it hits, Enraged Smash deals +",[5,11]," damage (maximum bonus 40) for each other fully charged adrenal skill you have."],
  {"damage": true}, [
  ["+ Damage",5,11] ] );
g_skillsById[1414] = new Skill("Enraging Charge",1414,"Nightfall","W","Strength",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,15]," seconds, you move 25% faster. Enraging Charge ends when you successfully strike a target, at which point you gain ",[0,4]," strikes of adrenaline."],
  {"adrenal-gain": true, "move-buff": true}, [
  ["Duration",5,15],
  ["Adrenaline",0,4] ] );
g_skillsById[784] = new Skill("Entangling Asp",784,"Factions","A","Deadly Arts",
  false,false,false,false,"Spell",10,0,1,20,0,false,0,
  ["Entangling Asp must follow a lead attack. Target foe is knocked down and becomes Poisoned for ",[5,20]," seconds."],
  {"knockdown": true, "poison": true}, [
  ["Poisoned",5,20] ] );
g_skillsById[936] = new Skill("Envenom Enchantments",936,"Nightfall","N","Curses",
  false,false,false,false,"Spell",5,0,1,20,0,false,0,
  ["Target foe loses one enchantment. For every remaining enchantment, target foe is poisoned for ",[3,10]," seconds."],
  {"poison": true}, [
  ["Poison duration",3,10] ] );
g_skillsById[78] = new Skill("Epidemic",78,"Core","Me","No Attribute",
  false,false,false,false,"Spell",5,0,0.25,5,0,false,0,
  ["Spread all negative Conditions and their remaining durations from target foe to all foes adjacent to your target."],
  {"condition": true, "condition-aoe": true, "condition-punish": true}, [
 ] );
g_skillsById[1212] = new Skill("Equinox",1212,"Factions","R","Wilderness Survival",
  true,false,false,false,"Nature Ritual",10,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit. Spells cast within its range that cause Exhaustion, cause double the Exhaustion instead. This Spirit dies after ",[30,150]," seconds."],
  {"exhaust": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,150] ] );
g_skillsById[1485] = new Skill("Eremite's Attack",1485,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0.75,4,0,false,0,
  ["If this attack hits, you deal +",[5,10]," damage for each adjacent foe (maximum 30 bonus damage)."],
  {"damage": true}, [
  ["+Damage",5,10] ] );
g_skillsById[1524] = new Skill("Eremite's Zeal",1524,"Nightfall","D","Mysticism",
  false,false,false,false,"Spell",5,0,1,4,0,false,0,
  ["Lose 1 Enchantment. You gain ",[1,6]," Energy for each adjacent foe (maximum 15 Energy)."],
  {"energy-gain": true}, [
  ["Energy gain",1,6] ] );
g_skillsById[167] = new Skill("Eruption",167,"Prophecies","E","Earth Magic",
  false,false,false,false,"Spell",25,0,2,30,0,false,0,
  ["Cause an Eruption at target foe's location. Each second for 5 seconds, foes near this location are struck for ",[10,40]," earth damage and are Blinded for 10 seconds."],
  {"blind": true, "damage": true, "damage-aoe": true}, [
  ["Earth damage",10,40] ] );
g_skillsById[448] = new Skill("Escape",448,"Core","R","Expertise",
  true,false,false,false,"Stance",5,0,0,12,0,false,0,
  ["For ",[1,8]," seconds, you move 33% faster and have a 75% chance to block attacks."],
  {"block": true, "move-buff": true}, [
  ["Duration",1,8] ] );
g_skillsById[250] = new Skill("Essence Bond",250,"Prophecies","Mo","No Attribute",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["No Attribute While you maintain this Enchantment, whenever target ally takes physical or elemental damage, you gain 1 Energy."],
  {"energy-gain": true, "energy-gain-ot": true}, [
 ] );
g_skillsById[1227] = new Skill("Essence Strike",1227,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe is struck for ",[15,60]," lightning damage. If any Spirits are within earshot, you gain ",[1,9]," Energy."],
  {"damage": true, "energy-gain": true, "spirit-uses": true}, [
  ["Lightning damage",15,60],
  ["Energy Gain",1,9] ] );
g_skillsById[2109] = new Skill("Eternal Aura",2109,"Nightfall","D","Sunspear rank",
  false,false,false,true,"Enchantment Spell",10,0,1,30,0,false,0,
  ["All nearby foes take ",[40,100]," holy damage. For 10 seconds, nothing happens. When this Enchantment ends, all other Dervish Skills are recharged."],
  {}, [
 ] );
g_skillsById[40] = new Skill("Ether Feast",40,"Core","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe loses 3 Energy. You are healed ",[20,50]," for each point of Energy lost."],
  {"energy-drain": true, "heal-self": true}, [
  ["Total Healing",20,50,3],
  ["Health/Energy point",20,50] ] );
g_skillsById[41] = new Skill("Ether Lord",41,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Hex Spell",5,0,2,20,0,false,0,
  ["You lose all Energy. For ",[5,10]," seconds, target foe suffers -",[1,3]," Energy degeneration, and you experience +",[1,3]," Energy regeneration."],
  {"energy-degen": true, "energy-regen": true}, [
  ["Duration",5,10],
  ["Energy degeneration",1,3],
  ["Energy regeneration",1,3] ] );
g_skillsById[2092] = new Skill("Ether Nightmare (Kurzick)",2092,"Factions","Me","Kurzick rank",
  false,false,false,true,"Hex Spell",10,0,3,15,0,false,0,
  ["Target foe loses ",[4,8]," Energy. For each point of Energy lost in this way, that foe and all foes in the area suffer -1 Health degeneration for 10 seconds."],
  {}, [
 ] );
g_skillsById[1949] = new Skill("Ether Nightmare (Luxon)",1949,"Factions","Me","Luxon rank",
  false,false,false,true,"Hex Spell",10,0,3,15,0,false,0,
  ["Target foe loses ",[4,8]," Energy. For each point of Energy lost in this way, that foe and all foes in the area suffer -1 Health degeneration for 10 seconds."],
  {}, [
 ] );
g_skillsById[1343] = new Skill("Ether Phantom",1343,"Nightfall","Me","Inspiration Magic",
  false,false,false,false,"Hex Spell",5,0,1,10,0,false,0,
  ["For 10 seconds, target foe has -1 Energy degeneration. If this Hex is removed prematurely, that foe loses ",[1,5]," Energy."],
  {"energy-degen": true, "energy-drain": true}, [
  ["Energy lost",1,5] ] );
g_skillsById[1377] = new Skill("Ether Prism",1377,"Nightfall","E","Energy Storage",
  true,false,false,false,"Spell",25,0,2,10,0,false,0,
  ["Gain ",[0,2]," Energy for each point of Energy you have (maximum 50 Energy)."],
  {"energy-gain": true}, [
  ["Energy gain <br />per Energy point",0,2] ] );
g_skillsById[178] = new Skill("Ether Prodigy",178,"Prophecies","E","Energy Storage",
  true,false,false,false,"Enchantment Spell",5,0,1,5,0,true,0,
  ["Lose all Enchantments. For ",[5,20]," seconds, you gain +6 Energy regeneration. When Ether Prodigy ends, you lose 3 Health for each point of Energy you have. This Spell causes Exhaustion."],
  {"damage-self": true, "energy-regen": true}, [
  ["Duration",5,20] ] );
g_skillsById[181] = new Skill("Ether Renewal",181,"Prophecies","E","Energy Storage",
  true,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For 7 seconds, each time you cast a Spell, you gain ",[1,3]," Energy and ",[5,20]," Health for each Enchantment on you."],
  {"energy-gain": true, "energy-gain-ot": true, "heal-self": true}, [
  ["Energy gain",1,3],
  ["Health gain",5,20] ] );
g_skillsById[881] = new Skill("Ether Signet",881,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Signet",0,0,1,45,0,false,0,
  ["If you have less than ",[5,10]," Energy, gain ",[10,20]," Energy."],
  {"energy-gain": true}, [
  ["Max Energy req.",5,10],
  ["Energy gain",10,20] ] );
g_skillsById[45] = new Skill("Ethereal Burden",45,"Prophecies","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",15,0,1,30,0,false,0,
  ["For 10 seconds, target foe moves 50% slower. When Ethereal Burden ends, you gain ",[10,22]," Energy."],
  {"energy-gain": true, "move-nerf": true}, [
  ["Energy gain",10,22] ] );
g_skillsById[959] = new Skill("Ethereal Light",959,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Target ally is healed for ",[25,100],". This Spell is easily interrupted."],
  {"heal": true}, [
  ["Healing",25,100] ] );
g_skillsById[338] = new Skill("Eviscerate",338,"Prophecies","W","Axe Mastery",
  true,false,false,false,"Axe Attack",0,8,0,0,0,false,0,
  ["If Eviscerate hits, you strike for +",[1,31]," damage and inflict a Deep Wound, lowering your target's maximum Health by 20% for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["+Damage",1,31],
  ["Deep Wound",5,20] ] );
g_skillsById[336] = new Skill("Executioner's Strike",336,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,8,0,0,0,false,0,
  ["If this attack hits, you strike for +",[10,40]," damage."],
  {"damage": true}, [
  ["+Damage",10,40] ] );
g_skillsById[975] = new Skill("Exhausting Assault",975,"Factions","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0.5,8,0,false,0,
  ["Must follow a lead attack. Target foe's action is interrupted. If that action was casting a Spell, target foe suffers from Exhaustion."],
  {"exhaust": true}, [
 ] );
g_skillsById[954] = new Skill("Expel Hexes",954,"Factions","Me","No Attribute",
  true,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Remove up to 2 Hexes from target ally."],
  {"hex-remove": true}, [
 ] );
g_skillsById[2145] = new Skill("Expert Focus",2145,"Eye of the North","R","Expertise",
  false,false,false,false,"Preparation",10,0,2,12,0,false,0,
  ["For 24 seconds, your bow attacks cost ",[1,2]," less Energy and deal ",[1,10]," extra damage."],
  {}, [
  ["Less energy cost",1,2],
  ["Extra damage",1,10] ] );
g_skillsById[1724] = new Skill("Expert's Dexterity",1724,"Nightfall","R","Expertise",
  true,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For 24 seconds, all your attack Skills cost 150% more Energy and recharge ",[15,75],"% faster."],
  {"recharge-buff": true}, [
  ["Faster recharge %",15,75] ] );
g_skillsById[1229] = new Skill("Explosive Growth",1229,"Factions","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",5,0,2,45,0,false,0,
  ["For ",[15,60]," seconds, whenever you create a creature, up to 5 foes near that creature are struck for ",[20,65]," lightning damage."],
  {"damage": true}, [
  ["Duration",15,60],
  ["Lightning damage",20,65] ] );
g_skillsById[802] = new Skill("Expose Defenses",802,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",10,0,1,25,0,false,0,
  ["For ",[1,11]," seconds, target foe cannot block your attacks."],
  {"block-counter": true}, [
  ["Duration",1,11] ] );
g_skillsById[990] = new Skill("Expunge Enchantments",990,"Factions","A","Deadly Arts",
  false,false,false,false,"Skill",10,0,0.75,30,0,false,0,
  ["Target foe loses 1 Enchantment. All of your other non-attack skills are disabled for ",[10,5]," seconds. For each skill disabled in this way, target touched foe loses 1 additional Enchantment."],
  {"enchant-remove": true, "touch": true}, [
  ["Duration",10,5] ] );
g_skillsById[1508] = new Skill("Extend Enchantments",1508,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",5,0,0.25,20,0,false,0,
  ["Lose all Enchantments. For ",[5,20]," seconds, Enchantments cast upon you last 100% longer. When this Enchantment ends, you lose all Enchantments on you."],
  {"enchant-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[943] = new Skill("Extinguish",943,"Factions","Mo","Protection Prayers",
  false,false,false,false,"Spell",15,0,1,12,0,false,0,
  ["Remove one Condition from each party member. Party members relieved of Burning are healed for ",[10,100]," Health."],
  {"heal": true}, [
  ["Healing",10,100] ] );
g_skillsById[135] = new Skill("Faintheartedness",135,"Core","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,8,0,false,0,
  ["For the next ",[3,24]," seconds, target foe attacks 50% slower, and that foe suffers -",[1,3]," Health degeneration."],
  {"health-degen": true}, [
  ["Duration",3,24],
  ["Health degeneration",1,3] ] );
g_skillsById[1509] = new Skill("Faithful Intervention",1509,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",5,0,2,20,0,false,0,
  ["If damage drops your Health below 50%, Faithful Intervention ends. When Faithful Intervention ends, you are healed for ",[30,150]," Health."],
  {"heal": true}, [
  ["Healing",30,150] ] );
g_skillsById[1990] = new Skill("Falling Lotus Strike",1990,"Eye of the North","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,12,0,false,0,
  ["Must strike a knocked-down foe. If it hits, you strike for +",[15,35]," damage and gain ",[1,12]," Energy."],
  {}, [
  ["+Damage",15,35],
  ["Energy gain",1,12] ] );
g_skillsById[778] = new Skill("Falling Spider",778,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,8,0,false,0,
  ["Must strike a knocked-down foe. If it hits, Falling Spider strikes for +",[15,35]," damage and target foe is Poisoned for ",[5,20]," seconds."],
  {"damage": true, "knockdown-punish": true, "poison": true}, [
  ["+ Damage",15,35],
  ["Poisoned duration",5,20] ] );
g_skillsById[997] = new Skill("Famine",997,"Factions","R","Wilderness Survival",
  true,false,false,false,"Nature Ritual",10,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit. Whenever a non-Spirit creature in its range reaches 0 Energy, that creature takes ",[10,35]," damage. This Spirit dies after ",[30,90]," seconds."],
  {"damage": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Damage",10,35],
  ["Spirit duration",30,90] ] );
g_skillsById[2015] = new Skill("Farmer's Scythe",2015,"Eye of the North","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,12,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If you hit more than one foe, this attack recharges instantly."],
  {}, [
  ["+ Damage",5,20] ] );
g_skillsById[472] = new Skill("Favorable Winds",472,"Core","R","Marksmanship",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, arrows move twice as fast and strike for +6 damage. This Spirit dies after ",[30,150]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,150] ] );
g_skillsById[1354] = new Skill("Feast for the Dead",1354,"Nightfall","N","Death Magic",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["Destroy target animated undead ally. All of your other animated undead allies are healed for ",[10,100]," Health."],
  {"heal": true}, [
  ["Healed",10,100] ] );
g_skillsById[151] = new Skill("Feast of Corruption",151,"Prophecies","N","Curses",
  true,false,false,false,"Spell",15,0,2,20,0,false,0,
  ["Target foe and all adjacent foes are struck for ",[16,80]," shadow damage. You steal up to ",[8,40]," Health from each struck foe who is suffering from a hex."],
  {"damage": true, "health-steal": true}, [
  ["Shadow damage",16,80],
  ["Life stealing",8,40] ] );
g_skillsById[980] = new Skill("Feast of Souls",980,"Factions","Rt","Spawning Power",
  false,false,false,false,"Spell",10,0,0.25,10,0,false,0,
  ["Destroy all nearby allies' Spirits. For each Spirit destroyed in this way, all party members are healed for ",[50,100]," Health."],
  {"heal": true, "heal-aoe": true, "spirit-uses": true}, [
  ["Healing",50,100] ] );
g_skillsById[1766] = new Skill("Featherfoot Grace",1766,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,15,0,false,0,
  ["For ",[5,20]," seconds, you move 25% faster, and Conditions expire 50% faster."],
  {"move-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[1061] = new Skill("Feedback",1061,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Spell",10,0,2,30,0,false,0,
  ["Target foe loses one Enchantment. If an Enchantment is removed in this way, that foe also loses ",[4,10]," Energy."],
  {"enchant-remove": true, "energy-drain": true}, [
  ["Energy lost",4,10] ] );
g_skillsById[2360] = new Skill("Feel No Pain",2360,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Skill",5,0,0,15,0,false,0,
  ["For ",[8,12]," seconds you have +",[1,5]," Health regeneration. If you are drunk when activating this Skill you also have +",[100,200]," maximum Health."],
  {}, [
  ["Duration",8,12],
  ["+ Health regeneration",1,5],
  ["Conditional + maximum Health",100,200] ] );
g_skillsById[1641] = new Skill("Feigned Neutrality",1641,"Nightfall","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",5,0,0.25,25,0,false,0,
  ["For ",[4,10]," seconds, you have +7 Health regeneration and +80 armor. This Enchantment ends if you successfully hit with an attack or use a Skill."],
  {}, [
  ["Duration",4,10] ] );
g_skillsById[2142] = new Skill("Feral Aggression",2142,"Eye of the North","R","Beast Mastery",
  false,false,false,false,"Skill",15,0,0,20,0,false,0,
  ["For ",[5,20]," seconds, your pet attacks 33% faster and deals ",[3,10]," additional damage."],
  {}, [
  ["Duration",5,20],
  ["Additional damage",3,10] ] );
g_skillsById[439] = new Skill("Feral Lunge",439,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,10,0,false,0,
  ["Your animal companion attempts a Feral Lunge that deals +",[5,35]," damage. If the attack strikes a foe who is attacking, that foe suffers from Bleeding for ",[5,25]," seconds."],
  {"bleeding": true, "damage": true}, [
  ["+Damage",5,35],
  ["Bleeding",5,25] ] );
g_skillsById[442] = new Skill("Ferocious Strike",442,"Core","R","Beast Mastery",
  true,false,false,false,"Pet Attack",5,0,0,8,0,false,0,
  ["Your animal companion attempts a Ferocious Strike that deals +",[13,28]," damage. If that attack hits, you gain adrenaline and ",[3,10]," Energy."],
  {"adrenal-gain": true, "damage": true, "energy-gain": true}, [
  ["+ Damage",13,28],
  ["Energy gain",3,10] ] );
g_skillsById[467] = new Skill("Fertile Season",467,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",15,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures within range have +",[50,150]," maximum Health and gain +8 armor. This Spirit dies after ",[15,45]," seconds."],
  {"armor-buff": true, "health-buff": true, "spirit": true}, [
  ["Level",1,10],
  ["+Health",50,150],
  ["Duration",15,45] ] );
g_skillsById[841] = new Skill("Fetid Ground",841,"Factions","N","Death Magic",
  false,false,false,false,"Spell",10,0,0.75,10,0,false,0,
  ["Target foe is struck for ",[15,65]," cold damage. If that foe is knocked down, that foe becomes Poisoned for ",[5,20]," seconds."],
  {"damage": true, "poison": true}, [
  ["Cold damage",15,65],
  ["Poison",5,20] ] );
g_skillsById[55] = new Skill("Fevered Dreams",55,"Prophecies","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For ",[10,25]," seconds, whenever target foe suffers from a new Condition, all foes in the area suffer from that Condition as well."],
  {"condition": true, "condition-aoe": true, "condition-punish": true}, [
  ["Duration",10,25] ] );
g_skillsById[850] = new Skill("Fierce Blow",850,"Factions","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,6,0,0,0,false,0,
  ["If Fierce Blow strikes a foe suffering from Weakness, you deal +",[10,40]," damage. Otherwise, you deal +",[5,20]," damage if it hits."],
  {"damage": true, "weakness-punish": true}, [
  ["+Damage (weakened foe)",10,40],
  ["+Damage (otherwise)",5,20] ] );
g_skillsById[385] = new Skill("Final Thrust",385,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,10,0,0,0,false,0,
  ["Lose all adrenaline. If Final Thrust hits, you deal ",[1,40]," more damage. This damage is doubled if your target was below 50% Health."],
  {"adrenal-gone": true, "damage": true}, [
  ["Even more damage",1,40,2],
  ["More damage",1,40] ] );
g_skillsById[1577] = new Skill("Finale of Restoration",1577,"Nightfall","P","Motivation",
  false,false,false,false,"Echo",5,0,1,10,0,false,0,
  ["For ",[10,35]," seconds, whenever a Chant or Shout ends on target non-Spirit ally, that ally is healed for ",[15,75]," Health."],
  {"heal": true}, [
  ["Duration",10,35],
  ["Amount healed",15,75] ] );
g_skillsById[184] = new Skill("Fire Attunement",184,"Core","E","Fire Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[36,60]," seconds, you are attuned to Fire. You gain 1 Energy plus 30% of the base Energy cost of the Skill each time you use Fire Magic."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",36,60] ] );
g_skillsById[197] = new Skill("Fire Storm",197,"Core","E","Fire Magic",
  false,false,false,false,"Spell",10,0,2,30,0,false,0,
  ["Create a Fire Storm at target foe's location. For 10 seconds, foes adjacent to that location are struck for ",[5,35]," fire damage each second."],
  {"damage": true, "damage-aoe": true, "damage-ot": true}, [
  ["Fire damage",5,35] ] );
g_skillsById[186] = new Skill("Fireball",186,"Core","E","Fire Magic",
  false,false,false,false,"Spell",10,0,2,7,0,false,0,
  ["Send out a ball of fire that strikes target foe and all adjacent foes for ",[7,112]," fire damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage",7,112] ] );
g_skillsById[1404] = new Skill("Flail",1404,"Nightfall","W","Strength",
  false,false,false,false,"Stance",0,4,0,0,0,false,0,
  ["For ",[5,15]," seconds, you attack 33% faster but move 33% slower."],
  {}, [
  ["Duration",5,15] ] );
g_skillsById[188] = new Skill("Flame Burst",188,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",15,0,0.75,5,0,false,0,
  ["All nearby foes are struck for ",[15,120]," fire damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage",15,120] ] );
g_skillsById[1381] = new Skill("Flame Djinn's Haste",1381,"Nightfall","E","Fire Magic",
  false,false,false,false,"Enchantment Spell",10,0,0.75,20,0,false,0,
  ["All adjacent foes are struck for ",[15,120]," fire damage. For ",[8,14]," seconds, you move 25% faster. Flame Djinn's Haste recharges 50% faster if a foe was struck by this spell."],
  {"damage": true, "move-buff": true}, [
  ["Fire damage",15,120],
  ["Duration",8,14] ] );
g_skillsById[459] = new Skill("Flame Trap",459,"Core","R","Wilderness Survival",
  false,false,false,false,"Trap",10,0,2,20,0,false,0,
  ["When Flame Trap is triggered, every second (for 3 seconds total), all nearby foes are struck for ",[5,20]," fire damage and set on fire for ",[1,3]," seconds. Flame Trap ends after 90 seconds. While activating this skill, you are easily interrupted."],
  {"burning": true, "damage": true}, [
  ["Fire damage",5,20],
  ["Burning duration",1,3] ] );
g_skillsById[194] = new Skill("Flare",194,"Core","E","Fire Magic",
  false,false,false,false,"Spell",5,0,1,0,0,false,0,
  ["Send out a flare that strikes target foe for ",[20,65]," fire damage if it hits."],
  {"damage": true}, [
  ["Fire damage",20,65] ] );
g_skillsById[1042] = new Skill("Flashing Blades",1042,"Factions","A","Dagger Mastery",
  true,false,false,false,"Stance",10,0,0,30,0,false,0,
  ["For ",[5,30]," seconds, you have a 75% chance to block incoming attacks while attacking."],
  {"block": true}, [
  ["Duration",5,30] ] );
g_skillsById[1514] = new Skill("Fleeting Stability",1514,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",10,0,1,10,0,false,0,
  ["For ",[5,25]," seconds, you cannot be knocked down. If this Enchantment lasts its full duration, you are knocked down."],
  {"knockdown-counter": true}, [
  ["Duration",5,25] ] );
g_skillsById[791] = new Skill("Flesh of My Flesh",791,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,4,0,0,false,0,
  ["Lose half your Health. Resurrect target party member with your current Health and ",[5,20],"% Energy."],
  {"rez": true}, [
  ["%Energy",5,20] ] );
g_skillsById[389] = new Skill("Flourish",389,"Prophecies","W","Strength",
  true,false,false,false,"Skill",5,0,1,8,0,false,0,
  ["All of your attack skills become recharged. You gain ",[2,7]," Energy for each skill recharged by Flourish."],
  {"energy-gain": true, "recharge-buff": true}, [
  ["Energy gain",2,7] ] );
g_skillsById[344] = new Skill("Flurry",344,"Prophecies","W","No Attribute",
  false,false,false,false,"Stance",5,0,0,5,0,false,0,
  ["For 5 seconds, your attack rate is increased by 33%, but you deal 25% less damage."],
  {"attackspeed-buff": true}, [
 ] );
g_skillsById[1769] = new Skill("Focused Anger",1769,"Nightfall","P","Leadership",
  true,false,false,false,"Skill",10,0,0,60,0,false,0,
  ["For 45 seconds, you gain ",[0,150],"% more adrenaline."],
  {"adrenal-gain": true}, [
  ["Adrenaline gain %",0,150] ] );
g_skillsById[909] = new Skill("Focused Shot",909,"Factions","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,2,0,false,0,
  ["If Focused Shot hits, you strike for +",[10,25]," damage but all of your other attack skills are disabled for ",[5,3]," seconds."],
  {"damage": true, "lock-self": true}, [
  ["Damage",10,25],
  ["Duration",5,3] ] );
g_skillsById[889] = new Skill("Forceful Blow",889,"Factions","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,5,0,0,0,false,0,
  ["If Forceful Blow hits, you strike for +",[10,40]," damage and your target is Weakened for ",[5,20]," seconds. If it is blocked, you are knocked down."],
  {"damage": true, "weakness": true}, [
  ["+ Damage",10,40],
  ["Weakness duration",5,20] ] );
g_skillsById[1722] = new Skill("Forked Arrow",1722,"Nightfall","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,5,0,false,0,
  ["Shoot two arrows simultaneously at target foe. If you are under the effects of an Enchantment or Hex, you shoot only one arrow."],
  {}, [
 ] );
g_skillsById[2057] = new Skill("Foul Feast",2057,"Eye of the North","N","Soul Reaping",
  false,false,false,false,"Spell",5,0,0.25,2,0,false,0,
  ["All conditions are transferred from target other ally to yourself. For each condition acquired in this way, you gain ",[0,45]," Health and ",[0,3]," Energy."],
  {}, [
  ["Health gain",0,45],
  ["Energy gain",0,3] ] );
g_skillsById[780] = new Skill("Fox Fangs",780,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0.5,8,0,false,0,
  ["Must follow a lead attack. Fox Fangs cannot be blocked and strikes for +",[5,30]," damage if it hits."],
  {"block-counter": true, "damage": true}, [
  ["+ Damage",5,30] ] );
g_skillsById[1640] = new Skill("Fox's Promise",1640,"Nightfall","A","Critical Strikes",
  true,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, your dagger attacks cannot be blocked. This Enchantment ends the next time you fail to hit."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[19] = new Skill("Fragility",19,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["For ",[8,20]," seconds, target foe takes ",[5,20]," damage each time that foe suffers or recovers from a new Condition."],
  {"condition-punish": true, "damage": true, "damage-ot": true}, [
  ["Duration",8,20],
  ["Damage",5,20] ] );
g_skillsById[1382] = new Skill("Freezing Gust",1382,"Nightfall","E","Water Magic",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["If target foe is under the effect of a Water Magic Hex, that foe is struck for ",[20,80]," cold damage. Otherwise, that foe moves 66% slower for ",[1,6]," seconds."],
  {"damage": true, "move-nerf": true}, [
  ["Cold Damage",20,80],
  ["Duration",1,6] ] );
g_skillsById[1700] = new Skill("Frenzied Defense",1700,"Nightfall","W","No Attribute",
  false,false,false,false,"Stance",5,0,0,10,0,false,0,
  ["For 8 seconds, you have a 75% chance to block incoming attacks, but take double damage."],
  {"block": true}, [
 ] );
g_skillsById[346] = new Skill("Frenzy",346,"Core","W","No Attribute",
  false,false,false,false,"Stance",5,0,0,4,0,false,0,
  ["For 8 seconds, you attack 33% faster but take double damage."],
  {"attackspeed-buff": true}, [
 ] );
g_skillsById[1261] = new Skill("Frigid Armor",1261,"Nightfall","E","Water Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For ",[10,25]," seconds, you have +",[10,40]," armor against physical damage and cannot be set on fire."],
  {"armor-buff": true}, [
  ["Seconds",10,25],
  ["Armor",10,40] ] );
g_skillsById[212] = new Skill("Frozen Burst",212,"Prophecies","E","Water Magic",
  false,false,false,false,"Hex Spell",15,0,0.75,8,0,false,0,
  ["All nearby foes are struck for ",[10,85]," cold damage and move 66% slower for ",[3,8]," seconds."],
  {"damage": true, "damage-aoe": true, "move-nerf": true}, [
  ["Cold Damage",10,85],
  ["Duration",3,8] ] );
g_skillsById[471] = new Skill("Frozen Soil",471,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",10,0,5,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures within its range cannot resurrect dead allies. This Spirit dies after ",[30,90]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,90] ] );
g_skillsById[1341] = new Skill("Frustration",1341,"Nightfall","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,1,15,0,false,0,
  ["For ",[5,20]," seconds, target foe casts Spells 50% slower and takes ",[5,50]," damage whenever interrupted."],
  {"damage": true}, [
  ["Duration",5,20],
  ["Damage",5,50] ] );
g_skillsById[904] = new Skill("Furious Axe",904,"Factions","W","Axe Mastery",
  false,false,false,false,"Axe Attack",5,0,0,6,0,false,0,
  ["If Furious Axe hits, you strike for +",[5,35]," damage. If it is blocked you gain 3 strikes worth of adrenaline."],
  {"adrenal-gain": true, "damage": true}, [
  ["+ Damage",5,35] ] );
g_skillsById[162] = new Skill("Gale",162,"Core","E","Air Magic",
  false,false,false,false,"Spell",10,0,1,5,0,true,4,
  ["Knock down target foe for 2 seconds. This Spell causes Exhaustion. (50% failure chance with Air Magic 4 or less.)"],
  {"knockdown": true}, [
 ] );
g_skillsById[383] = new Skill("Galrath Slash",383,"Prophecies","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,8,0,0,0,false,0,
  ["This attack strikes for +",[1,40]," damage if it hits."],
  {"damage": true}, [
  ["+Damage",1,40] ] );
g_skillsById[384] = new Skill("Gash",384,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,6,0,0,0,false,0,
  ["If this attack hits a Bleeding foe, you strike for ",[5,20]," more damage and that foe suffers a Deep Wound, lowering that foe's maximum Health by 20% for ",[5,20]," seconds."],
  {"bleeding-punish": true, "damage": true, "deepwound": true}, [
  ["+Damage",5,20],
  ["Deep Wound",5,20] ] );
g_skillsById[1245] = new Skill("Gaze from Beyond",1245,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,2,10,0,false,0,
  ["The Spirit nearest you loses ",[10,30]," Health. Target foe is struck for 4 lightning damage for each point of Health lost."],
  {"damage": true, "spirit-uses": true}, [
  ["Health",10,30] ] );
g_skillsById[766] = new Skill("Gaze of Contempt",766,"Factions","N","No Attribute",
  false,false,false,false,"Spell",10,0,1,15,0,false,0,
  ["If target foe has more than 50% Health, that foe loses all enchantments."],
  {}, [
 ] );
g_skillsById[1734] = new Skill("Gaze of Fury",1734,"Nightfall","Rt","Channeling Magic",
  false,false,false,false,"Binding Ritual",10,0,2,20,0,false,0,
  ["Destroy target Spirit and create a level ",[1,10]," Spirit of Fury. This Spirit's attacks deal ",[5,20]," damage. This Spirit dies after ",[30,60]," seconds."],
  {"damage": true, "spirit": true, "spirit-counter": true}, [
  ["Level",1,10],
  ["Damage",5,20],
  ["Duration",30,60] ] );
g_skillsById[772] = new Skill("Generous Was Tsungrai",772,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",5,0,1,15,0,false,0,
  ["Hold Tsungrai's ashes for up to ",[15,60]," seconds and gain +",[50,140]," maximum Health. When you drop his ashes, you gain ",[100,280]," Health."],
  {"heal-self": true, "health-buff": true, "sacrifice": true}, [
  ["Duration",15,60],
  ["+Max Health",50,140],
  ["Health",100,280] ] );
g_skillsById[1244] = new Skill("Ghostly Haste",1244,"Factions","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, spells you cast while within earshot of a Spirit recharge 25% faster."],
  {"recharge-buff": true, "spirit-uses": true}, [
  ["Duration",5,20] ] );
g_skillsById[2206] = new Skill("Ghostly Weapon",2206,"Eye of the North","Rt","Communing",
  false,false,false,false,"Weapon Spell",5,0,0.25,1,0,false,0,
  ["For ",[5,20]," seconds, target other ally's next attack cannot be blocked."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1741] = new Skill("Ghostmirror Light",1741,"Nightfall","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,1,3,0,false,0,
  ["Target other ally is healed for ",[15,90]," Health. If you are within earshot of a Spirit, you are also healed for ",[15,90]," Health."],
  {"heal": true, "heal-self": true, "spirit-uses": true}, [
  ["Other Heal",15,90],
  ["Self-Heal",15,90] ] );
g_skillsById[1121] = new Skill("Gift of Health",1121,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,0.75,5,0,false,0,
  ["All of your other Healing Prayers skills are disabled for ",[10,5]," seconds. Target other ally is healed for ",[15,150]," Health."],
  {"heal": true, "lock": true}, [
  ["Disabled",10,5],
  ["Healing",15,150] ] );
g_skillsById[372] = new Skill("Gladiator's Defense",372,"Prophecies","W","Tactics",
  true,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, you have a 75% chance to block incoming attacks. Whenever you block a melee attack this way, the attacker suffers ",[5,35]," damage."],
  {"block": true, "damage": true, "damage-ot": true}, [
  ["Duration",5,11],
  ["Damage",5,35] ] );
g_skillsById[1199] = new Skill("Glass Arrows",1199,"Factions","R","Expertise",
  true,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For ",[10,35]," seconds, your arrows strike for +",[5,20]," damage if they hit and cause Bleeding for ",[10,20]," seconds if they are Blocked."],
  {"bleeding": true, "damage": true}, [
  ["Duration",10,35],
  ["+ Damage",5,20],
  ["Bleeding duration",10,20] ] );
g_skillsById[1686] = new Skill("Glimmer of Light",1686,"Nightfall","Mo","Healing Prayers",
  true,false,false,false,"Spell",5,0,0.25,1,0,false,0,
  ["Heal target ally for ",[10,115]," Health."],
  {"heal": true}, [
  ["Healing",10,115] ] );
g_skillsById[227] = new Skill("Glimmering Mark",227,"Prophecies","E","Air Magic",
  true,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["For ",[1,16]," seconds, whenever target foe suffers lightning damage, that foe and all adjacent foes suffer from Blindness for 5 seconds."],
  {"blind": true}, [
  ["Duration",1,16] ] );
g_skillsById[1379] = new Skill("Glowing Gaze",1379,"Nightfall","E","Fire Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe takes ",[5,50]," fire damage. If that foe is on Fire, you gain ",[1,9]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["Fire damage",5,50],
  ["Energy",1,9] ] );
g_skillsById[2192] = new Skill("Glowing Ice",2192,"Eye of the North","E","Water Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe is struck for ",[5,50]," cold damage. If that foe is under the effects of a water Hex, you gain ",[5,9]," Energy."],
  {}, [
  ["Cold damage",5,50],
  ["Energy gain",5,9] ] );
g_skillsById[1581] = new Skill("Glowing Signet",1581,"Nightfall","P","Leadership",
  false,false,false,false,"Signet",0,0,0.25,20,0,false,0,
  ["If target foe is Burning, you gain ",[5,15]," Energy."],
  {"energy-gain": true}, [
  ["Energy gained",5,15] ] );
g_skillsById[1661] = new Skill("Glowstone",1661,"Nightfall","E","Earth Magic",
  false,false,false,false,"Spell",5,0,1,7,0,false,0,
  ["Send a projectile that strikes for ",[5,50]," earth damage if it hits. If this Spell hits a weakened foe, you gain ",[1,9]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["Earth damage",5,50],
  ["Energy gain",1,9] ] );
g_skillsById[201] = new Skill("Glyph of Concentration",201,"Prophecies","E","No Attribute",
  false,false,false,false,"Glyph",5,0,1,10,0,false,0,
  ["For 15 seconds, your next two Spells cannot be interrupted and ignore the effects of being Dazed."],
  {"dazed-counter": true, "interrupt-counter": true}, [
 ] );
g_skillsById[198] = new Skill("Glyph of Elemental Power",198,"Core","E","No Attribute",
  false,false,false,false,"Glyph",5,0,1,5,0,false,0,
  ["For 25 seconds, your elemental attributes are boosted by 2 for your next 10 Spells."],
  {}, [
 ] );
g_skillsById[199] = new Skill("Glyph of Energy",199,"Prophecies","E","Energy Storage",
  true,false,false,false,"Glyph",5,0,1,10,0,false,0,
  ["For 15 seconds, your next Spell costs ",[10,35]," less Energy to cast and does not cause Exhaustion."],
  {"ecost-buff": true}, [
  ["Energy reduction",10,35] ] );
g_skillsById[1096] = new Skill("Glyph of Essence",1096,"Factions","E","No Attribute",
  false,false,false,false,"Glyph",5,0,1,20,0,false,0,
  ["For 15 seconds, your next Spell casts instantly but causes you to lose all Energy."],
  {"cast-buff": true, "energy-gone": true}, [
 ] );
g_skillsById[2060] = new Skill("Glyph of Immolation",2060,"Eye of the North","E","Fire Magic",
  false,false,false,false,"Glyph",5,0,1,10,0,false,0,
  ["For 15 seconds, your next ",[1,4]," Spells that target a foe also cause Burning for ",[1,4]," seconds."],
  {}, [
  ["Spells affected",1,4],
  ["Burning duration",1,4] ] );
g_skillsById[200] = new Skill("Glyph of Lesser Energy",200,"Core","E","Energy Storage",
  false,false,false,false,"Glyph",5,0,1,30,0,false,0,
  ["For the next 15 seconds, your next 2 Spells cost ",[10,18]," less Energy to cast."],
  {"ecost-buff": true}, [
  ["Energy reduction",10,18] ] );
g_skillsById[203] = new Skill("Glyph of Renewal",203,"Prophecies","E","No Attribute",
  true,false,false,false,"Glyph",5,0,1,10,0,false,0,
  ["For 15 seconds, your next Spell instantly recharges."],
  {"recharge-buff": true}, [
 ] );
g_skillsById[1376] = new Skill("Glyph of Restoration",1376,"Nightfall","E","Energy Storage",
  false,false,false,false,"Glyph",5,0,1,8,0,false,0,
  ["For 15 seconds, your next 2 Spells heal you for ",[30,105]," Health, and you are healed for ",[150,400],"% of the Energy cost of each Spell."],
  {"heal": true}, [
  ["Healing",30,105],
  ["% of Energy cost<br />Healed",150,400] ] );
g_skillsById[202] = new Skill("Glyph of Sacrifice",202,"Prophecies","E","No Attribute",
  false,false,false,false,"Glyph",5,0,1,15,0,false,0,
  ["For 15 seconds, your next spell casts instantly, but it takes an additional 30 seconds to recharge."],
  {"cast-buff": true, "recharge-nerf-self": true}, [
 ] );
g_skillsById[2002] = new Skill("Glyph of Swiftness",2002,"Eye of the North","E","Air Magic",
  false,false,false,false,"Glyph",5,0,1,10,0,false,0,
  ["For 15 seconds, your next ",[1,3]," Spells recharge 25% faster, and projectiles from those spells move 200% faster."],
  {}, [
  ["Projectile spells affected",1,3] ] );
g_skillsById[1556] = new Skill("Godspeed",1556,"Nightfall","P","Command",
  false,false,false,false,"Shout",10,0,0,30,0,false,0,
  ["For ",[5,20]," seconds, all allies within earshot move 25% faster while under the effects of an Enchantment."],
  {"move-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[1988] = new Skill("Golden Fang Strike",1988,"Eye of the North","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,4,0,false,0,
  ["Must follow a lead attack. If you are under the effects of an Enchantment and this attack hits, target foe suffers from a Deep Wound for ",[5,20]," seconds."],
  {}, [
  ["Deep Wound duration",5,20] ] );
g_skillsById[1637] = new Skill("Golden Fox Strike",1637,"Nightfall","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,4,0,false,0,
  ["If this attack hits, target foe takes +",[10,30]," damage. If you are under the effects of an Enchantment, this attack cannot be blocked."],
  {"damage": true}, [
  ["+ Damage",10,30] ] );
g_skillsById[1026] = new Skill("Golden Lotus Strike",1026,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,10,0,false,0,
  ["If it hits, this attack strikes for +",[5,20]," damage. If you are under the effects of an Enchantment, you gain ",[5,12]," Energy."],
  {"damage": true, "enchant-uses": true, "energy-gain": true}, [
  ["+ Damage",5,20],
  ["Energy gain",5,12] ] );
g_skillsById[989] = new Skill("Golden Phoenix Strike",989,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,8,0,false,0,
  ["If you are not under the effects of an Enchantment, this skill misses. If it hits, Golden Phoenix Strike deals +",[10,30]," damage."],
  {"damage": true}, [
  ["+ Damage",10,30] ] );
g_skillsById[1635] = new Skill("Golden Skull Strike",1635,"Nightfall","A","Dagger Mastery",
  true,false,false,false,"Off-Hand Attack",10,0,0,15,0,false,0,
  ["Must follow a lead attack. If you are under the effects of an Enchantment and this attack hits, target foe is Dazed ",[4,10]," seconds."],
  {"dazed": true}, [
  ["Dazed duration",4,10] ] );
g_skillsById[2011] = new Skill("Grapple",2011,"Eye of the North","W","No Attribute",
  false,false,false,false,"Skill",5,0,0.75,12,0,false,0,
  ["You lose your current stance. You and target touched foe are knocked down."],
  {}, [
 ] );
g_skillsById[173] = new Skill("Grasping Earth",173,"Prophecies","E","Earth Magic",
  false,false,false,false,"Hex Spell",5,0,0.75,12,0,false,0,
  ["For ",[8,20]," seconds, all nearby foes move 50% slower."],
  {"move-nerf": true}, [
  ["Duration",8,20] ] );
g_skillsById[789] = new Skill("Grasping Was Kuurong",789,"Factions","Rt","Channeling Magic",
  true,false,false,false,"Item Spell",15,0,1,20,0,false,0,
  ["Hold Kuurong's ashes for up to ",[15,60]," seconds. When you drop his ashes, all nearby foes are struck for ",[15,75]," damage and knocked down."],
  {"damage": true, "knockdown": true}, [
  ["Duration",15,60],
  ["Damage",15,75] ] );
g_skillsById[465] = new Skill("Greater Conflagration",465,"Prophecies","R","Wilderness Survival",
  true,false,false,false,"Nature Ritual",5,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, all physical damage is fire damage instead. This Spirit dies after ",[30,150]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,150] ] );
g_skillsById[2013] = new Skill("Grenth's Aura",2013,"Eye of the North","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",15,0,2,25,0,false,0,
  ["All adjacent foes are struck for ",[15,75]," cold damage. For 10 seconds, this Enchantment does nothing. When this Enchantment ends, all nearby foes lose 1 Enchantment."],
  {}, [
  ["Cold damage",15,75] ] );
g_skillsById[86] = new Skill("Grenth's Balance",86,"Core","N","No Attribute",
  true,false,false,false,"Spell",10,0,0.25,10,0,false,0,
  ["If target foe has more Health than you, you gain half the difference (up to your maximum Health), and that foe loses an equal amount."],
  {"health-steal": true}, [
 ] );
g_skillsById[1493] = new Skill("Grenth's Fingers",1493,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.75,10,0,false,0,
  ["All adjacent foes are struck for ",[20,80]," cold damage. For 30 seconds, your attacks deal cold damage. When this Enchantment ends, all adjacent foes are Crippled for ",[5,15]," seconds."],
  {"crippled": true, "damage": true}, [
  ["Cold damage",20,80],
  ["Crippled Duration",5,15] ] );
g_skillsById[1756] = new Skill("Grenth's Grasp",1756,"Nightfall","D","Wind Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For 20 seconds, if you are wielding a cold weapon, your attack Skills also Cripple that foe for ",[3,15]," seconds."],
  {"crippled": true}, [
  ["Crippled duration",3,15] ] );
g_skillsById[327] = new Skill("Griffon's Sweep",327,"Prophecies","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0,8,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. If this attack is blocked, your target is knocked down and suffers ",[10,34]," damage."],
  {"block-punish": true, "damage": true, "knockdown": true}, [
  ["+Damage",5,20],
  ["Damage",10,34] ] );
g_skillsById[258] = new Skill("Guardian",258,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,4,0,false,0,
  ["For ",[2,7]," seconds, target ally has a 50% chance to block attacks."],
  {"block": true}, [
  ["Duration",2,7] ] );
g_skillsById[1259] = new Skill("Guided Weapon",1259,"Factions","Rt","Communing",
  false,false,false,false,"Weapon Spell",15,0,2,5,0,false,0,
  ["For ",[5,11]," seconds, target ally's attacks cannot be blocked."],
  {"block-counter": true}, [
  ["Duration",5,11] ] );
g_skillsById[1513] = new Skill("Guiding Hands",1513,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["For 20 seconds, your next ",[0,3]," attacks cannot be blocked."],
  {"block-counter": true}, [
  ["Attacks",0,3] ] );
g_skillsById[46] = new Skill("Guilt",46,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Hex Spell",5,0,2,25,0,false,0,
  ["For 6 seconds, the next time target foe casts a spell that targets a foe, the spell fails and you steal up to ",[5,14]," Energy from that foe."],
  {"energy-drain": true, "energy-gain": true, "spell-counter": true}, [
  ["Energy stolen",5,14] ] );
g_skillsById[843] = new Skill("Gust",843,"Factions","E","Air Magic",
  true,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Target foe is struck for ",[10,65]," cold damage. If that foe is under an Earth or Water Magic Hex, that foe is knocked down for 3 seconds."],
  {"damage": true, "knockdown": true}, [
  ["Cold damage",10,65] ] );
g_skillsById[331] = new Skill("Hammer Bash",331,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,6,0,0,0,false,0,
  ["Lose all adrenaline. If Hammer Bash hits, your target is knocked down."],
  {"adrenal-gone": true, "knockdown": true}, [
 ] );
g_skillsById[320] = new Skill("Hamstring",320,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",10,0,0,15,0,false,0,
  ["If this attack hits, your target is Crippled for ",[3,15]," seconds, slowing his movement."],
  {"crippled": true}, [
  ["Crippled",3,15] ] );
g_skillsById[1758] = new Skill("Harrier's Grasp",1758,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",10,0,1,25,0,false,0,
  ["For ",[5,25]," seconds, attacks against moving foes also Cripple that foe for ",[3,15]," seconds."],
  {"crippled": true}, [
  ["Duration",5,25],
  ["Crippled Duration",3,15] ] );
g_skillsById[1768] = new Skill("Harrier's Haste",1768,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,15]," seconds, you move 25% faster and deal +",[5,15]," more damage against moving foes."],
  {"damage": true, "move-buff": true}, [
  ["Duration",5,15],
  ["+Damage",5,15] ] );
g_skillsById[1549] = new Skill("Harrier's Toss",1549,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",10,0,1,10,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If this attack hits a moving foe, it deals an additional ",[5,30]," damage."],
  {"damage": true, "move-punish": true}, [
  ["+Damage",5,20],
  ["Addition damage",5,30] ] );
g_skillsById[2075] = new Skill("Hasty Refrain",2075,"Eye of the North","P","Leadership",
  false,false,false,false,"Echo",5,0,1,10,0,false,0,
  ["For ",[3,11]," seconds, target ally moves 25% faster. This Echo is reapplied every time a Chant or Shout ends on that ally."],
  {}, [
  ["Duration",3,11] ] );
g_skillsById[1406] = new Skill("Headbutt",1406,"Nightfall","W","Strength",
  true,false,false,false,"Skill",15,0,0.75,20,0,false,0,
  ["Target touched foe takes ",[40,100]," damage. You are Dazed for ",[5,20]," seconds."],
  {"damage": true, "dazed": true, "touch": true}, [
  ["Damage",40,100],
  ["Dazed duration",5,20] ] );
g_skillsById[280] = new Skill("Heal Area",280,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Heal yourself and all adjacent creatures for ",[30,180]," points."],
  {"heal": true, "heal-aoe": true}, [
  ["Healing",30,180] ] );
g_skillsById[286] = new Skill("Heal Other",286,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,0.75,3,0,false,0,
  ["Heal target other ally for ",[35,180]," Health."],
  {"heal": true}, [
  ["Healing",35,180] ] );
g_skillsById[287] = new Skill("Heal Party",287,"Core","Mo","Healing Prayers",
  false,false,false,false,"Spell",15,0,2,2,0,false,0,
  ["Heal entire party for ",[30,75]," Health."],
  {"heal": true}, [
  ["Healing",30,75] ] );
g_skillsById[1195] = new Skill("Heal as One",1195,"Factions","R","Beast Mastery",
  true,false,false,false,"Skill",5,0,1,8,0,false,0,
  ["If you or your animal companion are below 75% Health, you are both healed for ",[25,145]," Health. If your companion is dead, it is resurrected with 50% Health."],
  {"heal-pet": true, "rez-pet": true}, [
  ["Healing",25,145] ] );
g_skillsById[1393] = new Skill("Healer's Boon",1393,"Nightfall","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For ",[10,55]," seconds. Healing Prayers Spells cast 50% faster and heal for 50% more Health."],
  {"cast-buff": true, "heal-buff": true}, [
  ["Duration",10,55] ] );
g_skillsById[1394] = new Skill("Healer's Covenant",1394,"Nightfall","Mo","Healing Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,5,-1,false,0,
  ["While you maintain this Enchantment, your healing Spells heal for 25% less Health, but cost -",[1,3]," Energy."],
  {"ecost-buff": true, "heal-nerf": true}, [
  ["Energy reduction",1,3] ] );
g_skillsById[288] = new Skill("Healing Breeze",288,"Core","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",10,0,1,2,0,false,0,
  ["For 15 seconds, target ally gains +",[4,9]," Health regeneration."],
  {"health-regen": true}, [
  ["Health regeneration",4,9] ] );
g_skillsById[1118] = new Skill("Healing Burst",1118,"Factions","Mo","Healing Prayers",
  true,false,false,false,"Spell",5,0,0.75,10,0,false,0,
  ["Target touched ally and all nearby allies are healed for ",[30,150]," Health. If more than one ally was healed, you lose 5 Energy."],
  {"heal": true, "touch": true}, [
  ["Healing",30,150] ] );
g_skillsById[285] = new Skill("Healing Hands",285,"Prophecies","Mo","Healing Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,25,0,false,0,
  ["For 10 seconds, whenever target ally takes damage, that ally is healed for ",[5,35]," Health."],
  {"heal": true, "heal-ot": true}, [
  ["Healing",5,35] ] );
g_skillsById[867] = new Skill("Healing Light",867,"Factions","Mo","Healing Prayers",
  true,false,false,false,"Spell",5,0,1,4,0,false,0,
  ["Heal target ally for ",[40,100]," Health. If your target has an Enchantment, you gain ",[1,3]," Energy."],
  {"enchant-uses": true, "energy-gain": true, "heal": true}, [
  ["Healing",40,100],
  ["Energy gain",1,3] ] );
g_skillsById[2062] = new Skill("Healing Ribbon",2062,"Eye of the North","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Target other ally is healed for ",[20,110]," Health. Up to 2 additional allies near target ally are healed for ",[10,100]," Health."],
  {}, [
  ["Healing",20,110],
  ["Additional healing",10,100] ] );
g_skillsById[1262] = new Skill("Healing Ring",1262,"Nightfall","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Heal adjacent creatures for ",[30,180]," Health. The caster is not healed."],
  {"heal": true}, [
  ["Healing",30,180] ] );
g_skillsById[274] = new Skill("Healing Seed",274,"Core","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,25,0,false,0,
  ["For 10 seconds, whenever target other ally takes damage, that ally and all adjacent allies gain ",[3,30]," Health."],
  {"heal": true, "heal-ot": true}, [
  ["Healing",3,30] ] );
g_skillsById[1] = new Skill("Healing Signet",1,"Core","W","Tactics",
  false,false,false,false,"Signet",0,0,2,4,0,false,0,
  ["You gain ",[62,152]," Health. You have -40 armor while using this skill."],
  {"heal": true}, [
  ["Heal",62,152] ] );
g_skillsById[460] = new Skill("Healing Spring",460,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Trap",10,0,2,20,0,false,0,
  ["For 10 seconds, all adjacent allies are healed for ",[15,60]," every 2 seconds. While activating this skill, you are easily interrupted."],
  {"heal": true, "heal-aoe": true}, [
  ["Healing",15,60] ] );
g_skillsById[313] = new Skill("Healing Touch",313,"Core","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,0.75,5,0,false,0,
  ["Heal target touched ally for ",[16,60]," Health. Health gain from Divine Favor is doubled for this Spell."],
  {"heal": true, "touch": true}, [
  ["Healing",16,60] ] );
g_skillsById[958] = new Skill("Healing Whisper",958,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,1,0,false,0,
  ["Target other ally is healed for ",[40,100],". This spell has half the normal range."],
  {"heal": true}, [
  ["Healing",40,100] ] );
g_skillsById[1762] = new Skill("Heart of Fury",1762,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",10,0,0.75,30,0,false,0,
  ["For ",[5,20]," seconds, you attack 33% faster. When this Enchantment ends, all nearby foes are set on fire for ",[1,3]," seconds."],
  {"attackspeed-buff": true, "burning": true}, [
  ["Duration",5,20],
  ["Burning Duration",1,3] ] );
g_skillsById[1507] = new Skill("Heart of Holy Flame",1507,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",10,0,0.75,15,0,false,0,
  ["All adjacent foes take ",[15,60]," holy damage. For 30 seconds, your attacks deal holy damage. When this Enchantment ends, all adjacent foes are set on fire for ",[1,4]," seconds."],
  {"burning": true, "damage": true}, [
  ["Damage",15,60],
  ["Burning duration",1,4] ] );
g_skillsById[1032] = new Skill("Heart of Shadow",1032,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,15,0,false,0,
  ["You are healed for ",[30,150]," Health and Shadow Step to a random nearby location."],
  {"heal": true, "shadowstep": true}, [
  ["Healing",30,150] ] );
g_skillsById[1117] = new Skill("Heaven's Delight",1117,"Factions","Mo","Divine Favor",
  false,false,false,false,"Spell",5,0,1,15,0,false,0,
  ["Heal yourself and party members within earshot for ",[15,60]," points."],
  {"heal": true}, [
  ["Healing",15,60] ] );
g_skillsById[359] = new Skill("Heavy Blow",359,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,5,0,0,0,false,0,
  ["Lose all adrenaline. If this attack hits a foe suffering from Weakness, that foe is knocked down and you strike for +",[1,30]," damage."],
  {"adrenal-gone": true, "damage": true, "knockdown": true, "weakness-punish": true}, [
  ["+Damage",1,30] ] );
g_skillsById[1728] = new Skill("Heket's Rampage",1728,"Nightfall","R","Beast Mastery",
  false,false,false,false,"Stance",5,0,0,10,0,false,0,
  ["For ",[5,11]," seconds, you attack 33% faster. This Stance ends if you use an attack Skill."],
  {}, [
  ["Duration",5,11] ] );
g_skillsById[10] = new Skill("Hex Breaker",10,"Core","Me","Domination Magic",
  false,false,false,false,"Skill",5,0,0,15,0,false,0,
  ["For ",[5,80]," seconds, the next time you are the target of a hex, that hex fails and the caster takes ",[10,46]," damage."],
  {"damage": true, "hex-counter": true}, [
  ["Duration",5,80],
  ["Damage",10,46] ] );
g_skillsById[1059] = new Skill("Hex Eater Signet",1059,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Signet",0,0,1,25,0,false,0,
  ["Target touched ally and up to ",[2,5]," adjacent allies each lose one Hex. You gain ",[1,4]," Energy for each Hex removed this way."],
  {"energy-gain": true, "hex-remove": true, "hex-remove-aoe": true, "touch": true}, [
  ["Adjacent allies",2,5],
  ["Energy gain",1,4] ] );
g_skillsById[1348] = new Skill("Hex Eater Vortex",1348,"Nightfall","Me","Domination Magic",
  true,false,false,false,"Spell",10,0,1,15,0,false,0,
  ["Remove a hex from target ally. If a hex is removed in this way, foes near that ally take ",[30,90]," damage and lose one enchantment."],
  {"damage": true}, [
  ["Damage",30,90] ] );
g_skillsById[1571] = new Skill("Hexbreaker Aria",1571,"Nightfall","P","Leadership",
  false,false,false,false,"Chant",0,8,2,0,0,false,0,
  ["For 10 seconds, the next time each ally within earshot casts a Spell, that ally loses 1 Hex."],
  {"hex-remove": true}, [
 ] );
g_skillsById[2138] = new Skill("Hexer's Vigor",2138,"Eye of the North","N","Soul Reaping",
  false,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For 10 seconds, you have +",[1,8]," Health regeneration. Hexer's Vigor ends if you cast a non-Hex skill."],
  {}, [
  ["Health regeneration",1,8] ] );
g_skillsById[1642] = new Skill("Hidden Caltrops",1642,"Nightfall","A","Shadow Arts",
  true,false,false,false,"Hex Spell",5,0,1,8,0,false,0,
  ["For 20 seconds, the next time target foe takes damage while moving, this Hex ends. When Hidden Caltrops ends, target foe takes ",[15,75]," damage and is Crippled for ",[5,20]," seconds."],
  {"crippled": true, "damage": true}, [
  ["Damage",15,75],
  ["Crippled duration",5,20] ] );
g_skillsById[1685] = new Skill("Holy Haste",1685,"Nightfall","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",10,0,1,10,0,false,0,
  ["For ",[1,60]," seconds, your Healing Prayers Spells cast 50% faster. This Enchantment ends if you cast another Enchantment."],
  {"cast-buff": true}, [
  ["Duration",1,60] ] );
g_skillsById[2209] = new Skill("Holy Spear",2209,"Eye of the North","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,4,0,0,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If it hits a summoned creature, all nearby foes take ",[15,90]," holy damage, and are set on fire for 3 seconds."],
  {}, [
  ["+ Damage",5,20],
  ["Holy damage",15,90] ] );
g_skillsById[312] = new Skill("Holy Strike",312,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Skill",5,0,0.75,8,0,false,0,
  ["Touched target foe takes ",[10,55]," holy damage. If knocked down, your target takes an additional ",[10,55]," holy damage."],
  {"damage": true, "knockdown-punish": true, "touch": true}, [
  ["Holy damage",10,55],
  ["+Holy damage",10,55] ] );
g_skillsById[309] = new Skill("Holy Veil",309,"Core","Mo","No Attribute",
  false,false,false,false,"Enchantment Spell",5,0,1,12,-1,false,0,
  ["While you maintain this Enchantment, any Hex cast on target ally takes twice as long to cast. When Holy Veil ends, one Hex is removed from target ally."],
  {"hex-counter": true, "hex-remove": true}, [
 ] );
g_skillsById[249] = new Skill("Holy Wrath",249,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, whenever target ally takes attack damage, this Spell deals 66% of the damage back to the source (maximum of ",[5,50]," damage), and you lose 10 Energy."],
  {"damage": true, "damage-ot": true}, [
  ["Max Damage",5,50] ] );
g_skillsById[777] = new Skill("Horns of the Ox",777,"Factions","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0,12,0,false,0,
  ["Must follow an off-hand attack. If it hits, Horns of the Ox strikes for +",[1,11]," damage. If struck foe is not adjacent to any allies, that foe is knocked down."],
  {"damage": true, "knockdown": true}, [
  ["+ Damage",1,11] ] );
g_skillsById[381] = new Skill("Hundred Blades",381,"Core","W","Swordsmanship",
  true,false,false,false,"Sword Attack",5,0,0,8,0,false,0,
  ["Swing twice at target foe and foes adjacent to your target."],
  {"damage": true, "damage-aoe": true}, [
 ] );
g_skillsById[391] = new Skill("Hunter's Shot",391,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,1,5,0,false,0,
  ["If Hunter's Shot hits, you strike for +",[3,15]," damage. If this attack hits a foe that is moving or knocked down, that foe begins Bleeding for ",[3,25]," seconds."],
  {"bleeding": true, "damage": true}, [
  ["+Damage",3,15],
  ["Bleeding",3,25] ] );
g_skillsById[1334] = new Skill("Hypochondria",1334,"Nightfall","Me","No Attribute",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Target foe suffers from the same Conditions as all foes in the area."],
  {}, [
 ] );
g_skillsById[210] = new Skill("Ice Prison",210,"Prophecies","E","Water Magic",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For ",[8,20]," seconds, target foe's legs are encased in ice, causing the foe to move 66% slower. This effect ends if target takes fire damage."],
  {"move-nerf": true}, [
  ["Duration",8,20] ] );
g_skillsById[214] = new Skill("Ice Spear",214,"Core","E","Water Magic",
  false,false,false,false,"Spell",5,0,1,0,0,false,0,
  ["Send out an Ice Spear, striking target foe for ",[10,70]," cold damage if it hits. Ice Spear has half the normal Spell range."],
  {"damage": true}, [
  ["Cold damage",10,70] ] );
g_skillsById[211] = new Skill("Ice Spikes",211,"Core","E","Water Magic",
  false,false,false,false,"Hex Spell",15,0,2,10,0,false,0,
  ["Target and adjacent foes are struck for ",[20,80]," cold damage and move 66% slower for ",[2,6]," seconds."],
  {"damage": true, "damage-aoe": true, "move-nerf": true}, [
  ["Cold damage",20,80],
  ["Duration",2,6] ] );
g_skillsById[903] = new Skill("Icy Prism",903,"Factions","E","Water Magic",
  false,false,false,false,"Spell",10,0,1,2,0,false,0,
  ["Target foe is struck for ",[10,65]," cold damage. If target foe is using a Signet, that Signet is interrupted and all of that foe's Signets are disabled for ",[3,9]," seconds."],
  {"damage": true, "lock": true}, [
  ["Cold Damage",10,65],
  ["Duration",3,9] ] );
g_skillsById[939] = new Skill("Icy Shackles",939,"Nightfall","E","Water Magic",
  true,false,false,false,"Hex Spell",5,0,1,12,0,false,0,
  ["For ",[4,10]," seconds, target foe's movement speed is reduced by 66%. While under the effects of an Enchantment, that foe's movement is reduced by 90%."],
  {"move-nerf": true}, [
  ["Duration",4,10] ] );
g_skillsById[821] = new Skill("Icy Veins",821,"Factions","N","Soul Reaping",
  true,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["Target foe is struck for ",[10,90]," cold damage. For ",[10,35]," seconds, if target foe dies all nearby foes are struck for ",[20,110]," cold damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Cold damage",10,90],
  ["Duration",10,35],
  ["Cold damage<br />upon target death",20,110] ] );
g_skillsById[431] = new Skill("Ignite Arrows",431,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Preparation",10,0,2,12,0,false,0,
  ["For 24 seconds, your arrows explode on contact, dealing ",[3,18]," fire damage to target and all adjacent foes."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage",3,18] ] );
g_skillsById[35] = new Skill("Ignorance",35,"Core","Me","Domination Magic",
  false,false,false,false,"Hex Spell",15,0,1,10,0,false,0,
  ["For ",[8,20]," seconds target foe cannot use signets."],
  {"signet-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[37] = new Skill("Illusion of Haste",37,"Core","Me","Illusion Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,5,0,false,0,
  ["For ",[5,11]," seconds you are no longer Crippled, and you move 33% faster. When Illusion of Haste ends, you become Crippled for 15 seconds."],
  {"crippled-remove": true, "crippled-self": true, "move-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[879] = new Skill("Illusion of Pain",879,"Factions","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["For 10 seconds, target foe has -",[3,10]," Health degeneration. When Illusion of Pain ends, that foe is healed for 15 Health for each point of Health degeneration caused from this Spell."],
  {"health-degen": true}, [
  ["Health restoration",3,10,15],
  ["Health degeneration",3,10] ] );
g_skillsById[32] = new Skill("Illusion of Weakness",32,"Prophecies","Me","Illusion Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,30,0,false,0,
  ["You lose ",[50,240]," Health. Illusion of Weakness ends if damage drops your Health below 25% of your maximum. When Illusion of Weakness ends, you gain ",[50,240]," Health."],
  {"heal-self": true, "sacrifice": true}, [
  ["Health loss",50,240],
  ["Healing",50,240] ] );
g_skillsById[33] = new Skill("Illusionary Weaponry",33,"Prophecies","Me","Illusion Magic",
  true,false,false,false,"Enchantment Spell",15,0,1,25,0,false,0,
  ["For 30 seconds, you deal no damage in melee, but whenever you attack in melee, target foe takes ",[8,40]," damage."],
  {"damage": true}, [
  ["Damage",8,40] ] );
g_skillsById[899] = new Skill("Images of Remorse",899,"Factions","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",5,0,2,5,0,false,0,
  ["For ",[5,10]," seconds, target foe suffers -",[1,3]," Health degeneration. If that foe was attacking, that foe takes ",[10,52]," damage."],
  {"damage": true, "health-degen": true}, [
  ["Duration",5,10],
  ["Health degeneration",1,3],
  ["Damage",10,52] ] );
g_skillsById[76] = new Skill("Imagined Burden",76,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",15,0,1,30,0,false,0,
  ["For ",[8,20]," seconds, target foe moves 50% slower."],
  {"move-nerf": true}, [
  ["Duration",8,20] ] );
g_skillsById[1526] = new Skill("Imbue Health",1526,"Nightfall","D","Mysticism",
  false,false,false,false,"Spell",10,0,0.25,10,0,false,0,
  ["Target other ally is healed for ",[5,50],"% of your current Health (maximum 300 Health)."],
  {"heal": true}, [
  ["%Healing",5,50] ] );
g_skillsById[191] = new Skill("Immolate",191,"Core","E","Fire Magic",
  false,false,false,false,"Spell",10,0,1,3,0,false,0,
  ["Target foe is struck for ",[15,60]," fire damage and is set on fire for ",[1,3]," seconds."],
  {"burning": true, "damage": true}, [
  ["Fire damage",15,60],
  ["Burning duration",1,3] ] );
g_skillsById[1033] = new Skill("Impale",1033,"Factions","A","Deadly Arts",
  false,false,false,false,"Skill",5,0,1,15,0,false,0,
  ["Must follow a dual attack. Target foe is struck for ",[25,100]," earth damage and suffers from a Deep Wound for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["Earth damage",25,100],
  ["Deep Wound duration",5,20] ] );
g_skillsById[428] = new Skill("Incendiary Arrows",428,"Prophecies","R","Wilderness Survival",
  true,false,false,false,"Preparation",5,0,2,24,0,false,0,
  ["For ",[3,15]," seconds, targets struck by your arrows are interrupted and set on fire for ",[1,3]," seconds."],
  {"burning": true, "interrupt": true}, [
  ["Duration",3,15],
  ["Burning duration",1,3] ] );
g_skillsById[179] = new Skill("Incendiary Bonds",179,"Prophecies","E","Fire Magic",
  false,false,false,false,"Hex Spell",15,0,2,15,0,false,0,
  ["After 3 seconds, target foe and all nearby foes are struck for ",[20,80]," fire damage and are set on fire for ",[1,3]," seconds."],
  {"burning": true, "damage": true}, [
  ["Fire Damage",20,80],
  ["Burning",1,3] ] );
g_skillsById[47] = new Skill("Ineptitude",47,"Prophecies","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For 4 seconds, the next time target foe attacks, that foe takes ",[30,135]," damage and becomes Blinded for 10 seconds."],
  {"blind": true, "damage": true}, [
  ["Damage",30,135] ] );
g_skillsById[183] = new Skill("Inferno",183,"Core","E","Fire Magic",
  false,false,false,false,"Spell",10,0,0.75,10,0,false,0,
  ["All adjacent foes are struck for ",[30,135]," fire damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire Damage",30,135] ] );
g_skillsById[1730] = new Skill("Infuriating Heat",1730,"Nightfall","R","Expertise",
  true,false,false,false,"Nature Ritual",5,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures within its range gain adrenaline twice as fast. This Spirit dies after ",[30,60]," seconds."],
  {"adrenal-gain": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,60] ] );
g_skillsById[139] = new Skill("Infuse Condition",139,"Prophecies","N","Death Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For the next ",[15,60]," seconds, whenever you receive a condition, that condition is transferred to your closest minion instead."],
  {"condition-counter": true, "minion": true}, [
  ["Duration",15,60] ] );
g_skillsById[292] = new Skill("Infuse Health",292,"Core","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,0.25,0,0,false,0,
  ["Lose half your current Health. Target other ally is healed for ",[100,136],"% of the amount you lost."],
  {"heal": true, "sacrifice": true}, [
  ["% Healed",100,136] ] );
g_skillsById[123] = new Skill("Insidious Parasite",123,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",15,0,1,12,0,false,0,
  ["For ",[5,15]," seconds, whenever target foe hits with an attack, you steal up to ",[15,45]," Health from that foe."],
  {"attack-punish": true, "health-steal": true}, [
  ["Duration",5,15],
  ["Life stealing",15,45] ] );
g_skillsById[2207] = new Skill("Inspirational Speech",2207,"Eye of the North","P","Motivation",
  false,false,false,false,"Skill",5,0,0,20,0,false,0,
  ["You lose all adrenaline and target other ally gains ",[1,4]," strikes of adrenaline."],
  {}, [
  ["Adrenaline gain",1,4] ] );
g_skillsById[21] = new Skill("Inspired Enchantment",21,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["Remove an Enchantment from target foe and gain ",[3,15]," Energy. For 20 seconds, Inspired Enchantment is replaced with the Enchantment removed from target foe."],
  {"enchant-remove": true, "energy-gain": true, "skill-copy": true}, [
  ["Energy gain",3,15] ] );
g_skillsById[22] = new Skill("Inspired Hex",22,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,1,0,0,false,0,
  ["Remove a Hex from target ally and gain ",[4,10]," Energy. For 20 seconds, Inspired Hex is replaced with the Hex that was removed."],
  {"energy-gain": true, "hex-remove": true, "skill-copy": true}, [
  ["Energy gain",4,10] ] );
g_skillsById[2104] = new Skill("Intensity",2104,"Nightfall","E","Sunspear rank",
  false,false,false,true,"Enchantment Spell",5,0,1,45,0,false,0,
  ["For 10 seconds, your spells deal ",[15,25],"% more damage."],
  {}, [
 ] );
g_skillsById[1531] = new Skill("Intimidating Aura",1531,"Nightfall","D","No Attribute",
  false,false,false,false,"Enchantment Spell",10,0,0.75,20,0,false,0,
  ["For 60 seconds, if you strike a foe who has less Health than you, that foe loses 1 Enchantment and Intimidating Aura ends."],
  {}, [
 ] );
g_skillsById[1664] = new Skill("Invoke Lightning",1664,"Nightfall","E","Air Magic",
  true,false,false,false,"Spell",10,0,2,15,0,true,0,
  ["Target foe and up to two other foes near your target are struck for ",[10,100]," lightning damage. This Spell has 25% armor penetration. If you are not under the effects of an Enchantment, this spell causes Exhaustion."],
  {"damage": true}, [
  ["Lightning damage",10,100] ] );
g_skillsById[216] = new Skill("Iron Mist",216,"Prophecies","E","Earth Magic",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For ",[5,17]," seconds, target foe moves 90% slower. That foe gains immunity to damage from all sources except lightning."],
  {"move-nerf": true}, [
  ["Duration",5,17] ] );
g_skillsById[786] = new Skill("Iron Palm",786,"Factions","A","Deadly Arts",
  false,false,false,false,"Skill",5,0,0.75,20,0,false,0,
  ["Target touched foe suffers ",[5,50]," damage, and if that foe is suffering from a Hex or Condition that foe is knocked down. Iron Palm counts as a lead attack."],
  {"damage": true, "knockdown": true, "lead-attack": true, "touch": true}, [
  ["Damage",5,50] ] );
g_skillsById[356] = new Skill("Irresistible Blow",356,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. If Irresistible Blow is blocked, your target is knocked down and takes ",[5,20]," damage."],
  {"block-punish": true, "damage": true, "knockdown": true}, [
  ["+Damage",5,20],
  ["Damage",5,20] ] );
g_skillsById[1489] = new Skill("Irresistible Sweep",1489,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,4,0,false,0,
  ["You lose 1 Enchantment. If you lose an Enchantment in this way, Irresistible Sweep cannot be blocked. This attack deals +",[10,30]," damage if it hits."],
  {"block-counter": true, "damage": true}, [
  ["+Damage",10,30] ] );
g_skillsById[1355] = new Skill("Jagged Bones",1355,"Nightfall","N","Death Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,15,0,false,0,
  ["For 30 seconds, whenever target undead servant dies, it is replaced by a level ",[0,15]," jagged horror that causes Bleeding with each of its attacks."],
  {"bleeding": true, "minion": true}, [
  ["Minion level",0,15] ] );
g_skillsById[782] = new Skill("Jagged Strike",782,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,1,0,false,0,
  ["If Jagged Strike hits, your target suffers from Bleeding for ",[5,20]," seconds."],
  {"bleeding": true}, [
  ["Bleeding duration",5,20] ] );
g_skillsById[1135] = new Skill("Jaizhenju Strike",1135,"Factions","W","Swordsmanship",
  false,false,false,false,"Sword Attack",5,0,0,8,0,false,0,
  ["If Jaizhenju Strike hits, you strike for +",[1,30]," damage. If you are not using a Stance, Jaizhenju Strike cannot be blocked."],
  {"damage": true}, [
  ["+ Damage",1,30] ] );
g_skillsById[1120] = new Skill("Jamei's Gaze",1120,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,0.75,3,0,false,0,
  ["Heal target other ally for ",[35,180]," Health."],
  {"heal": true}, [
  ["Healing",35,180] ] );
g_skillsById[763] = new Skill("Jaundiced Gaze",763,"Factions","N","Blood Magic",
  false,false,false,false,"Spell",10,0,1,2,0,false,0,
  ["If target foe has more Health than you, you steal up to ",[18,60]," Health. Otherwise, you deal ",[18,60]," damage."],
  {"damage": true, "health-steal": true, "sacrifice": true}, [
  ["Life stealing or Damage",18,60] ] );
g_skillsById[267] = new Skill("Judge's Insight",267,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,10,0,false,0,
  ["For ",[8,20]," seconds, target ally's attacks deal holy damage and have +20% armor penetration."],
  {}, [
  ["Duration",8,20] ] );
g_skillsById[1390] = new Skill("Judge's Intervention",1390,"Nightfall","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,8,0,false,0,
  ["For 10 seconds, the next time target ally receives damage that would be fatal, the damage is negated and one nearby foe takes ",[30,180]," damage."],
  {"damage": true, "damage-limit": true}, [
  ["Damage",30,180] ] );
g_skillsById[1021] = new Skill("Jungle Strike",1021,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0.5,10,0,false,0,
  ["Must follow a lead attack. If it hits, this attack strikes for +",[10,25]," damage. If it hits a foe that was Crippled, it does +",[1,31]," damage."],
  {"crippled-punish": true, "damage": true}, [
  ["+ Damage",10,25],
  ["+ Damage on crippled foe",1,31] ] );
g_skillsById[1119] = new Skill("Karei's Healing Circle",1119,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Heal yourself and all adjacent creatures for ",[30,180]," points."],
  {"heal": true, "heal-aoe": true}, [
  ["Healing",30,180] ] );
g_skillsById[1720] = new Skill("Keen Arrow",1720,"Nightfall","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. If you land a critical hit, you deal an additional +",[5,35]," damage."],
  {"damage": true}, [
  ["+ Damage",5,20],
  ["+ Damage when critical",5,35] ] );
g_skillsById[2009] = new Skill("Keen Chop",2009,"Eye of the North","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,3,0,0,0,false,0,
  ["If it hits, this attack always results in a critical hit."],
  {}, [
 ] );
g_skillsById[63] = new Skill("Keystone Signet",63,"Prophecies","Me","Inspiration Magic",
  true,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["All of your Signets except Keystone Signet are recharged. All of your non-Signet skills are disabled for ",[17,5]," seconds."],
  {"lock-self": true, "recharge-buff": true, "signet-buff": true}, [
  ["Disabled duration",17,5] ] );
g_skillsById[433] = new Skill("Kindle Arrows",433,"Core","R","Wilderness Survival",
  false,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For 24 seconds, your arrows deal fire damage and hit for an additional ",[3,24]," fire damage."],
  {"damage": true}, [
  ["Additional fire damage",3,24] ] );
g_skillsById[166] = new Skill("Kinetic Armor",166,"Prophecies","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",15,0,3,60,0,false,0,
  ["For 8 seconds, you gain +",[20,80]," armor. Whenever you cast a Spell, Kinetic Armor is renewed for 8 seconds."],
  {"armor-buff": true}, [
  ["+ Armor",20,80] ] );
g_skillsById[1113] = new Skill("Kirin's Wrath",1113,"Factions","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,2,30,0,false,0,
  ["For 5 seconds, foes adjacent to the location in which the spell was cast take ",[8,32]," holy damage each second."],
  {"damage": true, "damage-aoe": true}, [
  ["Holy damage",8,32] ] );
g_skillsById[1056] = new Skill("Kitah's Burden",1056,"Factions","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",15,0,1,30,0,false,0,
  ["For 10 seconds, target foe moves 50% slower. When Kitah's Burden ends you gain ",[10,22]," Energy."],
  {"energy-gain": true, "move-nerf": true}, [
  ["Energy gain",10,22] ] );
g_skillsById[2010] = new Skill("Knee Cutter",2010,"Eye of the North","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,5,0,1,0,false,0,
  ["If this attack hits a Crippled foe, you gain ",[2,7]," Energy and ",[1,3]," strikes of adrenaline."],
  {}, [
  ["Energy gain",2,7],
  ["Adrenaline gain",1,3] ] );
g_skillsById[961] = new Skill("Lacerate",961,"Factions","R","Beast Mastery",
  true,false,false,false,"Nature Ritual",10,0,3,15,0,false,0,
  ["Create a level ",[1,10]," Spirit. Bleeding creatures within its range suffer -2 Health degeneration. When this Spirit dies, all non-Spirit creatures within its range that have less than 90% Health begin Bleeding for ",[5,25]," seconds. This Spirit dies after ",[30,150]," seconds."],
  {"bleeding": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Bleeding duration",5,25],
  ["Spirit duration",30,150] ] );
g_skillsById[849] = new Skill("Lacerating Chop",849,"Factions","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If Lacerating Chop hits, you deal +",[5,20]," damage. If it strikes a knocked down foe your target suffers from Bleeding for ",[5,20]," seconds."],
  {"bleeding": true, "damage": true}, [
  ["+Damage",5,20],
  ["Bleeding",5,20] ] );
g_skillsById[916] = new Skill("Lamentation",916,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,1,20,0,false,0,
  ["If target foe is within earshot of a corpse or Spirit, that foe takes ",[15,75]," damage."],
  {"corpse-uses": true, "damage": true, "spirit-uses": true}, [
  ["Damage",15,75] ] );
g_skillsById[824] = new Skill("Lava Arrows",824,"Factions","E","Fire Magic",
  false,false,false,false,"Spell",5,0,1,2,0,false,0,
  ["Lava Arrows fly toward up to 3 foes near your target and strike for ",[20,65]," fire damage if they hit. Lava Arrows have half the normal range."],
  {"damage": true, "damage-aoe": true}, [
  ["Damage",20,65] ] );
g_skillsById[195] = new Skill("Lava Font",195,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",10,0,2,4,0,false,0,
  ["For 5 seconds, foes adjacent to the location where this Spell was cast are struck for ",[5,50]," fire damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage per second",5,50] ] );
g_skillsById[1584] = new Skill("Leader's Comfort",1584,"Nightfall","P","Leadership",
  false,false,false,false,"Skill",5,0,2,8,0,false,0,
  ["You gain ",[30,75]," Health. For each ally within earshot, you also gain +",[10,20]," Health (maximum 140 Health)."],
  {"heal-self": true}, [
  ["Healing",30,75],
  ["Additional Health",10,20] ] );
g_skillsById[1583] = new Skill("Leader's Zeal",1583,"Nightfall","P","Motivation",
  false,false,false,false,"Skill",5,0,0,12,0,false,0,
  ["For each nearby ally, you gain 2 Energy (maximum ",[8,12]," Energy)."],
  {"energy-gain": true}, [
  ["Max Energy gained",8,12] ] );
g_skillsById[1023] = new Skill("Leaping Mantis Sting",1023,"Factions","A","Dagger Mastery",
  false,false,false,false,"Lead Attack",5,0,0,8,0,false,0,
  ["If Mantis Sting hits, target foe takes +",[14,20]," damage. If this attack strikes a moving foe, that foe is Crippled for ",[3,15]," seconds."],
  {"crippled": true, "damage": true}, [
  ["+ Damage",14,20],
  ["Crippled duration",3,15] ] );
g_skillsById[61] = new Skill("Leech Signet",61,"Core","Me","Inspiration Magic",
  false,false,false,false,"Signet",0,0,0.25,30,0,false,0,
  ["Interrupt target foe's action. If that action was a Spell, you gain ",[3,15]," Energy."],
  {"energy-gain": true, "interrupt": true}, [
  ["Energy gain",3,15] ] );
g_skillsById[1134] = new Skill("Leviathan's Sweep",1134,"Factions","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0,8,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. If this attack is blocked, your target is knocked down and suffers ",[10,34]," damage."],
  {"block-punish": true, "damage": true, "knockdown": true}, [
  ["+Damage",5,20],
  ["Damage",10,34] ] );
g_skillsById[1251] = new Skill("Life",1251,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Binding Ritual",10,0,3,20,0,false,0,
  ["Create a level ",[1,10]," Spirit. When this Spirit dies, all non-Spirit allies within its range are healed for ",[1,7]," Health for each second this Spirit was alive. This Spirit dies after 20 seconds."],
  {"heal": true, "heal-aoe": true, "spirit": true}, [
  ["Level",1,10],
  ["Health",1,7] ] );
g_skillsById[244] = new Skill("Life Attunement",244,"Prophecies","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, target ally deals 30% less damage in combat, but gains ",[14,50],"% more Health when healed."],
  {"heal-buff": true}, [
  ["Percentage",14,50] ] );
g_skillsById[270] = new Skill("Life Barrier",270,"Prophecies","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",15,0,2,5,-1,false,0,
  ["While you maintain this Enchantment, damage dealt to target other ally is reduced by ",[20,50],"%. If your Health is below 50% when that ally takes damage, Life Barrier ends."],
  {"damage-nerf": true}, [
  ["%Damage reduction",20,50] ] );
g_skillsById[241] = new Skill("Life Bond",241,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, whenever target other ally takes damage from an attack, half the damage is redirected to you. The damage you receive this way is reduced by ",[3,30],"."],
  {"damage-nerf": true}, [
  ["Damage reduction",3,30] ] );
g_skillsById[1123] = new Skill("Life Sheath",1123,"Factions","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",5,0,1,7,0,false,0,
  ["For 20 seconds, the next ",[30,150]," damage target ally would take is negated."],
  {"damage-nerf": true}, [
  ["Damage reduction",30,150] ] );
g_skillsById[109] = new Skill("Life Siphon",109,"Core","N","Blood Magic",
  false,false,false,false,"Hex Spell",10,0,2,2,0,false,0,
  ["For ",[12,24]," seconds, target foe suffers -",[1,3]," Health degeneration, and you gain +",[1,3]," Health regeneration."],
  {"health-degen": true, "health-regen": true}, [
  ["Duration",12,24],
  ["Health degeneration",1,3],
  ["Health regeneration",1,3] ] );
g_skillsById[126] = new Skill("Life Transfer",126,"Prophecies","N","Blood Magic",
  true,false,false,false,"Hex Spell",5,0,1,30,0,false,0,
  ["For ",[6,12]," seconds, target foe suffers -",[3,8]," Health degeneration, which you gain as Health regeneration."],
  {"health-degen": true, "health-regen": true}, [
  ["Duration",6,12],
  ["Health degeneration",3,8] ] );
g_skillsById[1067] = new Skill("Lifebane Strike",1067,"Factions","N","Blood Magic",
  false,false,false,false,"Spell",10,0,2,8,0,false,0,
  ["Target foe takes ",[12,48]," shadow damage. If that foe's Health is above 50%, you steal up to ",[12,48]," Health."],
  {"damage": true, "health-steal": true}, [
  ["Shadow damage",12,48],
  ["Life stealing",12,48] ] );
g_skillsById[1645] = new Skill("Lift Enchantment",1645,"Nightfall","A","Deadly Arts",
  false,false,false,false,"Skill",5,0,0.25,10,0,false,0,
  ["If target touched foe is knocked down, that foe loses one Enchantment."],
  {"enchant-remove": true, "knockdown-punish": true, "touch": true}, [
 ] );
g_skillsById[2212] = new Skill("Light of Deldrimor",2212,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Spell",5,0,0.75,20,0,false,0,
  ["All foes in the area are struck for ",[40,80]," holy damage. The location of hidden objects are briefly indicated on your Compass. Any hidden objects in the area are revealed."],
  {}, [
  ["Damage",40,80] ] );
g_skillsById[1397] = new Skill("Light of Deliverance",1397,"Nightfall","Mo","Healing Prayers",
  true,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["All party members are healed for ",[5,70]," Health."],
  {"heal": true}, [
  ["Healing",5,70] ] );
g_skillsById[304] = new Skill("Light of Dwayna",304,"Prophecies","Mo","No Attribute",
  false,false,false,false,"Spell",25,0,4,20,0,false,0,
  ["Resurrect all dead party members in the area. They are returned to life with 25% Health and zero Energy."],
  {"rez": true}, [
 ] );
g_skillsById[1815] = new Skill("Lightbringer Signet",1815,"Nightfall",null,"Lightbringer rank",
  true,false,false,true,"Signet",0,0,0.25,25,0,false,0,
  ["If you are within range of a demonic servant of Abaddon, you gain 1 strike of adrenaline, plus 1 adrenaline and 3 Energy for each rank of Lightbringer you have attained."],
  {}, [
 ] );
g_skillsById[1814] = new Skill("Lightbringer's Gaze",1814,"Nightfall",null,"Lightbringer rank",
  false,false,false,true,"Skill",5,0,1,15,0,false,0,
  ["Target demonic servant of Abaddon takes 100 holy damage and is interrupted. This skill strikes one additional foe in the area for each rank of Lightbringer you have attained. This skill is disabled for 15 seconds after it is used."],
  {}, [
 ] );
g_skillsById[1369] = new Skill("Lightning Bolt",1369,"Nightfall","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Send out a Lightning Bolt that strikes for ",[5,50]," lightning damage if it hits. If Lightning Bolt strikes a moving foe, that foe is struck for ",[5,50]," additional lightning damage. This spell has 25% armor penetration."],
  {"damage": true}, [
  ["Lightning damage",5,50],
  ["Additional lightning damage",5,50] ] );
g_skillsById[865] = new Skill("Lightning Hammer",865,"Factions","E","Air Magic",
  false,false,false,false,"Spell",25,0,2,4,0,false,0,
  ["Target foe is struck for ",[10,100]," lightning damage. Lightning Hammer has 25% armor penetration."],
  {"damage": true}, [
  ["Lightning damage",10,100] ] );
g_skillsById[230] = new Skill("Lightning Javelin",230,"Prophecies","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,2,0,false,0,
  ["Send out a Lightning Javelin that strikes for ",[15,50]," lightning damage if it hits. If Lightning Javelin strikes an attacking foe, that foe is interrupted. This Spell has 25% armor penetration."],
  {"damage": true, "interrupt": true}, [
  ["Lightning damage",15,50] ] );
g_skillsById[229] = new Skill("Lightning Orb",229,"Core","E","Air Magic",
  false,false,false,false,"Spell",15,0,2,5,0,false,0,
  ["Send out a lightning Orb that strikes target foe for ",[10,100]," lightning damage and causes Cracked Armor for ",[5,20]," seconds if it hits. This spell has 25% armor penetration."],
  {"damage": true}, [
  ["Lightning damage",10,100],
  ["Cracked Armor",5,20] ] );
g_skillsById[453] = new Skill("Lightning Reflexes",453,"Core","R","Expertise",
  false,false,false,false,"Stance",10,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, you have a 75% chance to block melee and projectile attacks, and you attack 33% faster."],
  {"attackspeed-buff": true, "block": true}, [
  ["Duration",5,11] ] );
g_skillsById[222] = new Skill("Lightning Strike",222,"Core","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Strike target foe for ",[5,50]," lightning damage. This Spell has 25% armor penetration."],
  {"damage": true}, [
  ["Lightning damage",5,50] ] );
g_skillsById[205] = new Skill("Lightning Surge",205,"Core","E","Air Magic",
  true,false,false,false,"Hex Spell",15,0,2,10,0,false,0,
  ["After 3 seconds, target foe is knocked down and struck for ",[14,100]," lightning damage."],
  {"damage": true}, [
  ["Lightning damage",14,100] ] );
g_skillsById[232] = new Skill("Lightning Touch",232,"Core","E","Air Magic",
  false,false,false,false,"Skill",5,0,0.75,10,0,false,0,
  ["Target touched foe and all adjacent foes are struck for ",[10,60]," lightning damage. Foes suffering from a Water Magic Hex are struck for an additional ",[10,40]," lightning damage. This skill has 25% armor penetration."],
  {"damage": true, "damage-aoe": true, "hex-punish": true, "touch": true}, [
  ["Lightning damage",10,60],
  ["+ Lightning damage",10,40] ] );
g_skillsById[142] = new Skill("Lingering Curse",142,"Core","N","Curses",
  true,false,false,false,"Hex Spell",25,0,2,10,0,false,0,
  ["Target foe loses all enchantments. For ",[8,20]," seconds, target foe gains only half Health from healing."],
  {"enchant-remove": true, "heal-nerf": true, "sacrifice": true}, [
  ["Duration",8,20] ] );
g_skillsById[1407] = new Skill("Lion's Comfort",1407,"Nightfall","W","Strength",
  false,false,false,false,"Skill",0,4,1,1,0,false,0,
  ["All of your signets are disabled for 12 seconds. You are healed for ",[50,110]," Health, and gain ",[0,3]," strike[s] of adrenaline."],
  {"heal": true, "lock-self": true}, [
  ["Healing",50,110],
  ["Adrenaline",0,3] ] );
g_skillsById[845] = new Skill("Liquid Flame",845,"Nightfall","E","Fire Magic",
  false,false,false,false,"Spell",10,0,1,15,0,false,0,
  ["Target foe is struck for ",[7,112]," fire damage. If that foe is attacking or casting a Spell, nearby foes are also struck for ",[7,112]," fire damage."],
  {"attack-punish": true, "damage": true, "damage-aoe": true, "spell-punish": true}, [
  ["Fire damage",7,112],
  ["Fire damage",7,112] ] );
g_skillsById[291] = new Skill("Live Vicariously",291,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, whenever target ally hits a foe, you gain ",[2,17]," Health."],
  {"heal-self": true}, [
  ["Health gain",2,17] ] );
g_skillsById[1222] = new Skill("Lively Was Naomei",1222,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",15,0,6,20,0,false,0,
  ["Hold Naomei's ashes for up to 45 seconds. When you drop her ashes, all party members in the area are resurrected with ",[15,75],"% Health and zero Energy."],
  {"rez": true}, [
  ["%Health",15,75] ] );
g_skillsById[1030] = new Skill("Locust's Fury",1030,"Factions","A","Critical Strikes",
  true,false,false,false,"Enchantment Spell",10,0,1,10,0,false,0,
  ["For ",[10,35]," seconds, you have an additional 50% chance to double strike while using daggers."],
  {"attackspeed-buff": true}, [
  ["Duration",10,35] ] );
g_skillsById[1987] = new Skill("Lotus Strike",1987,"Eye of the North","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",10,0,0,12,0,false,0,
  ["Must follow a lead attack. If it hits, this attack strikes for +",[10,25]," damage and you gain ",[5,20]," Energy."],
  {}, [
  ["+Damage",10,25],
  ["Energy gain",5,20] ] );
g_skillsById[2214] = new Skill("Low Blow",2214,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Skill",0,6,0.75,0,0,false,0,
  ["Strike target foe for ",[30,70]," damage. If target foe is knocked down, that foe suffers from Cracked Armor for ",[10,20]," seconds."],
  {}, [
  ["Damage",30,70],
  ["Cracked Armor duration",10,20] ] );
g_skillsById[1772] = new Skill("Lyric of Purification",1772,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",5,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, the next time each ally within earshot uses a Signet, that ally loses 1 Condition."],
  {"condition-remove": true}, [
  ["Duration",5,20] ] );
g_skillsById[1563] = new Skill("Lyric of Zeal",1563,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",0,6,1,5,0,false,0,
  ["For 10 seconds, the next time each ally within earshot uses a Signet, that ally gains ",[1,8]," Energy."],
  {"energy-gain": true, "energy-gain-aoe": true}, [
  ["Energy gained",1,8] ] );
g_skillsById[1538] = new Skill("Lyssa's Assault",1538,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",10,0,0,8,0,false,0,
  ["This attack strikes for +",[5,20]," damage if it hits. If you are under the effects of an Enchantment, you gain ",[3,12]," Energy."],
  {"damage": true, "enchant-uses": true, "energy-gain": true}, [
  ["+Damage",5,20],
  ["Energy",3,12] ] );
g_skillsById[813] = new Skill("Lyssa's Aura",813,"Factions","Me","Inspiration Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,15,0,false,0,
  ["For ",[3,10]," seconds, whenever you are the target of an enemy Spell, you steal up to ",[1,7]," Energy from the caster."],
  {"energy-drain": true, "energy-gain": true}, [
  ["Duration",3,10],
  ["Energy stolen",1,7] ] );
g_skillsById[877] = new Skill("Lyssa's Balance",877,"Factions","Me","No Attribute",
  false,false,false,false,"Spell",5,0,1,15,0,false,0,
  ["Target foe loses one Enchantment. If you have more Enchantments than target foe, this skill has no effect."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[1512] = new Skill("Lyssa's Haste",1512,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,15,0,false,0,
  ["For ",[5,11]," seconds, you run 25% faster. While moving, you gain 1 Energy each second but lose ",[15,5]," Health each second."],
  {"damage-self": true, "energy-gain": true, "move-buff": true}, [
  ["Duration",5,11],
  ["-Health",15,5] ] );
g_skillsById[215] = new Skill("Maelstrom",215,"Core","E","Water Magic",
  false,false,false,false,"Spell",25,0,2,30,0,true,0,
  ["Create a Maelstrom at target foe's location. For 10 seconds, foes adjacent to that area are struck for ",[10,25]," cold damage each second. Maelstrom interrupts Spell-casting when it hits. This Spell causes Exhaustion."],
  {"damage": true, "damage-aoe": true, "interrupt": true, "interrupt-aoe": true}, [
  ["Cold damage",10,25] ] );
g_skillsById[1726] = new Skill("Magebane Shot",1726,"Nightfall","R","No Attribute",
  true,false,false,false,"Bow Attack",10,0,0.5,5,0,false,0,
  ["If this attack hits, it interrupts target foe's action. If that action was a Spell, it is disabled for an additional 10 seconds. This attack cannot be blocked."],
  {"interrupt": true, "spell-counter": true}, [
 ] );
g_skillsById[1694] = new Skill("Magehunter Strike",1694,"Nightfall","W","Strength",
  true,false,false,false,"Melee Attack",5,0,0.5,3,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. If your target is under the effects of an Enchantment, this attack cannot be blocked."],
  {"block-counter": true, "damage": true, "enchant-punish": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[1697] = new Skill("Magehunter's Smash",1697,"Nightfall","W","Hammer Mastery",
  true,false,false,false,"Hammer Attack",0,8,0,0,0,false,0,
  ["If this attack hits, target foe is knocked down. If your target is under the effects of an Enchantment, this attack cannot be blocked."],
  {"enchant-punish": true, "knockdown": true}, [
 ] );
g_skillsById[168] = new Skill("Magnetic Aura",168,"Prophecies","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",5,0,0.25,60,0,false,0,
  ["For ",[5,20]," seconds, Magnetic Aura has a 75% chance to block melee attacks."],
  {"block": true}, [
  ["Duration",5,20] ] );
g_skillsById[2190] = new Skill("Magnetic Surge",2190,"Eye of the North","E","Earth Magic",
  false,false,false,false,"Spell",10,0,2,10,0,false,0,
  ["Target foe takes ",[15,75]," damage. If target foe is under the effects of an enchantment, that foe takes ",[30,120]," damage instead."],
  {}, [
  ["Non-enchanted*",15,75],
  ["Enchanted*",30,120] ] );
g_skillsById[2150] = new Skill("Maiming Spear",2150,"Eye of the North","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0,5,0,false,0,
  ["If your attack hits a Bleeding foe, that foe is Crippled for ",[5,20]," seconds."],
  {}, [
  ["Crippled duration",5,20] ] );
g_skillsById[438] = new Skill("Maiming Strike",438,"Core","R","Beast Mastery",
  false,false,false,false,"Pet Attack",10,0,0,5,0,false,0,
  ["Your animal companion attempts a Maiming Strike that deals +",[5,20]," damage. If that attack hits a moving foe that foe becomes Crippled for ",[3,15]," seconds."],
  {"crippled": true, "damage": true}, [
  ["+Damage",5,20],
  ["Crippled duration",3,15] ] );
g_skillsById[140] = new Skill("Malaise",140,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",5,0,2,2,0,false,0,
  ["For ",[5,35]," seconds, target foe suffers -1 Energy degeneration and you suffer -1 Health degeneration. If target foe's Energy reaches 0, that foe takes ",[5,50]," damage and Malaise ends."],
  {"damage": true, "energy-degen": true, "health-degen-self": true}, [
  ["Duration",5,35],
  ["Damage",5,50] ] );
g_skillsById[1633] = new Skill("Malicious Strike",1633,"Nightfall","A","Critical Strikes",
  false,false,false,false,"Melee Attack",5,0,0,6,0,false,0,
  ["If this attack hits a foe suffering from a Condition, you deal +",[10,30]," damage and this attack results in a critical hit."],
  {"damage": true}, [
  ["+ Damage",10,30] ] );
g_skillsById[122] = new Skill("Malign Intervention",122,"Prophecies","N","Death Magic",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["For ",[5,20]," seconds, target foe receives 20% less benefit from healing. If target foe dies while hexed with Malign Intervention, a level ",[1,17]," masterless bone horror is summoned."],
  {"corpse-counter": true, "heal-nerf": true, "minion": true}, [
  ["Duration",5,20],
  ["Level",1,17] ] );
g_skillsById[974] = new Skill("Mantis Touch",974,"Factions","A","Deadly Arts",
  false,false,false,false,"Spell",5,0,0.75,15,0,false,0,
  ["Must follow a lead attack. Target foe becomes Crippled for ",[5,20]," seconds. This skill counts as an off-hand attack."],
  {"crippled": true, "off-hand-attack": true}, [
  ["Crippled duration",5,20] ] );
g_skillsById[16] = new Skill("Mantra of Concentration",16,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[1,38]," seconds, the next time you would be interrupted while performing a skill, you are not interrupted."],
  {"interrupt-counter": true}, [
  ["Duration",1,38] ] );
g_skillsById[6] = new Skill("Mantra of Earth",6,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, whenever you take earth damage, the damage is reduced by ",[26,50],"% and you gain 2 Energy."],
  {"damage-nerf": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",30,90],
  ["Earth damage reduction %",26,50] ] );
g_skillsById[7] = new Skill("Mantra of Flame",7,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, whenever you take fire damage, the damage is reduced by ",[26,50],"% and you gain 2 Energy."],
  {"damage-nerf": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",30,90],
  ["Fire damage reduction %",26,50] ] );
g_skillsById[8] = new Skill("Mantra of Frost",8,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, whenever you take cold damage, the damage is reduced by ",[26,50],"% and you gain 2 Energy."],
  {"damage-nerf": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",30,90],
  ["Cold damage reduction %",26,50] ] );
g_skillsById[15] = new Skill("Mantra of Inscriptions",15,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, your Signets recharge ",[25,50],"% faster."],
  {"signet-buff": true}, [
  ["Duration",30,90],
  ["Faster recharge %",25,50] ] );
g_skillsById[9] = new Skill("Mantra of Lightning",9,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, whenever you take lightning damage, the damage is reduced by ",[26,50],"% and you gain 2 Energy."],
  {"damage-nerf": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",30,90],
  ["Lightning damage reduction %",26,50] ] );
g_skillsById[14] = new Skill("Mantra of Persistence",14,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",15,0,0,15,0,false,0,
  ["For 30 seconds, any Illusion Magic Hex you cast lasts ",[20,50],"% longer."],
  {"hex-buff": true}, [
  ["Longer duration %",20,50] ] );
g_skillsById[82] = new Skill("Mantra of Recall",82,"Prophecies","Me","Inspiration Magic",
  true,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For 20 seconds, you gain no benefit from it. You gain ",[10,25]," Energy when Mantra of Recall ends."],
  {"energy-gain": true}, [
  ["Energy gain",10,25] ] );
g_skillsById[13] = new Skill("Mantra of Recovery",13,"Core","Me","Fast Casting",
  true,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,20]," seconds, spells you cast recharge 33% faster."],
  {"recharge-buff": true}, [
  ["Duration",5,20] ] );
g_skillsById[17] = new Skill("Mantra of Resolve",17,"Core","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, you cannot be interrupted, but each time you would have been interrupted, you lose ",[10,4]," Energy or Mantra of Resolve ends."],
  {"energy-leak": true, "interrupt-counter": true}, [
  ["Duration",30,90],
  ["Energy lost",10,4] ] );
g_skillsById[18] = new Skill("Mantra of Signets",18,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Stance",15,0,0,30,0,false,0,
  ["For ",[10,25]," seconds, the next time you use a Signet, it recharges immediately."],
  {"signet-buff": true}, [
  ["Duration",10,25] ] );
g_skillsById[908] = new Skill("Marauder's Shot",908,"Factions","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,6,0,false,0,
  ["If Marauder's Shot hits, you strike for +",[10,35]," damage and all your non-attack skills are disabled for 5 seconds."],
  {"damage": true}, [
  ["+Damage",10,35] ] );
g_skillsById[785] = new Skill("Mark of Death",785,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",10,0,0.25,20,0,false,0,
  ["For ",[4,10]," seconds, target foe gains 33% less benefit from healing."],
  {"heal-nerf": true}, [
  ["Duration",4,10] ] );
g_skillsById[1360] = new Skill("Mark of Fury",1360,"Nightfall","N","Blood Magic",
  false,false,false,false,"Hex Spell",5,0,1,10,0,false,0,
  ["For ",[5,35]," seconds, whenever you or any of your allies successfully hit target foe, that ally gains 1 strike of adrenaline."],
  {"adrenal-gain": true}, [
  ["Duration",5,35] ] );
g_skillsById[570] = new Skill("Mark of Insecurity",570,"Nightfall","A","Deadly Arts",
  true,false,false,false,"Hex Spell",5,0,1,10,0,false,0,
  ["For ",[5,25]," seconds, Enchantments and Stances on target foe expire 50% faster."],
  {"enchant-counter": true, "stance-counter": true}, [
  ["Duration",5,25] ] );
g_skillsById[978] = new Skill("Mark of Instability",978,"Factions","A","No Attribute",
  false,false,false,false,"Hex Spell",10,0,0.25,20,0,false,0,
  ["For 20 seconds, the next time you hit target foe with a dual attack skill that foe is knocked down."],
  {"knockdown": true}, [
 ] );
g_skillsById[150] = new Skill("Mark of Pain",150,"Core","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For 30 seconds, whenever target foe takes physical damage, Mark of Pain deals ",[10,40]," shadow damage to adjacent foes."],
  {"damage": true, "damage-aoe": true}, [
  ["Shadow damage",10,40] ] );
g_skillsById[269] = new Skill("Mark of Protection",269,"Prophecies","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For 10 seconds, whenever target ally would take damage, that ally is healed for that amount instead, maximum ",[6,60],". All your Protection Prayers are disabled for 5 seconds."],
  {"damage-nerf": true, "heal": true, "heal-ot": true}, [
  ["Maximum healed",6,60] ] );
g_skillsById[190] = new Skill("Mark of Rodgort",190,"Prophecies","E","Fire Magic",
  false,false,false,false,"Hex Spell",15,0,1,15,0,false,0,
  ["Target foe and all nearby foes are Hexed with Mark of Rodgort. For ",[10,35]," seconds, whenever each foe is struck for fire damage, that foe is set on fire for ",[1,4]," seconds."],
  {"burning": true}, [
  ["Duration",10,35],
  ["Burning",1,4] ] );
g_skillsById[127] = new Skill("Mark of Subversion",127,"Prophecies","N","Blood Magic",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For 6 seconds, the next time target foe casts a spell that targets an ally of that foe, the spell fails and you steal up to ",[10,92]," Health from that foe."],
  {"health-steal": true}, [
  ["Life stealing",10,92] ] );
g_skillsById[430] = new Skill("Marksman's Wager",430,"Prophecies","R","Expertise",
  true,false,false,false,"Preparation",5,0,2,24,0,false,0,
  ["For 18 seconds, you gain ",[5,10]," Energy whenever your arrows hit, but lose 10 Energy whenever your arrows fail to strike."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Energy gain",5,10] ] );
g_skillsById[298] = new Skill("Martyr",298,"Core","Mo","No Attribute",
  true,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Transfer all Conditions and their remaining durations from your allies to you."],
  {"condition-remove": true, "condition-self": true}, [
 ] );
g_skillsById[2139] = new Skill("Masochism",2139,"Eye of the North","N","Soul Reaping",
  false,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For 30 seconds, you gain ",[1,4]," Energy whenever you sacrifice Health."],
  {}, [
  ["Energy gain",1,4] ] );
g_skillsById[1378] = new Skill("Master of Magic",1378,"Nightfall","E","Energy Storage",
  true,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For 20 seconds, whenever you cast a Spell, you gain ",[0,2]," Energy for each recharging Skill that does not share that Spell's attribute."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Energy gain",0,2] ] );
g_skillsById[1523] = new Skill("Meditation",1523,"Nightfall","D","Mysticism",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Lose 1 Enchantment. If an Enchantment is removed in this way, you gain ",[3,8]," Energy, otherwise you are healed for ",[20,125]," Health."],
  {"enchant-remove-self": true, "energy-gain": true, "heal": true}, [
  ["Energy gain",3,8],
  ["Health gain",20,125] ] );
g_skillsById[1260] = new Skill("Meekness",1260,"Nightfall","N","Curses",
  false,false,false,false,"Hex Spell",15,0,2,15,0,false,0,
  ["For ",[5,30]," seconds, target foe and all foes in the area attack 50% slower."],
  {"attackspeed-nerf": true, "sacrifice": true}, [
  ["Duration",5,30] ] );
g_skillsById[429] = new Skill("Melandru's Arrows",429,"Prophecies","R","Wilderness Survival",
  true,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For 18 seconds, whenever your arrows hit, they cause Bleeding for ",[3,25]," seconds, and if they hit a target who is under an Enchantment, they do +",[8,28]," damage."],
  {"bleeding": true, "damage": true, "enchant-punish": true}, [
  ["Bleeding duration",3,25],
  ["+ Damage",8,28] ] );
g_skillsById[441] = new Skill("Melandru's Assault",441,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Pet Attack",10,0,0,5,0,false,0,
  ["Your animal companion attempts a Melandru's Assault that deals +",[5,20]," damage. If that attack strikes a foe with an Enchantment, that foe and all adjacent foes take +",[5,35]," additional damage."],
  {"damage": true, "damage-aoe": true}, [
  ["+Damage",5,20],
  ["+Damage conditional",5,35] ] );
g_skillsById[451] = new Skill("Melandru's Resilience",451,"Prophecies","R","Wilderness Survival",
  true,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[8,20]," seconds, you gain +4 Health regeneration and +1 Energy regeneration for each Condition and Hex you are suffering."],
  {"energy-regen": true, "health-regen": true}, [
  ["Duration",8,20] ] );
g_skillsById[853] = new Skill("Melandru's Shot",853,"Factions","R","Marksmanship",
  true,false,false,false,"Bow Attack",10,0,0,7,0,false,0,
  ["If Melandru's Shot hits, you deal +",[10,35]," damage. If it hits an enchanted foe, you gain 15 Energy."],
  {"damage": true}, [
  ["+ Damage",10,35] ] );
g_skillsById[277] = new Skill("Mend Ailment",277,"Core","Mo","Protection Prayers",
  false,false,false,false,"Spell",5,0,0.75,5,0,false,0,
  ["Remove one Condition (Poison, Disease, Blindness, Dazed, Bleeding, Crippled, Burning, Weakness, Cracked Armor, or Deep Wound) from target ally. For each remaining Condition, that ally is healed for ",[5,70]," Health."],
  {"condition-remove": true, "heal": true}, [
  ["Amount healed",5,70] ] );
g_skillsById[1234] = new Skill("Mend Body and Soul",1234,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,0.75,3,0,false,0,
  ["Target ally is healed for ",[20,115]," Health. That ally loses one Condition for all Spirits within earshot."],
  {"condition-remove": true, "heal": true, "spirit-uses": true}, [
  ["Healing",20,115] ] );
g_skillsById[275] = new Skill("Mend Condition",275,"Prophecies","Mo","Protection Prayers",
  false,false,false,false,"Spell",5,0,0.75,2,0,false,0,
  ["Remove one Condition (Poison, Disease, Blindness, Dazed, Bleeding, Crippled, Burning, Weakness, or Deep Wound) from target other ally. If a Condition is removed, that ally is healed for ",[5,70]," Health."],
  {"condition-remove": true, "heal": true}, [
  ["Health",5,70] ] );
g_skillsById[290] = new Skill("Mending",290,"Core","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, target ally gains +",[1,4]," Health regeneration."],
  {"health-regen": true}, [
  ["Health regeneration",1,4] ] );
g_skillsById[2202] = new Skill("Mending Grip",2202,"Eye of the North","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,1,6,0,false,0,
  ["Target ally is healed for ",[15,75]," Health. If that ally is under the effects of a weapon Spell, that ally loses one Condition."],
  {}, [
  ["Healing",15,75] ] );
g_skillsById[1578] = new Skill("Mending Refrain",1578,"Nightfall","P","Motivation",
  false,false,false,false,"Echo",10,0,1,8,0,false,0,
  ["For 15 seconds, target non-Spirit ally has +",[2,3]," Health regeneration. This Echo is reapplied every time a Chant or Shout ends on that ally."],
  {"health-regen": true}, [
  ["Health Regen",2,3] ] );
g_skillsById[1401] = new Skill("Mending Touch",1401,"Nightfall","Mo","Protection Prayers",
  false,false,false,false,"Spell",5,0,0.75,6,0,false,0,
  ["Touched ally loses two Conditions and is healed for ",[15,60]," Health for each Condition removed in this way."],
  {"heal": true, "touch": true}, [
  ["Healing",15,60] ] );
g_skillsById[2417] = new Skill("Mental Block",2417,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Enchantment Spell",10,0,1,15,0,false,0,
  ["For ",[1,11]," seconds you have a 50% chance to block attacks. This Enchantment is reapplied every time an enemy strikes you."],
  {}, [
  ["Duration",1,11] ] );
g_skillsById[1603] = new Skill("Merciless Spear",1603,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,6,0,0,0,false,0,
  ["If this attack hits a foe with less than 50% Health, that foe suffers from a Deep Wound for ",[5,20]," seconds."],
  {"deepwound": true}, [
  ["Deep Wound duration",5,20] ] );
g_skillsById[187] = new Skill("Meteor",187,"Core","E","Fire Magic",
  false,false,false,false,"Spell",5,0,3,30,0,true,0,
  ["Target foe and all adjacent foes are struck for ",[7,112]," fire damage and knocked down. This Spell causes Exhaustion."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Fire damage",7,112] ] );
g_skillsById[192] = new Skill("Meteor Shower",192,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",25,0,5,60,0,true,0,
  ["Create a Meteor Shower at target foe's location. For 9 seconds, foes adjacent to that location are struck for ",[7,112]," fire damage and knocked down every 3 seconds. This Spell causes Exhaustion."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Fire damage",7,112] ] );
g_skillsById[351] = new Skill("Mighty Blow",351,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,7,0,0,0,false,0,
  ["If this attack hits, you strike for +",[10,40]," damage."],
  {"damage": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[1547] = new Skill("Mighty Throw",1547,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,2,3,0,0,false,0,
  ["Your spear moves three times faster. If it hits, you deal +",[10,40]," damage."],
  {"damage": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[773] = new Skill("Mighty Was Vorizun",773,"Factions","Rt","Communing",
  false,false,false,false,"Item Spell",5,0,2,30,0,false,0,
  ["Hold Vorizun's ashes for up to ",[15,60]," seconds. While you hold his ashes, you gain +15 armor and +30 maximum Energy."],
  {"armor-buff": true, "energy-buff": true}, [
  ["Duration",15,60] ] );
g_skillsById[53] = new Skill("Migraine",53,"Prophecies","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[5,20]," seconds, target foe suffers ",[1,3]," Health degeneration and takes 100% longer to cast Spells."],
  {"health-degen": true, "spell-counter": true}, [
  ["Duration",5,20],
  ["Health degeneration",1,3] ] );
g_skillsById[1662] = new Skill("Mind Blast",1662,"Nightfall","E","Fire Magic",
  true,false,false,false,"Spell",5,0,1,3,0,false,0,
  ["Target foe is struck for ",[15,60]," fire damage. If you have more Energy than target foe, you gain ",[1,8]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["Fire damage",15,60],
  ["Energy gain",1,8] ] );
g_skillsById[185] = new Skill("Mind Burn",185,"Core","E","Fire Magic",
  true,false,false,false,"Spell",5,0,1,5,0,true,0,
  ["Target foe takes ",[15,60]," fire damage. If you have more Energy than target foe, that foe takes an additional ",[15,60]," fire damage and is set on fire for ",[1,7]," seconds. This Spell causes Exhaustion."],
  {"burning": true, "damage": true}, [
  ["Fire damage",15,60],
  ["+Fire damage",15,60],
  ["Burning duration",1,7] ] );
g_skillsById[209] = new Skill("Mind Freeze",209,"Core","E","Water Magic",
  true,false,false,false,"Hex Spell",5,0,1,8,0,true,0,
  ["Target foe suffers ",[10,40]," cold damage. If you have more Energy than target foe, that foe suffers an additional ",[10,40]," cold damage and moves 90% slower for ",[1,10]," seconds. This Spell causes Exhaustion."],
  {"damage": true, "move-nerf": true}, [
  ["Cold damage",10,40],
  ["+Cold damage",10,40],
  ["Duration",1,10] ] );
g_skillsById[226] = new Skill("Mind Shock",226,"Prophecies","E","Air Magic",
  true,false,false,false,"Spell",5,0,1,8,0,true,0,
  ["Target foe suffers ",[10,50]," lightning damage. If you have more Energy than target foe, that foe suffers ",[10,50]," additional lightning damage and is knocked down. This Spell has 25% armor penetration and causes Exhaustion."],
  {"damage": true, "knockdown": true}, [
  ["Lightning damage",10,50],
  ["+Lightning damage",10,50] ] );
g_skillsById[49] = new Skill("Mind Wrack",49,"Core","Me","Domination Magic",
  false,false,false,false,"Hex Spell",5,0,1,5,0,false,0,
  ["For 30 seconds, the next time target foe's Energy drops to 0, that foe takes ",[15,90]," damage."],
  {"damage": true}, [
  ["Damage",15,90] ] );
g_skillsById[2411] = new Skill("Mindbender",2411,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Enchantment Spell",5,0,1,24,0,false,0,
  ["For ",[6,16]," seconds, you move ",[20,33],"% faster and your Spells take half as long to cast."],
  {}, [
  ["Duration",6,16],
  ["Faster movement %",20,33] ] );
g_skillsById[1500] = new Skill("Mirage Cloak",1500,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",15,0,0.25,0,0,false,0,
  ["For 10 seconds, you have a 50% chance to block incoming attacks. When this Enchantment ends, all nearby foes are struck for ",[15,75]," earth damage."],
  {"block": true, "damage": true}, [
  ["Damage",15,75] ] );
g_skillsById[1349] = new Skill("Mirror of Disenchantment",1349,"Nightfall","Me","Domination Magic",
  false,false,false,false,"Spell",15,0,1,20,0,false,0,
  ["Remove one enchantment from target foe. All of that foe's party members also lose that same enchantment."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[1098] = new Skill("Mirror of Ice",1098,"Factions","E","Water Magic",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For 60 seconds, the next time an enemy Spell would deal damage to you, that damage is negated and that Spell's caster takes ",[10,85]," damage."],
  {"damage": true}, [
  ["Damage",10,85] ] );
g_skillsById[816] = new Skill("Mirrored Stance",816,"Factions","A","Shadow Arts",
  false,false,false,false,"Hex Spell",5,0,0.25,15,0,false,0,
  ["For ",[10,35]," seconds, whenever target foe enters a Stance, you enter the same Stance."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[236] = new Skill("Mist Form",236,"Prophecies","E","Water Magic",
  true,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[8,20]," seconds, you cannot take or deal damage from attacks."],
  {}, [
  ["Duration",8,20] ] );
g_skillsById[979] = new Skill("Mistrust",979,"Nightfall","Me","Domination Magic",
  false,false,false,false,"Hex Spell",10,0,2,20,0,false,0,
  ["For 6 seconds, the next time target foe casts a spell that targets a foe, the spell fails and all nearby allies take ",[15,75]," damage."],
  {"damage": true, "spell-counter": true}, [
  ["Damage",15,75] ] );
g_skillsById[781] = new Skill("Moebius Strike",781,"Factions","A","Dagger Mastery",
  true,false,false,false,"Off-Hand Attack",5,0,0,2,0,false,0,
  ["Must follow a Dual Attack. If it hits, Moebius Strike strikes for +",[10,35]," damage. If you strike a foe whose Health is below 50%, all your other attack skills are recharged."],
  {"damage": true}, [
  ["+ Damage",10,35] ] );
g_skillsById[1409] = new Skill("Mokele Smash",1409,"Nightfall","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",5,0,0,12,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage and gain 2 strikes of adrenaline."],
  {"adrenal-gain": true, "damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[477] = new Skill("Muddy Terrain",477,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,5,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures within its range move 10% slower and speed boosts have no effect. This Spirit dies after ",[30,90]," seconds."],
  {"move-nerf": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,90] ] );
g_skillsById[1755] = new Skill("Mystic Corruption",1755,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",5,0,1,30,0,false,0,
  ["For 20 seconds, Conditions you apply last ",[1,15],"% longer for each Enchantment on you (maximum 50%)."],
  {"condition-buff": true}, [
  ["Duration",1,15] ] );
g_skillsById[1527] = new Skill("Mystic Healing",1527,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",5,0,1,2,0,false,0,
  ["For each Enchantment on you, one party member is healed for ",[5,65]," Health (the same party member cannot be healed more than once)."],
  {"heal": true}, [
  ["Healing",5,65] ] );
g_skillsById[1516] = new Skill("Mystic Regeneration",1516,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,12,0,false,0,
  ["For ",[5,20]," seconds, you have +",[1,4]," Health regeneration for each enchantment (maximum of 3) on you."],
  {"health-regen": true}, [
  ["Duration",5,20],
  ["Health regeneration",1,4] ] );
g_skillsById[1532] = new Skill("Mystic Sandstorm",1532,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Spell",10,0,0.75,8,0,false,0,
  ["Lose all Enchantments. For each Enchantment removed in this way, all nearby foes are struck for ",[10,35]," earth damage (maximum 130 damage)."],
  {"damage": true}, [
  ["Earth damage",10,35] ] );
g_skillsById[1484] = new Skill("Mystic Sweep",1484,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,4,0,false,0,
  ["If this attack hits, you deal +",[5,10]," damage for each Enchantment on you (maximum 30 bonus damage)."],
  {"damage": true}, [
  ["+Damage",5,10] ] );
g_skillsById[1491] = new Skill("Mystic Twister",1491,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",10,0,0.75,12,0,false,0,
  ["For each Enchantment on you, 1 foe in the area is struck for ",[30,125]," cold damage (the same target cannot be hit more than once)."],
  {"damage": true}, [
  ["Cold damage",30,125] ] );
g_skillsById[1503] = new Skill("Mystic Vigor",1503,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",5,0,0.25,15,0,false,0,
  ["For 20 seconds, every time you successfully hit with an attack, you gain ",[1,7]," Health for each Enchantment on you (maximum 25 Health)."],
  {"heal-buff": true}, [
  ["Health",1,7] ] );
g_skillsById[1525] = new Skill("Natural Healing",1525,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["You are healed for ",[40,150]," Health. If you are under the effects of an Enchantment, you lose 5 Energy."],
  {"heal": true}, [
  ["Healing",40,150] ] );
g_skillsById[1727] = new Skill("Natural Stride",1727,"Nightfall","R","Wilderness Survival",
  false,false,false,false,"Stance",5,0,0,12,0,false,0,
  ["For ",[1,8]," seconds, you run 33% faster and have a 50% chance to block incoming attacks. Natural Stride ends if you become Hexed or Enchanted."],
  {}, [
  ["Duration",1,8] ] );
g_skillsById[1770] = new Skill("Natural Temper",1770,"Nightfall","P","Leadership",
  false,false,false,false,"Skill",0,3,0,0,0,false,0,
  ["For ",[4,10]," seconds, you gain 33% more adrenaline while not under the effects of an Enchantment."],
  {"adrenal-gain": true}, [
  ["Duration",4,10] ] );
g_skillsById[476] = new Skill("Nature's Renewal",476,"Core","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For ",[30,150]," seconds, Enchantments and Hexes cast by non-Spirit creatures take twice as long to cast, and it costs twice as much Energy to maintain Enchantments. This Spirit dies after ",[30,150]," seconds."],
  {"enchant-counter": true, "hex-counter": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,150] ] );
g_skillsById[2103] = new Skill("Necrosis",2103,"Nightfall","N","Sunspear rank",
  false,false,false,true,"Spell",5,0,1,2,0,false,0,
  ["If target foe is suffering from a condition or hex, that foe suffers ",[40,90]," damage."],
  {}, [
 ] );
g_skillsById[97] = new Skill("Necrotic Traversal",97,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",5,0,0.75,0,0,false,0,
  ["Exploit a random corpse. You teleport to that corpse's location and all nearby foes become Poisoned for ",[5,20]," seconds."],
  {"corpse": true, "poison": true, "teleport": true}, [
  ["Poisoned",5,20] ] );
g_skillsById[1197] = new Skill("Needling Shot",1197,"Factions","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,1,4,0,false,0,
  ["Needling Shot strikes for only ",[10,30]," damage and moves faster than normal. If Needling Shot strikes a foe below 50% Health, Needling Shot recharges instantly."],
  {"damage": true}, [
  ["Damage",10,30] ] );
g_skillsById[2108] = new Skill("Never Rampage Alone",2108,"Nightfall","R","Sunspear rank| pve-only = y",
  false,false,false,false,"Skill",25,0,0,20,0,false,0,
  ["For ",[15,25]," seconds, you and your pet attack 25% faster and have ",[1,3]," Health regeneration."],
  {}, [
 ] );
g_skillsById[795] = new Skill("Nightmare Weapon",795,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Weapon Spell",5,0,1,10,0,false,0,
  ["For 12 seconds, target ally has a Nightmare Weapon. Target ally's next 3 attacks are reduced by ",[10,50]," damage and steal up to ",[10,50]," Health."],
  {"damage-nerf": true, "health-steal": true}, [
  ["Damage reduction",10,50],
  ["Health Steal",10,50] ] );
g_skillsById[986] = new Skill("Nine Tail Strike",986,"Factions","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0,8,0,false,0,
  ["Must follow an off-hand attack. Nine Tail Strike cannot be blocked and strikes for +",[15,40]," damage if it hits."],
  {"block-counter": true, "damage": true}, [
  ["Damage",15,40] ] );
g_skillsById[405] = new Skill("Oath Shot",405,"Prophecies","R","Expertise",
  true,false,false,false,"Bow Attack",10,0,0,25,0,false,7,
  ["If Oath Shot hits, all of your skills except Oath Shot are recharged. If it misses, all of your skills are disabled for 10 seconds. (50% miss chance with Expertise 7 or less.)"],
  {"recharge-buff": true}, [
 ] );
g_skillsById[219] = new Skill("Obsidian Flame",219,"Core","E","Earth Magic",
  false,false,false,false,"Spell",5,0,2,5,0,true,0,
  ["Deal ",[22,112]," damage to target foe. This Spell ignores armor but causes Exhaustion."],
  {"damage": true}, [
  ["Damage",22,112] ] );
g_skillsById[218] = new Skill("Obsidian Flesh",218,"Core","E","Earth Magic",
  true,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[8,20]," seconds, you gain +20 armor and cannot be the target of enemy Spells, but move 50% slower."],
  {"armor-buff": true, "move-nerf-self": true}, [
  ["Duration",8,20] ] );
g_skillsById[146] = new Skill("Offering of Blood",146,"Prophecies","N","Blood Magic",
  true,false,false,false,"Spell",1,0,0.25,15,0,false,0,
  ["You gain ",[8,20]," Energy."],
  {"energy-gain": true, "sacrifice": true}, [
  ["Energy gain",8,20] ] );
g_skillsById[1479] = new Skill("Offering of Spirit",1479,"Nightfall","Rt","Channeling Magic",
  true,false,false,false,"Spell",5,0,0.25,15,0,false,0,
  ["Gain ",[8,17]," Energy. If any Spirits are within earshot, you do not sacrifice Health."],
  {"energy-gain": true, "sacrifice": true, "spirit-uses": true}, [
  ["Energy gain",8,17] ] );
g_skillsById[1754] = new Skill("Onslaught",1754,"Nightfall","D","Wind Prayers",
  true,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, your attack Skills recharge 25% faster and cost 25% less Energy."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[864] = new Skill("Oppressive Gaze",864,"Factions","N","Blood Magic",
  false,false,false,false,"Spell",15,0,2,7,0,false,0,
  ["Target foe and adjacent foes take ",[5,50]," damage. Steal up to ",[15,45]," Health from any who were suffering from Weakness and below 50% Health."],
  {"damage": true, "health-steal": true}, [
  ["Damage",5,50],
  ["Life stealing",15,45] ] );
g_skillsById[863] = new Skill("Order of Apostasy",863,"Factions","N","Curses",
  true,false,false,false,"Enchantment Spell",25,0,2,0,0,false,0,
  ["For 5 seconds, whenever a party member hits a foe with physical damage, that foe loses one enchantment. For each Monk enchantment removed, you lose ",[25,15],"% maximum Health."],
  {"damage-self": true}, [
  ["%Health lost",25,15] ] );
g_skillsById[134] = new Skill("Order of Pain",134,"Core","N","Blood Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,0,0,false,0,
  ["For 5 seconds, whenever a party member hits a foe with physical damage, that party member does +",[3,16]," damage."],
  {"damage-buff": true, "sacrifice": true}, [
  ["+ Damage",3,16] ] );
g_skillsById[1352] = new Skill("Order of Undeath",1352,"Nightfall","N","Death Magic",
  true,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["For 5 seconds, your minions deal +",[3,16]," damage, but you lose 2% of your maximum Health whenever one of your minions hits with an attack."],
  {"damage-buff": true, "sacrifice": true}, [
  ["+ Damage",3,16] ] );
g_skillsById[148] = new Skill("Order of the Vampire",148,"Prophecies","N","Blood Magic",
  true,false,false,false,"Enchantment Spell",5,0,2,5,0,false,0,
  ["For 5 seconds, whenever a party member who is not under the effects of another Necromancer enchantment hits a foe with physical damage, that party member steals up to ",[3,16]," Health."],
  {"damage-buff": true, "heal-buff": true, "health-steal": true, "sacrifice": true}, [
  ["Life stealing",3,16] ] );
g_skillsById[281] = new Skill("Orison of Healing",281,"Core","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,2,0,false,0,
  ["Heal target ally for ",[20,70]," Health."],
  {"heal": true}, [
  ["Healing",20,70] ] );
g_skillsById[447] = new Skill("Otyugh's Cry",447,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Shout",5,0,0,30,0,false,0,
  ["For ",[10,25]," seconds, your animal companion gains +24 armor and cannot be blocked."],
  {"armor-buff-pet": true}, [
  ["Duration",10,25] ] );
g_skillsById[1410] = new Skill("Overbearing Smash",1410,"Nightfall","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,6,0,0,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If target foe is suffering from Weakness, this attack cannot be blocked."],
  {"block-counter": true, "damage": true, "weakness-punish": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[898] = new Skill("Overload",898,"Factions","Me","Domination Magic",
  false,false,false,false,"Spell",5,0,0.25,3,0,false,0,
  ["Target foe takes ",[5,40]," damage. If that foe was casting a spell, you deal +",[5,50]," damage."],
  {"damage": true, "spell-punish": true}, [
  ["Damage",5,40],
  ["Damage",5,50] ] );
g_skillsById[264] = new Skill("Pacifism",264,"Prophecies","Mo","Protection Prayers",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For ",[8,20]," seconds, target foe cannot attack. This effect ends if the target takes damage."],
  {"attack-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[1247] = new Skill("Pain",1247,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",5,0,3,30,0,false,0,
  ["Create a level ",[1,8]," Spirit. This Spirit's attacks deal ",[5,30]," damage. This Spirit dies after ",[30,150]," seconds."],
  {"damage": true, "spirit": true}, [
  ["Level",1,8],
  ["Damage",5,30],
  ["Duration",30,150] ] );
g_skillsById[2418] = new Skill("Pain Inverter",2418,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Hex Spell",10,0,1,20,0,false,0,
  ["For ",[6,10]," seconds, every time target foe deals damage that foe takes ",[80,140],"% of the damage it causes (maximum 80 damage)."],
  {}, [
  ["Duration",6,10],
  ["% of Damage",80,140],
  ["Damage received to deal back max",100,57] ] );
g_skillsById[1359] = new Skill("Pain of Disenchantment",1359,"Nightfall","N","Curses",
  true,false,false,false,"Hex Spell",10,0,2,12,0,false,0,
  ["For 30 seconds, whenever target foe loses an enchantment, that foe takes ",[15,60]," damage."],
  {"damage": true}, [
  ["Damage",15,60] ] );
g_skillsById[1237] = new Skill("Painful Bond",1237,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Hex Spell",15,0,1,12,0,false,0,
  ["For ",[10,20]," seconds, target foe and all nearby foes are Hexed with Painful Bond and take ",[8,20]," damage whenever hit by a Spirit's attack."],
  {"damage": true, "spirit-uses": true}, [
  ["Duration",10,20],
  ["Damage",8,20] ] );
g_skillsById[1045] = new Skill("Palm Strike",1045,"Factions","A","Critical Strikes",
  true,false,false,false,"Skill",5,0,0.75,10,0,false,0,
  ["Target touched foe takes ",[10,85]," damage. This skill counts as an off-hand attack."],
  {"damage": true, "touch": true}, [
  ["Damage",10,85] ] );
g_skillsById[52] = new Skill("Panic",52,"Prophecies","Me","Domination Magic",
  true,false,false,false,"Hex Spell",25,0,1,10,0,false,0,
  ["For ",[5,20]," seconds, target foe and all nearby foes suffer -2 Energy degeneration and take ",[10,82]," damage whenever they use a signet."],
  {"damage": true, "damage-ot": true, "energy-degen": true, "signet-counter": true}, [
  ["Duration",5,20],
  ["Damage",10,82] ] );
g_skillsById[99] = new Skill("Parasitic Bond",99,"Core","N","Curses",
  false,false,false,false,"Hex Spell",5,0,1,2,0,false,0,
  ["For 20 seconds, target foe suffers -1 Health degeneration. The caster is healed for ",[30,120]," when Parasitic Bond ends."],
  {"heal": true, "health-degen": true}, [
  ["Healing",30,120] ] );
g_skillsById[2061] = new Skill("Patient Spirit",2061,"Eye of the North","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,3,0,false,0,
  ["For 2 seconds, target ally is Enchanted with Patient Spirit. When this Enchantment ends, that ally is healed for ",[30,120]," Health."],
  {}, [
  ["Healing",30,120] ] );
g_skillsById[266] = new Skill("Peace and Harmony",266,"Prophecies","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",5,0,1,10,0,false,0,
  ["For ",[30,90]," seconds, target ally gains +1 Energy regeneration. Peace and Harmony ends if that ally casts a spell that targets a foe, or if that ally deals damage to a foe."],
  {"energy-regen": true}, [
  ["Duration",30,90] ] );
g_skillsById[398] = new Skill("Penetrating Attack",398,"Prophecies","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,1,4,0,false,0,
  ["If Penetrating Attack hits, you strike for +",[3,10]," damage and this attack has 10% armor penetration."],
  {"damage": true}, [
  ["+ Damage",3,10] ] );
g_skillsById[339] = new Skill("Penetrating Blow",339,"Prophecies","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. This axe attack has 20% armor penetration."],
  {"damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[1136] = new Skill("Penetrating Chop",1136,"Factions","W","Axe Mastery",
  false,false,false,false,"Axe Attack",0,5,0,0,0,false,0,
  ["If this attack hits, you strike for +",[5,20]," damage. This axe attack has 20% armor penetration."],
  {"damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[1683] = new Skill("Pensive Guardian",1683,"Nightfall","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,5,0,false,0,
  ["For ",[5,11]," seconds, target ally has a 50% chance to block attacks from Enchanted foes."],
  {"block": true}, [
  ["Duration",5,11] ] );
g_skillsById[1338] = new Skill("Persistence of Memory",1338,"Nightfall","Me","Fast Casting",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, whenever a spell you cast is interrupted, that spell is instantly recharged."],
  {"interrupt-counter": true}, [
  ["Duration",5,20] ] );
g_skillsById[870] = new Skill("Pestilence",870,"Nightfall","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. When any creature within its range dies, Conditions on that creature spread to any creature in the area already suffering from a Condition. This Spirit dies after ",[30,90]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,90] ] );
g_skillsById[44] = new Skill("Phantom Pain",44,"Prophecies","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For 10 seconds, target foe suffers -",[1,3]," Health degeneration. When Phantom Pain ends, that foe suffers a Deep Wound, lowering that foe's maximum Health by 20% for ",[5,20]," seconds."],
  {"deepwound": true, "health-degen": true}, [
  ["Health degeneration",1,3],
  ["Deep Wound",5,20] ] );
g_skillsById[193] = new Skill("Phoenix",193,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",15,0,2,10,0,false,0,
  ["A fiery phoenix rises at your location, striking adjacent foes for ",[7,112]," fire damage, and flies out to your target, exploding on impact. This explosion strikes for an additional ",[15,90]," fire damage."],
  {"damage": true, "damage-aoe": true}, [
  ["PBAoE Fire Damage",7,112],
  ["Projectile Fire Damage",15,90] ] );
g_skillsById[73] = new Skill("Physical Resistance",73,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[30,90]," seconds, You gain +40 armor against physical damage, but you lose ",[24,12]," armor against elemental damage."],
  {"armor-buff": true, "armor-nerf-self": true}, [
  ["Duration",30,90],
  ["- Armor against<br />Elemental damage",24,12] ] );
g_skillsById[2140] = new Skill("Piercing Trap",2140,"Eye of the North","R","Wilderness Survival",
  false,false,false,false,"Trap",10,0,2,30,0,false,0,
  ["When Piercing Trap is triggered, all nearby foes are struck for ",[5,50]," piercing damage. Any foes with Cracked Armor are struck for an additional ",[15,60]," damage. Piercing Trap ends after 90 seconds. While activating this Skill, you are easily interrupted."],
  {}, [
  ["Piercing damage",5,50],
  ["Additional damage",15,60] ] );
g_skillsById[392] = new Skill("Pin Down",392,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",15,0,0,8,0,false,0,
  ["If Pin Down hits, your target is Crippled for ",[3,15]," seconds."],
  {"crippled": true}, [
  ["Crippled duration",3,15] ] );
g_skillsById[1490] = new Skill("Pious Assault",1490,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",10,0,0,12,0,false,0,
  ["Lose 1 Enchantment. If this attack hits, you deal +",[5,20]," damage and inflict a Deep Wound for ",[5,20]," seconds."],
  {"damage": true}, [
  ["+ Damage",5,20],
  ["Deep Wound duration",5,20] ] );
g_skillsById[1542] = new Skill("Pious Concentration",1542,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Stance",5,0,0,5,0,false,0,
  ["For ",[5,20]," seconds, you cannot be interrupted, but each time you would have been interrupted, you lose 1 Enchantment or Pious Concentration ends."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[2146] = new Skill("Pious Fury",2146,"Eye of the North","D","Mysticism",
  false,false,false,false,"Stance",5,0,0,10,0,false,0,
  ["Lose one Enchantment. For ",[2,6]," seconds, you attack 33% faster."],
  {}, [
  ["Duration",2,6] ] );
g_skillsById[1543] = new Skill("Pious Haste",1543,"Nightfall","D","Mysticism",
  false,false,false,false,"Stance",5,0,0,5,0,false,0,
  ["For ",[3,12]," seconds you move 33% faster. When this Stance ends, you lose one Enchantment."],
  {"move-buff": true}, [
  ["Duration",3,12] ] );
g_skillsById[1499] = new Skill("Pious Renewal",1499,"Nightfall","D","Mysticism",
  true,false,false,false,"Enchantment Spell",5,0,0.25,3,0,false,0,
  ["For 8 seconds, whenever an Enchantment ends on you, you gain ",[0,2]," Energy and ",[0,10]," Health."],
  {"enchant-uses": true, "energy-gain": true, "energy-gain-ot": true, "heal-buff": true}, [
  ["Energy gain",0,2],
  ["Healing",0,10] ] );
g_skillsById[1529] = new Skill("Pious Restoration",1529,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",5,0,0.25,4,0,false,0,
  ["Lose 1 Enchantment. You gain ",[30,90]," Health. If you are still under the effects of an Enchantment, lose ",[1,3]," Hexes."],
  {"heal": true, "hex-remove": true}, [
  ["Health gain",30,90],
  ["Hexes lost",1,3] ] );
g_skillsById[149] = new Skill("Plague Sending",149,"Prophecies","N","Curses",
  false,false,false,false,"Spell",1,0,1,5,0,false,0,
  ["Transfer ",[1,3]," negative conditions and their remaining durations from yourself to target foe and all adjacent foes."],
  {"condition-transfer": true, "condition-transfer-aoe": true, "sacrifice": true}, [
  ["Conditions transfered",1,3] ] );
g_skillsById[132] = new Skill("Plague Signet",132,"Core","N","Curses",
  true,false,false,false,"Signet",0,0,1,4,0,false,4,
  ["Transfer all negative conditions with their remaining durations lengthened by ",[100,200],"% from yourself to target foe. (50% failure chance with Curses 4 or less.)"],
  {"condition-transfer": true}, [
  ["Duration increase (%)",100,200] ] );
g_skillsById[154] = new Skill("Plague Touch",154,"Core","N","Curses",
  false,false,false,false,"Skill",5,0,0.75,0,0,false,0,
  ["Transfer ",[1,3]," negative conditions and their remaining durations from yourself to target touched foe."],
  {"condition-transfer": true, "touch": true}, [
  ["Conditions Transfered",1,3] ] );
g_skillsById[407] = new Skill("Point Blank Shot",407,"Prophecies","R","Expertise",
  false,false,false,false,"Bow Attack",5,0,0,3,0,false,0,
  ["Shoot an arrow that has half the normal range, but strikes for +",[10,40]," damage."],
  {"damage": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[404] = new Skill("Poison Arrow",404,"Prophecies","R","Wilderness Survival",
  true,false,false,false,"Bow Attack",5,0,0,1,0,false,0,
  ["If Poison Arrow hits, your target becomes Poisoned for ",[5,20]," seconds."],
  {"poison": true}, [
  ["Poison duration",5,20] ] );
g_skillsById[2199] = new Skill("Poison Tip Signet",2199,"Eye of the North","R","Wilderness Survival",
  false,false,false,false,"Signet",0,0,1,6,0,false,0,
  ["For 60 seconds, your next attack also inflicts Poison for ",[8,15]," seconds."],
  {}, [
  ["Poison duration",8,15] ] );
g_skillsById[840] = new Skill("Poisoned Heart",840,"Nightfall","N","Curses",
  false,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["All adjacent foes are Poisoned for ",[5,15]," seconds. For 10 seconds, you suffer -",[5,2]," Health degeneration."],
  {"health-degen": true, "poison": true}, [
  ["Health degeneration",5,2],
  ["Poison Duration",5,15] ] );
g_skillsById[1205] = new Skill("Poisonous Bite",1205,"Factions","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,7,0,false,0,
  ["Your animal companion attempts a Poisonous Bite that Poisons target foe for ",[5,20]," seconds."],
  {}, [
  ["Poison duration",5,20] ] );
g_skillsById[1206] = new Skill("Pounce",1206,"Factions","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,20,0,false,0,
  ["Your animal companion's next attack is a Pounce that deals +",[5,20]," damage. If the attack strikes a moving foe, that foe is knocked down."],
  {"damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[322] = new Skill("Power Attack",322,"Core","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0,3,0,false,0,
  ["If this attack hits, you strike for +",[10,40]," damage."],
  {"damage": true}, [
  ["+Damage",10,40] ] );
g_skillsById[5] = new Skill("Power Block",5,"Prophecies","Me","Domination Magic",
  true,false,false,false,"Spell",15,0,0.25,20,0,false,0,
  ["If target foe is casting a spell or chant, that skill is interrupted. The interrupted skill and all skills of the same attribute are disabled for ",[3,15]," seconds for that foe."],
  {"interrupt": true, "lock": true}, [
  ["Disabled duration",3,15] ] );
g_skillsById[25] = new Skill("Power Drain",25,"Core","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,0.25,20,0,false,0,
  ["If target foe is casting a Spell or Chant, that Skill is interrupted and you gain ",[1,31]," Energy."],
  {"energy-gain": true, "interrupt": true}, [
  ["Energy Gain",1,31] ] );
g_skillsById[953] = new Skill("Power Flux",953,"Nightfall","Me","Domination Magic",
  true,false,false,false,"Hex Spell",10,0,0.25,10,0,false,0,
  ["If target foe is casting a spell or chant, that skill is interrupted and for ",[4,10]," seconds, that foe has -2 Energy degeneration."],
  {"energy-degen": true, "interrupt": true}, [
  ["Duration",4,10] ] );
g_skillsById[24] = new Skill("Power Leak",24,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,0.25,20,0,false,0,
  ["If target foe is casting a spell or chant, that skill is interrupted and target foe loses ",[3,17]," Energy."],
  {"energy-drain": true, "interrupt": true}, [
  ["Energy Lost",3,17] ] );
g_skillsById[803] = new Skill("Power Leech",803,"Factions","Me","Inspiration Magic",
  true,false,false,false,"Hex Spell",10,0,0.25,10,0,false,0,
  ["If target foe is casting a Spell or Chant, that Skill is interrupted and for 10 seconds, whenever that foe casts a Spell, you steal up to ",[1,7]," Energy from that foe."],
  {"energy-drain": true, "energy-drain-ot": true, "energy-gain": true, "energy-gain-ot": true, "interrupt": true}, [
  ["Energy stolen",1,7] ] );
g_skillsById[1994] = new Skill("Power Lock",1994,"Eye of the North","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,0.25,12,0,false,0,
  ["If target foe is casting a spell or chant, that skill is interrupted and disabled for an additional ",[5,13]," seconds."],
  {}, [
  ["Disable duration",5,13] ] );
g_skillsById[931] = new Skill("Power Return",931,"Factions","Me","Fast Casting",
  false,false,false,false,"Spell",5,0,0.25,5,0,false,0,
  ["If target foe is casting a spell or chant, that skill is interrupted and target foe gains ",[10,5]," Energy."],
  {"energy-gain-foe": true, "interrupt": true}, [
  ["Energy Gain",10,5] ] );
g_skillsById[394] = new Skill("Power Shot",394,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,1,6,0,false,0,
  ["If Power Shot hits, you strike for +",[5,20]," damage."],
  {"damage": true}, [
  ["+Damage",5,20] ] );
g_skillsById[23] = new Skill("Power Spike",23,"Core","Me","Domination Magic",
  false,false,false,false,"Spell",5,0,0.25,12,0,false,0,
  ["If target foe is casting a spell or a chant, that skill is interrupted and target foe takes ",[30,120]," damage."],
  {"damage": true, "interrupt": true}, [
  ["Damage",30,120] ] );
g_skillsById[449] = new Skill("Practiced Stance",449,"Prophecies","R","Expertise",
  true,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[20,35]," seconds, your Preparations recharge 50% faster and last ",[30,150],"% longer."],
  {"preparation-buff": true}, [
  ["Duration",20,35],
  ["Longer Preparations %",30,150] ] );
g_skillsById[400] = new Skill("Precision Shot",400,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,1,6,0,false,0,
  ["If Precision Shot hits, you strike for +",[3,18]," damage. Precision Shot cannot be blocked. This action is easily interrupted."],
  {"damage": true}, [
  ["+ Damage",3,18] ] );
g_skillsById[443] = new Skill("Predator's Pounce",443,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,5,0,false,0,
  ["Your animal companion attempts a Predator's Pounce that deals +",[5,35]," damage. If that attack hits, your animal companion gains ",[5,50]," Health."],
  {"damage": true, "heal-pet": true}, [
  ["+ Damage",5,35],
  ["Health",5,50] ] );
g_skillsById[1194] = new Skill("Predatory Bond",1194,"Factions","R","Beast Mastery",
  false,false,false,false,"Shout",10,0,0,30,0,false,0,
  ["For ",[5,20]," seconds, attacks by your animal companion heal you for ",[1,31]," Health."],
  {"heal-self": true}, [
  ["Duration",5,20],
  ["Healing",1,31] ] );
g_skillsById[470] = new Skill("Predatory Season",470,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, all healing is reduced by 20%. If any of your attacks hit, you gain 5 Health. This Spirit dies after ",[30,150]," seconds."],
  {"heal-nerf": true, "heal-self": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,150] ] );
g_skillsById[1465] = new Skill("Prepared Shot",1465,"Nightfall","R","Marksmanship",
  true,false,false,false,"Bow Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you strike for +",[10,25]," damage. If you are under the effects of a Preparation, you gain ",[1,9]," Energy."],
  {"damage": true, "energy-gain": true}, [
  ["+ Damage",10,25],
  ["Energy gain",1,9] ] );
g_skillsById[1250] = new Skill("Preservation",1250,"Factions","Rt","Restoration Magic",
  true,false,false,false,"Binding Ritual",5,0,3,20,0,false,0,
  ["Create a level ",[1,10]," Spirit. Every 4 seconds, this Spirit heals one non-Spirit ally in the area for ",[10,115]," Health. This Spirit dies after 90 seconds."],
  {"heal": true, "heal-ot": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Healing",10,115] ] );
g_skillsById[103] = new Skill("Price of Failure",103,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",15,0,2,20,0,false,0,
  ["For 30 seconds, target foe has a 25% chance to miss with attacks and takes ",[1,46]," damage whenever that foe fails to hit in combat."],
  {"attack-counter": true, "damage": true}, [
  ["Damage",1,46] ] );
g_skillsById[1655] = new Skill("Price of Pride",1655,"Nightfall","Me","Domination Magic",
  false,false,false,false,"Hex Spell",5,0,2,8,0,false,0,
  ["For ",[5,20]," seconds, the next time target foe uses an elite skill, that foe loses ",[1,7]," Energy."],
  {"energy-drain": true}, [
  ["Duration",5,20],
  ["Foe's Energy Lost",1,7] ] );
g_skillsById[469] = new Skill("Primal Echoes",469,"Core","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, Signets cost 10 Energy to use. This Spirit dies after ",[30,150]," seconds."],
  {"ecost-nerf": true, "signet-counter": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,150] ] );
g_skillsById[831] = new Skill("Primal Rage",831,"Factions","W","Strength",
  true,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For 10 seconds, all of your attacks have an additional ",[10,55],"% chance of being critical hits and have 20% armor penetration. Primal Rage disables all skills for 10 seconds."],
  {"critical-buff": true}, [
  ["+% Critical",10,55] ] );
g_skillsById[263] = new Skill("Protective Bond",263,"Prophecies","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, target ally cannot lose more than 5% max Health due to damage from a single attack or Spell. When Protective Bond prevents damage, you lose ",[6,3]," Energy or the Spell ends."],
  {"damage-limit": true, "energy-leak": true}, [
  ["Energy Loss",6,3] ] );
g_skillsById[245] = new Skill("Protective Spirit",245,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,5,0,false,0,
  ["For ",[5,23]," seconds, target ally cannot lose more than 10% max Health due to damage from a single attack or Spell."],
  {"damage-limit": true}, [
  ["Duration",5,23] ] );
g_skillsById[1219] = new Skill("Protective Was Kaolai",1219,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",10,0,1,15,0,false,0,
  ["Hold Kaolai's ashes for up to ",[15,60]," seconds. While you hold his ashes, you gain 24 armor. When you drop his ashes, all party members are healed for ",[10,85]," Health."],
  {"armor-buff": true, "heal": true, "heal-aoe": true}, [
  ["Duration",15,60],
  ["Healing",10,85] ] );
g_skillsById[810] = new Skill("Protector's Defense",810,"Factions","W","Tactics",
  false,false,false,false,"Skill",5,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, adjacent allies have a 75% chance to block incoming attacks. Protector's Defense ends if you move."],
  {"block": true}, [
  ["Duration",5,11] ] );
g_skillsById[326] = new Skill("Protector's Strike",326,"Prophecies","W","Strength",
  false,false,false,false,"Melee Attack",5,0,0.5,3,0,false,0,
  ["If this attack strikes a moving foe, you strike for ",[10,40]," more damage."],
  {"damage": true, "move-punish": true}, [
  ["+Damage",10,40] ] );
g_skillsById[1053] = new Skill("Psychic Distraction",1053,"Factions","Me","Domination Magic",
  true,false,false,false,"Spell",10,0,0.25,2,0,false,0,
  ["All of your other skills are disabled for 8 seconds. If target foe is using a skill, that skill is interrupted and disabled for ",[5,12]," seconds."],
  {"interrupt": true, "lock": true, "lock-self": true}, [
  ["Disabled duration",5,12] ] );
g_skillsById[1057] = new Skill("Psychic Instability",1057,"Factions","Me","Fast Casting",
  true,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["Interrupt target foe's action. If that action was a spell that foe is knocked down. (50% failure chance with Fast Casting 4 or less.)"],
  {"knockdown": true}, [
 ] );
g_skillsById[2008] = new Skill("Pulverizing Smash",2008,"Eye of the North","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,4,0,0,0,false,0,
  ["If you hit a knocked-down foe, that foe suffers from Weakness and a Deep Wound for ",[5,20]," seconds."],
  {}, [
  ["Deep Wound duration",5,20],
  ["Weakness duration",5,20] ] );
g_skillsById[409] = new Skill("Punishing Shot",409,"Prophecies","R","Marksmanship",
  true,false,false,false,"Bow Attack",10,0,0.5,5,0,false,0,
  ["If Punishing Shot hits, you strike for +",[10,20]," damage and your target is interrupted."],
  {"damage": true, "interrupt": true}, [
  ["+ Damage",10,20] ] );
g_skillsById[328] = new Skill("Pure Strike",328,"Prophecies","W","Swordsmanship",
  false,false,false,false,"Sword Attack",5,0,0,8,0,false,0,
  ["If Pure Strike hits, you strike for +",[1,30]," damage. If you are not using a Stance, Pure Strike cannot be blocked."],
  {"block-counter": true, "damage": true}, [
  ["+ Damage",1,30] ] );
g_skillsById[278] = new Skill("Purge Conditions",278,"Core","Mo","No Attribute",
  false,false,false,false,"Spell",5,0,0.25,20,0,false,0,
  ["Remove all Conditions (Poison, Disease, Blindness, Dazed, Bleeding, Crippled, Burning, Weakness, and Deep Wound) from target ally."],
  {"condition-remove": true}, [
 ] );
g_skillsById[295] = new Skill("Purge Signet",295,"Core","Mo","No Attribute",
  false,false,false,false,"Signet",0,0,2,20,0,false,0,
  ["Remove all Hexes and Conditions from target ally. You lose 10 Energy for each Hex and each Condition removed."],
  {"condition-remove": true, "hex-remove": true}, [
 ] );
g_skillsById[1579] = new Skill("Purifying Finale",1579,"Nightfall","P","Motivation",
  false,false,false,false,"Echo",5,0,1,10,0,false,0,
  ["For ",[10,35]," seconds, target non-Spirit ally loses 1 Condition whenever a Chant or Shout ends on that ally."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[2007] = new Skill("Purifying Veil",2007,"Eye of the North","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,6,-1,false,0,
  ["While you maintain this Enchantment, Conditions expire ",[5,50],"% faster on target ally. When this Enchantment ends, one Condition is removed from that ally."],
  {}, [
  ["Faster condition expiration %",5,50] ] );
g_skillsById[2058] = new Skill("Putrid Bile",2058,"Eye of the North","N","Death Magic",
  false,false,false,false,"Hex Spell",10,0,1,12,0,false,0,
  ["For ",[5,20]," seconds, target foe suffers -",[1,3]," Health degeneration. If that foe dies while under the effects of this hex, all nearby foes take ",[25,85]," damage."],
  {}, [
  ["Duration",5,20],
  ["Health degeneration",1,3],
  ["Damage",25,85] ] );
g_skillsById[95] = new Skill("Putrid Explosion",95,"Core","N","Death Magic",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["The corpse nearest your target explodes, sending out a shockwave that deals ",[24,120]," damage to nearby foes."],
  {"corpse": true, "damage": true, "damage-aoe": true}, [
  ["Damage",24,120] ] );
g_skillsById[1353] = new Skill("Putrid Flesh",1353,"Nightfall","N","Death Magic",
  false,false,false,false,"Spell",10,0,0.25,0,0,false,0,
  ["Destroy one of your target animated undead minions. All foes near that creature are Diseased for ",[5,15]," seconds."],
  {"disease": true}, [
  ["Disease Duration",5,15] ] );
g_skillsById[397] = new Skill("Quick Shot",397,"Core","R","No Attribute",
  true,false,false,false,"Bow Attack",5,0,1,1,0,false,0,
  ["Shoot an arrow that moves twice as fast."],
  {}, [
 ] );
g_skillsById[475] = new Skill("Quickening Zephyr",475,"Core","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",25,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For non-Spirit creatures within its range, all skills recharge twice as fast and cost 30% more of the base Energy to cast. This Spirit dies after ",[15,45]," seconds."],
  {"ecost-nerf": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",15,45] ] );
g_skillsById[1473] = new Skill("Quicksand",1473,"Nightfall","R","Wilderness Survival",
  true,false,false,false,"Nature Ritual",10,0,5,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. All non-Spirit creatures within its range lose 1 Energy each time they attack or use a Skill. This Spirit dies after ",[30,90]," seconds."],
  {"spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,90] ] );
g_skillsById[892] = new Skill("Quivering Blade",892,"Factions","W","Swordsmanship",
  true,false,false,false,"Sword Attack",0,4,0,0,0,false,0,
  ["If Quivering Blade hits, you strike for +",[10,40]," damage. If it is blocked, Quivering Blade is disabled for 4 seconds and you are Dazed for 8 seconds."],
  {"damage": true, "dazed": true, "lock-self": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[2012] = new Skill("Radiant Scythe",2012,"Eye of the North","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,6,0,false,0,
  ["This attack strikes for +2 damage for each point of Energy you currently have (maximum ",[5,50]," damage)."],
  {}, [
  ["Maximum damage",5,50] ] );
g_skillsById[2414] = new Skill("Radiation Field",2414,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Ward Spell",15,0,2,12,0,false,0,
  ["For 5 seconds, foes in the area have -",[2,6]," Health degeneration. When the portal ends, foes in the area are Diseased for ",[8,20]," seconds."],
  {}, [
  ["Health degeneration",2,6],
  ["Disease duration",8,20] ] );
g_skillsById[1408] = new Skill("Rage of the Ntouka",1408,"Nightfall","W","Strength",
  true,false,false,false,"Skill",5,0,0,15,0,false,0,
  ["Gain ",[1,7]," strikes of adrenaline. For 10 seconds, whenever you use an adrenal Skill, that Skill recharges for 5 seconds."],
  {"adrenal-gain": true}, [
  ["Adrenaline gain",1,7] ] );
g_skillsById[1721] = new Skill("Rampage as One",1721,"Nightfall","R","Beast Mastery",
  true,false,false,false,"Skill",25,0,0,10,0,false,0,
  ["For ",[3,15]," seconds, both you and your animal companion attack 33% faster and run 25% faster."],
  {}, [
  ["Duration",3,15] ] );
g_skillsById[2068] = new Skill("Rapid Fire",2068,"Eye of the North","R","Marksmanship",
  false,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For ",[5,25]," seconds, you attack 33% faster while wielding a bow."],
  {}, [
  ["Duration",5,25] ] );
g_skillsById[2384] = new Skill("Raven Blessing",2384,"Eye of the North",null,"Norn rank",
  true,false,false,true,"Skill",10,0,0,30,0,false,0,
  ["You take on the aspect of the raven. Your Energy returns to maximum and you have -2 Energy degeneration. You have +",[60,100]," maximum Health and ",[10,30],"% block chance. All Enchantments upon you are removed. Raven attacks replace your skills. You gain Energy whenever you take or deal damage. This Skill ends when your Energy drops to 0."],
  {}, [
  ["+ maximum Health",60,100],
  ["Block rate %",10,30] ] );
g_skillsById[862] = new Skill("Ravenous Gaze",862,"Nightfall","N","Blood Magic",
  true,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Steal ",[15,30]," Health from target foe. If your Health is still below 50%, steal up to an additional ",[15,90]," Health."],
  {"health-steal": true}, [
  ["Life stealing",15,30],
  ["Additional life stealing",15,90] ] );
g_skillsById[830] = new Skill("Ray of Judgment",830,"Factions","Mo","Smiting Prayers",
  true,false,false,false,"Spell",15,0,1,30,0,false,0,
  ["All your skills except Smiting Prayers are disabled for 10 seconds. Target foe and adjacent foes take ",[30,105]," holy damage. Animated undead struck by Ray of Judgment are set on fire for ",[3,9]," seconds."],
  {"burning": true, "damage": true, "damage-aoe": true, "lock-self": true}, [
  ["Holy damage",30,105],
  ["Burning duration",3,9] ] );
g_skillsById[432] = new Skill("Read the Wind",432,"Core","R","Marksmanship",
  false,false,false,false,"Preparation",5,0,2,12,0,false,0,
  ["For 24 seconds, your arrows move twice as fast and deal ",[3,10]," extra damage."],
  {"damage": true}, [
  ["+ Damage",3,10] ] );
g_skillsById[1486] = new Skill("Reap Impurities",1486,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",10,0,0,8,0,false,0,
  ["If this attack hits, you deal +",[10,30]," damage. You gain ",[15,75]," Health for each foe you hit that is suffering from a Condition."],
  {"damage": true, "heal": true}, [
  ["+Damage",10,30],
  ["Healing",15,75] ] );
g_skillsById[808] = new Skill("Reaper's Mark",808,"Nightfall","N","Soul Reaping",
  true,false,false,false,"Hex Spell",5,0,1,15,0,false,0,
  ["For 30 seconds, target foe suffers -",[1,5]," Health degeneration. If that foe dies while hexed with Reaper's Mark, you gain ",[5,15]," Energy."],
  {"energy-gain": true, "health-degen": true}, [
  ["Health degeneration",1,5],
  ["Energy gain",5,15] ] );
g_skillsById[1767] = new Skill("Reaper's Sweep",1767,"Nightfall","D","Scythe Mastery",
  true,false,false,false,"Scythe Attack",5,0,0,8,0,false,0,
  ["If this attack hits, you deal +",[10,40]," damage. If your target was below 50% Health, you also inflict a Deep Wound for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["+ Damage",10,40],
  ["Deep Wound duration",5,20] ] );
g_skillsById[306] = new Skill("Rebirth",306,"Core","Mo","Protection Prayers",
  false,false,false,false,"Spell",10,0,5,0,0,false,0,
  ["Resurrect target party member. Target party member is returned to life with 25% Health and zero Energy, and is teleported to your current location. All of target's skills are disabled for ",[10,3]," seconds. This Spell consumes all of your remaining Energy."],
  {"lock-ally": true, "rez": true, "teleport": true}, [
  ["Disabled duration",10,3] ] );
g_skillsById[925] = new Skill("Recall",925,"Factions","A","No Attribute",
  false,false,false,false,"Enchantment Spell",15,0,1,10,-1,false,0,
  ["While you maintain Recall, nothing happens. When Recall ends, you Shadow Step to the ally you targeted when you activated this skill and all of your skills are disabled for 10 seconds."],
  {"shadowstep": true}, [
 ] );
g_skillsById[834] = new Skill("Reckless Haste",834,"Factions","N","Curses",
  false,false,false,false,"Hex Spell",15,0,1,12,0,false,0,
  ["For ",[6,12]," seconds, target foe and all adjacent foes are hexed with Reckless Haste. While Hexed, they attack 25% faster but have a 50% chance to miss with attacks."],
  {"attack-counter": true}, [
  ["Duration",6,12] ] );
g_skillsById[1482] = new Skill("Reclaim Essence",1482,"Nightfall","Rt","Spawning Power",
  true,false,false,false,"Spell",5,0,0.25,5,0,false,0,
  ["Destroy target allied summoned creature. You gain ",[5,20]," Energy."],
  {"energy-gain": true, "minion-uses": true, "spirit-uses": true}, [
  ["Energy gain",5,20] ] );
g_skillsById[1748] = new Skill("Recovery",1748,"Nightfall","Rt","Restoration Magic",
  false,false,false,false,"Binding Ritual",15,0,3,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. Conditions on allies within range of this Spirit expire ",[20,50],"% faster. This Spirit dies after ",[30,60]," seconds."],
  {"condition-counter": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Faster condition expiration %",20,50],
  ["Spirit duration",30,60] ] );
g_skillsById[981] = new Skill("Recuperation",981,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Binding Ritual",25,0,3,45,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit allies within its range gain +",[1,3]," Health regeneration. This Spirit dies after ",[15,45]," seconds."],
  {"health-regen": true, "spirit": true}, [
  ["Level",1,10],
  ["Health Regen",1,3],
  ["Duration",15,45] ] );
g_skillsById[1055] = new Skill("Recurring Insecurity",1055,"Factions","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,1,25,0,false,0,
  ["For ",[1,10]," seconds, target foe suffers from -",[1,3]," Health degeneration. If that foe is Hexed again, Recurring Insecurity is reapplied."],
  {"health-degen": true}, [
  ["Duration",1,10],
  ["Health degeneration",1,3] ] );
g_skillsById[2204] = new Skill("Rejuvenation",2204,"Eye of the North","Rt","Restoration Magic",
  false,false,false,false,"Binding Ritual",10,0,3,30,0,false,0,
  ["Create a level ",[1,16]," Spirit. This Spirit heals all party members within earshot for ",[3,10]," Health each second. This Spirit loses ",[3,10]," Health for each party member healed in this way. This Spirit dies after ",[30,90]," seconds."],
  {}, [
  ["Spirit level",1,16],
  ["Heal/second-loss/ally",3,10],
  ["Spirit duration",30,90] ] );
g_skillsById[960] = new Skill("Release Enchantments",960,"Factions","Mo","Divine Favor",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Lose all Enchantments. Each party member is healed for ",[5,35]," Health for each Monk Enchantment lost."],
  {"heal": true}, [
  ["Healing",5,35] ] );
g_skillsById[1777] = new Skill("Remedy Signet",1777,"Nightfall","P","No Attribute",
  false,false,false,false,"Signet",0,0,1,4,0,false,0,
  ["You lose 1 Condition."],
  {"condition-remove": true}, [
 ] );
g_skillsById[301] = new Skill("Remove Hex",301,"Core","Mo","No Attribute",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Remove a Hex from target ally."],
  {"hex-remove": true}, [
 ] );
g_skillsById[141] = new Skill("Rend Enchantments",141,"Core","N","Curses",
  false,false,false,false,"Spell",5,0,1,20,0,false,0,
  ["Remove ",[5,9]," enchantments from target foe. For each Monk enchantment removed, you take ",[55,25]," damage."],
  {"damage-self": true, "enchant-remove": true}, [
  ["Enchantments removed",5,9],
  ["Damage",55,25] ] );
g_skillsById[1765] = new Skill("Rending Aura",1765,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",10,0,1,15,0,false,0,
  ["For ",[5,20]," seconds, whenever you are hit by a melee attack, your attacker loses all Enchantments."],
  {"enchant-remove": true}, [
  ["Duration",5,20] ] );
g_skillsById[1753] = new Skill("Rending Sweep",1753,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,10,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If you hit a foe suffering from a Hex, that foe loses 1 Enchantment."],
  {"damage": true}, [
  ["+Damage",5,20] ] );
g_skillsById[1534] = new Skill("Rending Touch",1534,"Nightfall","D","No Attribute",
  false,false,false,false,"Spell",5,0,0.75,8,0,false,0,
  ["You and target touched foe lose 1 Enchantment."],
  {"enchant-remove": true, "touch": true}, [
 ] );
g_skillsById[1263] = new Skill("Renew Life",1263,"Nightfall","Mo","Healing Prayers",
  false,false,false,false,"Spell",15,0,4,5,0,false,0,
  ["Resurrect target touched dead party member with 50% Health and ",[5,20],"% Energy. That party member and all allies within earshot are healed for ",[55,130]," Health."],
  {"heal": true, "heal-aoe": true, "rez": true, "touch": true}, [
  ["%Energy",5,20],
  ["Healing",55,130] ] );
g_skillsById[1739] = new Skill("Renewing Memories",1739,"Nightfall","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",5,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, while holding an item, any weapon and item Spells you cast cost ",[5,35],"% less Energy."],
  {"ecost-buff": true, "item-uses": true}, [
  ["Duration",5,20],
  ["Energy Reduction %",5,35] ] );
g_skillsById[994] = new Skill("Renewing Smash",994,"Factions","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",10,0,0,20,0,false,0,
  ["If it hits, Renewing Smash deals +",[5,20]," damage and all of your Warrior Stances are recharged."],
  {"damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[1478] = new Skill("Renewing Surge",1478,"Nightfall","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Target foe is struck for ",[15,60]," lightning damage. If you are holding an item, this Skill recharges instantly."],
  {"damage": true, "item-uses": true}, [
  ["Damage",15,60] ] );
g_skillsById[976] = new Skill("Repeating Strike",976,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,0,0,false,0,
  ["Must follow an off-hand attack. If it hits, this attack strikes for +",[10,30]," damage. If it misses, it takes an additional 15 seconds to recharge."],
  {"damage": true, "lock-self": true}, [
  ["+ Damage",10,30] ] );
g_skillsById[1221] = new Skill("Resilient Was Xiko",1221,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",5,0,1,10,0,false,0,
  ["Hold Xiko's ashes for up to ",[5,20]," seconds. For each Hex or Condition you are suffering from while holding her ashes, you gain +3 Health regeneration. When you drop her ashes, you lose ",[1,4]," Conditions."],
  {"condition-remove": true, "condition-uses": true, "health-regen": true, "hex-counter": true}, [
  ["Duration",5,20],
  ["Conditions lost",1,4] ] );
g_skillsById[787] = new Skill("Resilient Weapon",787,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Weapon Spell",10,0,1,4,0,false,0,
  ["For ",[5,20]," seconds, target ally has a Resilient Weapon. While suffering from a Hex or Condition, that ally gains +",[1,6]," Health regeneration and +24 armor."],
  {"armor-buff": true, "condition-uses": true, "health-regen": true, "hex-uses": true}, [
  ["Duration",5,20],
  ["Health Regen",1,6] ] );
g_skillsById[886] = new Skill("Restful Breeze",886,"Nightfall","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,8,0,false,0,
  ["For ",[8,18]," seconds, target ally has +10 Health regeneration. This Enchantment ends if that ally attacks or uses a Skill."],
  {"health-regen": true}, [
  ["Duration",8,18] ] );
g_skillsById[963] = new Skill("Restoration",963,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",10,0,5,45,0,false,0,
  ["Create a level ",[1,10]," Spirit. When this Spirit dies, all party members in the area are resurrected with ",[5,50],"% Health and zero Energy. This Spirit dies after 30 seconds."],
  {"rez": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["%Health",5,50] ] );
g_skillsById[276] = new Skill("Restore Condition",276,"Prophecies","Mo","Protection Prayers",
  true,false,false,false,"Spell",5,0,0.75,2,0,false,0,
  ["Remove all Conditions (Poison, Disease, Blindness, Dazed, Bleeding, Crippled, Burning, Weakness, Cracked Armor, and Deep Wound) from target other ally. For each Condition removed, that ally is healed for ",[10,70]," Health."],
  {"condition-remove": true, "heal": true}, [
  ["Healing",10,70] ] );
g_skillsById[314] = new Skill("Restore Life",314,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,4,8,0,false,0,
  ["Touch the body of a fallen party member. Target party member is returned to life with ",[20,65],"% Health and ",[42,90],"% Energy."],
  {"rez": true, "touch": true}, [
  ["%Health",20,65],
  ["%Energy",42,90] ] );
g_skillsById[305] = new Skill("Resurrect",305,"Core","Mo","No Attribute",
  false,false,false,false,"Spell",10,0,5,8,0,false,0,
  ["Resurrect target party member. Target party member is returned to life with 25% Health and zero Energy."],
  {"rez": true}, [
 ] );
g_skillsById[1128] = new Skill("Resurrection Chant",1128,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Spell",10,0,6,15,0,false,0,
  ["Resurrect target party member with up to your current Health and ",[5,35],"% Energy. This spell has half the normal range."],
  {"rez": true}, [
  ["%Energy",5,35] ] );
g_skillsById[2] = new Skill("Resurrection Signet",2,"Core",null,"No Attribute",
  false,false,false,false,"Signet",0,0,3,0,0,false,0,
  ["Resurrect target party member. That party member is returned to life with 100% Health and 25% Energy. This signet only recharges when you gain a morale boost."],
  {"rez": true}, [
 ] );
g_skillsById[248] = new Skill("Retribution",248,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, whenever target ally takes attack damage, this Spell deals 33% of the damage back to the source (maximum ",[5,20]," damage)."],
  {"damage": true, "damage-ot": true}, [
  ["Maximum damage",5,20] ] );
g_skillsById[770] = new Skill("Return",770,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,15,0,false,0,
  ["All adjacent foes are Crippled for ",[3,8]," seconds. Teleport to target other ally's location."],
  {"crippled": true, "shadowstep": true}, [
  ["Crippled duration",3,8] ] );
g_skillsById[1048] = new Skill("Revealed Enchantment",1048,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["Remove an Enchantment from target foe and gain ",[3,15]," Energy. For 20 seconds, Revealed Enchantment is replaced with the Enchantment removed from target foe."],
  {"energy-gain": true}, [
  ["Energy gain",3,15] ] );
g_skillsById[1049] = new Skill("Revealed Hex",1049,"Factions","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,1,0,0,false,0,
  ["Remove a Hex from target ally and gain ",[4,10]," Energy. For 20 seconds, Revealed Hex is replaced with the Hex that was removed."],
  {"energy-gain": true, "hex-remove": true}, [
  ["Energy gain",4,10] ] );
g_skillsById[1400] = new Skill("Reversal of Damage",1400,"Nightfall","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,3,0,false,0,
  ["For 8 seconds, the next time target ally would take damage, the foe dealing the damage takes that damage instead (maximum ",[5,75],")."],
  {"damage-nerf": true}, [
  ["Max Damage Returned",5,75] ] );
g_skillsById[307] = new Skill("Reversal of Fortune",307,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,2,0,false,0,
  ["For 8 seconds, the next time target ally would take damage, that ally gains that amount of Health instead, maximum ",[15,80],"."],
  {"damage-nerf": true, "heal": true}, [
  ["Maximum healed",15,80] ] );
g_skillsById[848] = new Skill("Reverse Hex",848,"Factions","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,10,0,false,0,
  ["Remove one Hex from target ally. For ",[5,10]," seconds, the next time target ally would take damage, that damage is reduced by ",[5,50],"."],
  {"damage-nerf": true}, [
  ["Duration",5,10],
  ["Damage reduction",5,50] ] );
g_skillsById[422] = new Skill("Revive Animal",422,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Skill",5,0,6,20,0,false,0,
  ["Resurrect all nearby allied animal companions. They come back to life with ",[10,94],"% Health."],
  {"rez-pet": true}, [
  ["%Health",10,94] ] );
g_skillsById[836] = new Skill("Ride the Lightning",836,"Factions","E","Air Magic",
  true,false,false,false,"Spell",10,0,1,5,0,true,0,
  ["You ride the lightning to target foe. That foe is struck for ",[10,100]," lightning damage. This Spell has 25% armor penetration and causes Exhaustion."],
  {"damage": true, "shadowstep": true}, [
  ["Lightning damage",10,100] ] );
g_skillsById[137] = new Skill("Rigor Mortis",137,"Core","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For ",[8,20]," seconds, target foe cannot block."],
  {"block-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[955] = new Skill("Rip Enchantment",955,"Nightfall","N","Curses",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["Remove 1 enchantment from target foe. If an enchantment was removed, that foe suffers from Bleeding for ",[5,25]," seconds."],
  {"sacrifice": true}, [
  ["Bleeding duration",5,25] ] );
g_skillsById[387] = new Skill("Riposte",387,"Prophecies","W","Tactics",
  false,false,false,false,"Skill",0,4,0,0,0,false,0,
  ["For 8 seconds, while you have a sword equipped, you block the next melee attack against you and your attacker is struck for ",[20,80]," damage."],
  {"block": true, "damage": true}, [
  ["Damage",20,80] ] );
g_skillsById[935] = new Skill("Rising Bile",935,"Factions","N","Death Magic",
  false,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For 20 seconds, this hex does nothing. When Rising Bile ends, that foe and all foes in the area take ",[1,6]," damage for each second Rising Bile was in effect."],
  {"damage": true}, [
  ["Damage",1,6] ] );
g_skillsById[1217] = new Skill("Ritual Lord",1217,"Factions","Rt","Spawning Power",
  true,false,false,false,"Skill",10,0,0,30,0,false,0,
  ["For 30 seconds, your Rituals recharge ",[15,60],"% faster."],
  {"recharge-buff": true}, [
  ["Faster ritual<br />recharge %",15,60] ] );
g_skillsById[1725] = new Skill("Roaring Winds",1725,"Nightfall","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",10,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Chants and Shouts cost ",[1,5]," more Energy. This Spirit dies after ",[30,60]," seconds."],
  {"ecost-nerf": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Increased energy cost",1,5],
  ["Spirit duration",30,60] ] );
g_skillsById[189] = new Skill("Rodgort's Invocation",189,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",25,0,2,8,0,false,0,
  ["Target foe and all nearby foes are struck for ",[15,120]," fire damage and set on fire for ",[1,3]," seconds."],
  {"burning": true, "damage": true, "damage-aoe": true}, [
  ["Fire damage",15,120],
  ["Burning",1,3] ] );
g_skillsById[106] = new Skill("Rotting Flesh",106,"Core","N","Death Magic",
  false,false,false,false,"Spell",15,0,3,3,0,false,0,
  ["Target fleshy foe becomes Diseased for ",[10,25]," seconds, slowly losing Health."],
  {"disease": true}, [
  ["Duration",10,25] ] );
g_skillsById[811] = new Skill("Run as One",811,"Factions","R","Beast Mastery",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[5,15]," seconds, you and your pet run 25% faster."],
  {}, [
  ["Duration",5,15] ] );
g_skillsById[917] = new Skill("Rupture Soul",917,"Factions","Rt","Spawning Power",
  false,false,false,false,"Spell",10,0,0.75,5,0,false,0,
  ["Target allied Spirit is destroyed. All nearby enemies are struck for ",[50,140]," lightning damage and become blinded for ",[3,12]," seconds."],
  {"blind": true, "damage": true, "spirit-uses": true}, [
  ["Lightning damage",50,140],
  ["Blind Duration",3,12] ] );
g_skillsById[319] = new Skill("Rush",319,"Prophecies","W","Strength",
  false,false,false,false,"Stance",0,4,0,0,0,false,0,
  ["For ",[8,20]," seconds, you move 25% faster."],
  {"move-buff": true}, [
  ["Duration",8,20] ] );
g_skillsById[204] = new Skill("Rust",204,"Core","E","Water Magic",
  false,false,false,false,"Hex Spell",5,0,2,15,0,false,0,
  ["For ",[6,42]," seconds, target foe and all adjacent foes take 3 times as long to activate Signets."],
  {"signet-counter": true}, [
  ["Duration",6,42] ] );
g_skillsById[1991] = new Skill("Sadist's Signet",1991,"Eye of the North","A","Deadly Arts",
  false,false,false,false,"Signet",0,0,1,8,0,false,0,
  ["You gain ",[10,40]," Health for each Condition on target foe."],
  {}, [
  ["Health gain",10,40] ] );
g_skillsById[1510] = new Skill("Sand Shards",1510,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,15,0,false,0,
  ["For 30 seconds, whenever you fail to hit with a scythe attack, all nearby foes take ",[5,25]," damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Damage",5,25] ] );
g_skillsById[1372] = new Skill("Sandstorm",1372,"Nightfall","E","Earth Magic",
  true,false,false,false,"Spell",15,0,2,30,0,false,0,
  ["Create a Sandstorm at target foe's location. For 10 seconds, nearby foes are struck for ",[10,30]," earth damage each second and attacking foes are struck for an additional ",[10,30]," earth damage each second."],
  {"attack-punish": true, "damage": true, "damage-ot": true}, [
  ["Earth damage",10,30],
  ["+ Earth damage",10,30] ] );
g_skillsById[1201] = new Skill("Savage Pounce",1201,"Factions","R","Beast Mastery",
  false,false,false,false,"Pet Attack",5,0,0,10,0,false,0,
  ["Your animal companion attempts a Savage Pounce that deals +",[5,20]," damage. If the attack strikes a foe who is casting a Spell, that foe is knocked down."],
  {"damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[426] = new Skill("Savage Shot",426,"Core","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0.5,5,0,false,0,
  ["If Savage Shot hits, your target's action is interrupted. If that action was a Spell, you strike for +",[13,28]," damage."],
  {"damage": true, "interrupt": true, "spell-punish": true}, [
  ["+Damage",13,28] ] );
g_skillsById[390] = new Skill("Savage Slash",390,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",5,0,0.5,15,0,false,0,
  ["If this attack hits, it interrupts the target foe's action. If that action was a Spell, you deal ",[1,40]," extra damage."],
  {"damage": true, "interrupt": true, "spell-punish": true}, [
  ["Damage",1,40] ] );
g_skillsById[1380] = new Skill("Savannah Heat",1380,"Nightfall","E","Fire Magic",
  true,false,false,false,"Spell",5,0,2,25,0,false,0,
  ["You create Savannah Heat at target foe's location. For 5 seconds, all nearby foes take ",[5,20]," fire damage each second and an additional ",[5,20]," fire damage for each second this Spell has been in effect."],
  {"damage": true, "damage-ot": true}, [
  ["Damage",5,20],
  ["+ Damage",5,20],
  ["Total damage over 5 seconds",75,300] ] );
g_skillsById[440] = new Skill("Scavenger Strike",440,"Core","R","Beast Mastery",
  false,false,false,false,"Pet Attack",10,0,0,5,0,false,0,
  ["Your animal companion attempts a Scavenger Strike that deals +",[10,25]," damage. If the attack strikes a foe who is suffering a condition, that foe takes an additional +",[1,15]," damage."],
  {"condition-punish": true, "damage": true}, [
  ["+Damage",10,25],
  ["+Damage",1,15] ] );
g_skillsById[1471] = new Skill("Scavenger's Focus",1471,"Nightfall","R","Wilderness Survival",
  true,false,false,false,"Preparation",10,0,2,12,0,false,0,
  ["For 24 seconds, your attacks deal +",[5,15]," damage against foes suffering from a Condition."],
  {"damage": true}, [
  ["+ Damage",5,15] ] );
g_skillsById[815] = new Skill("Scorpion Wire",815,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",5,0,1,10,0,false,0,
  ["For ",[8,20]," seconds, the next time you and target foe are more than 100' apart, you teleport to that foe and that foe is knocked down. This Spell has half the normal range."],
  {"knockdown": true}, [
  ["Duration",8,20] ] );
g_skillsById[1398] = new Skill("Scourge Enchantment",1398,"Nightfall","Mo","Smiting Prayers",
  false,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["For 30 seconds, each time target foe is the target of an Enchantment, the caster of that Enchantment takes ",[15,75]," damage."],
  {"damage": true}, [
  ["Damage",15,75] ] );
g_skillsById[251] = new Skill("Scourge Healing",251,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["For 30 seconds, every time target foe is healed, the healer takes ",[15,80]," holy damage."],
  {"damage": true, "damage-ot": true, "heal-counter": true}, [
  ["Holy damage",15,80] ] );
g_skillsById[253] = new Skill("Scourge Sacrifice",253,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Hex Spell",10,0,1,5,0,false,0,
  ["For ",[8,20]," seconds, every time target foe and adjacent foes sacrifice life, they sacrifice twice the normal amount."],
  {"sacrifice-punish": true}, [
  ["Duration",8,20] ] );
g_skillsById[1719] = new Skill("Screaming Shot",1719,"Nightfall","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,8,0,false,0,
  ["If this attack hits, you deal +",[10,25]," damage. If your target is within earshot, that foe begins Bleeding for ",[5,20]," seconds."],
  {"bleeding": true, "damage": true}, [
  ["+ Damage",10,25],
  ["Bleeding duration",5,20] ] );
g_skillsById[1684] = new Skill("Scribe's Insight",1684,"Nightfall","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",5,0,0.25,20,0,false,0,
  ["For ",[10,35]," seconds, you gain 3 Energy whenever you use a Signet."],
  {}, [
  ["Duration",10,35] ] );
g_skillsById[884] = new Skill("Searing Flames",884,"Nightfall","E","Fire Magic",
  true,false,false,false,"Spell",15,0,1,2,0,false,0,
  ["Target foe and all nearby foes are struck with Searing Flames. Foes already on fire when this Skill is cast are struck for ",[10,100]," fire damage. Foes not already on fire begin Burning for ",[1,7]," seconds."],
  {"burning": true, "burning-punish": true, "damage": true}, [
  ["Fire damage",10,100],
  ["Burning duration",1,7] ] );
g_skillsById[196] = new Skill("Searing Heat",196,"Prophecies","E","Fire Magic",
  false,false,false,false,"Spell",15,0,2,30,0,false,0,
  ["Cause Searing Heat at target foe's location. For 5 seconds, foes near this location are struck for ",[10,40]," fire damage each second. When Searing Heat ends, foes in the area of effect are set on fire for 3 seconds."],
  {"burning": true, "damage": true, "damage-aoe": true}, [
  ["Fire damage",10,40] ] );
g_skillsById[1088] = new Skill("Second Wind",1088,"Factions","E","No Attribute",
  true,false,false,false,"Spell",5,0,2,5,0,true,0,
  ["You gain 1 Energy for each point of Energy lost due to Exhaustion. This spell causes Exhaustion."],
  {}, [
 ] );
g_skillsById[2105] = new Skill("Seed of Life",2105,"Nightfall","Mo","Sunspear rank| pve-only = y",
  false,false,false,false,"Enchantment Spell",5,0,0.25,25,0,false,0,
  ["For ",[1,5]," seconds, whenever target other ally takes damage, all party members are healed for 2 Health for each rank in Divine Favor."],
  {}, [
 ] );
g_skillsById[893] = new Skill("Seeking Arrows",893,"Factions","R","Marksmanship",
  false,false,false,false,"Preparation",15,0,2,20,0,false,0,
  ["For ",[3,14]," seconds, your arrows cannot be blocked. Seeking Arrows ends if you fail to hit."],
  {}, [
  ["Duration",3,14] ] );
g_skillsById[386] = new Skill("Seeking Blade",386,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",5,0,0,4,0,false,0,
  ["If this attack hits you strike for +",[1,20]," damage. If Seeking Blade is blocked, your target begins Bleeding for 25 seconds and takes ",[1,20]," damage."],
  {"bleeding": true, "block-punish": true, "damage": true}, [
  ["+ Damage",1,20],
  ["Damage",1,20] ] );
g_skillsById[1034] = new Skill("Seeping Wound",1034,"Factions","A","Critical Strikes",
  true,false,false,false,"Hex Spell",5,0,1,10,0,false,0,
  ["For ",[5,20]," seconds, if target foe is suffering from Bleeding or Poison, that foe suffers -",[1,4]," Health degeneration."],
  {"health-degen": true}, [
  ["Duration",5,20],
  ["Health degeneration",1,4] ] );
g_skillsById[2095] = new Skill("Selfless Spirit (Kurzick)",2095,"Factions","Mo","Kurzick rank",
  false,false,false,true,"Enchantment Spell",5,0,0.25,60,0,false,0,
  ["For ",[10,20]," seconds, spells you cast that target an ally cost 5 less energy. This enchantment ends if you cast a spell on yourself."],
  {}, [
 ] );
g_skillsById[1952] = new Skill("Selfless Spirit (Luxon)",1952,"Factions","Mo","Luxon rank",
  false,false,false,true,"Enchantment Spell",5,0,0.25,60,0,false,0,
  ["For ",[10,20]," seconds, spells you cast that target an ally cost 5 less energy. This enchantment ends if you cast a spell on yourself."],
  {}, [
 ] );
g_skillsById[456] = new Skill("Serpent's Quickness",456,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Stance",5,0,0,45,0,false,0,
  ["For ",[15,30]," seconds, recharge times for your skills are reduced by 33%. Serpent's Quickness ends if your Health drops below 50%."],
  {"recharge-buff": true}, [
  ["Duration",15,30] ] );
g_skillsById[382] = new Skill("Sever Artery",382,"Core","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,4,0,0,0,false,0,
  ["If this attack hits, the opponent begins Bleeding for ",[5,25]," seconds, losing Health over time."],
  {"bleeding": true}, [
  ["Bleeding duration",5,25] ] );
g_skillsById[2052] = new Skill("Shadow Fang",2052,"Eye of the North","A","Deadly Arts",
  false,false,false,false,"Hex Spell",10,0,0.25,45,0,false,0,
  ["Shadow Step to target foe. For 10 seconds, this Hex does nothing. When this Hex ends, you return to your original location and that foe suffers from a Deep Wound for ",[5,20]," seconds."],
  {}, [
  ["Deep Wound duration",5,20] ] );
g_skillsById[826] = new Skill("Shadow Form",826,"Factions","A","Shadow Arts",
  true,false,false,false,"Enchantment Spell",10,0,1,60,0,false,0,
  ["For ",[5,20]," seconds, all hostile Spells that target you fail and all attacks against you miss. When Shadow Form ends, lose all but ",[5,50]," Health."],
  {"attack-counter": true, "spell-counter": true}, [
  ["Duration",5,20],
  ["Health at end",5,50] ] );
g_skillsById[1654] = new Skill("Shadow Meld",1654,"Nightfall","A","No Attribute",
  true,false,false,false,"Enchantment Spell",10,0,0.25,20,-1,false,0,
  ["Shadow Step to target other ally. When you stop maintaining this Enchantment, you return to your original location."],
  {"shadowstep": true}, [
 ] );
g_skillsById[1652] = new Skill("Shadow Prison",1652,"Nightfall","A","Deadly Arts",
  true,false,false,false,"Hex Spell",10,0,0.25,25,0,false,0,
  ["Shadow Step to target foe. For ",[1,7]," seconds, that foe moves 66% slower."],
  {"move-nerf": true}, [
  ["Duration",1,7] ] );
g_skillsById[814] = new Skill("Shadow Refuge",814,"Factions","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",5,0,1,8,0,false,0,
  ["For 4 seconds, you gain ",[5,10]," Health regeneration. When Shadow Refuge ends, you gain ",[40,100]," Health if you are attacking."],
  {"heal-self": true, "health-regen": true}, [
  ["Health regeneration",5,10],
  ["Health gain",40,100] ] );
g_skillsById[2091] = new Skill("Shadow Sanctuary (Kurzick)",2091,"Factions","A","Kurzick rank",
  false,false,false,true,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["You are Blinded for 10 seconds. For 10 seconds, you gain +",[5,10]," Health regeneration and +40 armor."],
  {}, [
 ] );
g_skillsById[1948] = new Skill("Shadow Sanctuary (Luxon)",1948,"Factions","A","Luxon rank",
  false,false,false,true,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["You are Blinded for 10 seconds. For 10 seconds, you gain +",[5,10]," Health regeneration and +40 armor."],
  {}, [
 ] );
g_skillsById[928] = new Skill("Shadow Shroud",928,"Factions","A","Shadow Arts",
  true,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For ",[3,9]," seconds, target foe cannot be the target of enchantments."],
  {}, [
  ["Duration",3,9] ] );
g_skillsById[102] = new Skill("Shadow Strike",102,"Prophecies","N","Blood Magic",
  false,false,false,false,"Spell",10,0,2,8,0,false,0,
  ["Target foe takes ",[12,48]," shadow damage. If that foe's Health is above 50%, you steal up to ",[12,48]," Health."],
  {"damage": true, "health-steal": true}, [
  ["Shadow damage",12,48],
  ["Life stealing",12,48] ] );
g_skillsById[1650] = new Skill("Shadow Walk",1650,"Nightfall","A","No Attribute",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["Shadow Step to target foe. For 30 seconds, you cannot cast Enchantments. When this Stance ends, you return to your original location."],
  {"shadowstep": true}, [
 ] );
g_skillsById[136] = new Skill("Shadow of Fear",136,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["Target foe and all adjacent foes attack 50% slower for the next ",[5,30]," seconds."],
  {"attackspeed-nerf": true}, [
  ["Duration",5,30] ] );
g_skillsById[929] = new Skill("Shadow of Haste",929,"Factions","A","Shadow Arts",
  false,false,false,false,"Stance",5,0,0,45,0,false,0,
  ["For ",[10,40]," seconds you move 15% faster than normal. When Shadow of Haste ends, you shadow step to your original location."],
  {"move-buff": true, "shadowstep": true}, [
  ["Duration",10,40] ] );
g_skillsById[871] = new Skill("Shadowsong",871,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",15,0,5,45,0,false,0,
  ["Create a level ",[1,6]," Spirit. The Spirit's attacks cause Blindness for ",[1,6]," seconds. This Spirit dies after 30 seconds."],
  {"blind": true, "spirit": true}, [
  ["Spirit level",1,6],
  ["Blind duration",1,6] ] );
g_skillsById[950] = new Skill("Shadowy Burden",950,"Factions","A","Shadow Arts",
  false,false,false,false,"Hex Spell",10,0,0.25,15,0,false,0,
  ["For ",[3,15]," seconds, target foe moves 25% slower and while target foe has no other Hexes, that foe has 20 less armor against your attacks."],
  {"armor-nerf": true, "move-nerf": true}, [
  ["Duration",3,15] ] );
g_skillsById[51] = new Skill("Shame",51,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For 6 seconds, the next time target foe casts a spell that targets an ally, the spell fails and you steal up to ",[5,14]," Energy from that foe."],
  {"energy-drain": true, "energy-gain": true, "spell-counter": true}, [
  ["Energy stolen",5,14] ] );
g_skillsById[927] = new Skill("Shameful Fear",927,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For 10 seconds, target foe moves 10% faster than normal. For each second, if that foe is moving, that foe takes ",[5,20]," damage."],
  {"damage": true}, [
  ["Damage",5,20] ] );
g_skillsById[213] = new Skill("Shard Storm",213,"Prophecies","E","Water Magic",
  false,false,false,false,"Hex Spell",10,0,1,10,0,false,0,
  ["Send out an ice shard that strikes target foe for ",[10,85]," cold damage if it hits and causing target foe to move 66% slower for ",[2,6]," seconds."],
  {"damage": true, "move-nerf": true}, [
  ["Cold damage",10,85],
  ["Duration",2,6] ] );
g_skillsById[900] = new Skill("Shared Burden",900,"Factions","Me","Illusion Magic",
  true,false,false,false,"Hex Spell",10,0,2,25,0,false,0,
  ["For ",[5,25]," seconds, target foe and all nearby foes move 50% slower."],
  {"move-nerf": true}, [
  ["Duration",5,25] ] );
g_skillsById[926] = new Skill("Sharpen Daggers",926,"Factions","A","Critical Strikes",
  false,false,false,false,"Enchantment Spell",5,0,2,20,0,false,0,
  ["For 30 seconds, the next ",[1,10]," successful hits with attack skills cause Bleeding for ",[5,15]," seconds."],
  {"bleeding": true}, [
  ["Attacks",1,10],
  ["Bleeding",5,15] ] );
g_skillsById[27] = new Skill("Shatter Delusions",27,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["Remove one Mesmer hex from target foe. If a hex was removed, that foe takes ",[15,75]," damage."],
  {"damage": true, "hex-punish": true}, [
  ["Damage",15,75] ] );
g_skillsById[69] = new Skill("Shatter Enchantment",69,"Core","Me","Domination Magic",
  false,false,false,false,"Spell",15,0,1,25,0,false,0,
  ["Remove an enchantment from target foe. If an enchantment is removed, that foe takes ",[14,100]," damage."],
  {"damage": true, "enchant-punish": true, "enchant-remove": true}, [
  ["Damage",14,100] ] );
g_skillsById[67] = new Skill("Shatter Hex",67,"Core","Me","Domination Magic",
  false,false,false,false,"Spell",15,0,1,10,0,false,0,
  ["Remove a hex from target ally. If a hex is removed, foes near that ally take ",[30,120]," damage."],
  {"damage": true, "damage-aoe": true, "hex-remove": true, "hex-uses": true}, [
  ["Damage",30,120] ] );
g_skillsById[933] = new Skill("Shatter Storm",933,"Factions","Me","No Attribute",
  true,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["Target foe loses all Enchantments. For each Enchantment removed this way, Shatter Storm is disabled for an additional 7 seconds."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[1634] = new Skill("Shattering Assault",1634,"Nightfall","A","Dagger Mastery",
  true,false,false,false,"Dual Attack",10,0,0,4,0,false,0,
  ["Must follow an off-hand attack. If it hits, you deal ",[5,50]," damage and target foe loses one Enchantment. This attack cannot be blocked."],
  {"damage": true, "enchant-remove": true}, [
  ["Damage",5,50] ] );
g_skillsById[809] = new Skill("Shatterstone",809,"Factions","E","Water Magic",
  true,false,false,false,"Hex Spell",15,0,2,8,0,false,0,
  ["Target foe is struck for ",[25,100]," cold damage and is Hexed with Shatterstone for 3 seconds. When Shatterstone ends, that foe is struck for ",[25,100]," cold damage."],
  {"damage": true}, [
  ["Cold damage",25,100],
  ["Cold damage",25,100] ] );
g_skillsById[2059] = new Skill("Shell Shock",2059,"Eye of the North","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe is struck for ",[10,40]," lightning damage and has Cracked Armor for ",[5,20]," seconds. This spell has 25% armor penetration."],
  {}, [
  ["Lightning damage",10,40],
  ["Cracked Armor duration",5,20] ] );
g_skillsById[982] = new Skill("Shelter",982,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",25,0,5,45,0,false,0,
  ["Create a level ",[1,8]," Spirit. Non-Spirit allies within its range cannot lose more than 10% maximum Health from a single attack. When this Spirit prevents damage, it loses ",[75,45]," Health. This Spirit lasts ",[30,60]," seconds."],
  {"damage-limit": true, "spirit": true}, [
  ["Spirit level",1,8],
  ["Health lost",75,45],
  ["Spirit duration",30,60] ] );
g_skillsById[363] = new Skill("Shield Bash",363,"Core","W","Strength",
  false,false,false,false,"Skill",5,0,0,20,0,false,0,
  ["For ",[5,11]," seconds, while wielding a shield, the next attack skill used against you is blocked. If it was a melee skill, your attacker is knocked down and that skill is disabled for an additional 15 seconds."],
  {"block": true, "knockdown": true, "lock": true}, [
  ["Duration",5,11] ] );
g_skillsById[885] = new Skill("Shield Guardian",885,"Factions","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,1,0,false,0,
  ["For 10 seconds, target ally has a 75% chance to block incoming attacks. The next time target ally blocks an attack, that ally and all nearby allies are healed for ",[16,80]," and Shield Guardian ends."],
  {"block": true, "heal": true, "heal-aoe": true}, [
  ["Health",16,80] ] );
g_skillsById[378] = new Skill("Shield Stance",378,"Prophecies","W","Tactics",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[1,8]," seconds, while wielding a shield, you have a 75% chance to block incoming attacks, but you move 33% slower."],
  {"block": true}, [
  ["Duration",1,8] ] );
g_skillsById[1399] = new Skill("Shield of Absorption",1399,"Nightfall","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,10,0,false,0,
  ["For ",[3,7]," seconds, damage received by target ally is reduced by 5 each time that ally is hit while under the effects of this Enchantment."],
  {}, [
  ["Duration",3,7] ] );
g_skillsById[259] = new Skill("Shield of Deflection",259,"Prophecies","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",10,0,0.25,10,0,false,0,
  ["For ",[3,10]," seconds, target ally has a 75% chance to block attacks and gains ",[15,30]," armor."],
  {"armor-buff": true, "block": true}, [
  ["Duration",3,10],
  ["Armor gain",15,30] ] );
g_skillsById[2201] = new Skill("Shield of Force",2201,"Eye of the North","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["For ",[1,16]," seconds, the next attack skill against you is blocked, and your attacker is Weakened for ",[5,20]," seconds."],
  {}, [
  ["Duration",1,16],
  ["Weakness duration",5,20] ] );
g_skillsById[262] = new Skill("Shield of Judgment",262,"Prophecies","Mo","Smiting Prayers",
  true,false,false,false,"Enchantment Spell",15,0,1,45,0,false,0,
  ["For ",[8,20]," seconds, anyone striking target ally with an attack is knocked down and suffers ",[5,50]," holy damage."],
  {"damage": true, "damage-ot": true, "knockdown": true}, [
  ["Duration",8,20],
  ["Damage",5,50] ] );
g_skillsById[261] = new Skill("Shield of Regeneration",261,"Core","Mo","Protection Prayers",
  true,false,false,false,"Enchantment Spell",15,0,0.25,8,0,false,0,
  ["For ",[5,13]," seconds, target ally gains +",[3,10]," Health regeneration and 40 armor."],
  {"armor-buff": true, "health-regen": true}, [
  ["Duration",5,13],
  ["Health regeneration",3,10] ] );
g_skillsById[299] = new Skill("Shielding Hands",299,"Core","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,15,0,false,0,
  ["For 8 seconds, damage received by target ally is reduced by ",[3,18],"."],
  {"damage-nerf": true}, [
  ["Damage reduction",3,18] ] );
g_skillsById[1071] = new Skill("Shivers of Dread",1071,"Factions","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[10,40]," seconds, whenever target foe is struck for cold damage while using a skill, that foe is interrupted and you lose ",[10,5]," Energy or Shivers of Dread ends."],
  {"energy-leak": true}, [
  ["Duration",10,40],
  ["Energy lost",10,5] ] );
g_skillsById[231] = new Skill("Shock",231,"Prophecies","E","Air Magic",
  false,false,false,false,"Skill",5,0,0.75,10,0,true,0,
  ["Target touched foe is knocked down and struck for ",[10,60]," lightning damage. This skill has 25% armor penetration and causes Exhaustion."],
  {"damage": true, "knockdown": true, "touch": true}, [
  ["Lightning damage",10,60] ] );
g_skillsById[1082] = new Skill("Shock Arrow",1082,"Factions","E","Air Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Send out a Shock Arrow that strikes for ",[5,50]," lightning damage if it hits. If Shock Arrow strikes an attacking foe, you gain ",[1,9]," Energy. This spell has 25% armor penetration."],
  {"damage": true}, [
  ["Lightning damage",5,50],
  ["Energy gain",1,9] ] );
g_skillsById[937] = new Skill("Shockwave",937,"Factions","E","Earth Magic",
  true,false,false,false,"Spell",10,0,0.75,15,0,false,0,
  ["Adjacent foes take ",[15,60]," earth damage, nearby foes take ",[15,60]," earth damage, and foes in the area take ",[15,60]," earth damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Adjacent foes",15,60],
  ["Nearby foes",15,60],
  ["Foes in the area",15,60] ] );
g_skillsById[1146] = new Skill("Shove",1146,"Factions","W","Tactics",
  true,false,false,false,"Skill",5,0,0.75,20,0,false,0,
  ["Lose all Adrenaline. All of your other non-attack skills are disabled for ",[10,5]," seconds. Target touched foe is knocked down and takes ",[15,75]," damage."],
  {"adrenal-gone": true, "damage": true, "knockdown": true, "lock-self": true, "touch": true}, [
  ["Disabled duration",10,5],
  ["Damage",15,75] ] );
g_skillsById[2054] = new Skill("Shrinking Armor",2054,"Eye of the North","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",5,0,1,8,0,false,0,
  ["For 10 seconds, target foe suffers from -",[1,4]," Health degeneration. When this hex ends, that foe has Cracked Armor for ",[5,20]," seconds."],
  {}, [
  ["Health degeneration",1,4],
  ["Cracked Armor duration",5,20] ] );
g_skillsById[1031] = new Skill("Shroud of Distress",1031,"Factions","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For ",[30,60]," seconds, if you are below 50% Health, you have a 75% chance to block attacks."],
  {"block": true}, [
  ["Duration",30,60] ] );
g_skillsById[801] = new Skill("Shroud of Silence",801,"Factions","A","Deadly Arts",
  true,false,false,false,"Hex Spell",10,0,0.75,30,0,false,0,
  ["All of your Spells are disabled for 15 seconds. For ",[1,3]," seconds, target touched foe cannot cast Spells."],
  {"lock-self": true, "spell-counter": true, "touch": true}, [
  ["Duration",1,3] ] );
g_skillsById[1738] = new Skill("Sight Beyond Sight",1738,"Nightfall","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",5,0,0.25,15,0,false,0,
  ["For ",[8,20]," seconds, you cannot be Blinded."],
  {}, [
  ["Duration",8,20] ] );
g_skillsById[1776] = new Skill("Signet of Aggression",1776,"Nightfall","P","No Attribute",
  false,false,false,false,"Signet",0,0,1,5,0,false,0,
  ["If you are under the effects of a Shout or Chant, you gain 2 strikes of adrenaline."],
  {"adrenal-gain": true}, [
 ] );
g_skillsById[145] = new Skill("Signet of Agony",145,"Core","N","Blood Magic",
  false,false,false,false,"Signet",0,0,0.75,15,0,false,0,
  ["You suffer from Bleeding for 25 seconds. All nearby foes take ",[10,70]," damage."],
  {"damage": true, "sacrifice": true}, [
  ["Damage",10,70] ] );
g_skillsById[1743] = new Skill("Signet of Binding",1743,"Nightfall","Rt","Communing",
  false,false,false,false,"Signet",0,0,1,15,0,false,0,
  ["Target allied summoned creature gains +",[50,200]," maximum Health. After 30 seconds, that creature is destroyed."],
  {"health-buff": true}, [
  ["+Max Health",50,200] ] );
g_skillsById[3] = new Skill("Signet of Capture",3,"Core",null,"No Attribute",
  false,false,false,true,"Signet",0,0,2,2,0,false,0,
  ["Choose one skill from a nearby dead Boss of your profession. Signet of Capture is permanently replaced by that skill. If that skill was elite, gain 250 XP for every level you have earned."],
  {}, [
 ] );
g_skillsById[1657] = new Skill("Signet of Clumsiness",1657,"Nightfall","Me","Illusion Magic",
  false,false,false,false,"Signet",0,0,0.25,15,0,false,0,
  ["If target foe is attacking, that foe is interrupted and takes ",[15,60]," damage."],
  {"damage": true, "interrupt": true}, [
  ["Damage",15,60] ] );
g_skillsById[2093] = new Skill("Signet of Corruption (Kurzick)",2093,"Factions","N","Kurzick rank",
  false,false,false,true,"Signet",0,0,1,20,0,false,0,
  ["Target foe and all nearby foes take ",[15,30]," damage. For each affected foe suffering from a Condition or Hex, you gain 2 Energy (maximum ",[12,20]," Energy)."],
  {}, [
 ] );
g_skillsById[1950] = new Skill("Signet of Corruption (Luxon)",1950,"Factions","N","Luxon rank",
  false,false,false,true,"Signet",0,0,1,20,0,false,0,
  ["Target foe and all nearby foes take ",[15,30]," damage. For each affected foe suffering from a Condition or Hex, you gain 2 Energy (maximum ",[12,20]," Energy)."],
  {}, [
 ] );
g_skillsById[1238] = new Skill("Signet of Creation",1238,"Factions","Rt","Spawning Power",
  false,false,false,false,"Signet",0,0,2,10,0,false,0,
  ["All Spirits and animated creatures within earshot gain +",[1,7]," Health regeneration. After 30 seconds, those spirits and creatures are destroyed."],
  {"health-regen": true}, [
  ["Health regeneration",1,7] ] );
g_skillsById[293] = new Skill("Signet of Devotion",293,"Core","Mo","Divine Favor",
  false,false,false,false,"Signet",0,0,2,5,0,false,0,
  ["Heal target ally for ",[14,100]," Health."],
  {"heal": true}, [
  ["Healing",14,100] ] );
g_skillsById[882] = new Skill("Signet of Disenchantment",882,"Factions","Me","No Attribute",
  false,false,false,false,"Signet",0,0,1,15,0,false,0,
  ["Lose all Energy. Target foe loses one Enchantment."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[860] = new Skill("Signet of Disruption",860,"Factions","Me","Domination Magic",
  false,false,false,false,"Signet",0,0,0.25,20,0,false,0,
  ["If target foe is casting a spell, the spell is interrupted and that foe suffers ",[10,51]," damage. If that foe is hexed, Signet of Disruption can interrupt any non-spell skills."],
  {"damage": true, "interrupt": true}, [
  ["Damage",10,51] ] );
g_skillsById[1992] = new Skill("Signet of Distraction",1992,"Eye of the North","Me","Domination Magic",
  false,false,false,false,"Signet",0,0,0.25,20,0,false,0,
  ["If target foe is casting a spell, that spell is interrupted and disabled for ",[1,5]," seconds for each signet you have equipped."],
  {}, [
  ["Disabled duration",1,5] ] );
g_skillsById[1742] = new Skill("Signet of Ghostly Might",1742,"Nightfall","Rt","Communing",
  true,false,false,false,"Signet",0,0,1,5,0,false,0,
  ["Target allied Summoned creature's attacks deal ",[5,35]," more damage. After 10 seconds, that creature is destroyed."],
  {"damage-buff": true}, [
  ["+ Damage",5,35] ] );
g_skillsById[62] = new Skill("Signet of Humility",62,"Core","Me","Inspiration Magic",
  false,false,false,false,"Signet",0,0,3,20,0,false,0,
  ["Target foe's elite skill is disabled for ",[1,16]," seconds."],
  {"lock": true}, [
  ["Duration",1,16] ] );
g_skillsById[1346] = new Skill("Signet of Illusions",1346,"Nightfall","Me","Illusion Magic",
  true,false,false,false,"Signet",0,0,2,5,0,false,0,
  ["Your next ",[1,3]," Spells use your Illusion attribute instead of its normal attribute."],
  {}, [
  ["Spells",1,3] ] );
g_skillsById[2229] = new Skill("Signet of Infection",2229,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Signet",0,0,1,10,0,false,0,
  ["If target foe is Bleeding, that foe is Diseased for ",[8,20]," seconds."],
  {}, [
  ["Disease duration",8,20] ] );
g_skillsById[294] = new Skill("Signet of Judgment",294,"Core","Mo","Smiting Prayers",
  true,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["Target foe is knocked down. That foe and all adjacent foes take ",[15,75]," holy damage."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Holy damage",15,75] ] );
g_skillsById[1365] = new Skill("Signet of Lost Souls",1365,"Nightfall","N","Soul Reaping",
  false,false,false,false,"Signet",0,0,0.25,8,0,false,0,
  ["If target foe is below 50% Health, you gain ",[10,100]," Health and ",[1,10]," Energy."],
  {"energy-gain": true, "heal-self": true}, [
  ["Health Gain",10,100],
  ["Energy Gain",1,10] ] );
g_skillsById[1036] = new Skill("Signet of Malice",1036,"Factions","A","No Attribute",
  false,false,false,false,"Signet",0,0,0.25,5,0,false,0,
  ["For each Condition suffered by target foe, you lose one Condition."],
  {"condition-remove": true}, [
 ] );
g_skillsById[58] = new Skill("Signet of Midnight",58,"Prophecies","Me","No Attribute",
  true,false,false,false,"Signet",0,0,0.75,10,0,false,0,
  ["You and target touched foe become Blinded for 15 seconds."],
  {"blind": true, "touch": true}, [
 ] );
g_skillsById[2200] = new Skill("Signet of Mystic Speed",2200,"Eye of the North","D","Wind Prayers",
  false,false,false,false,"Signet",0,0,0,15,0,false,0,
  ["For ",[5,20]," seconds, you move 15% faster for each Enchantment on you (maximum 33% faster)."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1689] = new Skill("Signet of Mystic Wrath",1689,"Nightfall","Mo","Smiting Prayers",
  false,false,false,false,"Signet",0,0,2,20,0,false,0,
  ["Target foe takes ",[5,35]," holy damage for each Enchantment on you (maximum 100 holy damage)."],
  {"damage": true, "damage-limit": true}, [
  ["Holy damage per Enchantment",5,35] ] );
g_skillsById[1530] = new Skill("Signet of Pious Light",1530,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["Lose 1 Enchantment. Target ally is healed for ",[30,120]," Health. If an Enchantment was removed in this way, this Signet recharges immediately."],
  {"heal": true}, [
  ["Healing",30,120] ] );
g_skillsById[2014] = new Skill("Signet of Pious Restraint",2014,"Eye of the North","D","Wind Prayers",
  false,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["Lose one Enchantment. Target foe is Crippled for ",[5,15]," seconds. If an Enchantment was removed, this Signet recharges instantly."],
  {}, [
  ["Crippled duration",5,15] ] );
g_skillsById[1269] = new Skill("Signet of Rage",1269,"Factions","Mo","Smiting Prayers",
  false,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["Target foe takes ",[10,40]," holy damage and +",[5,20]," holy damage for each adrenaline skill that foe has."],
  {"adrenal-punish": true, "damage": true}, [
  ["Holy damage",10,40],
  ["+Holy damage",5,20] ] );
g_skillsById[1993] = new Skill("Signet of Recall",1993,"Eye of the North","Me","Inspiration Magic",
  false,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["For 10 seconds, you have -4 Energy regeneration. When this effect ends, you gain ",[13,20]," Energy."],
  {}, [
  ["Energy gain",13,20] ] );
g_skillsById[887] = new Skill("Signet of Rejuvenation",887,"Factions","Mo","Healing Prayers",
  false,false,false,false,"Signet",0,0,1,8,0,false,0,
  ["Heal target ally for ",[15,75],". If target ally is casting a spell or attacking, that ally is healed for an additional ",[15,75]," Health."],
  {"heal": true}, [
  ["Healing",15,75],
  ["Additional healing",15,75] ] );
g_skillsById[1690] = new Skill("Signet of Removal",1690,"Nightfall","Mo","No Attribute",
  true,false,false,false,"Signet",0,0,1,5,0,false,0,
  ["If target ally is under the effects of an Enchantment, that ally loses one Hex and one Condition."],
  {}, [
 ] );
g_skillsById[1778] = new Skill("Signet of Return",1778,"Nightfall","P","Leadership",
  false,false,false,false,"Signet",0,0,5,20,0,false,0,
  ["Resurrect target party member with ",[5,15],"% Health and ",[1,4],"% Energy for each party member within earshot."],
  {"rez": true}, [
  ["%Health",5,15],
  ["%Energy",1,4] ] );
g_skillsById[876] = new Skill("Signet of Shadows",876,"Factions","A","Deadly Arts",
  false,false,false,false,"Signet",0,0,1,30,0,false,0,
  ["Target foe takes ",[5,35]," damage. If your target was Blinded, that foe suffers an additional ",[15,60]," damage."],
  {"blind-punish": true, "damage": true}, [
  ["Damage",5,35],
  ["Additional damage",15,60] ] );
g_skillsById[1363] = new Skill("Signet of Sorrow",1363,"Nightfall","N","Soul Reaping",
  false,false,false,false,"Signet",0,0,1,30,0,false,0,
  ["Target foe takes ",[15,75]," damage. If target foe is near a corpse or has a dead pet, this skill recharges instantly."],
  {"damage": true}, [
  ["Damage",15,75] ] );
g_skillsById[1239] = new Skill("Signet of Spirits",1239,"Factions","Rt","Channeling Magic",
  true,false,false,false,"Signet",0,0,1,20,0,false,0,
  ["You gain ",[3,12]," Energy if you are within earshot of a Spirit."],
  {"energy-gain": true, "spirit-uses": true}, [
  ["Energy gain",3,12] ] );
g_skillsById[1411] = new Skill("Signet of Stamina",1411,"Nightfall","W","Strength",
  false,false,false,false,"Signet",0,0,0.25,20,0,false,0,
  ["You have +",[50,300]," maximum Health. This Signet ends if you successfully hit with an attack."],
  {"health-buff": true}, [
  ["+Max health",50,300] ] );
g_skillsById[944] = new Skill("Signet of Strength",944,"Factions","W","Strength",
  false,false,false,false,"Signet",0,0,1,45,0,false,0,
  ["Your next ",[1,16]," attacks deal +5 damage."],
  {"damage-buff": true}, [
  ["Attacks",1,16] ] );
g_skillsById[1364] = new Skill("Signet of Suffering",1364,"Nightfall","N","Curses",
  true,false,false,false,"Signet",0,0,2,20,0,false,0,
  ["For each hex on target foe, that foe takes ",[5,35]," damage (maximum 140 damage)."],
  {"damage": true, "damage-limit": true}, [
  ["Damage",5,35] ] );
g_skillsById[1585] = new Skill("Signet of Synergy",1585,"Nightfall","P","Motivation",
  false,false,false,false,"Signet",0,0,1,10,0,false,0,
  ["Target other ally is healed for ",[40,100]," Health. If you are not under the effects of an Enchantment, you are also healed for ",[40,100]," Health."],
  {"heal": true, "heal-self": true}, [
  ["Healing",40,100],
  ["Self heal",40,100] ] );
g_skillsById[1647] = new Skill("Signet of Toxic Shock",1647,"Nightfall","A","Deadly Arts",
  false,false,false,false,"Signet",0,0,1,15,0,false,0,
  ["If target foe is suffering from Poison, that foe takes ",[10,100]," damage."],
  {"damage": true}, [
  ["Damage",10,100] ] );
g_skillsById[1648] = new Skill("Signet of Twilight",1648,"Nightfall","A","No Attribute",
  false,false,false,false,"Signet",0,0,2,20,0,false,0,
  ["For each Hex on target foe, that foe loses one Enchantment."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[59] = new Skill("Signet of Weariness",59,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Signet",0,0,2,30,0,false,0,
  ["Target foe and all nearby foes lose ",[3,8]," Energy."],
  {"energy-drain": true, "energy-drain-aoe": true}, [
  ["Energy lost",3,8] ] );
g_skillsById[1144] = new Skill("Silverwing Slash",1144,"Factions","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,8,0,0,0,false,0,
  ["This attack strikes for +",[1,40]," damage if it hits."],
  {"damage": true}, [
  ["+ Damage",1,40] ] );
g_skillsById[1350] = new Skill("Simple Thievery",1350,"Nightfall","Me","Domination Magic",
  true,false,false,false,"Spell",10,0,0.25,10,0,false,0,
  ["Interrupt target foe's action. If that action was a skill, that skill is disabled for ",[5,20]," seconds, and Simple Thievery is replaced by that skill."],
  {"lock": true}, [
  ["Duration",5,20] ] );
g_skillsById[951] = new Skill("Siphon Speed",951,"Factions","A","Deadly Arts",
  false,false,false,false,"Hex Spell",5,0,1,30,0,false,0,
  ["For ",[5,15]," seconds, target foe moves 33% slower and you move 33% faster. This Spell has half the normal range. This spell recharges 50% faster if cast on a moving foe."],
  {"move-buff": true, "move-nerf": true}, [
  ["Duration",5,15] ] );
g_skillsById[827] = new Skill("Siphon Strength",827,"Factions","A","Deadly Arts",
  true,false,false,false,"Hex Spell",10,0,1,10,0,false,0,
  ["For ",[5,20]," seconds, target foe deals ",[5,50]," less damage with attacks and all of your attacks against that foe have an additional 33% chance of being a critical hit."],
  {"critical-buff": true, "damage-nerf": true}, [
  ["Duration",5,20],
  ["Damage reduction",5,50] ] );
g_skillsById[329] = new Skill("Skull Crack",329,"Prophecies","W","No Attribute",
  true,false,false,false,"Melee Attack",0,9,0.5,0,0,false,0,
  ["If it hits, this attack interrupts the target's current action. If that foe was casting a Spell, that foe is Dazed for 10 seconds."],
  {"dazed": true, "interrupt": true}, [
 ] );
g_skillsById[1783] = new Skill("Slayer's Spear",1783,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",10,0,0,4,0,false,0,
  ["If this attack hits, you deal +",[5,25]," damage. If that foe has more Health than you, that foe suffers from a Deep Wound for ",[5,20]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["+ Damage",5,25],
  ["Deep Wound duration",5,20] ] );
g_skillsById[2191] = new Skill("Slippery Ground",2191,"Eye of the North","E","Water Magic",
  false,false,false,false,"Spell",5,0,1,10,0,false,0,
  ["If target foe is Blind, that foe is knocked down."],
  {}, [
 ] );
g_skillsById[1084] = new Skill("Sliver Armor",1084,"Factions","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[5,11]," seconds, you have ",[25,50],"% chance to block attacks and whenever you are the target of a hostile Spell or attack one nearby foe is struck for ",[5,35]," earth damage."],
  {"block": true, "damage": true}, [
  ["Duration",5,11],
  ["Chance to block %",25,50],
  ["Earth damage",5,35] ] );
g_skillsById[2069] = new Skill("Sloth Hunter's Shot",2069,"Eye of the North","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,8,0,false,0,
  ["If this attack hits, target foe takes +",[10,25]," damage. If that foe is not using a Skill, Sloth Hunter's Shot does an additional +",[10,35]," damage."],
  {}, [
  ["+ Damage",10,25],
  ["Additional damage",10,35] ] );
g_skillsById[240] = new Skill("Smite",240,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Spell",10,0,1,10,0,false,0,
  ["This attack deals ",[10,55]," Holy damage. If attacking, your target takes an additional ",[10,35]," Holy damage."],
  {"attack-punish": true, "damage": true}, [
  ["Holy damage",10,55],
  ["+Damage",10,35] ] );
g_skillsById[2004] = new Skill("Smite Condition",2004,"Eye of the North","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,1,7,0,false,0,
  ["Remove one Condition from target ally. If a Condition was removed, foes in the area take ",[10,60]," holy damage."],
  {}, [
  ["Damage",10,60] ] );
g_skillsById[302] = new Skill("Smite Hex",302,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,1,12,0,false,0,
  ["Remove a Hex from target ally. If a Hex is removed, foes in the area suffer ",[10,85]," damage."],
  {"damage": true, "damage-aoe": true, "hex-remove": true, "hex-uses": true}, [
  ["Damage",10,85] ] );
g_skillsById[2005] = new Skill("Smiter's Boon",2005,"Eye of the North","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For 30 seconds, your Smiting Prayers have double the Divine Favor bonus."],
  {}, [
  ["Healing Bonus",0,48] ] );
g_skillsById[2136] = new Skill("Smoke Powder Defense",2136,"Eye of the North","A","Shadow Arts",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For 8 seconds, the next time you are struck, you take half damage and all adjacent foes are Blinded for ",[2,6]," seconds."],
  {}, [
  ["Blind duration",2,6] ] );
g_skillsById[1729] = new Skill("Smoke Trap",1729,"Nightfall","R","Wilderness Survival",
  true,false,false,false,"Trap",10,0,2,20,0,false,0,
  ["When Smoke Trap is triggered, nearby foes are Blinded and Dazed for ",[5,10]," seconds. Smoke Trap ends after 90 seconds. While activating this Skill, you are easily interrupted."],
  {"blind": true, "dazed": true}, [
  ["Blind & Dazed<br />duration",5,10] ] );
g_skillsById[1090] = new Skill("Smoldering Embers",1090,"Factions","E","Fire Magic",
  false,false,false,false,"Hex Spell",10,0,2,7,0,false,0,
  ["Target foe is struck for ",[7,112]," fire damage. After 3 seconds, if target foe is not moving that foe is set on fire for 3 seconds."],
  {"burning": true, "damage": true}, [
  ["Fire Damage",7,112] ] );
g_skillsById[2412] = new Skill("Smooth Criminal",2412,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",5,0,1,20,0,false,0,
  ["For ",[10,20]," seconds, one random Spell is disabled for target foe and Smooth Criminal is replaced by that Spell. You gain ",[5,10]," Energy."],
  {}, [
  ["Duration",10,20],
  ["Energy gain",5,10] ] );
g_skillsById[854] = new Skill("Snare",854,"Factions","R","Wilderness Survival",
  false,false,false,false,"Trap",5,0,2,20,0,false,0,
  ["When Snare is triggered, all nearby foes become Crippled for ",[3,15]," seconds. Snare ends after 90 seconds. While activating this skill, you are easily interrupted."],
  {"crippled": true}, [
  ["Crippled duration",3,15] ] );
g_skillsById[2222] = new Skill("Snow Storm",2222,"Eye of the North",null,"Deldrimor rank",
  false,false,false,true,"Spell",15,0,2,10,0,false,0,
  ["Create a Snow Storm at target foe's location. For 5 seconds, foes adjacent to that location are struck for ",[20,40]," cold damage each second."],
  {}, [
  ["Damage",20,40] ] );
g_skillsById[1699] = new Skill("Soldier's Defense",1699,"Nightfall","W","Tactics",
  false,false,false,false,"Stance",5,0,0,10,0,false,0,
  ["For ",[1,8]," seconds, you have a 75% chance to block attacks while under the effects of a Shout or Chant."],
  {"block": true}, [
  ["Duration",1,8] ] );
g_skillsById[1773] = new Skill("Soldier's Fury",1773,"Nightfall","P","Leadership",
  true,false,false,false,"Echo",5,0,1,5,0,false,0,
  ["For ",[10,35]," seconds, if you are under the effect of a Chant or a Shout, you attack 33% faster."],
  {"attackspeed-buff": true}, [
  ["Duration",10,35] ] );
g_skillsById[2196] = new Skill("Soldier's Speed",2196,"Eye of the North","W","Tactics",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,20]," seconds, you move 25% faster while under the effects of a Chant or Shout."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1698] = new Skill("Soldier's Stance",1698,"Nightfall","W","Tactics",
  true,false,false,false,"Stance",5,0,0,8,0,false,0,
  ["For ",[4,10]," seconds, you attack 33% faster while under the effects of a Shout or Chant."],
  {}, [
  ["Duration",4,10] ] );
g_skillsById[1695] = new Skill("Soldier's Strike",1695,"Nightfall","W","Tactics",
  false,false,false,false,"Melee Attack",5,0,0,4,0,false,0,
  ["If this attack hits, you deal +",[10,40]," more damage. If you are under the effects of a Chant or Shout, this attack cannot be blocked."],
  {"block-counter": true, "damage": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[1567] = new Skill("Song of Concentration",1567,"Nightfall","P","Command",
  false,false,false,false,"Chant",0,8,2,5,0,false,0,
  ["For 10 seconds, the next Skill used by each ally within earshot cannot be interrupted."],
  {"interrupt-counter": true}, [
 ] );
g_skillsById[1560] = new Skill("Song of Power",1560,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",25,0,1,30,0,false,0,
  ["For ",[5,20]," seconds, each ally within earshot gains 4 Energy regeneration until that ally uses a Skill."],
  {"energy-regen": true}, [
  ["Duration",5,20] ] );
g_skillsById[1570] = new Skill("Song of Purification",1570,"Nightfall","P","Motivation",
  true,false,false,false,"Chant",0,5,2,0,0,false,0,
  ["For 20 seconds, the next ",[1,3]," Skills used by each ally within earshot remove 1 Condition from that ally."],
  {"condition-remove": true}, [
  ["Number of skills",1,3] ] );
g_skillsById[1771] = new Skill("Song of Restoration",1771,"Nightfall","P","Motivation",
  true,false,false,false,"Chant",10,0,1,20,0,false,0,
  ["For 10 seconds, the next time each party member within earshot uses a Skill, that party member gains ",[45,110]," Health."],
  {"heal": true}, [
  ["Healing",45,110] ] );
g_skillsById[1266] = new Skill("Soothing",1266,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",25,0,5,60,0,false,0,
  ["Create a level ",[1,8]," Spirit. All foes within its range take twice as long to build adrenaline. This Spirit dies after ",[15,45]," seconds."],
  {"adrenal-counter": true, "spirit": true}, [
  ["Level",1,8],
  ["Duration",15,45] ] );
g_skillsById[56] = new Skill("Soothing Images",56,"Core","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",15,0,2,5,0,false,0,
  ["For ",[8,20]," seconds, target foe and all adjacent foes cannot gain adrenaline."],
  {"adrenal-counter": true}, [
  ["Duration",8,20] ] );
g_skillsById[1233] = new Skill("Soothing Memories",1233,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,0.75,4,0,false,0,
  ["Target ally is healed for ",[10,100]," Health. If you are holding an item, you gain 3 Energy."],
  {"energy-gain": true, "heal": true, "item-uses": true}, [
  ["Healing",10,100] ] );
g_skillsById[100] = new Skill("Soul Barbs",100,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,20,0,false,0,
  ["For 30 seconds, target foe takes ",[15,30]," damage when an enchantment or hex is cast on that target."],
  {"damage": true, "damage-ot": true, "enchant-punish": true, "hex-punish": true}, [
  ["Damage",15,30] ] );
g_skillsById[901] = new Skill("Soul Bind",901,"Factions","N","Curses",
  true,false,false,false,"Hex Spell",10,0,2,5,0,false,0,
  ["For ",[5,20]," seconds, target foe attacks 30% slower than normal. If that foe becomes the target of a hex while attacking, that foe is knocked down."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[96] = new Skill("Soul Feast",96,"Core","N","Death Magic",
  false,false,false,false,"Spell",10,0,1,0,0,false,0,
  ["Exploit nearest corpse to gain ",[50,280]," Health."],
  {"corpse": true, "heal-self": true}, [
  ["Health gain",50,280] ] );
g_skillsById[128] = new Skill("Soul Leech",128,"Prophecies","N","Blood Magic",
  true,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For 10 seconds, whenever target foe casts a spell, you steal up to ",[16,80]," Health from that foe."],
  {"health-steal": true, "spell-counter": true}, [
  ["Life stealing",16,80] ] );
g_skillsById[1240] = new Skill("Soul Twisting",1240,"Factions","Rt","No Attribute",
  true,false,false,false,"Skill",5,0,0,15,0,false,0,
  ["Destroy target allied spirit. The next Binding Ritual you perform casts 66% faster and recharges instantly."],
  {"cast-buff": true, "recharge-buff": true, "spirit-uses": true}, [
 ] );
g_skillsById[2210] = new Skill("Spear Swipe",2210,"Eye of the North","P","Leadership",
  false,false,false,false,"Spear Attack",10,0,0,20,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage and target foe is Dazed for ",[4,10]," seconds. This attack has melee range."],
  {}, [
  ["+ Damage",5,20],
  ["Dazed duration",4,10] ] );
g_skillsById[2099] = new Skill("Spear of Fury (Kurzick)",2099,"Factions","P","Kurzick rank",
  false,false,false,true,"Spear Attack",5,0,1,8,0,false,0,
  ["Deals +",[20,40]," damage. If this attack hits a foe suffering from a Condition, you gain ",[2,4]," strikes of adrenaline."],
  {}, [
 ] );
g_skillsById[1957] = new Skill("Spear of Fury (Luxon)",1957,"Factions","P","Luxon rank",
  false,false,false,true,"Spear Attack",5,0,1,8,0,false,0,
  ["Deals +",[20,40]," damage. If this attack hits a foe suffering from a Condition, you gain ",[2,4]," strikes of adrenaline."],
  {}, [
 ] );
g_skillsById[1130] = new Skill("Spear of Light",1130,"Factions","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,1,15,0,false,0,
  ["Spear of Light flies toward target foe and deals ",[26,56]," holy damage if it hits. Spear of Light deals +",[15,60]," damage if it hits an attacking foe."],
  {"attack-punish": true, "damage": true}, [
  ["Holy damage",26,56],
  ["+ Damage",15,60] ] );
g_skillsById[1551] = new Skill("Spear of Lightning",1551,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0,6,0,false,0,
  ["If this attack hits, it deals +",[8,20]," lightning damage. This attack has 25% armor penetration."],
  {"damage": true}, [
  ["+ Lightning damage",8,20] ] );
g_skillsById[2238] = new Skill("Spear of Redemption",2238,"Eye of the North","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,3,0,0,0,false,0,
  ["If it hits, you deal +",[5,20]," damage, otherwise you lose 1 condition."],
  {}, [
  ["+ Damage",5,20] ] );
g_skillsById[273] = new Skill("Spell Breaker",273,"Core","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",15,0,1,45,0,false,0,
  ["For ",[5,17]," seconds, enemy Spells targeted against target ally fail."],
  {"spell-counter": true}, [
  ["Duration",5,17] ] );
g_skillsById[957] = new Skill("Spell Shield",957,"Factions","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",10,0,2,30,0,false,0,
  ["For ",[5,20]," seconds, while you are casting spells, foes cannot target you with spells. When Spell Shield ends, all your skills are disabled for ",[10,5]," seconds."],
  {"lock-self": true}, [
  ["Duration",5,20],
  ["Disabled duration",10,5] ] );
g_skillsById[461] = new Skill("Spike Trap",461,"Core","R","Wilderness Survival",
  true,false,false,false,"Trap",10,0,2,20,0,false,0,
  ["When Spike Trap is triggered, all nearby foes are struck for ",[10,40]," piercing damage, become Crippled for ",[3,25]," seconds, and are knocked down. Spike Trap ends after 90 seconds. While activating this skill, you are easily interrupted."],
  {"crippled": true, "damage": true, "knockdown": true}, [
  ["Damage",10,40],
  ["Crippled duration",3,25] ] );
g_skillsById[124] = new Skill("Spinal Shivers",124,"Prophecies","N","Curses",
  false,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[10,40]," seconds, whenever target foe is struck for cold damage while using a skill, that foe is interrupted, and you lose ",[10,5]," Energy or Spinal Shivers ends."],
  {"energy-leak": true, "interrupt": true}, [
  ["Duration",10,40],
  ["Energy lost",10,5] ] );
g_skillsById[1114] = new Skill("Spirit Bond",1114,"Factions","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,2,0,false,0,
  ["For 8 seconds, whenever target ally takes more than 60 damage from the next 10 attacks or Spells, that ally is healed for ",[40,100]," Health."],
  {"heal": true}, [
  ["Healing",40,100] ] );
g_skillsById[1226] = new Skill("Spirit Boon Strike",1226,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["Target foe is struck for ",[10,100]," lightning damage, and all Spirits near you gain ",[10,100]," Health."],
  {"damage": true, "heal": true, "heal-aoe": true}, [
  ["Lightning damage",10,100],
  ["Health",10,100] ] );
g_skillsById[919] = new Skill("Spirit Burn",919,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,1,6,0,false,0,
  ["Target foe is struck for ",[5,50]," lightning damage. If any Spirits are within earshot, Spirit Burn causes burning for ",[1,3]," second(s)."],
  {"damage": true, "spirit-uses": true}, [
  ["Lightning damage",5,50],
  ["Burning duration",1,3] ] );
g_skillsById[1231] = new Skill("Spirit Channeling",1231,"Factions","Rt","Spawning Power",
  true,false,false,false,"Enchantment Spell",5,0,1,30,0,false,0,
  ["For 10 seconds, you gain +",[1,6]," Energy regeneration but suffer -5 Health degeneration. When Spirit Channeling ends, you gain 100 Health if you are within earshot of a Spirit."],
  {"energy-regen": true, "heal-self": true, "spirit-uses": true}, [
  ["Energy regeneration",1,6] ] );
g_skillsById[915] = new Skill("Spirit Light",915,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,1,4,0,false,0,
  ["Target ally is healed for ",[60,180],". If any Spirits are within earshot, you don't sacrifice Health."],
  {"heal": true, "sacrifice": true, "spirit-uses": true}, [
  ["Healed",60,180] ] );
g_skillsById[1257] = new Skill("Spirit Light Weapon",1257,"Factions","Rt","Restoration Magic",
  true,false,false,false,"Weapon Spell",5,0,1,5,0,false,0,
  ["For 10 seconds, target ally gains ",[1,15]," Health per second and an additional ",[1,15]," Health per second if that ally is within earshot of a Spirit."],
  {"heal": true, "heal-ot": true, "spirit-uses": true}, [
  ["Health per second",1,15],
  ["Additional Health<br />per second",1,15] ] );
g_skillsById[910] = new Skill("Spirit Rift",910,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",10,0,2,5,0,false,0,
  ["Open a Spirit Rift at target foe's location. After 3 seconds, all adjacent foes are struck for ",[25,135]," lightning damage."],
  {"damage": true, "damage-aoe": true}, [
  ["Lightning damage",25,135] ] );
g_skillsById[66] = new Skill("Spirit Shackles",66,"Core","Me","Inspiration Magic",
  false,false,false,false,"Hex Spell",10,0,3,5,0,false,0,
  ["For ",[5,20]," seconds, target foe loses 5 Energy whenever that foe attacks."],
  {"attack-punish": true, "energy-drain": true}, [
  ["Duration",5,20] ] );
g_skillsById[1228] = new Skill("Spirit Siphon",1228,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,0.25,3,0,false,0,
  ["Target Spirit loses all Energy. You gain ",[15,30],"% of that Energy."],
  {"energy-gain": true, "spirit-uses": true}, [
  ["% Energy",15,30],
  ["Energy Gained",4,9] ] );
g_skillsById[962] = new Skill("Spirit Transfer",962,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",10,0,0.25,5,0,false,0,
  ["The Spirit nearest you loses ",[5,50]," Health. Target ally is healed for 5 for each point of Health lost."],
  {"health-steal": true}, [
  ["Spirit health lost",5,50] ] );
g_skillsById[1040] = new Skill("Spirit Walk",1040,"Factions","A","No Attribute",
  false,false,false,false,"Spell",5,0,0.25,8,0,false,0,
  ["Shadow Step to target spirit."],
  {"shadowstep": true}, [
 ] );
g_skillsById[48] = new Skill("Spirit of Failure",48,"Prophecies","Me","Inspiration Magic",
  false,false,false,false,"Hex Spell",15,0,3,20,0,false,0,
  ["For 30 seconds, target foe has a 25% chance to miss with attacks. You gain ",[1,3]," Energy whenever that foe fails to hit in combat."],
  {"attack-counter": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Energy gain",1,3] ] );
g_skillsById[918] = new Skill("Spirit to Flesh",918,"Factions","Rt","Spawning Power",
  false,false,false,false,"Spell",10,0,0.75,15,0,false,0,
  ["Target touched allied Spirit is destroyed. All nearby allies are healed for ",[30,240],"."],
  {"heal": true, "heal-aoe": true, "spirit-uses": true, "touch": true}, [
  ["Healing",30,240] ] );
g_skillsById[1480] = new Skill("Spirit's Gift",1480,"Nightfall","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For 60 seconds, whenever you create a creature, all allies near that creature gain ",[5,50]," Health and lose 1 Condition."],
  {"condition-remove": true, "heal": true}, [
  ["Health gain",5,50] ] );
g_skillsById[1736] = new Skill("Spirit's Strength",1736,"Nightfall","Rt","Spawning Power",
  true,false,false,false,"Enchantment Spell",5,0,1,30,0,false,0,
  ["For ",[15,60]," seconds, your attacks deal ",[5,35]," more damage while under the effects of a weapon Spell."],
  {"damage": true, "weapon-uses": true}, [
  ["Duration",15,60],
  ["More damage",5,35] ] );
g_skillsById[2203] = new Skill("Spiritleech Aura",2203,"Eye of the North","Rt","Restoration Magic",
  false,false,false,false,"Enchantment Spell",5,0,0.25,20,0,false,0,
  ["For ",[5,50]," seconds, whenever you cast a Spell you steal ",[5,20]," Health from one Spirit within earshot."],
  {}, [
  ["Duration",5,50],
  ["Life stolen",5,20] ] );
g_skillsById[1336] = new Skill("Spiritual Pain",1336,"Nightfall","Me","Domination Magic",
  false,false,false,false,"Spell",10,0,1,30,0,false,0,
  ["Target foe takes ",[15,75]," damage. If that foe is near a spirit, all other nearby foes take ",[15,75]," damage, and this skill recharges instantly if it hits a spirit."],
  {"damage": true, "damage-aoe": true, "spirit-counter": true}, [
  ["Damage on target",15,75],
  ["Damage on nearby foes",15,75] ] );
g_skillsById[121] = new Skill("Spiteful Spirit",121,"Prophecies","N","Curses",
  true,false,false,false,"Hex Spell",15,0,2,10,0,false,0,
  ["For ",[8,20]," seconds, whenever target foe attacks or uses a skill, Spiteful Spirit deals ",[5,35]," shadow damage to that foe and all adjacent allies of that foe."],
  {"damage": true, "damage-aoe": true, "skill-punish": true}, [
  ["Duration",8,20],
  ["Shadow damage",5,35] ] );
g_skillsById[852] = new Skill("Splinter Shot",852,"Factions","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,0,5,0,false,0,
  ["If Splinter Shot hits, you deal +",[3,15]," damage. If Splinter Shot is blocked, all foes adjacent to your target take ",[5,65]," damage."],
  {"block-punish": true, "damage": true}, [
  ["+ Damage",3,15],
  ["Damage to<br />adjacent foes",5,65] ] );
g_skillsById[792] = new Skill("Splinter Weapon",792,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Weapon Spell",5,0,1,5,0,false,0,
  ["For 20 seconds, target ally has a Splinter Weapon. Target ally's next ",[1,5]," attacks deal ",[5,50]," damage to up to 3 adjacent foes."],
  {"damage": true, "damage-aoe": true}, [
  ["Attacks",1,5],
  ["Damage",5,50] ] );
g_skillsById[1066] = new Skill("Spoil Victor",1066,"Factions","N","Blood Magic",
  true,false,false,false,"Hex Spell",10,0,1,10,0,false,0,
  ["For ",[5,20]," seconds, whenever target foe attacks or casts a spell on a creature with less Health, that foe loses ",[25,100]," Health."],
  {"damage": true}, [
  ["Duration",5,20],
  ["Health lost",25,100] ] );
g_skillsById[2064] = new Skill("Spotless Mind",2064,"Eye of the North","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["For ",[1,15]," seconds, target other ally loses a Hex every 5 seconds."],
  {}, [
  ["Duration",1,15] ] );
g_skillsById[2065] = new Skill("Spotless Soul",2065,"Eye of the North","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["For ",[1,15]," seconds, target other ally loses a Condition every 3 seconds."],
  {}, [
  ["Duration",1,15] ] );
g_skillsById[349] = new Skill("Sprint",349,"Core","W","Strength",
  false,false,false,false,"Stance",5,0,0,15,0,false,0,
  ["For ",[8,14]," seconds, you move 25% faster."],
  {"move-buff": true}, [
  ["Duration",8,14] ] );
g_skillsById[360] = new Skill("Staggering Blow",360,"Core","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,6,0,0,0,false,0,
  ["If this hammer blow hits, your target will suffer from Weakness for ",[5,20]," seconds."],
  {"weakness": true}, [
  ["Weakness duration",5,20] ] );
g_skillsById[1498] = new Skill("Staggering Force",1498,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.75,12,0,false,0,
  ["All adjacent foes are struck for ",[20,80]," earth damage. For 30 seconds, your attacks deal earth damage. When this Enchantment ends, all adjacent foes are Weakened for ",[5,15]," seconds."],
  {"damage": true, "damage-aoe": true, "weakness": true}, [
  ["Earth damage",20,80],
  ["Duration",5,15] ] );
g_skillsById[996] = new Skill("Standing Slash",996,"Factions","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,6,0,0,0,false,0,
  ["If it hits, Standing Slash deals +",[5,20]," damage plus an additional ",[5,20]," damage if you are in a Stance."],
  {"damage": true, "stance-uses": true}, [
  ["+ Damage",5,20],
  ["Damage",5,20] ] );
g_skillsById[1095] = new Skill("Star Burst",1095,"Factions","E","Fire Magic",
  true,false,false,false,"Spell",5,0,0.75,10,0,false,0,
  ["Target touched foe and all nearby foes are struck for ",[7,112]," fire damage. If more than one foe was struck, you lose 5 Energy."],
  {"damage": true, "damage-aoe": true, "touch": true}, [
  ["Fire damage",7,112] ] );
g_skillsById[1701] = new Skill("Steady Stance",1701,"Nightfall","W","Tactics",
  true,false,false,false,"Stance",5,0,0,6,0,false,0,
  ["For 10 seconds, the next time you would be knocked down, you gain ",[1,3]," strikes of adrenaline and ",[1,7]," Energy instead."],
  {"adrenal-gain": true, "energy-gain": true}, [
  ["Adrenaline gain",1,3],
  ["Energy gain",1,7] ] );
g_skillsById[846] = new Skill("Steam",846,"Nightfall","E","Water Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["If target foe is on fire, Steam Blinds that foe for ",[5,10]," seconds and strikes for ",[40,100]," cold damage. Otherwise, that foe is struck for ",[25,70]," cold damage."],
  {"blind": true, "burning-punish": true, "damage": true}, [
  ["Blind duration",5,10],
  ["Cold Damage (conditional)",40,100],
  ["Cold Damage (otherwise)",25,70] ] );
g_skillsById[1702] = new Skill("Steelfang Slash",1702,"Nightfall","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,8,0,0,0,false,0,
  ["If this attack hits, you deal +",[1,31]," damage. If you hit a foe that is knocked down, you gain ",[1,5]," adrenaline."],
  {"adrenal-gain": true, "damage": true}, [
  ["+ Damage",1,31],
  ["Adrenaline gain",1,5] ] );
g_skillsById[880] = new Skill("Stolen Speed",880,"Factions","Me","Fast Casting",
  true,false,false,false,"Hex Spell",5,0,1,3,0,false,0,
  ["For ",[5,20]," seconds, target foe's spells take 25% longer to cast and your spells targeting that foe take 25% less time to cast."],
  {"cast-buff": true, "spell-counter": true}, [
  ["Duration",5,20] ] );
g_skillsById[172] = new Skill("Stone Daggers",172,"Core","E","Earth Magic",
  false,false,false,false,"Spell",5,0,1,0,0,false,0,
  ["Send out two Stone Daggers. Each Stone Dagger strikes target foe for ",[8,33]," earth damage if it hits."],
  {"damage": true}, [
  ["Earth damage",8,33] ] );
g_skillsById[1373] = new Skill("Stone Sheath",1373,"Nightfall","E","Earth Magic",
  true,false,false,false,"Hex Spell",5,0,1,15,0,false,0,
  ["For ",[10,35]," seconds, attacks made by target foe and all nearby foes deal earth damage and cannot cause a critical hit."],
  {"critical-counter": true}, [
  ["Duration",10,35] ] );
g_skillsById[1371] = new Skill("Stone Striker",1371,"Nightfall","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",5,0,0.25,20,0,false,0,
  ["For ",[5,30]," seconds, whenever you take or deal elemental or physical damage, that damage is converted to earth damage."],
  {}, [
  ["Duration",5,30] ] );
g_skillsById[1375] = new Skill("Stoneflesh Aura",1375,"Nightfall","E","Earth Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,15,0,false,0,
  ["For ",[5,15]," seconds, damage you receive is reduced by ",[1,31],", and you are immune to critical attacks."],
  {"critical-counter": true, "damage-nerf": true}, [
  ["Duration",5,15],
  ["Damage reduction",1,31] ] );
g_skillsById[1131] = new Skill("Stonesoul Strike",1131,"Factions","Mo","Smiting Prayers",
  false,false,false,false,"Skill",5,0,0.75,8,0,false,0,
  ["Touched target foe takes ",[10,55]," holy damage. If knocked down, your target takes an additional ",[10,55]," holy damage."],
  {"damage": true, "knockdown-punish": true, "touch": true}, [
  ["Holy damage",10,55],
  ["+Holy damage",10,55] ] );
g_skillsById[171] = new Skill("Stoning",171,"Core","E","Earth Magic",
  false,false,false,false,"Spell",15,0,1,5,0,false,0,
  ["Send out a large stone, striking target foe for ",[45,105]," earth damage if it hits. If Stoning hits a foe suffering from Weakness, that foe is knocked down."],
  {"damage": true, "knockdown": true, "weakness-punish": true}, [
  ["Earth damage",45,105] ] );
g_skillsById[455] = new Skill("Storm Chaser",455,"Core","R","Wilderness Survival",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[8,20]," seconds, you move 25% faster, and you gain ",[1,5]," Energy whenever you take elemental damage."],
  {"energy-gain": true, "energy-gain-ot": true, "move-buff": true}, [
  ["Duration",8,20],
  ["Energy gain",1,5] ] );
g_skillsById[1370] = new Skill("Storm Djinn's Haste",1370,"Nightfall","E","Air Magic",
  false,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For ",[10,25]," seconds, you move 25% faster. Each second that you are moving, you lose 1 Energy."],
  {"move-buff": true}, [
  ["Duration",10,25] ] );
g_skillsById[1474] = new Skill("Storm's Embrace",1474,"Nightfall","R","No Attribute",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For 10 seconds, you move 25% faster. This Stance is refreshed whenever you take Elemental damage."],
  {}, [
 ] );
g_skillsById[243] = new Skill("Strength of Honor",243,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,2,0,-1,false,0,
  ["While you maintain this Enchantment, target ally deals ",[3,15]," more damage in melee."],
  {"damage-buff": true}, [
  ["Damage",3,15] ] );
g_skillsById[1468] = new Skill("Strike as One",1468,"Nightfall","R","Beast Mastery",
  true,false,false,false,"Shout",5,0,0,10,0,false,0,
  ["For 30 seconds, you and your pet's next 5 attacks deal ",[4,10]," additional damage."],
  {"damage-buff": true}, [
  ["+ Damage",4,10] ] );
g_skillsById[143] = new Skill("Strip Enchantment",143,"Core","N","Blood Magic",
  false,false,false,false,"Spell",10,0,1,15,0,false,0,
  ["Remove ",[1,2]," enchantments from target foe. If an enchantment is removed, you steal ",[5,65]," Health."],
  {"enchant-remove": true, "heal-self": true}, [
  ["Enchantments removed",1,2],
  ["Life Stealing",5,65] ] );
g_skillsById[1602] = new Skill("Stunning Strike",1602,"Nightfall","P","Spear Mastery",
  true,false,false,false,"Spear Attack",0,10,0,0,0,false,0,
  ["If this attack hits, you deal +",[5,30]," damage. If it hits a foe suffering from a Condition, that foe is also Dazed for ",[4,10]," seconds."],
  {"damage": true, "dazed": true}, [
  ["+ Damage",5,30],
  ["Dazed duration",4,10] ] );
g_skillsById[308] = new Skill("Succor",308,"Prophecies","Mo","No Attribute",
  false,false,false,false,"Enchantment Spell",5,0,1,10,-1,false,0,
  ["While you maintain this Enchantment, target other ally gains +1 Health and +1 Energy regeneration, but you lose 1 Energy each time that ally casts a Spell."],
  {"energy-regen": true, "health-regen": true}, [
 ] );
g_skillsById[108] = new Skill("Suffering",108,"Core","N","Curses",
  false,false,false,false,"Hex Spell",15,0,1,5,0,false,0,
  ["For ",[6,30]," seconds, target foe and all nearby foes suffer -2 Health degeneration."],
  {"health-degen": true}, [
  ["Duration",6,30] ] );
g_skillsById[1996] = new Skill("Sum of All Fears",1996,"Eye of the North","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For ",[5,20]," seconds, target foe moves, attacks, and casts Spells 20% slower."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[2226] = new Skill("Summon Ice Imp",2226,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",10,0,3,60,0,false,0,
  ["Summon a level ",[10,20]," Ice Imp that lives for ",[30,60]," seconds and has Ice Spikes. Only 1 Asura Summon can be active a time."],
  {}, [
  ["Ice Imp level",10,20],
  ["Duration",30,60] ] );
g_skillsById[2224] = new Skill("Summon Mursaat",2224,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",10,0,3,60,0,false,0,
  ["Summon a level ",[10,20]," Mursaat that lives for ",[30,60]," seconds and has Enervating Charge. Only 1 Asura Summon can be active at a time."],
  {}, [
  ["Mursaat level",10,20],
  ["Duration",30,60] ] );
g_skillsById[2227] = new Skill("Summon Naga Shaman",2227,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",10,0,3,60,0,false,0,
  ["Summon a level ",[10,20]," Naga Shaman that lives for ",[30,60]," seconds and has Stoning. Only 1 Asura Summon can be active a time."],
  {}, [
  ["Naga Shaman level",10,20],
  ["Duration",30,60] ] );
g_skillsById[2225] = new Skill("Summon Ruby Djinn",2225,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",10,0,3,60,0,false,0,
  ["Summon a level ",[10,20]," Ruby Djinn that lives for ",[30,60]," seconds and has Immolate. Only 1 Asura Summon can be active at a time."],
  {}, [
  ["Ruby Djinn level",10,20],
  ["Duration",30,60] ] );
g_skillsById[2100] = new Skill("Summon Spirits (Kurzick)",2100,"Factions","Rt","Kurzick rank",
  false,false,false,true,"Spell",5,0,0.25,10,0,false,0,
  ["All Spirits you control shadow step to your location, and gain ",[40,100]," Health."],
  {}, [
 ] );
g_skillsById[2051] = new Skill("Summon Spirits (Luxon)",2051,"Factions","Rt","Luxon rank",
  false,false,false,true,"Spell",5,0,0.25,10,0,false,0,
  ["All Spirits you control shadow step to your location, and gain ",[40,100]," Health."],
  {}, [
 ] );
g_skillsById[851] = new Skill("Sun and Moon Slash",851,"Factions","W","Swordsmanship",
  false,false,false,false,"Sword Attack",0,8,0,0,0,false,0,
  ["Attack target foe twice. These attacks cannot be blocked."],
  {}, [
 ] );
g_skillsById[1191] = new Skill("Sundering Attack",1191,"Factions","R","Marksmanship",
  false,false,false,false,"Bow Attack",10,0,1,4,0,false,0,
  ["If Sundering Attack hits, you strike for +",[3,10]," damage and this attack has 10% armor penetration."],
  {"damage": true}, [
  ["+ Damage",3,10] ] );
g_skillsById[2148] = new Skill("Sundering Weapon",2148,"Eye of the North","Rt","Communing",
  false,false,false,false,"Weapon Spell",5,0,1,10,0,false,0,
  ["For ",[4,10]," seconds, target ally's next 3 attacks have 10% armor penetration and cause Cracked Armor for ",[5,20]," seconds."],
  {}, [
  ["Duration",4,10],
  ["Cracked Armor duration",5,20] ] );
g_skillsById[1816] = new Skill("Sunspear Rebirth Signet",1816,"Nightfall",null,"Sunspear rank",
  false,false,false,true,"Signet",0,0,3,0,0,false,0,
  ["Resurrect target dead party member at your location with full Health and 10% Energy for each Sunspear rank you have attained. This signet can only be used once per mission unless recharged by a morale boost."],
  {}, [
 ] );
g_skillsById[1391] = new Skill("Supportive Spirit",1391,"Nightfall","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.75,8,0,false,0,
  ["For ",[5,23]," seconds, whenever target ally takes damage while knocked down, that ally is healed for ",[5,35]," Health."],
  {"heal-buff": true}, [
  ["Duration",5,23],
  ["Healing",5,35] ] );
g_skillsById[1653] = new Skill("Swap",1653,"Nightfall","A","No Attribute",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["You and target summoned creature Shadow Step to each other's location."],
  {"shadowstep": true}, [
 ] );
g_skillsById[341] = new Skill("Swift Chop",341,"Core","W","Axe Mastery",
  false,false,false,false,"Axe Attack",5,0,0,4,0,false,0,
  ["If this attack hits, you strike for +",[1,20]," damage. If Swift Chop is blocked, your target suffers a Deep Wound for 20 seconds and takes an additional ",[1,20]," damage."],
  {"block-punish": true, "damage": true, "deepwound": true}, [
  ["+ Damage",1,20],
  ["Damage",1,20] ] );
g_skillsById[1784] = new Skill("Swift Javelin",1784,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0,10,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If you are under the effects of an Enchantment, this spear flies twice as fast and cannot be blocked."],
  {"block-counter": true, "damage": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[233] = new Skill("Swirling Aura",233,"Prophecies","E","Water Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,45,0,false,0,
  ["For ",[8,20]," seconds, Swirling Aura has a 50% chance to block projectile attacks."],
  {"block": true}, [
  ["Duration",8,20] ] );
g_skillsById[468] = new Skill("Symbiosis",468,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For each Enchantment on a non-Spirit creature within range, that creature has +",[27,150]," maximum Health. This Spirit dies after ",[30,150]," seconds."],
  {"health-buff": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["+ Max health",27,150],
  ["Spirit duration",30,150] ] );
g_skillsById[423] = new Skill("Symbiotic Bond",423,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Shout",10,0,0,55,0,false,0,
  ["For ",[120,300]," seconds, your animal companion gains ",[1,3]," Health regeneration, and half of all damage dealt to your animal companion is redirected to you."],
  {"health-regen": true}, [
  ["Duration",120,300],
  ["Health regeneration",1,3] ] );
g_skillsById[247] = new Skill("Symbol of Wrath",247,"Prophecies","Mo","Smiting Prayers",
  false,false,false,false,"Spell",5,0,2,30,0,false,0,
  ["For 5 seconds, foes adjacent to the location in which the spell was cast take ",[8,32]," holy damage each second."],
  {"damage": true, "damage-aoe": true}, [
  ["Holy damage",8,32] ] );
g_skillsById[1340] = new Skill("Symbolic Celerity",1340,"Nightfall","Me","Fast Casting",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, all of your signets activate ",[25,50],"% faster."],
  {"signet-buff": true}, [
  ["Duration",5,20],
  ["Faster Activation %",25,50] ] );
g_skillsById[1658] = new Skill("Symbolic Posture",1658,"Nightfall","Me","Fast Casting",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[5,20]," seconds, the next signet you activate recharges ",[20,80],"% faster."],
  {"recharge-buff": true}, [
  ["Duration",5,20],
  ["Faster recharge %",20,80] ] );
g_skillsById[2195] = new Skill("Symbolic Strike",2195,"Eye of the North","W","No Attribute",
  false,false,false,false,"Melee Attack",0,4,0,0,0,false,0,
  ["If this attack hits, you deal +10 damage for each Signet you have equipped (maximum 70 damage)."],
  {}, [
 ] );
g_skillsById[1339] = new Skill("Symbols of Inspiration",1339,"Nightfall","Me","Fast Casting",
  true,false,false,false,"Enchantment Spell",10,0,1,30,0,false,0,
  ["For ",[5,15]," seconds, whenever you use a signet, you gain ",[1,10]," Energy."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",5,15],
  ["Energy gain",1,10] ] );
g_skillsById[34] = new Skill("Sympathetic Visage",34,"Prophecies","Me","Illusion Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[4,10]," seconds, whenever target ally is hit by a melee attack, all adjacent foes lose all adrenaline and 3 Energy."],
  {"adrenal-drain": true, "adrenal-drain-aoe": true, "energy-drain": true, "energy-drain-aoe": true}, [
  ["Duration",4,10] ] );
g_skillsById[113] = new Skill("Tainted Flesh",113,"Core","N","Death Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,0,0,false,0,
  ["For ",[20,44]," seconds, target ally is immune to disease, and anyone striking that ally in melee becomes Diseased for ",[3,15]," seconds."],
  {"disease": true}, [
  ["Duration",20,44],
  ["Disease duration",3,15] ] );
g_skillsById[152] = new Skill("Taste of Death",152,"Core","N","Death Magic",
  false,false,false,false,"Spell",5,0,0.25,0,0,false,0,
  ["Steal up to ",[100,400]," Health from target animated undead ally."],
  {"heal-self": true, "minion-uses": true}, [
  ["Life stealing",100,400] ] );
g_skillsById[1069] = new Skill("Taste of Pain",1069,"Factions","N","Death Magic",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["If target foe is below 50% Health, you gain ",[30,150]," Health."],
  {"heal-self": true}, [
  ["Health Gain",30,150] ] );
g_skillsById[1342] = new Skill("Tease",1342,"Nightfall","Me","Inspiration Magic",
  true,false,false,false,"Hex Spell",5,0,0.75,15,0,false,0,
  ["For 20 seconds, Skills used by target touched foe take ",[20,100],"% longer to recharge. This Skill ends if that foe hits you."],
  {"recharge-nerf": true, "touch": true}, [
  ["Longer recharge<br />of Skills %",20,100] ] );
g_skillsById[2413] = new Skill("Technobabble",2413,"Eye of the North",null,"Asura rank",
  false,false,false,true,"Spell",15,0,1,18,0,false,0,
  ["Target foe and all adjacent foes are struck for ",[30,40]," damage. If target foe is not a boss, that foe and all adjacent foes are Dazed for ",[2,6]," seconds."],
  {}, [
  ["Damage",30,40],
  ["Dazed duration",2,6] ] );
g_skillsById[1099] = new Skill("Teinai's Crystals",1099,"Factions","E","Earth Magic",
  false,false,false,false,"Spell",15,0,0.75,20,0,false,0,
  ["Foes adjacent to you are struck for ",[10,100]," damage but are cured of any negative Conditions."],
  {"condition-remove-foe": true, "damage": true, "damage-aoe": true}, [
  ["Damage",10,100] ] );
g_skillsById[1093] = new Skill("Teinai's Heat",1093,"Factions","E","Fire Magic",
  false,false,false,false,"Spell",15,0,2,30,0,false,0,
  ["Create Teinai's Heat at target foe's location. For 5 seconds, foes near this location are struck for ",[10,40]," fire damage each second. When Teinai's Heat ends, foes in the area of effect are set on fire for 3 seconds."],
  {"burning": true, "damage": true, "damage-aoe": true}, [
  ["Fire damage",10,40] ] );
g_skillsById[1097] = new Skill("Teinai's Prison",1097,"Factions","E","Water Magic",
  false,false,false,false,"Hex Spell",10,0,2,30,0,false,0,
  ["For ",[8,20]," seconds, target foe's legs are encased in ice causing the foe to move 66% slower. This effect ends if target takes fire damage."],
  {"move-nerf": true}, [
  ["Duration",8,20] ] );
g_skillsById[1081] = new Skill("Teinai's Wind",1081,"Factions","E","Air Magic",
  false,false,false,false,"Spell",5,0,0.75,8,0,false,0,
  ["All adjacent foes take ",[15,60]," cold damage. Attacking foes struck by Teinai's Wind are knocked down."],
  {"damage": true, "knockdown": true}, [
  ["Cold damage",15,60] ] );
g_skillsById[988] = new Skill("Temple Strike",988,"Factions","A","Dagger Mastery",
  true,false,false,false,"Off-Hand Attack",15,0,0,20,0,false,0,
  ["Must follow a lead attack. If this attack hits, target foe is Dazed and Blinded for ",[1,10]," seconds, and if target foe is casting a Spell, that foe is interrupted."],
  {"blind": true, "dazed": true, "interrupt": true}, [
  ["Dazed & Blind duration",1,10] ] );
g_skillsById[1545] = new Skill("Test of Faith",1545,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Spell",10,0,0.75,15,0,false,0,
  ["Target touched foe and all nearby foes are struck for ",[15,65]," cold damage. Affected foes below 50% Health lose all Enchantments."],
  {"damage": true, "enchant-remove": true, "touch": true}, [
  ["Cold damage",15,65] ] );
g_skillsById[324] = new Skill("Thrill of Victory",324,"Core","W","Tactics",
  false,false,false,false,"Melee Attack",5,0,0,8,0,false,0,
  ["If this blow hits, and you have more Health than target foe you strike for +",[15,45]," damage."],
  {"damage": true}, [
  ["+ Damage",15,45] ] );
g_skillsById[424] = new Skill("Throw Dirt",424,"Core","R","Expertise",
  false,false,false,false,"Skill",5,0,1,30,0,false,0,
  ["Target touched foe and foes adjacent to your target become Blinded for ",[3,15]," seconds."],
  {"blind": true, "touch": true}, [
  ["Blind duration",3,15] ] );
g_skillsById[228] = new Skill("Thunderclap",228,"Prophecies","E","Air Magic",
  true,false,false,false,"Hex Spell",10,0,2,15,0,false,0,
  ["For ",[8,20]," seconds, if target foe is struck for lightning damage, that foe and adjacent foes are knocked down, and you lose ",[15,7]," Energy or Thunderclap ends."],
  {"energy-leak": true, "knockdown": true}, [
  ["Duration",8,20],
  ["Energy lost",15,7] ] );
g_skillsById[995] = new Skill("Tiger Stance",995,"Factions","W","Strength",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[4,10]," seconds, you attack 33% faster. Tiger Stance ends if any of your attacks fail to hit."],
  {}, [
  ["Duration",4,10] ] );
g_skillsById[454] = new Skill("Tiger's Fury",454,"Prophecies","R","Beast Mastery",
  false,false,false,false,"Stance",10,0,0,10,0,false,0,
  ["All your non-attack skills are disabled for 5 seconds. For ",[5,11]," seconds, you attack 25% faster."],
  {"attackspeed-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[2389] = new Skill("Totem of Man",2389,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Skill",0,0,0,30,0,false,0,
  ["You lose all Energy. Your aspect returns to normal."],
  {}, [
 ] );
g_skillsById[158] = new Skill("Touch of Agony",158,"Prophecies","N","Blood Magic",
  false,false,false,false,"Skill",1,0,0.75,3,0,false,0,
  ["Target touched foe takes ",[20,58]," shadow damage."],
  {"damage": true, "sacrifice": true, "touch": true}, [
  ["Shadow damage",20,58] ] );
g_skillsById[1659] = new Skill("Toxic Chill",1659,"Nightfall","N","Death Magic",
  true,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Target foe is struck for ",[15,75]," cold damage. If that foe is under the effects of a hex or enchantment, that foe becomes Poisoned for ",[10,25]," seconds."],
  {"damage": true, "poison": true}, [
  ["Cold damage",15,75],
  ["Poison duration",10,25] ] );
g_skillsById[1472] = new Skill("Toxicity",1472,"Nightfall","R","Beast Mastery",
  false,false,false,false,"Nature Ritual",15,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Poisoned or Diseased creatures within its range suffer -2 Health degeneration. This Spirit dies after ",[30,90]," seconds."],
  {"health-degen": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Spirit duration",30,90] ] );
g_skillsById[2135] = new Skill("Trampling Ox",2135,"Eye of the North","A","Dagger Mastery",
  false,false,false,false,"Dual Attack",5,0,0,8,0,false,0,
  ["Must follow an off-hand attack. If it hits, you deal +",[5,20]," damage. If you hit a Crippled foe, that foe is knocked down."],
  {}, [
  ["+ Damage",5,20] ] );
g_skillsById[913] = new Skill("Tranquil Was Tanasen",913,"Factions","Rt","Restoration Magic",
  true,false,false,false,"Item Spell",10,0,1,20,0,false,0,
  ["Hold Tanasen's ashes for up to ",[5,20]," seconds. While you hold his ashes, you have +",[10,25]," armor and cannot be interrupted."],
  {"armor-buff": true, "interrupt-counter": true}, [
  ["Duration",5,20],
  ["+ Armor",10,25] ] );
g_skillsById[1213] = new Skill("Tranquility",1213,"Factions","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",15,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Enchantments cast by non-Spirit creatures within its range expire ",[20,50],"% faster. This Spirit dies after ",[15,60]," seconds."],
  {"enchant-counter": true, "spirit": true}, [
  ["Spirit level",1,10],
  ["Expiration rate (%)",20,50],
  ["Spirit duration",15,60] ] );
g_skillsById[946] = new Skill("Trapper's Focus",946,"Factions","R","Expertise",
  true,false,false,false,"Preparation",5,0,2,20,0,false,0,
  ["For ",[5,20]," seconds, your trap skills are not easily interruptible."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1475] = new Skill("Trapper's Speed",1475,"Nightfall","R","Expertise",
  false,false,false,false,"Stance",5,0,0,20,0,false,0,
  ["For ",[5,30]," seconds, your Traps recharge 25% faster and activate 25% faster. This Stance ends if you successfully hit with an attack."],
  {}, [
  ["Duration",5,30] ] );
g_skillsById[992] = new Skill("Triple Chop",992,"Factions","W","Axe Mastery",
  true,false,false,false,"Axe Attack",5,0,0,10,0,false,0,
  ["Attack target foe and adjacent foes. Each attack that hits deals +",[10,40]," damage."],
  {"damage": true}, [
  ["+ Damage",10,40] ] );
g_skillsById[2096] = new Skill("Triple Shot (Kurzick)",2096,"Factions","R","Kurzick rank",
  false,false,false,true,"Bow Attack",10,0,0,10,0,false,0,
  ["Shoot 3 arrows simultaneously at target foe. These arrows deal ",[48,25],"% less damage."],
  {}, [
 ] );
g_skillsById[1953] = new Skill("Triple Shot (Luxon)",1953,"Factions","R","Luxon rank",
  false,false,false,true,"Bow Attack",10,0,0,10,0,false,0,
  ["Shoot 3 arrows simultaneously at target foe. These arrows deal ",[48,25],"% less damage."],
  {}, [
 ] );
g_skillsById[1476] = new Skill("Tripwire",1476,"Nightfall","R","Wilderness Survival",
  false,false,false,false,"Trap",10,0,2,30,0,false,0,
  ["When Tripwire is triggered, all nearby foes are struck for ",[5,20]," piercing damage. Any Crippled foes are knocked down. Tripwire ends after 90 seconds. While activating this Skill, you are easily interrupted."],
  {"damage": true}, [
  ["Piercing damage",5,20] ] );
g_skillsById[446] = new Skill("Troll Unguent",446,"Core","R","Wilderness Survival",
  false,false,false,false,"Skill",5,0,3,10,0,false,0,
  ["For 13 seconds, you gain +",[3,10]," Health regeneration."],
  {"heal-self": true, "health-regen": true}, [
  ["Health regeneration",3,10] ] );
g_skillsById[2230] = new Skill("Tryptophan Signet",2230,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Signet",0,0,1,15,0,false,0,
  ["For ",[10,20]," seconds, target touched foe and all adjacent foes move and attack ",[10,40],"% slower."],
  {}, [
  ["Duration",10,20],
  ["Speed reduction %",10,40] ] );
g_skillsById[1487] = new Skill("Twin Moon Sweep",1487,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,6,0,false,0,
  ["You lose one Enchantment. If an Enchantment is lost in this way, you strike twice and gain ",[20,50]," Health."],
  {"heal-self": true}, [
  ["Healing",20,50] ] );
g_skillsById[776] = new Skill("Twisting Fangs",776,"Factions","A","Critical Strikes",
  false,false,false,false,"Dual Attack",10,0,0,15,0,false,0,
  ["Must follow an off-hand attack. If it hits, Twisting Fangs strikes for +",[10,20]," damage and struck foe suffers from Bleeding and Deep Wound for ",[5,20]," seconds."],
  {"bleeding": true, "damage": true, "deepwound": true}, [
  ["+ Damage",10,20],
  ["Bleeding & Deep Wound duration",5,20] ] );
g_skillsById[1358] = new Skill("Ulcerous Lungs",1358,"Nightfall","N","Curses",
  false,false,false,false,"Hex Spell",15,0,2,10,0,false,0,
  ["For ",[10,25]," seconds, target foe and all nearby foes suffer from -4 Health degeneration when Bleeding, and whenever they use a shout or chant, they Bleed for ",[3,15]," seconds"],
  {"bleeding": true, "health-degen": true}, [
  ["Duration",10,25],
  ["Bleeding duration",3,15] ] );
g_skillsById[1550] = new Skill("Unblockable Throw",1550,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,7,3,0,0,false,0,
  ["If this attack hits, you deal +",[10,40]," damage. This attack cannot be blocked."],
  {"block-counter": true, "damage": true}, [
  ["+Damage",10,40] ] );
g_skillsById[110] = new Skill("Unholy Feast",110,"Core","N","Blood Magic",
  false,false,false,false,"Spell",15,0,0.75,12,0,false,0,
  ["Steal up to ",[10,65]," Health from up to ",[1,4]," foes in the area."],
  {"health-steal": true}, [
  ["Life stealing",10,65],
  ["Affected foes",1,4] ] );
g_skillsById[911] = new Skill("Union",911,"Factions","Rt","Communing",
  false,false,false,false,"Binding Ritual",15,0,3,45,0,false,0,
  ["Create a level ",[1,8]," Spirit. Whenever a non-Spirit ally in its range takes damage, that damage is reduced by 15 and the Spirit takes 15 damage. This Spirit dies after ",[30,60]," seconds."],
  {"damage-nerf": true, "spirit": true}, [
  ["Level",1,8],
  ["Duration",30,60] ] );
g_skillsById[934] = new Skill("Unnatural Signet",934,"Factions","Me","Domination Magic",
  false,false,false,false,"Signet",0,0,1,40,0,false,0,
  ["Target foe takes ",[15,75]," damage. If that foe was a summoned creature, this signet does double damage and recharges instantly."],
  {"damage": true, "spirit-counter": true}, [
  ["Damage<sup>1</sup>",15,75,2],
  ["Damage",15,75] ] );
g_skillsById[1041] = new Skill("Unseen Fury",1041,"Factions","A","Shadow Arts",
  false,false,false,false,"Stance",5,0,0,45,0,false,0,
  ["For ",[15,60]," seconds, you cannot be blocked by Blinded foes."],
  {"blind-punish": true, "block-counter": true}, [
  ["Duration",15,60] ] );
g_skillsById[1083] = new Skill("Unsteady Ground",1083,"Factions","E","Earth Magic",
  true,false,false,false,"Spell",10,0,2,20,0,false,0,
  ["You create Unsteady Ground at target foe's location. For 5 seconds, nearby foes take ",[10,40]," earth damage each second. Attacking foes struck by Unsteady Ground are knocked down."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Earth damage",10,40] ] );
g_skillsById[783] = new Skill("Unsuspecting Strike",783,"Factions","A","Critical Strikes",
  false,false,false,false,"Lead Attack",10,0,0,2,0,false,0,
  ["If this attack hits, you strike for +",[19,31]," damage. If your target was above 90% Health you deal an additional ",[15,75]," damage."],
  {"damage": true}, [
  ["+ Damage",19,31],
  ["+ Damage >90% health",15,75] ] );
g_skillsById[268] = new Skill("Unyielding Aura",268,"Prophecies","Mo","Divine Favor",
  true,false,false,false,"Enchantment Spell",5,0,3,15,-1,false,4,
  ["Bring target dead party member back to life at full Health and full Energy. If you stop maintaining this Enchantment or if this Enchantment is removed, that party member dies and leaves an exploited corpse. Deaths while enchanted with Unyielding Aura do not incur a death penalty. (50% failure chance with Divine Favor 4 or less.)"],
  {"rez-temp": true}, [
 ] );
g_skillsById[2374] = new Skill("Ursan Blessing",2374,"Eye of the North",null,"Norn rank",
  true,false,false,true,"Skill",10,0,0,30,0,false,0,
  ["You take on the aspect of the bear. Your Energy returns to maximum and you have -2 Energy degeneration. You have +",[10,20]," armor and +",[100,200]," maximum Health. All Enchantments upon you are removed. Bear attacks replace your skills. You gain Energy every time you take or deal damage. This skill ends when your Energy drops to 0."],
  {}, [
  ["+ armor",10,20],
  ["+ maximum Health",100,200] ] );
g_skillsById[1986] = new Skill("Vampiric Assault",1986,"Eye of the North","A","Deadly Arts",
  false,false,false,false,"Dual Attack",5,0,0,8,0,false,0,
  ["Must follow an off-hand attack. If this attack hits, you steal ",[10,40]," Health."],
  {}, [
  ["Life stealing",10,40] ] );
g_skillsById[1077] = new Skill("Vampiric Bite",1077,"Factions","N","Blood Magic",
  false,false,false,false,"Skill",15,0,0.75,2,0,false,0,
  ["Touch target foe to steal up to ",[29,74]," Health."],
  {"health-steal": true, "touch": true}, [
  ["Life stealing",29,74] ] );
g_skillsById[153] = new Skill("Vampiric Gaze",153,"Core","N","Blood Magic",
  false,false,false,false,"Spell",10,0,1,5,0,false,0,
  ["Steal up to ",[18,60]," Health from target foe."],
  {"health-steal": true}, [
  ["Life stealing",18,60] ] );
g_skillsById[819] = new Skill("Vampiric Spirit",819,"Factions","N","Blood Magic",
  true,false,false,false,"Enchantment Spell",5,0,1,5,0,false,0,
  ["For ",[5,20]," seconds, your spells cost 3 more Energy, but whenever you cast a spell you steal up to ",[5,50]," Health from one nearby foe."],
  {"health-steal": true}, [
  ["Duration",5,20],
  ["Life stealing",5,50] ] );
g_skillsById[1075] = new Skill("Vampiric Swarm",1075,"Factions","N","Blood Magic",
  false,false,false,false,"Spell",15,0,2,8,0,false,0,
  ["Vampiric Swarm flies out slowly and steals up to ",[15,60]," Health from up to three foes in the area."],
  {"health-steal": true}, [
  ["Life stealing",15,60] ] );
g_skillsById[156] = new Skill("Vampiric Touch",156,"Prophecies","N","Blood Magic",
  false,false,false,false,"Skill",15,0,0.75,2,0,false,0,
  ["Touch target foe to steal up to ",[29,74]," Health."],
  {"health-steal": true, "touch": true}, [
  ["Life stealing",29,74] ] );
g_skillsById[2110] = new Skill("Vampirism",2110,"Nightfall","Rt","Sunspear rank",
  false,false,false,true,"Binding Ritual",10,0,3,30,0,false,0,
  ["Create a level ",[1,10]," Spirit that dies after ",[30,150]," seconds. Attacks by this Spirit steal up to ",[10,20]," Health, and you are healed for ",[10,20]," Health."],
  {}, [
 ] );
g_skillsById[866] = new Skill("Vapor Blade",866,"Factions","E","Water Magic",
  false,false,false,false,"Spell",15,0,2,7,0,false,0,
  ["Target foe is struck for ",[15,135]," cold damage. Vapor Blade deals half damage if that foe has any Enchantments on them."],
  {"damage": true}, [
  ["Cold Damage",15,135] ] );
g_skillsById[1757] = new Skill("Veil of Thorns",1757,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, whenever you are hit by an attack, your attacker is Crippled for ",[5,15]," seconds."],
  {"crippled": true}, [
  ["Duration",5,20],
  ["Crippled Duration",5,15] ] );
g_skillsById[315] = new Skill("Vengeance",315,"Prophecies","Mo","No Attribute",
  false,false,false,false,"Enchantment Spell",10,0,4,30,0,false,0,
  ["Bring target dead party member back to life at full Health and full Energy. For 30 seconds, that party member deals 25% more damage. When this Enchantment ends, target party member dies. Deaths while under the effects of this Enchantment do not incur a death penalty."],
  {"rez-temp": true}, [
 ] );
g_skillsById[790] = new Skill("Vengeful Was Khanhei",790,"Factions","Rt","Restoration Magic",
  true,false,false,false,"Item Spell",5,0,0.75,20,0,false,0,
  ["Hold Khanhei's ashes for ",[5,11]," seconds. Whenever a foe strikes you in combat while you are holding Khanhei's ashes, you steal ",[5,35]," Health from that foe."],
  {"health-steal": true}, [
  ["Duration",5,11],
  ["Life stolen",5,35] ] );
g_skillsById[964] = new Skill("Vengeful Weapon",964,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Weapon Spell",5,0,0.25,3,0,false,0,
  ["For 8 seconds, the next time target ally takes damage from a foe, that ally steals up to ",[15,60]," Health from that foe."],
  {"health-steal": true}, [
  ["Health Steal",15,60] ] );
g_skillsById[88] = new Skill("Verata's Aura",88,"Prophecies","N","Death Magic",
  false,false,false,false,"Enchantment Spell",15,0,0.75,30,0,false,4,
  ["All hostile animated undead in the area become bound to you. Verata's Aura ends after ",[120,300]," seconds. When Verata's Aura ends, you lose your bond with any undead bound to you. (50% failure chance with Death Magic 4 or less.)"],
  {"minion": true, "sacrifice": true}, [
  ["Duration",120,300] ] );
g_skillsById[87] = new Skill("Verata's Gaze",87,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",5,0,1,5,0,false,4,
  ["If target hostile animated undead has a master, its bond to its master is broken, making it hostile to all other creatures. If it had no master, you become its master. (50% failure chance with Death Magic 4 or less.)"],
  {"minion": true}, [
 ] );
g_skillsById[90] = new Skill("Verata's Sacrifice",90,"Prophecies","N","Death Magic",
  false,false,false,false,"Spell",10,0,2,60,0,false,0,
  ["For ",[5,10]," seconds, your undead allies gain +10 Health regeneration. All conditions are removed from those allies and transferred to you. If this spell is successful and you have control of 3 or fewer minions, Verata's Sacrifice instantly recharges."],
  {"minion": true, "sacrifice": true}, [
  ["Duration",5,10] ] );
g_skillsById[1601] = new Skill("Vicious Attack",1601,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",5,0,0,8,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage. If you land a critical hit with this attack, target foe suffers from a Deep Wound for ",[5,15]," seconds."],
  {"damage": true, "deepwound": true}, [
  ["+ Damage",5,20],
  ["Deep Wound duration",5,15] ] );
g_skillsById[1488] = new Skill("Victorious Sweep",1488,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Melee Attack",5,0,0,4,0,false,0,
  ["If this attack hits, you deal +",[1,31]," damage. If the target foe has less Health than you, you gain ",[30,80]," Health."],
  {"damage": true, "heal-self": true}, [
  ["+Damage",1,31],
  ["Healing",30,80] ] );
g_skillsById[254] = new Skill("Vigorous Spirit",254,"Prophecies","Mo","Healing Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,4,0,false,0,
  ["For 30 seconds, each time target ally attacks or casts a Spell, that ally is healed for ",[5,20]," Health."],
  {"heal-buff": true}, [
  ["Healing",5,20] ] );
g_skillsById[828] = new Skill("Vile Miasma",828,"Factions","N","Death Magic",
  false,false,false,false,"Hex Spell",10,0,1,15,0,false,0,
  ["Target foe is struck for ",[10,65]," cold damage. If suffering from a condition, that foe is hexed with Vile Miasma and suffers -",[1,4]," Health degeneration for 10 seconds."],
  {"damage": true, "health-degen": true}, [
  ["Cold damage",10,65],
  ["Health degeneration",1,4] ] );
g_skillsById[155] = new Skill("Vile Touch",155,"Core","N","Death Magic",
  false,false,false,false,"Skill",10,0,0.75,2,0,false,0,
  ["Touch target foe to deal ",[20,65]," damage."],
  {"damage": true, "touch": true}, [
  ["Damage",20,65] ] );
g_skillsById[769] = new Skill("Viper's Defense",769,"Factions","A","Shadow Arts",
  false,false,false,false,"Spell",5,0,0.25,10,0,false,0,
  ["All adjacent foes are Poisoned for ",[5,20]," seconds, you Shadow Step to a nearby random location."],
  {"poison": true, "shadowstep": true}, [
  ["Poisoned",5,20] ] );
g_skillsById[1211] = new Skill("Viper's Nest",1211,"Factions","R","Beast Mastery",
  false,false,false,false,"Trap",10,0,2,20,0,false,0,
  ["Create a Viper's Nest. When it is triggered, all nearby foes are struck for ",[5,35]," piercing damage and become Poisoned for ",[5,20]," seconds. Viper's Nest expires after 90 seconds. This Trap is easily interrupted."],
  {"damage": true, "poison": true}, [
  ["Piercing damage",5,35],
  ["Poison duration",5,20] ] );
g_skillsById[107] = new Skill("Virulence",107,"Prophecies","N","Death Magic",
  true,false,false,false,"Spell",5,0,1,15,0,false,0,
  ["If target foe was already suffering from a condition, that foe suffers from Disease, Poison, and Weakness for ",[3,15]," seconds."],
  {"condition-punish": true, "disease": true, "poison": true, "weakness": true}, [
  ["Conditions duration",3,15] ] );
g_skillsById[878] = new Skill("Visions of Regret",878,"Nightfall","Me","Domination Magic",
  true,false,false,false,"Hex Spell",10,0,2,20,0,false,0,
  ["For ",[5,20]," seconds, target foe takes ",[30,120]," damage whenever that foe uses an adrenal skill."],
  {"adrenal-counter": true, "damage": true, "damage-ot": true}, [
  ["Duration",5,20],
  ["Damage",30,120] ] );
g_skillsById[289] = new Skill("Vital Blessing",289,"Prophecies","Mo","Protection Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.75,2,-1,false,0,
  ["While you maintain this Enchantment, target ally has +",[40,200]," maximum Health."],
  {"health-buff": true}, [
  ["Max Health",40,200] ] );
g_skillsById[1506] = new Skill("Vital Boon",1506,"Nightfall","D","Earth Prayers",
  false,false,false,false,"Enchantment Spell",5,0,1,8,0,false,0,
  ["For 20 seconds, you have +",[40,100]," maximum Health. When this Enchantment ends, you are healed for ",[75,200]," Health."],
  {"heal-self": true, "health-buff": true}, [
  ["+Maximum Health",40,100],
  ["Healing",75,200] ] );
g_skillsById[1267] = new Skill("Vital Weapon",1267,"Factions","Rt","Communing",
  false,false,false,false,"Weapon Spell",5,0,1,2,0,false,0,
  ["For ",[5,35]," seconds, target ally has a Vital Weapon and has +",[40,175]," maximum Health."],
  {"health-buff": true}, [
  ["Duration",5,35],
  ["+Max Health",40,175] ] );
g_skillsById[883] = new Skill("Vocal Minority",883,"Nightfall","N","Curses",
  false,false,false,false,"Hex Spell",10,0,1,20,0,false,0,
  ["For ",[5,20]," seconds, target foe and all nearby foes cannot use shouts or chants."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[1731] = new Skill("Vocal Was Sogolon",1731,"Nightfall","Rt","Restoration Magic",
  false,false,false,false,"Item Spell",10,0,1,30,0,false,0,
  ["For 60 seconds, all Shouts and Chants you use last ",[20,50],"% longer."],
  {"shout-buff": true}, [
  ["% Longer",20,50] ] );
g_skillsById[2132] = new Skill("Volfen Agility",2132,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Enchantment Spell",0,0,0.25,30,0,false,0,
  ["For ",[10,20]," seconds your Volfen Skills recharge 66% faster."],
  {}, [
  ["Duration",10,20] ] );
g_skillsById[2379] = new Skill("Volfen Blessing",2379,"Eye of the North",null,"Norn rank",
  true,false,false,true,"Skill",10,0,0,30,0,false,0,
  ["You take on the aspect of the wolf. Your Energy returns to maximum and you have -2 Energy degeneration. You have +",[60,100]," maximum Health and ",[1,4]," Health regeneration. Wolf attacks replace your skills. You gain Energy every time you take or deal damage. This Skill ends when your Energy drops to 0."],
  {}, [
  ["+ maximum Health",60,100],
  ["+ Health regeneration",1,4] ] );
g_skillsById[2131] = new Skill("Volfen Bloodlust",2131,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Shout",0,0,0,10,0,false,0,
  ["For ",[2,7]," seconds, you and all adjacent allies attack 33% faster."],
  {}, [
  ["Duration",2,7] ] );
g_skillsById[2129] = new Skill("Volfen Claw",2129,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Skill",0,0,0.75,2,0,false,0,
  ["You deal ",[40,60]," damage and target touched foe suffers from Deep Wound for ",[2,5]," seconds."],
  {}, [
  ["Deep Wound duration",2,5],
  ["Damage",40,60] ] );
g_skillsById[2128] = new Skill("Volfen Pounce",2128,"Eye of the North",null,"Norn rank",
  false,false,false,true,"Enchantment Spell",0,0,0.75,15,0,false,0,
  ["You run ",[15,33],"% faster for ",[10,20]," seconds and deal ",[60,100]," damage to adjacent targets while this Skill is active. Dealing damage causes this Skill to end."],
  {}, [
  ["Speed boost %",15,33],
  ["Duration",10,20],
  ["Damage",60,100] ] );
g_skillsById[2144] = new Skill("Volley",2144,"Eye of the North","R","Marksmanship",
  false,false,false,false,"Bow Attack",5,0,0,2,0,false,0,
  ["All your Preparations are removed. Shoot arrows at target foe and up to 3 foes adjacent to your target. These arrows strike for +",[1,10]," damage if they hit."],
  {}, [
  ["+ Damage",1,10] ] );
g_skillsById[1505] = new Skill("Vow of Piety",1505,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Enchantment Spell",5,0,0.25,8,0,false,0,
  ["For 20 seconds, whenever you lose an Enchantment, 1 ally in the area is healed for ",[5,50]," Health."],
  {"heal": true}, [
  ["Healing",5,50] ] );
g_skillsById[1517] = new Skill("Vow of Silence",1517,"Nightfall","D","Mysticism",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For ",[5,10]," seconds, you cannot be the target of Spells, and you cannot cast Spells."],
  {}, [
  ["Duration",5,10] ] );
g_skillsById[1759] = new Skill("Vow of Strength",1759,"Nightfall","D","Earth Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For 20 seconds, you cannot use attack Skills and your attacks deal ",[5,50],"% more damage."],
  {"damage-buff": true}, [
  ["+ Damage %",5,50] ] );
g_skillsById[764] = new Skill("Wail of Doom",764,"Factions","N","Soul Reaping",
  true,false,false,false,"Hex Spell",1,0,0.25,10,0,false,0,
  ["For ",[1,4]," second[s], all of target foe's attributes are set to 0."],
  {"lock": true, "sacrifice": true}, [
  ["Disabled duration",1,4] ] );
g_skillsById[794] = new Skill("Wailing Weapon",794,"Factions","Rt","Channeling Magic",
  false,false,false,false,"Weapon Spell",5,0,1,25,0,false,0,
  ["For ",[5,11]," seconds, target ally has a Wailing Weapon. Whenever the Wailing Weapon strikes an attacking foe, that foe is interrupted."],
  {"interrupt": true}, [
  ["Duration",5,11] ] );
g_skillsById[1078] = new Skill("Wallow's Bite",1078,"Factions","N","Blood Magic",
  false,false,false,false,"Skill",1,0,0.75,3,0,false,0,
  ["Target touched foe takes ",[20,58]," damage."],
  {"damage": true, "sacrifice": true, "touch": true}, [
  ["Shadow damage",20,58] ] );
g_skillsById[2056] = new Skill("Wandering Eye",2056,"Eye of the North","Me","Illusion Magic",
  false,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For 4 seconds, the next time target foe attacks, that attack is interrupted and all nearby foes take ",[10,92]," damage."],
  {}, [
  ["Damage",10,92] ] );
g_skillsById[1255] = new Skill("Wanderlust",1255,"Factions","Rt","Communing",
  true,false,false,false,"Binding Ritual",10,0,5,45,0,false,0,
  ["Create a level ",[1,8]," Spirit. Whenever this Spirit's attack hits a stationary foe, that foe is knocked down and the Spirit loses ",[70,50]," Health. This Spirit dies after ",[30,60]," seconds."],
  {"knockdown": true, "spirit": true}, [
  ["Spirit level",1,8],
  ["Health lost",70,50],
  ["Spirit duration",30,60] ] );
g_skillsById[175] = new Skill("Ward Against Elements",175,"Prophecies","E","Earth Magic",
  false,false,false,false,"Ward Spell",15,0,1,20,0,false,0,
  ["You create a Ward Against Elements at your current location. For ",[8,20]," seconds, non-Spirit allies in this area gain +24 armor against elemental damage."],
  {"armor-buff": true}, [
  ["Ward duration",8,20] ] );
g_skillsById[177] = new Skill("Ward Against Foes",177,"Core","E","Earth Magic",
  false,false,false,false,"Ward Spell",15,0,1,20,0,false,0,
  ["You create a Ward Against Foes at your current location. For ",[8,20]," seconds, non-Spirit foes in this area move 50% slower."],
  {"move-nerf": true}, [
  ["Ward duration",8,20] ] );
g_skillsById[239] = new Skill("Ward Against Harm",239,"Prophecies","E","Water Magic",
  true,false,false,false,"Ward Spell",15,0,1,20,0,false,0,
  ["Create a Ward Against Harm at this location. For ",[8,20]," seconds, non-Spirit allies in this area have ",[12,60]," armor against fire damage and ",[12,24]," armor against other damage."],
  {"armor-buff": true}, [
  ["Ward duration",8,20],
  ["Armor vs fire damage",12,60],
  ["Armor vs non-fire damage",12,24] ] );
g_skillsById[176] = new Skill("Ward Against Melee",176,"Core","E","Earth Magic",
  false,false,false,false,"Ward Spell",15,0,1,30,0,false,0,
  ["You create a Ward Against Melee at your current location. For ",[5,20]," seconds, non-Spirit allies in this area have a 50% chance to block melee attacks."],
  {"block": true}, [
  ["Ward duration",5,20] ] );
g_skillsById[938] = new Skill("Ward of Stability",938,"Factions","E","Earth Magic",
  false,false,false,false,"Ward Spell",10,0,1,30,0,false,0,
  ["Create a Ward of Stability at your current location. For ",[10,25]," seconds, non-Spirit allies cannot be knocked down."],
  {"knockdown-counter": true}, [
  ["Ward duration",10,25] ] );
g_skillsById[2001] = new Skill("Ward of Weakness",2001,"Eye of the North","E","Earth Magic",
  false,false,false,false,"Ward Spell",10,0,1,20,0,false,0,
  ["You create a Ward of Weakness at your current location. For ",[5,20]," seconds, foes in this area become Weakened for ",[5,20]," seconds whenever they take elemental damage."],
  {}, [
  ["Ward duration",5,20],
  ["Weakness duration",5,20] ] );
g_skillsById[1751] = new Skill("Warmonger's Weapon",1751,"Nightfall","Rt","Channeling Magic",
  false,false,false,false,"Weapon Spell",10,0,1,30,0,false,0,
  ["For ",[5,15]," seconds, if target ally attacks a foe who is not attacking, that foe is interrupted."],
  {}, [
  ["Duration",5,15] ] );
g_skillsById[362] = new Skill("Warrior's Cunning",362,"Core","W","Strength",
  false,false,false,false,"Skill",10,0,0,60,0,false,0,
  ["For ",[5,11]," seconds, your melee attacks cannot be blocked."],
  {"block-counter": true}, [
  ["Duration",5,11] ] );
g_skillsById[374] = new Skill("Warrior's Endurance",374,"Prophecies","W","Strength",
  true,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[5,35]," seconds, you gain 3 Energy each time you hit with a melee attack. Warrior's Endurance cannot raise your Energy above ",[10,25],"."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",5,35],
  ["Energy ceiling",10,25] ] );
g_skillsById[377] = new Skill("Wary Stance",377,"Prophecies","W","Tactics",
  false,false,false,false,"Stance",10,0,0,10,0,false,0,
  ["For ",[1,6]," seconds, you block any attack skills used against you. For each successful block, you gain adrenaline and 5 Energy. Wary Stance ends if you use a skill."],
  {"adrenal-gain": true, "block": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",1,6] ] );
g_skillsById[1995] = new Skill("Waste Not, Want Not",1995,"Eye of the North","Me","Inspiration Magic",
  false,false,false,false,"Spell",5,0,0.25,15,0,false,0,
  ["If target foe is not casting a spell or attacking, you gain ",[8,13]," Energy."],
  {}, [
  ["Energy gain",8,13] ] );
g_skillsById[1644] = new Skill("Wastrel's Collapse",1644,"Nightfall","A","No Attribute",
  true,false,false,false,"Hex Spell",5,0,0.25,8,0,false,0,
  ["After 5 seconds, target foe is knocked down. This hex ends prematurely if that foe uses a skill."],
  {"knockdown": true}, [
 ] );
g_skillsById[1335] = new Skill("Wastrel's Demise",1335,"Nightfall","Me","Domination Magic",
  false,false,false,false,"Spell",5,0,1,8,0,false,0,
  ["Target foe takes ",[5,30]," damage. If that foe is not casting a spell, that foe takes an additional ",[3,7]," damage for each equipped spell."],
  {"damage": true, "spell-punish": true}, [
  ["Damage",5,30],
  ["+Damage",3,7] ] );
g_skillsById[50] = new Skill("Wastrel's Worry",50,"Prophecies","Me","Domination Magic",
  false,false,false,false,"Hex Spell",5,0,0.25,1,0,false,0,
  ["After 3 seconds, target foe takes ",[20,80]," damage. Wastrel's Worry ends prematurely if that foe uses a skill."],
  {"damage": true}, [
  ["Damage",20,80] ] );
g_skillsById[1392] = new Skill("Watchful Healing",1392,"Nightfall","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",5,0,1,10,0,false,0,
  ["For 10 seconds, target ally gains +",[1,4]," Health regeneration. If this Skill ends prematurely, that ally gains ",[30,120]," Health."],
  {"heal": true, "health-regen": true}, [
  ["Health regeneration",1,4],
  ["Health Gain",30,120] ] );
g_skillsById[1504] = new Skill("Watchful Intervention",1504,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",10,0,1,15,0,false,0,
  ["For 60 seconds, the next time target ally's Health drops below 25%, that ally is healed for ",[50,200]," Health."],
  {"heal-buff": true}, [
  ["Healing",50,200] ] );
g_skillsById[255] = new Skill("Watchful Spirit",255,"Prophecies","Mo","Divine Favor",
  false,false,false,false,"Enchantment Spell",15,0,1,5,-1,false,0,
  ["While you maintain this Enchantment, target ally gains +2 Health regeneration. That ally is healed for ",[30,180]," Health when Watchful Spirit ends."],
  {"heal": true, "health-regen": true}, [
  ["Healed",30,180] ] );
g_skillsById[208] = new Skill("Water Attunement",208,"Core","E","Water Magic",
  false,false,false,false,"Enchantment Spell",10,0,2,45,0,false,0,
  ["For ",[36,60]," seconds, you are attuned to Water. You gain 1 Energy plus 30% of the base Energy cost of the Skill each time you use Water Magic."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",36,60] ] );
g_skillsById[237] = new Skill("Water Trident",237,"Prophecies","E","Water Magic",
  true,false,false,false,"Spell",5,0,1,3,0,false,0,
  ["Send out a fast-moving Water Trident striking target foe for ",[10,70]," cold damage if it hits. If it hits a moving foe, that foe is knocked down."],
  {"damage": true, "knockdown": true}, [
  ["Cold damage",10,70] ] );
g_skillsById[1028] = new Skill("Way of Perfection",1028,"Factions","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["For 60 seconds, whenever you successfully land a critical hit, you gain ",[10,40]," Health."],
  {"critical-buff": true, "heal-self": true}, [
  ["Health gain",10,40] ] );
g_skillsById[1649] = new Skill("Way of the Assassin",1649,"Nightfall","A","Critical Strikes",
  true,false,false,false,"Stance",5,0,0,12,0,false,0,
  ["For 20 seconds, if you are under the effects of an Enchantment, your attacks have a +",[5,35],"% chance to land a critical hit."],
  {"critical-buff": true}, [
  ["+ Chance to<br />Critical hit %",5,35] ] );
g_skillsById[987] = new Skill("Way of the Empty Palm",987,"Factions","A","Deadly Arts",
  true,false,false,false,"Enchantment Spell",5,0,0.25,10,0,false,0,
  ["For ",[5,20]," seconds, off-hand and dual attacks cost no Energy."],
  {}, [
  ["Duration",5,20] ] );
g_skillsById[949] = new Skill("Way of the Fox",949,"Factions","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",5,0,0.25,45,0,false,0,
  ["For ",[10,35]," seconds, your next ",[1,6]," attacks cannot be blocked."],
  {"block-counter": true}, [
  ["Duration",10,35],
  ["Subsequent attacks",1,6] ] );
g_skillsById[977] = new Skill("Way of the Lotus",977,"Factions","A","Shadow Arts",
  false,false,false,false,"Enchantment Spell",5,0,0.25,20,0,false,0,
  ["For 20 seconds, the next time you hit with a dual attack skill, you gain ",[5,20]," Energy."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Energy gain",5,20] ] );
g_skillsById[2187] = new Skill("Way of the Master",2187,"Eye of the North","A","Critical Strikes",
  false,false,false,false,"Enchantment Spell",5,0,0.25,30,0,false,0,
  ["For 60 seconds, while holding a non-dagger weapon, you have an additional ",[3,33],"% chance to land a critical hit."],
  {}, [
  ["Additional crit chance%",3,33] ] );
g_skillsById[159] = new Skill("Weaken Armor",159,"Core","N","Curses",
  false,false,false,false,"Spell",5,0,1,5,0,false,0,
  ["Target foe and foes adjacent to your target have Cracked Armor for ",[5,20]," seconds."],
  {"armor-nerf": true}, [
  ["Duration",5,20] ] );
g_skillsById[822] = new Skill("Weaken Knees",822,"Factions","N","Curses",
  true,false,false,false,"Hex Spell",5,0,1,5,0,false,0,
  ["For ",[3,38]," seconds, if target foe is struck while moving that foe is knocked down and Weaken Knees ends."],
  {}, [
  ["Duration",3,38] ] );
g_skillsById[2421] = new Skill("Weakness Trap",2421,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Trap",10,0,2,30,0,false,0,
  ["When Weakness Trap is triggered, all nearby foes are Weakened for ",[10,20]," seconds and take ",[5,50]," lightning damage. All Charr are knocked down. Weakness Trap ends after 90 seconds. While activating this skill, you are easily interrupted."],
  {}, [
  ["Weakness duration",10,20],
  ["Lightning damage",5,50] ] );
g_skillsById[2073] = new Skill("Weapon of Aggression",2073,"Eye of the North","Rt","Channeling Magic",
  false,false,false,false,"Weapon Spell",10,0,0.25,10,0,false,0,
  ["For ",[5,15]," seconds, you attack 25% faster."],
  {}, [
  ["Duration",5,15] ] );
g_skillsById[1749] = new Skill("Weapon of Fury",1749,"Nightfall","Rt","Channeling Magic",
  true,false,false,false,"Weapon Spell",5,0,1,8,0,false,0,
  ["For ",[5,20]," seconds, target ally gains ",[5,50],"% more adrenaline and 1 Energy whenever that ally successfully hits with an attack."],
  {"adrenal-gain": true, "energy-gain": true, "energy-gain-ot": true}, [
  ["Duration",5,20],
  ["More adrenaline gain %",5,50] ] );
g_skillsById[1268] = new Skill("Weapon of Quickening",1268,"Factions","Rt","Communing",
  true,false,false,false,"Weapon Spell",10,0,2,5,0,false,0,
  ["For ",[5,25]," seconds, target ally has a Weapon of Quickening, and Spells and Binding Rituals recharge 33% faster."],
  {"recharge-buff": true}, [
  ["Duration",5,25] ] );
g_skillsById[1752] = new Skill("Weapon of Remedy",1752,"Nightfall","Rt","Restoration Magic",
  true,false,false,false,"Weapon Spell",5,0,0.25,3,0,false,0,
  ["For 8 seconds, the next time target ally takes damage from a foe, that ally steals up to ",[15,75]," Health from that foe and loses 1 Condition."],
  {"condition-remove": true, "health-steal": true}, [
  ["Life steal",15,75] ] );
g_skillsById[2149] = new Skill("Weapon of Renewal",2149,"Eye of the North","Rt","Spawning Power",
  false,false,false,false,"Weapon Spell",5,0,1,10,0,false,0,
  ["For ",[4,10]," seconds, the next time target ally hits with an attack Skill, that ally gains ",[1,7]," Energy."],
  {}, [
  ["Duration",4,10],
  ["Energy gain",1,7] ] );
g_skillsById[983] = new Skill("Weapon of Shadow",983,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Weapon Spell",10,0,1,20,0,false,0,
  ["For ",[4,10]," seconds, target ally has a Weapon of Shadow. Whenever that ally is struck by an attack, that ally's attacker becomes Blinded for 5 seconds."],
  {"attack-counter": true, "blind": true}, [
  ["Duration",4,10] ] );
g_skillsById[793] = new Skill("Weapon of Warding",793,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Weapon Spell",10,0,1,5,0,false,0,
  ["For ",[5,10]," seconds, target ally has a Weapon of Warding that grants target ally +",[2,4]," Health regeneration and a 50% chance to block."],
  {"block": true, "health-regen": true}, [
  ["Duration",5,10],
  ["Health Regen",2,4] ] );
g_skillsById[1552] = new Skill("Wearying Spear",1552,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,3,0,0,0,false,0,
  ["If this attack hits, you deal +",[10,40]," damage. You are Weakened for 5 seconds."],
  {"damage": true, "weakness": true}, [
  ["+Damage",10,40] ] );
g_skillsById[1537] = new Skill("Wearying Strike",1537,"Nightfall","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,6,0,false,0,
  ["If this attack hits, you deal +",[5,20]," damage and inflict a Deep Wound for ",[3,10]," seconds. You suffer from Weakness for 10 seconds."],
  {"damage": true, "deepwound": true}, [
  ["+ Damage",5,20],
  ["Deep Wound Duration",3,10] ] );
g_skillsById[1344] = new Skill("Web of Disruption",1344,"Nightfall","Me","No Attribute",
  false,false,false,false,"Hex Spell",10,0,0.25,15,0,false,0,
  ["Interrupt target foe. For 10 seconds, target foe is Hexed with Web of Disruption. When this Hex ends, that foe is interrupted again."],
  {"interrupt": true}, [
 ] );
g_skillsById[92] = new Skill("Well of Blood",92,"Core","N","Blood Magic",
  false,false,false,false,"Well Spell",10,0,1,2,0,false,0,
  ["Exploit nearest corpse to create a Well of Blood at its location. For ",[8,20]," seconds, allies in that area receive +",[1,6]," Health regeneration."],
  {"corpse": true, "health-regen": true}, [
  ["Well duration",8,20],
  ["Health regeneration",1,6] ] );
g_skillsById[1366] = new Skill("Well of Darkness",1366,"Nightfall","N","Curses",
  false,false,false,false,"Well Spell",10,0,1,20,0,false,0,
  ["Exploit nearest corpse to create a Well of Darkness for ",[5,50]," seconds. Hexed foes within the Well of Darkness miss 50% of the time."],
  {"attack-counter": true, "corpse": true}, [
  ["Well duration",5,50] ] );
g_skillsById[91] = new Skill("Well of Power",91,"Prophecies","N","Blood Magic",
  true,false,false,false,"Well Spell",5,0,1,15,0,false,0,
  ["Exploit nearest corpse to create a Well of Power at that location. For ",[8,20]," seconds, allies within the area of Well of Power gain +",[1,6]," Health regeneration and +2 Energy regeneration."],
  {"corpse": true, "energy-regen": true, "health-regen": true}, [
  ["Well duration",8,20],
  ["Health regeneration",1,6] ] );
g_skillsById[2236] = new Skill("Well of Ruin",2236,"Eye of the North","N","Curses",
  false,false,false,false,"Well Spell",10,0,1,20,0,false,0,
  ["Exploit nearest corpse to create a Well of Ruin at its location. For ",[5,30]," seconds, whenever a foe in the well takes physical damage, that foe has Cracked Armor for ",[5,20]," seconds."],
  {}, [
  ["Well duration",5,30],
  ["Cracked Armor duration",5,20] ] );
g_skillsById[1660] = new Skill("Well of Silence",1660,"Nightfall","N","Curses",
  false,false,false,false,"Well Spell",10,0,1,20,0,false,0,
  ["Exploit target corpse to create a Well of Silence for ",[10,30]," seconds. Foes within the well cannot use shouts or chants and suffer -",[1,4]," Health degeneration."],
  {"corpse": true, "health-degen": true}, [
  ["Well duration",10,30],
  ["Health degeneration",1,4] ] );
g_skillsById[93] = new Skill("Well of Suffering",93,"Prophecies","N","Death Magic",
  false,false,false,false,"Well Spell",10,0,1,10,0,false,0,
  ["Exploit nearest corpse to create a Well of Suffering at its location. For ",[10,30]," seconds, foes in that area suffer -",[1,6]," Health degeneration."],
  {"corpse": true, "health-degen": true}, [
  ["Well duration",10,30],
  ["Health degeneration",1,6] ] );
g_skillsById[818] = new Skill("Well of Weariness",818,"Factions","N","Curses",
  false,false,false,false,"Well Spell",5,0,1,5,0,false,0,
  ["Exploit target corpse to create a Well of Weariness for ",[10,55]," seconds. Enemies within the Well of Weariness suffer -1 Energy degeneration."],
  {}, [
  ["Well duration",10,55] ] );
g_skillsById[94] = new Skill("Well of the Profane",94,"Core","N","Death Magic",
  false,false,false,false,"Well Spell",25,0,3,10,0,false,4,
  ["Exploit nearest corpse to create a Well of the Profane at its location. For ",[8,20]," seconds, foes in that area are stripped of all enchantments and cannot be the target of further enchantments. (50% failure chance with Death Magic 4 or less.)"],
  {"corpse": true, "enchant-remove": true}, [
  ["Well duration",8,20] ] );
g_skillsById[888] = new Skill("Whirling Axe",888,"Factions","W","Axe Mastery",
  true,false,false,false,"Axe Attack",0,2,0,0,0,false,0,
  ["If Whirling Axe hits, you strike for +",[5,20]," damage. If it is blocked, Whirling Axe is disabled for 15 seconds."],
  {"damage": true}, [
  ["Damage",5,20] ] );
g_skillsById[1544] = new Skill("Whirling Charge",1544,"Nightfall","D","Wind Prayers",
  false,false,false,false,"Stance",10,0,0,20,0,false,0,
  ["For ",[3,15]," seconds, you move and attack 25% faster than normal. This Stance ends if you are not under the effects of any Enchantments."],
  {"attackspeed-buff": true}, [
  ["Duration",3,15] ] );
g_skillsById[450] = new Skill("Whirling Defense",450,"Core","R","Expertise",
  false,false,false,false,"Stance",10,0,0,60,0,false,0,
  ["For ",[8,20]," seconds, you have 75% chance to block attacks. Whenever you block a projectile in this way, adjacent foes take ",[5,11]," damage."],
  {"block": true, "damage": true}, [
  ["Duration",8,20],
  ["Damage",5,11] ] );
g_skillsById[163] = new Skill("Whirlwind",163,"Prophecies","E","Air Magic",
  false,false,false,false,"Spell",5,0,0.75,8,0,false,0,
  ["All adjacent foes take ",[15,60]," cold damage. Attacking foes struck by Whirlwind are knocked down."],
  {"damage": true, "damage-aoe": true, "knockdown": true}, [
  ["Cold damage",15,60] ] );
g_skillsById[2107] = new Skill("Whirlwind Attack",2107,"Nightfall","W","Sunspear rank| pve-only = y",
  false,false,false,false,"Melee Attack",0,6,0,1,0,false,0,
  ["Attack target and adjacent foes. Each attack that hits deals +",[5,20]," damage."],
  {}, [
 ] );
g_skillsById[1265] = new Skill("Wielder's Boon",1265,"Factions","Rt","Restoration Magic",
  false,false,false,false,"Spell",5,0,0.25,4,0,false,0,
  ["Heal target ally for ",[15,60]," points. If that ally is under the effects of a \"Weapon Spell,\" Wielder's Boon heals for an additional ",[15,75]," Health."],
  {"heal": true, "weapon-uses": true}, [
  ["Healing",15,60],
  ["Additional Healing",15,75] ] );
g_skillsById[1740] = new Skill("Wielder's Remedy",1740,"Nightfall","Rt","Spawning Power",
  false,false,false,false,"Enchantment Spell",5,0,1,10,0,false,0,
  ["For ",[10,30]," seconds, whenever you cast a weapon Spell on an ally, that ally loses 1 Condition."],
  {"condition-remove": true, "weapon-uses": true}, [
  ["Duration",10,30] ] );
g_skillsById[1733] = new Skill("Wielder's Strike",1733,"Nightfall","Rt","Channeling Magic",
  false,false,false,false,"Spell",5,0,1,6,0,false,0,
  ["Target foe is struck for ",[5,50]," lightning damage. If you are under the effects of a weapon Spell, you deal an additional ",[10,40]," lightning damage."],
  {"damage": true, "weapon-uses": true}, [
  ["Lightning damage",5,50],
  ["Additional<br>lightning damage",10,40] ] );
g_skillsById[1737] = new Skill("Wielder's Zeal",1737,"Nightfall","Rt","Spawning Power",
  true,false,false,false,"Enchantment Spell",10,0,1,10,0,false,0,
  ["For ",[10,30]," seconds, whenever you cast a weapon Spell on an ally, you gain ",[1,5]," Energy."],
  {"energy-gain": true, "energy-gain-ot": true, "weapon-uses": true}, [
  ["Duration",10,30],
  ["Energy gain",1,5] ] );
g_skillsById[321] = new Skill("Wild Blow",321,"Core","W","No Attribute",
  false,false,false,false,"Melee Attack",5,0,0,8,0,false,0,
  ["Lose all adrenaline. If it hits, this attack will result in a critical hit and any Stance being used by your target ends. This attack cannot be blocked."],
  {"adrenal-gone": true, "block-counter": true, "critical-buff": true, "stance-counter": true}, [
 ] );
g_skillsById[1022] = new Skill("Wild Strike",1022,"Factions","A","Dagger Mastery",
  false,false,false,false,"Off-Hand Attack",5,0,0,4,0,false,0,
  ["Must follow a lead attack. If it hits, this attack strikes for +",[10,35]," damage and any Stance being used by target foe ends. This attack cannot be blocked."],
  {"damage": true, "stance-counter": true}, [
  ["+ Damage",10,35] ] );
g_skillsById[1605] = new Skill("Wild Throw",1605,"Nightfall","P","Spear Mastery",
  false,false,false,false,"Spear Attack",0,7,0,0,0,false,0,
  ["If this attack hits, it deals +",[5,20]," damage, and any Stance being used by your target ends. This attack cannot be blocked."],
  {"block-counter": true, "damage": true, "stance-counter": true}, [
  ["+ Damage",5,20] ] );
g_skillsById[160] = new Skill("Windborne Speed",160,"Prophecies","E","Air Magic",
  false,false,false,false,"Enchantment Spell",10,0,1,5,0,false,0,
  ["For ",[5,11]," seconds, target ally moves 33% faster."],
  {"move-buff": true}, [
  ["Duration",5,11] ] );
g_skillsById[2422] = new Skill("Winds",2422,"Eye of the North",null,"Ebon Vanguard rank",
  false,false,false,true,"Ebon Vanguard Ritual",5,0,5,30,0,false,0,
  ["Create a level ",[1,10]," Spirit. All foes within its range have 15% chance to miss with ranged attacks. This spirit dies after ",[30,90]," seconds."],
  {}, [
  ["Level",1,10],
  ["Duration",30,90] ] );
g_skillsById[1533] = new Skill("Winds of Disenchantment",1533,"Nightfall","D","No Attribute",
  false,false,false,false,"Spell",5,0,0.75,20,0,false,0,
  ["Lose all Enchantments. For each Enchantment lost in this way, 1 nearby foe also loses 1 Enchantment. (The same foe cannot lose more than 1 Enchantment)."],
  {"enchant-remove": true}, [
 ] );
g_skillsById[463] = new Skill("Winnowing",463,"Core","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,5,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. Non-Spirit creatures within range take 4 additional damage whenever they take physical damage. This Spirit dies after ",[30,150]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,150] ] );
g_skillsById[462] = new Skill("Winter",462,"Prophecies","R","Wilderness Survival",
  false,false,false,false,"Nature Ritual",5,0,3,60,0,false,0,
  ["Create a level ",[1,10]," Spirit. For creatures within its range, all elemental damage is cold damage instead. This Spirit dies after ",[30,150]," seconds."],
  {"spirit": true}, [
  ["Level",1,10],
  ["Duration",30,150] ] );
g_skillsById[1999] = new Skill("Winter's Embrace",1999,"Eye of the North","E","Water Magic",
  false,false,false,false,"Hex Spell",5,0,0.75,12,0,false,0,
  ["For ",[2,6]," seconds, you and target touched foe move 90% slower."],
  {}, [
  ["Duration",2,6] ] );
g_skillsById[942] = new Skill("Withdraw Hexes",942,"Factions","Mo","Divine Favor",
  true,false,false,false,"Spell",15,0,1,5,0,false,0,
  ["Remove all Hexes from target ally and all adjacent allies. This Spell takes an additional ",[20,5]," seconds to recharge for each Hex removed in this way."],
  {"hex-remove": true, "hex-remove-aoe": true}, [
  ["Additional<br /> recharge duration",20,5] ] );
g_skillsById[125] = new Skill("Wither",125,"Prophecies","N","Curses",
  true,false,false,false,"Hex Spell",10,0,2,10,0,false,0,
  ["For ",[5,35]," seconds, target foe suffers -",[2,4]," Health degeneration and -1 Energy degeneration. If target foe's Energy reaches 0, that foe takes ",[15,75]," damage and Wither ends."],
  {"damage": true, "energy-degen": true, "health-degen": true}, [
  ["Duration",5,35],
  ["Health degeneration",2,4],
  ["Damage",15,75] ] );
g_skillsById[1997] = new Skill("Withering Aura",1997,"Eye of the North","N","Death Magic",
  false,false,false,false,"Enchantment Spell",5,0,1,3,0,false,0,
  ["For ",[5,20]," seconds, target ally's melee attacks cause Weakness for ",[5,20]," seconds."],
  {}, [
  ["Duration",5,20],
  ["Weakness duration",5,20] ] );
g_skillsById[1129] = new Skill("Word of Censure",1129,"Factions","Mo","Smiting Prayers",
  true,false,false,false,"Spell",10,0,1,2,0,false,0,
  ["Target foe takes ",[15,75]," holy damage. If your target was below 33% Health, Word of Censure takes 20 additional seconds to recharge."],
  {"damage": true}, [
  ["Holy damage",15,75] ] );
g_skillsById[282] = new Skill("Word of Healing",282,"Core","Mo","Healing Prayers",
  true,false,false,false,"Spell",5,0,0.75,3,0,false,0,
  ["Heal target ally for ",[5,130]," Health. Heal for an additional ",[15,100]," Health if that ally is below 50% Health."],
  {"heal": true}, [
  ["Healing",5,130],
  ["Additional healing",15,100] ] );
g_skillsById[1396] = new Skill("Words of Comfort",1396,"Nightfall","Mo","Healing Prayers",
  false,false,false,false,"Spell",5,0,1,4,0,false,0,
  ["Target ally is healed for ",[15,60]," Health and an additional ",[15,45]," Health if that ally is suffering from a Condition."],
  {"condition-uses": true, "heal": true}, [
  ["Healing",15,60],
  ["+Healing",15,45] ] );
g_skillsById[1536] = new Skill("Wounding Strike",1536,"Nightfall","D","Scythe Mastery",
  true,false,false,false,"Scythe Attack",5,0,0,3,0,false,0,
  ["If this attack hits, target foe suffers from Bleeding for ",[5,20]," seconds. If you are under the effects of an enchantment, target foe also suffers from a Deep Wound for ",[5,20]," seconds."],
  {"bleeding": true, "deepwound": true}, [
  ["Deep Wound duration",5,20],
  ["Bleeding duration",5,20] ] );
g_skillsById[1750] = new Skill("Xinrae's Weapon",1750,"Nightfall","Rt","Communing",
  true,false,false,false,"Weapon Spell",25,0,0.25,30,0,false,0,
  ["For ",[4,10]," seconds, target ally has Xinrae's Weapon. Whenever a foe casts a Spell on that ally, that Spell is disabled for an additional ",[5,15]," seconds for that foe and all party members of that foe."],
  {"lock": true}, [
  ["Duration",4,10],
  ["Disabled duration",5,15] ] );
g_skillsById[1137] = new Skill("Yeti Smash",1137,"Factions","W","Hammer Mastery",
  false,false,false,false,"Hammer Attack",0,6,0,0,0,false,0,
  ["If Yeti Smash hits, target foe is struck for +",[5,20]," damage and all adjacent foes take ",[5,50]," damage."],
  {"damage": true, "damage-aoe": true}, [
  ["+Damage",5,20],
  ["Damage (adjacent foes)",5,50] ] );
g_skillsById[271] = new Skill("Zealot's Fire",271,"Core","Mo","Smiting Prayers",
  false,false,false,false,"Enchantment Spell",10,0,0.25,30,0,false,0,
  ["For 60 seconds, whenever you use a Skill that targets an ally, all foes adjacent to that target are struck for ",[5,35]," fire damage and you lose 1 Energy."],
  {"damage": true, "damage-aoe": true}, [
  ["Fire damage",5,35] ] );
g_skillsById[1561] = new Skill("Zealous Anthem",1561,"Nightfall","P","Motivation",
  false,false,false,false,"Chant",10,0,1,20,0,false,0,
  ["For 10 seconds, the next time each ally within earshot uses an attack Skill, that ally gains ",[1,8]," Energy."],
  {"energy-gain": true, "energy-gain-aoe": true}, [
  ["Energy gained",1,8] ] );
g_skillsById[1687] = new Skill("Zealous Benediction",1687,"Nightfall","Mo","Protection Prayers",
  true,false,false,false,"Spell",10,0,0.75,4,0,false,0,
  ["Heal target ally for ",[30,180]," Health. If target was below 50% Health, you gain 7 Energy."],
  {"energy-gain": true, "heal": true}, [
  ["Healing",30,180] ] );
g_skillsById[1763] = new Skill("Zealous Renewal",1763,"Nightfall","D","Mysticism",
  false,false,false,false,"Enchantment Spell",10,0,0.75,15,0,false,0,
  ["All adjacent foes take ",[15,60]," holy damage. For 20 seconds, this Enchantment does nothing. When this Enchantment ends, you gain 1 Energy for each successful hit while under the effects of this Enchantment."],
  {"damage": true}, [
  ["Holy damage",15,60] ] );
g_skillsById[2071] = new Skill("Zealous Sweep",2071,"Eye of the North","D","Scythe Mastery",
  false,false,false,false,"Scythe Attack",5,0,0,10,0,false,0,
  ["If this attack hits, you deal +",[10,25]," damage. You gain 3 Energy for each foe you hit."],
  {}, [
  ["+ Damage",10,25] ] );
g_skillsById[1761] = new Skill("Zealous Vow",1761,"Nightfall","D","Wind Prayers",
  true,false,false,false,"Enchantment Spell",5,0,0.25,12,0,false,0,
  ["For 20 seconds, you have -4 Energy regeneration, and you gain ",[1,5]," Energy every time you hit with an attack."],
  {"energy-gain": true, "energy-gain-ot": true}, [
  ["Energy gain",1,5] ] );
g_skillsById[1196] = new Skill("Zojun's Haste",1196,"Factions","R","Expertise",
  false,false,false,false,"Stance",5,0,0,30,0,false,0,
  ["For ",[5,11]," seconds, you move 33% faster and have a ",[27,75],"% chance to block incoming projectiles. Zojun's Haste ends if you attack."],
  {"block": true, "move-buff": true}, [
  ["Duration",5,11],
  ["Block Chance %",27,75] ] );
g_skillsById[1192] = new Skill("Zojun's Shot",1192,"Factions","R","Expertise",
  false,false,false,false,"Bow Attack",5,0,0,3,0,false,0,
  ["Shoot an arrow that has half the normal range, but strikes for +",[10,40]," damage."],
  {"damage": true}, [
  ["+ Damage",10,40] ] );


} // loadSkills
