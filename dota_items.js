// Based off https://github.com/adamrezich/dotabutt/blob/master/data/items.json
var all_items = {
    "1": {
        "name": "blink",
        "localized_name": "Blink Dagger",
        "cost": 2150,
        "side_shop": 1,
        "invalid_heroes": [
            14,
            20
        ],
        "description": "The fabled dagger used by the fastest assassin ever to walk the lands.",
        "abilities": [
            {
                "name": "Blink",
                "type": "target_point",
                "affects": "self",
                "mana": "75",
                "cooldown": "14",
                "description": "Teleport to a target point up to 1200 units away. If damage is taken from an enemy hero, Blink Dagger cannot be used for 3 seconds."
            }
        ]
    },
    "2": {
        "name": "blades_of_attack",
        "localized_name": "Blades of Attack",
        "cost": 450,
        "side_shop": 1,
        "description": "The damage of these small, concealable blades should not be underestimated.",
        "bonuses": {
            "damage": 9
        }
    },
    "3": {
        "name": "broadsword",
        "localized_name": "Broadsword",
        "cost": 1200,
        "description": "The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.",
        "bonuses": {
            "damage": 9
        }
    },
    "4": {
        "name": "chainmail",
        "localized_name": "Chainmail",
        "cost": 550,
        "side_shop": 1,
        "description": "A medium weave of metal chains.",
        "bonuses": {
            "armor": 5
        }
    },
    "5": {
        "name": "claymore",
        "localized_name": "Claymore",
        "cost": 1400,
        "description": "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
        "bonuses": {
            "damage": 21
        }
    },
    "6": {
        "name": "helm_of_iron_will",
        "localized_name": "Helm of Iron Will",
        "cost": 950,
        "side_shop": 1,
        "description": "The helmet of a mighty warrior who fell in battle.",
        "bonuses": {
            "hp_regen": 3,
            "armor": 5
        }
    },
    "7": {
        "name": "javelin",
        "localized_name": "Javelin",
        "cost": 1500,
        "description": "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
        "bonuses": {
            "damage": 21
        },
        "abilities": [
            {
                "name": "Pierce",
                "type": "passive",
                "affects": "enemies",
                "damage": "physical",
                "description": "Grants a chance to deal bonus damage.",
                "attributes": {
                    "Damage Chance": "20%",
                    "Bonus Damage": 40
                }
            }
        ]
    },
    "8": {
        "name": "mithril_hammer",
        "localized_name": "Mithril Hammer",
        "cost": 1600,
        "description": "A hammer forged of pure mithril.",
        "bonuses": {
            "damage": 24
        }
    },
    "9": {
        "name": "platemail",
        "localized_name": "Platemail",
        "cost": 1400,
        "description": "Thick metal plates that protect the entire upper body. Avoid dropping on feet.",
        "bonuses": {
            "armor": 10
        }
    },
    "10": {
        "name": "quarterstaff",
        "localized_name": "Quarterstaff",
        "cost": 900,
        "side_shop": 1,
        "description": "A basic staff that allows you to strike quickly.",
        "bonuses": {
            "damage": 10,
            "attack_speed": 10
        }
    },
    "11": {
        "name": "quelling_blade",
        "localized_name": "Quelling Blade",
        "cost": 225,
        "side_shop": 1,
        "description": "The axe of a fallen gnome, it allows you to effectively maneuver the forest.",
        "abilities": [
            {
                "name": "Destroy Tree",
                "type": "target_unit",
                "affects": "trees",
                "description": "Destroy a target tree.",
                "range": 100,
                "cooldown": 5
            },
            {
                "name": "Quell",
                "type": "passive",
                "affects": "units",
                "description": "Gives bonus attack damage against non-hero units, depending on the type of hero you are.",
                "attributes": {
                    "Bonus Damage (melee)": "32%",
                    "Bonus Damage (ranged)": "12%"
                }
            }
        ]
    },
    "12": {
        "name": "ring_of_protection",
        "localized_name": "Ring of Protection",
        "cost": 175,
        "aliases": [
            "rop"
        ],
        "description": "A glimmering ring that defends its bearer.",
        "bonuses": {
            "armor": 2
        }
    },
    "13": {
        "name": "gauntlets",
        "localized_name": "Gauntlets of Strength",
        "cost": 150,
        "description": "Studded leather gloves that add brute strength.",
        "bonuses": {
            "strength": 3
        }
    },
    "14": {
        "name": "slippers",
        "localized_name": "Slippers of Agility",
        "cost": 150,
        "side_shop": 1,
        "description": "Light boots made from spider skin that tingles your senses.",
        "bonuses": {
            "agility": 3
        }
    },
    "15": {
        "name": "mantle",
        "localized_name": "Mantle of Intelligence",
        "cost": 150,
        "description": "A beautiful sapphire mantle worn by generations of queens.",
        "bonuses": {
            "intelligence": 3
        }
    },
    "16": {
        "name": "branches",
        "localized_name": "Iron Branch",
        "cost": 53,
        "aliases": [
            "gg branch"
        ],
        "description": "A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.",
        "bonuses": {
            "strength": 1,
            "agility": 1,
            "intelligence": 1
        }
    },
    "17": {
        "name": "belt_of_strength",
        "localized_name": "Belt of Strength",
        "cost": 450,
        "side_shop": 1,
        "description": "A valued accessory for improving vitality.",
        "bonuses": {
            "strength": 6
        }
    },
    "18": {
        "name": "boots_of_elves",
        "localized_name": "Band of Elvenskin",
        "cost": 450,
        "side_shop": 1,
        "description": "A tensile fabric often used for its light weight and ease of movement.",
        "bonuses": {
            "agility": 6
        }
    },
    "19": {
        "name": "robe",
        "localized_name": "Robe of the Magi",
        "cost": 450,
        "side_shop": 1,
        "description": "This robe corrupts the soul of the user, but provides wisdom in return.",
        "bonuses": {
            "intelligence": 6
        }
    },
    "20": {
        "name": "circlet",
        "localized_name": "Circlet",
        "cost": 185,
        "description": "An elegant circlet designed for human princesses.",
        "bonuses": {
            "strength": 2,
            "agility": 2,
            "intelligence": 2
        }
    },
    "21": {
        "name": "ogre_axe",
        "localized_name": "Ogre Club",
        "cost": 1000,
        "description": "You grow stronger just by holding it.",
        "bonuses": {
            "strength": 10
        }
    },
    "22": {
        "name": "blade_of_alacrity",
        "localized_name": "Blade of Alacrity",
        "cost": 1000,
        "description": "A long blade imbued with time magic.",
        "bonuses": {
            "agility": 10
        }
    },
    "23": {
        "name": "staff_of_wizardry",
        "localized_name": "Staff of Wizardry",
        "cost": 1000,
        "description": "A staff of magical powers passed down from the eldest mages.",
        "bonuses": {
            "intelligence": 10
        }
    },
    "24": {
        "name": "ultimate_orb",
        "localized_name": "Ultimate Orb",
        "cost": 2100,
        "side_shop": 1,
        "description": "A mystical orb containing the essence of life.",
        "bonuses": {
            "strength": 10,
            "agility": 10,
            "intelligence": 10
        }
    },
    "25": {
        "name": "gloves",
        "localized_name": "Gloves of Haste",
        "cost": 500,
        "side_shop": 1,
        "description": "A pair of magical gloves that seems to render weapons weightless.",
        "bonuses": {
            "attack_speed": 15
        }
    },
    "26": {
        "name": "lifesteal",
        "localized_name": "Morbid Mask",
        "cost": 900,
        "side_shop": 1,
        "description": "A mask that drains the energy of those caught in its gaze.",
        "abilities": [
            {
                "name": "Lifesteal",
                "type": "passive",
                "description": "Gives lifesteal on attacks.",
                "uam": 1,
                "attributes": {
                    "Lifesteal": "15%"
                }
            }
        ]
    },
    "27": {
        "name": "ring_of_regen",
        "localized_name": "Ring of Regen",
        "cost": 350,
        "aliases": [
            "ror"
        ],
        "side_shop": 1,
        "shareable": 1,
        "description": "This ring is considered a good luck charm among the Gnomes.",
        "bonuses": {
            "hp_regen": 2
        }
    },
    "28": {
        "name": "sobi_mask",
        "localized_name": "Sage's Mask",
        "cost": 325,
        "side_shop": 1,
        "shareable": 1,
        "description": "A mask commonly used by mages and warlocks for various rituals.",
        "bonuses": {
            "mana_regen": "50%"
        }
    },
    "29": {
        "name": "boots",
        "localized_name": "Boots of Speed",
        "cost": 450,
        "side_shop": 1,
        "description": "Fleet footwear, increasing movement.",
        "bonuses": {
            "movement_speed": 50
        }
    },
    "30": {
        "name": "gem",
        "localized_name": "Gem of True Sight",
        "cost": 700,
        "shareable": 1,
        "abilities": [
            {
                "name": "True Sight",
                "type": "passive",
                "description": "Gives the ability to see invisible units and wards. Drops on death.",
                "attributes": {
                    "Radius": 1100
                }
            }
        ]
    },
    "31": {
        "name": "cloak",
        "localized_name": "Cloak",
        "cost": 550,
        "side_shop": 1,
        "description": "A cloak made of magical material that works to dispel any magic cast on it.",
        "bonuses": {
            "magic_resistance": "15%"
        }
    },
    "32": {
        "name": "talisman_of_evasion",
        "localized_name": "Talisman of Evasion",
        "cost": 1800,
        "side_shop": 1,
        "description": "A necklace that allows you to anticipate enemy attacks.",
        "bonuses": {
            "evasion": "25%"
        }
    },
    "33": {
        "name": "cheese",
        "localized_name": "Cheese",
        "cost": 1000,
        "shareable": 1,
        "stackable": 1,
        "description": "Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.",
        "abilities": [
            {
                "name": "Restore",
                "type": "target_unit",
                "affects": "allies",
                "description": "Instantly restores health and mana",
                "attributes": {
                    "Health Restored": 2500,
                    "Mana Restored": 1000
                }
            }
        ]
    },
    "34": {
        "name": "magic_stick",
        "localized_name": "Magic Stick",
        "cost": 200,
        "side_shop": 1,
        "description": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "abilities": [
            {
                "name": "Energy Charge",
                "type": "no_target",
                "affects": "self",
                "description": "Gains charges (max 10) based on enemies using abilities in a nearby area. When activated, it restores health and mana based on the number of charges stored.",
                "attributes": {
                    "Health and Mana Restored per Charge": 15
                }
            }
        ]
    },
    "35": {
        "name": "recipe_magic_wand",
        "localized_name": "Recipe: Magic Wand",
        "cost": 150,
        "recipe": 1
    },
    "36": {
        "name": "magic_wand",
        "localized_name": "Magic Wand",
        "cost": 509,
        "aliases": [
            "ghost"
        ],
        "description": "A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.",
        "bonuses": {
            "strength": 3,
            "agility": 3,
            "intelligence": 3
        },
        "abilities": [
            {
                "name": "Energy Charge",
                "type": "no_target",
                "affects": "self",
                "description": "Gains charges (max 15) based on enemies using abilities in a nearby area. When activated, it restores health and mana based on the number of charges stored.",
                "attributes": {
                    "Health and Mana Restored per Charge": 15
                }
            }
        ],
        "components": [
            34,
            16,
            16,
            16,
            35
        ]

    },
    "37": {
        "name": "ghost",
        "localized_name": "Ghost Scepter",
        "cost": 1600,
        "description": "Imbues the wielder with a ghostly presence, allowing them to evade physical damage.",
        "bonuses": {
            "strength": 7,
            "agility": 7,
            "intelligence": 7
        },
        "abilities": [
            {
                "name": "Ghost Form",
                "type": "no_target",
                "affects": "self",
                "description": "Enter ghost form, unable to attack or be attacked, but take 40% extra damage from spells. Using a Teleport Scroll dispels Ghost Form. Boots of Travel do not dispel Ghost Form.",
                "attributes": {
                    "Duration": 4
                },
                "cooldown": 30
            }
        ]
    },
    "38": {
        "name": "clarity",
        "localized_name": "Clarity",
        "cost": 50,
        "shareable": 1,
        "stackable": 1,
        "consumable": 1,
        "description": "Clear water that enhances the ability to meditate.",
        "abilities": [
            {
                "name": "Regenerate Mana",
                "type": "target_unit",
                "affects": "allies",
                "description": "Restores mana over time. If the user is attacked, the effect is lost.",
                "attributes": {
                    "Duration": 30,
                    "Mana restored": 100
                }
            }
        ]
    },
    "39": {
        "name": "flask",
        "localized_name": "Salve",
        "cost": 100,
        "shareable": 1,
        "stackable": 1,
        "consumable": 1,
        "description": "A magical salve that can quickly mend even the deepest of wounds.",
        "abilities": [
            {
                "name": "Regenerate Health",
                "type": "target_unit",
                "affects": "allies",
                "description": "Restores HP over time. If the user is attacked, the effect is lost.",
                "attributes": {
                    "Duration": 10,
                    "Mana restored": 400
                }
            }
        ]
    },
    "40": {
        "name": "dust",
        "localized_name": "Dust of Appearance",
        "cost": 180,
        "shareable": 1,
        "stackable": 1,
        "consumable": 1,
        "abilities": [
            {
                "name": "Reveal",
                "type": "no_target",
                "affects": "enemies",
                "description": "Reveals invisible heroes in a nearby area.",
                "attributes": {
                    "Duration": 12,
                    "Radius": 1050
                }
            }
        ]
    },
    "41": {
        "name": "bottle",
        "localized_name": "Bottle",
        "cost": 600,
        "shareable": 1,
        "consumable": 1,
        "description": "An old bottle that survived the ages, the contents placed inside become enchanted.",
        "abilities": [
            {
                "name": "Regenerate",
                "type": "no_target",
                "affects": "self",
                "description": "Restores HP and Mana over time. Effect is lost if unit is attacked. Empty Bottle refills near town fountain. You can also store runes in the bottle, to save for later use. After 2 minutes, stored Runes will be activated.",
                "attributes": {
                    "Health Restored": 135,
                    "Mana Restored": 70,
                    "Duration": 3
                },
                "cooldown": 0.5
            }
        ]
    },
    "42": {
        "name": "ward_observer",
        "localized_name": "Observer Ward",
        "cost": 150,
        "shareable": 1,
        "stackable": 1,
        "abilities": [
            {
                "name": "Place Ward",
                "type": "target_point",
                "description": "Places an Observer Ward to give sight of the surrounding area. Lasts 6 minutes."
            }
        ]
    },
    "43": {
        "name": "ward_sentry",
        "localized_name": "Sentry Ward",
        "cost": 200,
        "shareable": 1,
        "stackable": 1,
        "abilities": [
            {
                "name": "Place Ward",
                "type": "target_point",
                "description": "Places an Sentry Ward to give True Sight of the surrounding area. Lasts 3 minutes."
            }
        ]
    },
    "44": {
        "name": "tango",
        "localized_name": "Tango",
        "cost": 90,
        "shareable": 1,
        "stackable": 1,
        "consumable": 1,
        "description": "Forage to survive on the battlefield.",
        "abilities": [
            {
                "name": "Eat Tree",
                "type": "trees",
                "affects": "self",
                "description": "Consume a tree to restore HP over time. Comes with 3 charges.",
                "attributes": {
                    "Duration": 16,
                    "Health restored": 115
                }
            }
        ]
    },
    "45": {
        "name": "courier",
        "localized_name": "Animal Courier",
        "cost": 150,
        "aliases": [
            "donkey",
            "chicken"
        ],
        "shareable": 1,
        "description": "Losing the donkey is punishable by death.",
        "abilities": [
            {
                "name": "Summon Animal Courier",
                "type": "no_target",
                "description": "Summons an Animal Courier to carry items for you. [CHECK DOTA TO MAKE SURE THIS IS CORRECT]"
            }
        ]
    },
    "46": {
        "name": "tpscroll",
        "localized_name": "Town Portal Scroll",
        "cost": 135,
        "aliases": [
            "tp"
        ],
        "shareable": 1,
        "stackable": 1,
        "consumable": 1,
        "abilities": [
            {
                "name": "Teleport",
                "type": "channeled",
                "affects": "self",
                "description": "Teleports you to within 525 range of a target friendly building. While channeling, gives 200 range vision on the target and pings your allies' minimaps. Teleporting to a non-fountain building takes additional time if any allies have also teleported within a 1100 radius of your target within 25 seconds.",
                "attributes": {
                    "Range": "Global",
                    "Casting time": "3 (5/6/7/8 for 1/2/3/4 recent allied teleports)"
                },
                "mana": 75,
                "cooldown": 65
            }
        ]
    },
    "47": {
        "name": "recipe_travel_boots",
        "localized_name": "Recipe: Boots of Travel",
        "cost": 2000,
        "recipe": 1
    },
    "48": {
        "name": "travel_boots",
        "localized_name": "Boots of Travel",
        "cost": 2450,
        "aliases": [
            "bot"
        ],
        "description": "Winged boots that grant omnipresence.",
        "bonuses": {
            "movement_speed": 100
        },
        "abilities": [
            {
                "name": "Teleport",
                "type": "channeled",
                "affects": "self",
                "description": "Teleports you to an allied non-hero unit or structure. While channeling, gives 200 range vision on the target and pings your allies' minimaps. Teleporting to a non-fountain building takes additional time if any allies have also teleported within a 1100 radius of your target within 25 seconds.",
                "attributes": {
                    "Range": "Global",
                    "Casting time": "3 (this value is not affected by the increase timer nor does it affect other allies' TP timers.)"
                },
                "mana": 75,
                "cooldown": 60
            }
        ],
        "components": [
            29,
            47
        ]

    },
    "49": {
        "name": "recipe_phase_boots",
        "localized_name": "Recipe: Phase Boots",
        "cost": 0,
        "recipe": 1
    },
    "50": {
        "name": "phase_boots",
        "localized_name": "Phase Boots",
        "cost": 1350,
        "description": "Boots that allow the wearer to travel between the ether.",
        "bonuses": {
            "damage": 24,
            "movement_speed": 55
        },
        "abilities": [
            {
                "name": "Phase",
                "type": "no_target",
                "affects": "self",
                "description": "Gives increased movement speed and lets you move through units. Phase is cancelled upon using another item or ability.",
                "attributes": {
                    "Bonus Movement Speed": "16%",
                    "Duration": 4
                },
                "cooldown": 8
            }
        ],
        "components": [
            29,
            2,
            2
        ]

    },
    "51": {
        "name": "demon_edge",
        "localized_name": "Demon Edge",
        "cost": 2400,
        "secret_shop": 1,
        "description": "One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.",
        "bonuses": {
            "damage": 46
        }
    },
    "52": {
        "name": "eagle",
        "localized_name": "Eaglesong",
        "cost": 3300,
        "secret_shop": 1,
        "description": "Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.",
        "bonuses": {
            "agility": 25
        }
    },
    "53": {
        "name": "reaver",
        "localized_name": "Reaver",
        "cost": 3200,
        "secret_shop": 1,
        "description": "A massive axe capable of tearing whole mountains down.",
        "bonuses": {
            "strength": 25
        }
    },
    "54": {
        "name": "relic",
        "localized_name": "Sacred Relic",
        "cost": 3800,
        "secret_shop": 1,
        "description": "An ancient weapon that often turns the tides of war.",
        "bonuses": {
            "damage": 60
        }
    },
    "55": {
        "name": "hyperstone",
        "localized_name": "Hyperstone",
        "cost": 2100,
        "secret_shop": 1,
        "description": "A mystical, carved stone that boosts the fervor of the holder.",
        "bonuses": {
            "attack_speed": 55
        }
    },
    "56": {
        "name": "ring_of_health",
        "localized_name": "Ring of Health",
        "cost": 875,
        "shareable": 1,
        "side_shop": 1,
        "secret_shop": 1,
        "aliases": [
            "roh"
        ],
        "description": "A shiny ring found beneath a fat halfling's corpse.",
        "bonuses": {
            "hp_regen": 5
        }
    },
    "57": {
        "name": "void_stone",
        "localized_name": "Void Stone",
        "cost": 875,
        "shareable": 1,
        "secret_shop": 1,
        "description": "Jewelry that was once used to channel nether realm magic, this ring pulses with energy.",
        "bonuses": {
            "mana_regen": "100%"
        }
    },
    "58": {
        "name": "mystic_staff",
        "localized_name": "Mystic Staff",
        "cost": 2700,
        "secret_shop": 1,
        "description": "Enigmatic staff made of only the most expensive crystals.",
        "bonuses": {
            "intelligence": 25
        }
    },
    "59": {
        "name": "energy_booster",
        "localized_name": "Energy Booster",
        "cost": 1000,
        "side_shop": 1,
        "secret_shop": 1,
        "description": "This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.",
        "bonuses": {
            "mana": 250
        }
    },
    "60": {
        "name": "point_booster",
        "localized_name": "Point Booster",
        "cost": 1200,
        "secret_shop": 1,
        "description": "A perfectly formed amethyst that nourishes body and mind when held.",
        "bonuses": {
            "hp": "200",
            "mana": "150"
        }
    },
    "61": {
        "name": "vitality_booster",
        "localized_name": "Vitality Booster",
        "cost": 1100,
        "secret_shop": 1,
        "description": "A ruby gemstone that has been passed down through generations of warrior kin.",
        "bonuses": {
            "hp": 250
        }
    },
    "62": {
        "name": "recipe_power_treads",
        "localized_name": "Recipe: Power Treads",
        "cost": 0,
        "recipe": 1
    },
    "63": {
        "name": "power_treads",
        "localized_name": "Power Treads",
        "cost": 1400,
        "description": "A pair of tough-skinned boots that change to meet the demands of the wearer.",
        "bonuses": {
            "selected_attribute": 8,
            "attack_speed": 30,
            "movement_speed": 55
        },
        "abilities": [
            {
                "name": "Switch Attribute",
                "type": "no_target",
                "description": "Changes selected attribute between Strength, Agility, and Intelligence"
            }
        ],
        "components": [
            29,
            17,
            25,
        ]

    },
    "64": {
        "name": "recipe_hand_of_midas",
        "localized_name": "Recipe: Hand of Midas",
        "cost": 1400,
        "aliases": [
            "hom"
        ],
        "recipe": 1
    },
    "65": {
        "name": "hand_of_midas",
        "localized_name": "Hand of Midas",
        "cost": 1900,
        "description": "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
        "bonuses": {
            "attack_speed": 30
        },
        "abilities": [
            {
                "name": "Transmute",
                "type": "target_unit",
                "affects": "units",
                "description": "Kills a non-hero target for 190 gold and 2.5&times; experience. Cannot be used on Ancients.",
                "cooldown": 100
            }
        ],
        "components": [
            25,
            64
        ]

    },
    "66": {
        "name": "recipe_oblivion_staff",
        "localized_name": "Recipe: Oblivion Staff",
        "cost": 0,
        "recipe": 1
    },
    "67": {
        "name": "oblivion_staff",
        "localized_name": "Oblivion Staff",
        "cost": 1675,
        "description": "Deceptively hidden as an ordinary quarterstaff, it is actually very powerful, much like the Eldritch who originally possessed it.",
        "bonuses": {
            "intelligence": 6,
            "mana_regen": "75%",
            "damage": 15,
            "attack_speed": 10
        },
        "components": [
            10,
            28,
            19,
        ]

    },
    "68": {
        "name": "recipe_pers",
        "localized_name": "Recipe: Perseverence",
        "cost": 0,
        "recipe": 1
    },
    "69": {
        "name": "pers",
        "localized_name": "Perseverance",
        "cost": 1750,
        "disassemblable": 1,
        "shareable": 1,
        "description": "A gem that grants heart to the bearer.",
        "bonuses": {
            "hp_regen": 5,
            "mana_regen": "125%",
            "damage": 10
        },
        "components": [
            56,
            57
        ]

    },
    "70": {
        "name": "recipe_poor_mans_shield",
        "localized_name": "Recipe: Poor Man's Shield",
        "cost": 0,
        "recipe": 1
    },
    "71": {
        "name": "poor_mans_shield",
        "localized_name": "Poor Man's Shield",
        "cost": 550,
        "aliases": [
            "pms"
        ],
        "description": "A busted old shield that seems to block more than it should.",
        "bonuses": {
            "agility": 6
        },
        "abilities": [
            {
                "name": "Damage Block",
                "type": "passive",
                "description": "Blocks physical attack damage, depending on the type of hero you are. Poor Man's Shield will always block attacks from enemy Heroes, but has a chance to block damage from creeps.",
                "attributes": {
                    "Chance to Block Non-Hero Damage": "60%",
                    "Damage Blocked (melee wielder)": 20,
                    "Damage Blocked (ranged wielder)": 10
                }
            }
        ],
        "components": [
            14,
            14,
            182,
        ]

    },
    "72": {
        "name": "recipe_bracer",
        "localized_name": "Recipe: Bracer",
        "cost": 190,
        "recipe": 1
    },
    "73": {
        "name": "bracer",
        "localized_name": "Bracer",
        "cost": 525,
        "description": "The bracer is a common choice to toughen up defenses and increase longevity.",
        "bonuses": {
            "strength": 6,
            "agility": 3,
            "intelligence": 3,
            "damage": 3
        },
        "components": [
            13,
            20,
            72,
        ]

    },
    "74": {
        "name": "recipe_wraith_band",
        "localized_name": "Recipe: Wraith Band",
        "cost": 150,
        "recipe": 1
    },
    "75": {
        "name": "wraith_band",
        "localized_name": "Wraith Band",
        "cost": 485,
        "description": "A circlet with fait whispers echoing about it.",
        "bonuses": {
            "strength": 3,
            "agility": 6,
            "intelligence": 3,
            "damage": 3
        },
        "components": [
            14,
            20,
            74,
        ]

    },
    "76": {
        "name": "recipe_null_talisman",
        "localized_name": "Recipe: Null Talisman",
        "cost": 135,
        "recipe": 1
    },
    "77": {
        "name": "null_talisman",
        "localized_name": "Null Talisman",
        "cost": 470,
        "description": "A small gemstone attached to several chains.",
        "bonuses": {
            "strength": 3,
            "agility": 3,
            "intelligence": 6,
            "damage": 3
        },
        "components": [
            15,
            20,
            76,
        ]

    },
    "78": {
        "name": "recipe_mekansm",
        "localized_name": "Recipe: Mekansm",
        "cost": 900,
        "recipe": 1
    },
    "79": {
        "name": "mekansm",
        "localized_name": "Mekansm",
        "cost": 2306,
        "aliases": [
            "mechanism"
        ],
        "description": "A glowing jewel formed out of assorted parts that somehow fit together perfectly.",
        "bonuses": {
            "strength": 5,
            "agility": 5,
            "intelligence": 5,
            "armor": 5
        },
        "abilities": [
            {
                "name": "Mekansm Aura",
                "type": "passive",
                "affects": "allies",
                "description": "Bonus HP Regen in an area. Multiple instances of Mekansm Aura do not stack.",
                "attributes": {
                    "Bonus Health Regeneration": 4,
                    "Radius": 500
                }
            },
            {
                "name": "Restore",
                "type": "no_target",
                "affects": "allies",
                "description": "Heals 250 HP and gives +2 armor in an area.",
                "attributes": {
                    "Radius": 750,
                    "Duration": 25
                },
                "mana": 150,
                "cooldown": 45
            }
        ],
        "components": [
            94,
            86,
            78
        ]

    },
    "80": {
        "name": "recipe_vladmir",
        "localized_name": "Recipe: Vladmir's Offering",
        "cost": 300,
        "recipe": 1
    },
    "81": {
        "name": "vladmir",
        "localized_name": "Vladmir's Offering",
        "cost": 2050,
        "description": "An eerie mask that is haunted with the malice of a fallen vampire.",
        "bonuses": {
            "hp_regen": 2
        },
        "abilities": [
            {
                "name": "Vladmir's Aura",
                "type": "aura",
                "affects": "allies",
                "description": "Grants a variety of bonuses to nearby allies. Lifesteal bonuses from Vladmir's Aura only affect melee units. Multiple instances of Vladmir's Aura do not stack.",
                "attributes": {
                    "Radius": 900,
                    "Lifesteal": "16%",
                    "Bonus Damage": "15%",
                    "Bonus Armor": 5,
                    "Bonus Mana Regeneration": 0.8
                }
            }
        ],
        "components": [
            27,
            88,
            26,
            80
        ]

    },
    "84": {
        "name": "flying_courier",
        "localized_name": "Flying Courier",
        "cost": 220,
        "aliases": [
            "crow"
        ],
        "shareable": 1,
        "consumable": 1,
        "description": "Losing the donkey is punishable by death.",
        "components": [
            45
        ]
    },
    "85": {
        "name": "recipe_buckler",
        "localized_name": "Recipe: Buckler",
        "cost": 200,
        "recipe": 1
    },
    "86": {
        "name": "buckler",
        "localized_name": "Buckler",
        "cost": 803,
        "description": "A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.",
        "bonuses": {
            "strength": 2,
            "agility": 2,
            "intelligence": 2,
            "armor": 5
        },
        "abilities": [
            {
                "name": "Armor Bonus",
                "type": "no_target",
                "affects": "allies",
                "description": "Gives +2 armor to all nearby allied units. Lasts 25 seconds on heroes, 30 seconds on units.",
                "attributes": {
                    "Radius": 700
                },
                "mana": 10,
                "duration": 25
            }
        ],
        "components": [
            4,
            16,
            85,
        ]

    },
    "87": {
        "name": "recipe_ring_of_basilius",
        "localized_name": "Recipe: Ring of Basilius",
        "cost": 0,
        "recipe": 1
    },
    "88": {
        "name": "ring_of_basilius",
        "localized_name": "Ring of Basilius",
        "cost": 500,
        "aliases": [
            "rob"
        ],
        "disassemblable": 1,
        "description": "Ring given as a reward to the greatest mages.",
        "bonuses": {
            "damage": 6,
            "armor": 1
        },
        "abilities": [
            {
                "name": "Basilius Aura",
                "type": "toggle",
                "affects": "allies",
                "description": "Grants mana regeneration and armor in a 900 radius.",
                "attributes": {
                    "Bonus Mana Regeneration": 0.65,
                    "Bonus Armor": 2
                }
            }
        ],
        "components": [
            28,
            12
        ]

    },
    "89": {
        "name": "recipe_pipe",
        "localized_name": "Recipe: Pipe of Insight",
        "cost": 900,
        "recipe": 1
    },
    "90": {
        "name": "pipe",
        "localized_name": "Pipe of Insight",
        "cost": 3628,
        "description": "A powerful artifact of mysterious origin, it creates barriers against magical forces.",
        "bonuses": {
            "hp_regen": 11,
            "magic_resistance": "30%"
        },
        "abilities": [
            {
                "name": "Barrier",
                "type": "no_target",
                "affects": "allies",
                "description": "Give nearby friendly unites a shield that blocks 400 magical damage.",
                "attributes": {
                    "Radius": 500,
                    "Duration": 10
                },
                "mana": 100,
                "cooldown": 60
            }
        ],
        "components": [
            131,
            94,
            89,
        ]

    },
    "91": {
        "name": "recipe_urn_of_shadows",
        "localized_name": "Recipe: Urn of Shadows",
        "cost": 250,
        "recipe": 1
    },
    "92": {
        "name": "urn_of_shadows",
        "localized_name": "Urn of Shadows",
        "cost": 200,
        "description": "Contains the ashes of powerful demons.",
        "bonuses": {
            "strength": 6,
            "mana_regen": "50%"
        },
        "abilities": [
            {
                "name": "Soul Release",
                "type": "target_unit",
                "affects": "heroes",
                "damage": "hp_removal",
                "description": "Heals HP over time for friendly units, but deals damage over time for enemy units. The healing effect is lost if the affected unit takes damage from an enemy hero or tower.",
                "attributes": {
                    "Allied Heal (Total)": 400,
                    "Enemy Damage (Total)": 150,
                    "Heal/Damage Duration": 8,
                    "Range": 950
                },
                "cooldown": 10
            }
        ],
        "components": [
            13,
            13,
            28,
            91,
        ]

    },
    "93": {
        "name": "recipe_headdress",
        "localized_name": "Recipe: Headdress",
        "cost": 200,
        "recipe": 1
    },
    "94": {
        "name": "headdress",
        "localized_name": "Headdress",
        "cost": 603,
        "description": "Creates a soothing aura that restores allies in battle.",
        "bonuses": {
            "strength": 2,
            "agility": 2,
            "intelligence": 2
        },
        "abilities": [
            {
                "name": "Regeneration Aura",
                "type": "passive",
                "affects": "allies",
                "description": "Restores HP to allies in a 500 unit radius. Multiple instances of Regeneration Aura do not stack.",
                "attributes": {
                    "Bonus Health Regeneration": 3
                }
            }
        ],
        "components": [
            27,
            16,
            93,
        ]

    },
    "95": {
        "name": "recipe_sheepstick",
        "localized_name": "Recipe: Sythe of Vyse",
        "cost": 700,
        "recipe": 1
    },
    "96": {
        "name": "sheepstick",
        "localized_name": "Sythe of Vyse",
        "cost": 5675,
        "aliases": [
            "hex",
            "sheepstick"
        ],
        "description": "The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.",
        "bonuses": {
            "strength": 10,
            "agility": 10,
            "intelligence": 35,
            "mana_regen": "150%"
        },
        "abilities": [
            {
                "name": "Hex",
                "type": "target_unit",
                "affects": "enemies",
                "description": "Turns a target unit into a harmless critter for 3.5 seconds. Destroys illusions.",
                "attributes": {
                    "Range": 800
                },
                "mana": 100,
                "cooldown": 35
            }
        ],
        "components": [
            58,
            24,
            57,
            95
        ]

    },
    "97": {
        "name": "recipe_orchid",
        "localized_name": "Recipe: Orchid Malevolence",
        "cost": 775,
        "recipe": 1
    },
    "98": {
        "name": "orchid",
        "localized_name": "Orchid Malevolence",
        "cost": 5025,
        "description": "A garnet rod constructed from the essence of a fire demon.",
        "bonuses": {
            "intelligence": 25,
            "mana_regen": "150%",
            "damage": 30,
            "attack_speed": 30
        },
        "abilities": [
            {
                "name": "Soul Burn",
                "type": "target_unit",
                "affects": "enemies",
                "damage": "magical",
                "description": "Silences target unit for 5 seconds and amplifies the damage it takes by 30%.",
                "attributes": {
                    "Range": 900
                },
                "mana": 100,
                "cooldown": 18
            }
        ],
        "components": [
            67,
            67,
            97,
        ]

    },
    "99": {
        "name": "recipe_cyclone",
        "localized_name": "Eul's Scepter of Divinity",
        "cost": 500,
        "recipe": 1
    },
    "100": {
        "name": "cyclone",
        "localized_name": "Eul's Scepter of Divinity",
        "cost": 2800,
        "aliases": [
            "cyclone",
            "euls"
        ],
        "description": "A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.",
        "bonuses": {
            "intelligence": 10,
            "mana_regen": "150%",
            "movement_speed": 30
        },
        "abilities": [
            {
                "name": "Cyclone",
                "type": "target_unit",
                "affects": "units",
                "description": "Target unit is swept up in a cyclone for 2.5 seconds, and is invulnerable.",
                "attributes": {
                    "Range": 700
                },
                "mana": 75,
                "cooldown": 30
            }
        ],
        "components": [
            23,
            28,
            57,
            99
        ]

    },
    "101": {
        "name": "recipe_force_staff",
        "localized_name": "Recipe: Force Staff",
        "cost": 1000,
        "recipe": 1
    },
    "102": {
        "name": "force_staff",
        "localized_name": "Force Staff",
        "cost": 2350,
        "aliases": [
            "fs"
        ],
        "description": "Allows you to manipulate others, for good or evil.",
        "bonuses": {
            "intelligence": 10,
            "hp_regen": 3
        },
        "abilities": [
            {
                "name": "Force",
                "type": "target_unit",
                "affects": "units",
                "description": "Pushes any target unit 600 units in the direction it is facing. Double click to self-cast.",
                "attributes": {
                    "Cast Range": 800
                },
                "mana": 25,
                "cooldown": 20
            }
        ],
        "components": [
            23,
            27,
            101,
        ]

    },
    "103": {
        "name": "recipe_dagon",
        "localized_name": "Recipe: Dagon",
        "cost": 1300,
        "recipe": 1
    },
    "104": {
        "name": "dagon",
        "localized_name": "Dagon",
        "cost": 2730,
        "description": "A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.",
        "bonuses": {
            "strength": 3,
            "agility": 3,
            "intelligence": "16/18/20/22/24",
            "damage": 9
        },
        "abilities": [
            {
                "name": "Energy Burst",
                "type": "target_unit",
                "affects": "enemies",
                "damage": "magical",
                "attributes": {
                    "Burst damage": "400/500/600/700/800",
                    "Range": "600/650/700/750/800"
                },
                "mana": "180/160/140/120/100",
                "range": "35/30/25/20/15"
            }
        ],
        "components": [
            23,
            77,
            103
        ]

    },
    "105": {
        "name": "recipe_necronomicon",
        "localized_name": "Recipe: Necronomicon",
        "cost": 1250,
        "recipe": 1
    },
    "106": {
        "name": "necronomicon",
        "localized_name": "Necronomicon",
        "cost": 2700,
        "description": "Considered the holy grail of necromancy and demonology, a powerful malefic force is locked within its pages.",
        "bonuses": {
            "strength": "8/12/16",
            "intelligence": "15/21/24"
        },
        "abilities": [
            {
                "name": "Demonic Summoning",
                "type": "no_target",
                "description": "Summons a Necronomicon Warrior and a Necronomicon Archer to fight for you. Their strength and abilities increase as Necronomicon increases in level. Lasts 35 seconds.",
                "mana": 50,
                "cooldown": 80
            }
        ],
        "components": [
            23,
            17,
            105
        ]
    },
    "107": {
        "name": "recipe_ultimate_scepter",
        "localized_name": "Recipe: Aghanim's Scepter",
        "cost": 0,
        "recipe": 1
    },
    "108": {
        "name": "ultimate_scepter",
        "localized_name": "Aghanim's Scepter",
        "cost": 4200,
        "aliases": [
            "ultimate"
        ],
        "description": "The scepter of a wizard with demigod-like powers.",
        "bonuses": {
            "strength": 10,
            "agility": 10,
            "intelligence": 10,
            "hp": 200,
            "mana": 150
        },
        "abilities": [
            {
                "name": "Ultimate Upgrade",
                "type": "passive",
                "description": "Upgrades the ultimates of certain heroes."
            }
        ],
        "components": [
            21,
            22,
            23,
            60
        ]

    },
    "109": {
        "name": "recipe_refresher",
        "localized_name": "Recipe: Refresher Orb",
        "cost": 1875,
        "recipe": 1
    },
    "110": {
        "name": "refresher",
        "localized_name": "Refresher Orb",
        "cost": 5300,
        "description": "A powerful artifact created for wizards.",
        "bonuses": {
            "intelligence": 6,
            "hp_regen": 5,
            "mana_regen": "200%",
            "damage": 40
        },
        "abilities": [
            {
                "name": "Reset Cooldowns",
                "type": "no_target",
                "description": "Resets the cooldowns of all your items and abilities."
            }
        ],
        "components": [
            67,
            69,
            109,
        ]

    },
    "111": {
        "name": "recipe_assault",
        "localized_name": "Recipe: Assault Cuirass",
        "cost": 1300,
        "recipe": 1
    },
    "112": {
        "name": "assault",
        "localized_name": "Assault Cuirass",
        "cost": 5350,
        "description": "Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.",
        "bonuses": {
            "armor": 10,
            "attack_speed": 35
        },
        "abilities": [
            {
                "name": "Assault Aura",
                "type": "aura",
                "affects": "units",
                "description": "Grants attack speed and armor to nearby allied units, and decreases armor for nearby enemies. Multiple instances of Assault Aura do not stack.",
                "attributes": {
                    "Radius": 900,
                    "Bonus Attack Speed": 20,
                    "Bonus Armor": 5,
                    "Armor Reduction": 5
                }
            }
        ],
        "components": [
            9,
            55,
            4,
            111
        ]

    },
    "113": {
        "name": "recipe_heart",
        "localized_name": "Recipe: Heart of Tarrasque",
        "cost": 1200,
        "recipe": 1
    },
    "114": {
        "name": "heart",
        "localized_name": "Heart of Tarrasque",
        "cost": 5500,
        "aliases": [
            "hot"
        ],
        "description": "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
        "bonuses": {
            "strength": 40,
            "hp": 300
        },
        "abilities": [
            {
                "name": "Health Regeneration",
                "type": "passive",
                "affects": "self",
                "description": "Restores a percentage of max health per second. This ability is disabled if damage is taken from an enemy Hero or Roshan within the last 4 seconds if your hero is melee or 6 seconds if your hero is ranged.",
                "attributes": {
                    "Health Restored per Second": "2%"
                }
            }
        ],
        "components": [
            53,
            61,
            113,
        ]

    },
    "115": {
        "name": "recipe_black_king_bar",
        "localized_name": "Recipe: Black King Bar",
        "cost": 1300,
        "recipe": 1
    },
    "116": {
        "name": "black_king_bar",
        "localized_name": "Black King Bar",
        "cost": 0,
        "aliases": [
            "bkb"
        ],
        "description": "A powerful staff imbued with the strength of giants.",
        "bonuses": {
            "strength": 10,
            "damage": 24
        },
        "abilities": [
            {
                "name": "Avatar",
                "type": "no_target",
                "affects": "self",
                "description": "Grants magic immunity. Duration and cooldown decrease with each use. Some Ultimate abilities are able to disable through Black King Bar.",
                "duration": "10/9/8/7/6/5",
                "cooldown": "80/75/70/65/60/55"
            }
        ],
        "components": [
            21,
            8,
            115,
        ]

    },
    "117": {
        "name": "aegis",
        "localized_name": "Aegis of the Immortal",
        "cost": 0,
        "consumable": 1,
        "description": "The Immortal was said to own a shield that protected him from death itself.",
        "abilities": [
            {
                "name": "Reincarnation",
                "type": "passive",
                "description": "Brings you to life with full health and mana 5 seconds after you die, at the location where you died. Reincarnation must be used within 6 minutes or Aegis of the Immortal disappears."
            }
        ]
    },
    "118": {
        "name": "recipe_shivas_guard",
        "localized_name": "Recipe: Shiva's Guard",
        "cost": 600,
        "recipe": 1
    },
    "119": {
        "name": "shivas_guard",
        "localized_name": "Shiva's Guard",
        "cost": 4700,
        "disassemblable": 1,
        "description": "Said to have belonged to a goddess, today it retains much of its former power.",
        "bonuses": {
            "intelligence": 30,
            "armor": 15
        },
        "abilities": [
            {
                "name": "Arctic Blast",
                "type": "no_target",
                "affects": "enemies",
                "damage": "magical",
                "description": "Emits a freezing wave that does 200 damage to enemies and slows their movement by 40% for 4 seconds.",
                "attributes": {
                    "Radius": 719
                },
                "mana": 100,
                "cooldown": 30
            },
            {
                "name": "Freezing Aura",
                "type": "aura",
                "affects": "enemies",
                "description": "Reduces attack speed on enemies. Multiple instances of Freezing Aura do not stack.",
                "attributes": {
                    "Attack Speed Slow": "30%",
                    "Radius": 1000
                }
            }
        ],
        "components": [
            9,
            58,
            118
        ]

    },
    "120": {
        "name": "recipe_bloodstone",
        "localized_name": "Bloodstone",
        "cost": 0,
        "recipe": 1
    },
    "121": {
        "name": "bloodstone",
        "localized_name": "Bloodstone",
        "cost": 5050,
        "aliases": [
            "bs"
        ],
        "description": "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
        "bonuses": {
            "hp": 500,
            "mana": 400,
            "hp_regen": 9,
            "mana_regen": "200%"
        },
        "abilities": [
            {
                "name": "Bloodpact",
                "type": "passive",
                "affects": "self",
                "description": "Starts with 6 charges. Gains 1 charge each time an enemy hero dies within 1675 range. Each charge bestows 1 mana regeneration per second, reduces gold lost from death by 25, and reduces respawn time by 4 seconds. When the bearer dies, restores 400 HP + 30 HP per charge to allied units within 1675 range, then loses a third of its charges. While dead, the bearer continues to receive experience at the death location and gives 1800 unit vision there."
            }
        ],
        "components": [
            69,
            129,
        ]
    },
    "122": {
        "name": "recipe_sphere",
        "localized_name": "Recipe: Linken's Sphere",
        "cost": 1325,
        "recipe": 1
    },
    "123": {
        "name": "sphere",
        "localized_name": "Linken's Sphere",
        "cost": 5175,
        "aliases": [
            "ls"
        ],
        "description": "This magical sphere once protected one of the most famous heroes in history.",
        "bonuses": {
            "strength": 15,
            "agility": 15,
            "intelligence": 15,
            "hp_regen": 6,
            "mana_regen": "150%",
            "damage": 10
        },
        "abilities": [
            {
                "name": "Spellblock",
                "type": "passive",
                "affects": "self",
                "description": "Blocks most targeted spells once every 20 seconds.",
                "cooldown": 17
            }
        ],
        "components": [
            24,
            69,
            122,
        ]
    },
    "124": {
        "name": "recipe_vanguard",
        "localized_name": "Recipe: Vanguard",
        "cost": 0,
        "recipe": 1
    },
    "125": {
        "name": "vanguard",
        "localized_name": "Vanguard",
        "cost": 2225,
        "description": "A powerful shield that defends its wielder from even the most vicious of attacks.",
        "bonuses": {
            "hp": 250,
            "hp_regen": 6
        },
        "abilities": [
            {
                "name": "Damage Block",
                "type": "passive",
                "description": "Gives a chance to block damage, depending on the type of hero you are.",
                "attributes": {
                    "Chance to Block": "70%",
                    "Damage Blocked (melee wielder)": 40,
                    "Damage Blocked (ranged wielder)": 20
                }
            }
        ],
        "components": [
            56,
            61,
            182
        ]
    },
    "126": {
        "name": "recipe_blade_mail",
        "localized_name": "Recipe: Blade Mail",
        "cost": 0,
        "recipe": 1
    },
    "127": {
        "name": "blade_mail",
        "localized_name": "Blade Mail",
        "cost": 2200,
        "description": "A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.",
        "bonuses": {
            "intelligence": 10,
            "damage": 22,
            "armor": 5
        },
        "abilities": [
            {
                "name": "Damage Return",
                "type": "no_target",
                "affects": "enemies",
                "damage": "pure",
                "description": "Returns any damage you take (after reduction) to the unit that dealt the damage. You still take the damage. Damage is returned as pure damage. Lasts for 4.5 seconds, costs 25 Mana, and has a 22 second cooldown. Blade mail cannot reflect damage taken from another suit of blade mail.",
                "mana": 25,
                "cooldown": 22
            }
        ],
        "components": [
            3,
            4,
            19
        ]
    },
    "128": {
        "name": "recipe_soul_booster",
        "localized_name": "Recipe: Soul Booster",
        "cost": 0,
        "recipe": 1
    },
    "129": {
        "name": "soul_booster",
        "localized_name": "Soul Booster",
        "cost": 3300,
        "description": "Regain lost courage.",
        "bonuses": {
            "hp": 450,
            "mana": 400,
            "hp_regen": 4,
            "mana_regen": "100%"
        },
        "components": [
            61,
            59,
            60
        ]
    },
    "130": {
        "name": "recipe_hood_of_defiance",
        "localized_name": "Recipe: Hood of Defiance",
        "cost": 0,
        "recipe": 1
    },
    "131": {
        "name": "hood_of_defiance",
        "localized_name": "Hood of Defiance",
        "cost": 2125,
        "description": "A furred, magic resistant headpiece that is feared by wizards.",
        "bonuses": {
            "hp_regen": 8,
            "magic_resistance": "30%"
        },
        "components": [
            56,
            31,
            27,
            27
        ]
    },
    "132": {
        "name": "recipe_rapier",
        "localized_name": "Recipe: Divine Rapier",
        "cost": 0,
        "recipe": 1,
    },
    "133": {
        "name": "rapier",
        "localized_name": "Divine Rapier",
        "cost": 6200,
        "description": "So powerful, it cannot have a single owner.",
        "bonuses": {
            "damage": 300
        },
        "components": [
            54,
            51
        ]
    },
    "134": {
        "name": "recipe_monkey_king_bar",
        "localized_name": "Recipe: Monkey King Bar",
        "cost": 0,
        "recipe": 1
    },
    "135": {
        "name": "monkey_king_bar",
        "localized_name": "Monkey King Bar",
        "cost": 5400,
        "aliases": [
            "mkb"
        ],
        "description": "A powerful staff used by a master warrior",
        "bonuses": {
            "damage": 88,
            "attack_speed": 15
        },
        "components": [
            51,
            7,
            7
        ]
    },
    "136": {
        "name": "recipe_radiance",
        "localized_name": "Recipe: Radiance",
        "cost": 1350,
        "recipe": 1
    },
    "137": {
        "name": "radiance",
        "localized_name": "Radiance",
        "cost": 5150,
        "description": "A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.",
        "bonuses": {
            "damage": 60
        },
        "abilities": [
            {
                "name": "Burn Damage",
                "type": "toggle",
                "affects": "enemies",
                "damage": "magical",
                "description": "Deals damage per second in a 650 radius.",
                "attributes": {
                    "Damage per Second": 45
                }
            }
        ],
        "components": [
            54,
            136
        ]
    },
    "138": {
        "name": "recipe_butterfly",
        "localized_name": "Recipe: Butterfly",
        "cost": 0,
        "recipe": 1
    },
    "139": {
        "name": "butterfly",
        "localized_name": "Butterfly",
        "cost": 6000,
        "aliases": [
            "bfly"
        ],
        "description": "Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.",
        "bonuses": {
            "agility": 30,
            "damage": 30,
            "evasion": "35%",
            "attack_speed": 30
        },
        "components": [
            32,
            10,
            52,
        ]
    },
    "140": {
        "name": "recipe_greater_crit",
        "localized_name": "Recipe: Daedalus",
        "cost": 1000,
        "recipe": 1
    },
    "141": {
        "name": "greater_crit",
        "localized_name": "Daedalus",
        "cost": 5550,
        "description": "A weapon of incredible power that is difficult for even the strongest of warriors to control.",
        "bonuses": {
            "damage": 81
        },
        "abilities": [
            {
                "name": "Critical Strike",
                "type": "passive",
                "affects": "enemies",
                "description": "Grants a chance to deal critical damage on an attack.",
                "attributes": {
                    "Critical Chance": "25%",
                    "Critical Damage": "2.4&times;"
                }
            }
        ],
        "components": [
            148,
            51,
            140
        ]

    },
    "142": {
        "name": "recipe_basher",
        "localized_name": "Recipe: Skull Basher",
        "cost": 1000,
        "recipe": 1,
        "invalid_heroes": [
            28,
            41,
            71,
            95
        ]
    },
    "143": {
        "name": "basher",
        "localized_name": "Skull Basher",
        "cost": 2950,
        "description": "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
        "bonuses": {
            "strength": 6,
            "damage": 40
        },
        "abilities": [
            {
                "name": "Bash",
                "type": "passive",
                "affects": "enemies",
                "description": "Gives a chance to stun for 1.4 seconds.",
                "attributes": {
                    "Bash Chance for Melee Heroes": "25%",
                    "Bash Chance for Ranged Heroes": "10%"
                }
            }
        ],
        "components": [
            17,
            7,
            142
        ]
    },
    "144": {
        "name": "recipe_bfury",
        "localized_name": "Recipe: Battle Fury",
        "cost": 0,
        "recipe": 1
    },
    "145": {
        "name": "bfury",
        "localized_name": "Battle Fury",
        "cost": 4350,
        "aliases": [
            "bf"
        ],
        "description": "The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.",
        "bonuses": {
            "hp_regen": 6,
            "mana_regen": "150%",
            "damage": 65
        },
        "abilities": [
            {
                "name": "Cleave",
                "type": "passive",
                "affects": "enemies",
                "description": "Deals a percent of attack damage in a 225 radius around the target. Does not work on ranged heroes. Cleave damage on non-primary targets is not reduced by armor values.",
                "attributes": {
                    "Cleave Damage": "35%"
                }
            }
        ],
        "components": [
            3,
            5,
            69
        ]
    },
    "146": {
        "name": "recipe_manta",
        "localized_name": "Recipe: Manta Style",
        "cost": 900,
        "recipe": 1
    },
    "147": {
        "name": "manta",
        "localized_name": "Manta Style",
        "cost": 5050,
        "disassemblable": 1,
        "description": "An axe made of reflective materials that causes confusion amongst enemy ranks.",
        "bonuses": {
            "strength": 10,
            "agility": 26,
            "intelligence": 10,
            "attack_speed": 15,
            "movement_speed": "10%"
        },
        "abilities": [
            {
                "name": "Mirror Image (melee)",
                "type": "no_target",
                "affects": "self",
                "description": "Creates 2 illusions of your hero that last 20 seconds. Melee illusions deal 33% damage and take 350% damage.",
                "mana": "165",
                "cooldown": 35
            },
            {
                "name": "Mirror Image (ranged)",
                "type": "no_target",
                "affects": "self",
                "description": "Creates 2 illusions of your hero that last 20 seconds. Melee illusions deal 28% damage and take 400% damage.",
                "mana": "165",
                "cooldown": 50
            }
        ],
        "components": [
            24,
            170,
            146
        ]
    },
    "148": {
        "name": "recipe_lesser_crit",
        "localized_name": "Recipe: Crystalys",
        "cost": 500,
        "recipe": 1
    },
    "149": {
        "name": "lesser_crit",
        "localized_name": "Crystalys",
        "cost": 2150,
        "description": "A blade forged from rare crystals, it seeks weak points in enemy armor.",
        "bonuses": {
            "damage": 30
        },
        "abilities": [
            {
                "name": "Critical Strike",
                "type": "passive",
                "affects": "enemies",
                "description": "Grants a chance to deal critical damage on an attack.",
                "attributes": {
                    "Critical Chance": "20%",
                    "Critical Damage": "1.75&times;"
                }
            }
        ],
        "components": [
            2,
            3,
            148
        ]
    },
    "150": {
        "name": "recipe_armlet",
        "localized_name": "Recipe: Armlet of Mordiggian",
        "cost": 700,
        "recipe": 1
    },
    "151": {
        "name": "armlet",
        "localized_name": "Armlet of Mordiggian",
        "cost": 2600,
        "description": "Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.",
        "bonuses": {
            "hp_regen": 8,
            "damage": 9,
            "armor": 5,
            "attack_speed": 15
        },
        "abilities": [
            {
                "name": "Unholy Strength",
                "type": "toggle",
                "affects": "self",
                "description": "Gives +31 damage, +10 attack speed, and +25 strength while active, but drains 40 HP per second. You cannot die from the health loss when the bonus strength is gone, or the health drain per second.",
                "cooldown": 2
            }
        ],
        "components": [
            6,
            25,
            2,
            150
        ]
    },
    "152": {
        "name": "invis_sword",
        "localized_name": "Shadow Blade",
        "cost": 3000,
        "aliases": [
            "sb",
            "invis"
        ],
        "description": "The blade of a fallen king, it allows you to move unseen and strike from the shadows.",
        "bonuses": {
            "damage": 30,
            "attack_speed": 30
        },
        "abilities": [
            {
                "name": "Shadow Walk",
                "type": "no_target",
                "affects": "self",
                "damage": "physical",
                "description": "Makes you invisible until the duration ends, or until you attack or cast a spell. While Shadow Walk is active, you move 20% faster and can move through units. If attacking to break the invisibility, you gain 150 bonus damage on that attack. Lasts 12 seconds.",
                "mana": 75,
                "cooldown": 18
            }
        ],
        "components": [
            5,
            215
        ]
    },
    "153": {
        "name": "recipe_sange_and_yasha",
        "localized_name": "Recipe: Sange and Yasha",
        "cost": 0,
        "recipe": 1
    },
    "154": {
        "name": "sange_and_yasha",
        "localized_name": "Sange and Yasha",
        "cost": 4100,
        "aliases": [
            "sny",
            "s&y",
            "sy"
        ],
        "description": "Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.",
        "bonuses": {
            "strength": 16,
            "agility": 16,
            "damage": 12,
            "attack_speed": 15,
            "movement_speed": "12%"
        },
        "abilities": [
            {
                "name": "Greater Maim",
                "type": "passive",
                "affects": "enemies",
                "description": "Gives a chance on attack to slow for 4 seconds.",
                "attributes": {
                    "Maim Chance": "15%",
                    "Movement Speed Slow": "30%",
                    "Attack Speed Slow": "30%"
                }
            }
        ],
        "components": [
            162,
            170
        ]
    },
    "155": {
        "name": "recipe_satanic",
        "localized_name": "Recipe: Satanic",
        "cost": 1100,
        "recipe": 1
    },
    "156": {
        "name": "satanic",
        "localized_name": "Satanic",
        "cost": 6150,
        "description": "Immense power at the cost of your soul.",
        "bonuses": {
            "strength": 25,
            "damage": 20,
            "armor": 5
        },
        "abilities": [
            {
                "name": "Unholy Rage",
                "type": "no_target",
                "affects": "self",
                "description": "Increases Lifesteal by 175% for 3.5 seconds.",
                "duration": 3.5,
                "cooldown": 35
            },
            {
                "name": "Lifesteal",
                "type": "passive",
                "description": "Gives lifesteal on attacks.",
                "uam": 1,
                "attributes": {
                    "Lifesteal": "25%"
                }
            }
        ],
        "components": [
            164,
            53,
            155
        ]
    },
    "157": {
        "name": "recipe_mjollnir",
        "localized_name": "Recipe: Mjollnir",
        "cost": 600,
        "recipe": 1
    },
    "158": {
        "name": "mjollnir",
        "localized_name": "Mjollnir",
        "cost": 5400,
        "disassemblable": 1,
        "description": "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
        "bonuses": {
            "damage": 24,
            "attack_speed": 80
        },
        "abilities": [
            {
                "name": "Static Charge",
                "type": "target_ally",
                "affects": "units",
                "damage": "magical",
                "description": "Places a charged shield on a target unit.",
                "attributes": {
                    "Duration": 20,
                    "Cast Range": 600,
                    "Lightning Chance": "20%",
                    "Damage": 200
                }
            },
            {
                "name": "Chain Lightning",
                "type": "passive",
                "affects": "enemies",
                "damage": "magical",
                "description": "Grants a chance on attack to release a Chain Lightning that hits 8 targets, dealing damage. Mjollnir is a Unique Attack Modifier that stacks with other Unique Attack Modifiers, but overrides them when Chain Lightning occurs.",
                "uam": 1,
                "attributes": {
                    "Chance": "25%",
                    "Damage": 160,
                    "Bounce Range": 500
                }
            }
        ],
        "components": [
            166,
            55,
            157
        ]
    },
    "159": {
        "name": "recipe_skadi",
        "localized_name": "Recipe: Eye of Skadi",
        "cost": 0,
        "recipe": 1
    },
    "160": {
        "name": "skadi",
        "localized_name": "Eye of Skadi",
        "cost": 5675,
        "aliases": [
            "eos"
        ],
        "description": "Extremely rare artifact, guarded by the azure dragons.",
        "bonuses": {
            "strength": 25,
            "agility": 25,
            "intelligence": 25,
            "hp": 250,
            "mana": 250
        },
        "abilities": [
            {
                "name": "Cold Attack",
                "type": "passive",
                "affects": "enemies",
                "description": "Eye of Skadi is a Unique Attack Modifier, and does not stack with other Unique Attack Modifiers. On ranged heroes, Eye of Skadi can be combined with a lifesteal Unique Attack Modifier.",
                "attributes": {
                    "Movement Speed Slow": "30%",
                    "Attack Speed Slow": "20%",
                    "Duration (melee wielder)": 5,
                    "Duration (ranged wielder)": 3
                }
            }
        ],
        "components": [
            24,
            24,
            60,
            181
        ]
    },
    "161": {
        "name": "recipe_sange",
        "localized_name": "Recipe: Sange",
        "cost": 600,
        "recipe": 1
    },
    "162": {
        "name": "sange",
        "localized_name": "Sange",
        "cost": 2050,
        "description": "Sange is an usually accurate weapon, seeking weak points automatically.",
        "bonuses": {
            "strength": 16,
            "damage": 10
        },
        "abilities": [
            {
                "name": "Lesser Maim",
                "type": "passive",
                "affects": "enemies",
                "description": "Gives a chance on attack to slow for 4 seconds.",
                "attributes": {
                    "Maim Chance": "15%",
                    "Movement Speed Slow": "20%",
                    "Attack Speed Slow": "20%"
                }
            }
        ],
        "components": [
            21,
            17,
            161
        ]
    },
    "163": {
        "name": "recipe_helm_of_the_dominator",
        "localized_name": "Recipe: Helm of the Dominator",
        "cost": 0,
        "recipe": 1
    },
    "164": {
        "name": "helm_of_the_dominator",
        "localized_name": "Helm of the Dominator",
        "cost": 1850,
        "aliases": [
            "hotd"
        ],
        "description": "The powerful headpiece of a dead necromancer.",
        "bonuses": {
            "damage": 20,
            "armor": 5
        },
        "abilities": [
            {
                "name": "Dominate",
                "type": "target_unit",
                "affects": "units",
                "description": "Take control of a non-hero, non-ancient target unit.",
                "attributes": {
                    "Cast Range": 700
                },
                "mana": 75,
                "cooldown": 60
            },
            {
                "name": "Lifesteal",
                "type": "passive",
                "description": "Gives lifesteal on attacks.",
                "uam": 1,
                "attributes": {
                    "Lifesteal": "15%"
                }
            }
        ],
        "components": [
            26,
            6
        ]
    },
    "165": {
        "name": "recipe_maelstrom",
        "localized_name": "Recipe: Maelstrom",
        "cost": 600,
        "recipe": 1
    },
    "166": {
        "name": "maelstrom",
        "localized_name": "Maelstrom",
        "cost": 2700,
        "description": "A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.",
        "bonuses": {
            "damage": 24,
            "attack_speed": 25
        },
        "abilities": [
            {
                "name": "Chain Lightning",
                "type": "passive",
                "affects": "enemies",
                "damage": "magical",
                "description": "Grants a chance on attack to release a Chain Lightning that hits 4 targets, dealing damage. Maelstrom is a Unique Attack Modifier that stacks with other Unique Attack Modifiers, but overrides them when Chain Lightning occurs.",
                "uam": 1,
                "attributes": {
                    "Chance": "25%",
                    "Damage": 120,
                    "Bounce Range": 500
                }
            }
        ],
        "components": [
            25,
            8,
            165
        ]
    },
    "167": {
        "name": "recipe_desolator",
        "localized_name": "Recipe: Desolator",
        "cost": 900,
        "recipe": 1
    },
    "168": {
        "name": "desolator",
        "localized_name": "Desolator",
        "cost": 4100,
        "description": "A wicked weapon, used in torturing political criminals.",
        "bonuses": {
            "damage": 60
        },
        "abilities": {
            "name": "Corruption",
            "type": "passive",
            "affects": "enemy_units_and_structures",
            "description": "Your attacks reduce target's armor.",
            "uam": 1,
            "attributes": {
                "Armor Reduction": 6,
                "Duration": 15
            }
        },
        "components": [
            8,
            8,
            167
        ]
    },
    "169": {
        "name": "recipe_yasha",
        "localized_name": "Recipe: Yasha",
        "cost": 600,
        "recipe": 1
    },
    "170": {
        "name": "yasha",
        "localized_name": "Yasha",
        "cost": 2050,
        "description": "Yasha is regarded as thet swiftest weapon ever created.",
        "bonuses": {
            "agility": 16,
            "attack_speed": 15,
            "movement_speed": "10%"
        },
        "components": [
            22,
            18,
            169
        ]
    },
    "171": {
        "name": "recipe_mask_of_madness",
        "localized_name": "Recipe: Mask of Madness",
        "cost": 1000,
        "recipe": 1
    },
    "172": {
        "name": "mask_of_madness",
        "localized_name": "Mask of Madness",
        "cost": 1900,
        "aliases": [
            "mom"
        ],
        "description": "Once this mask is worn, its bearer becomes an uncontrollable aggressive force.",
        "abilities": [
            {
                "name": "Berserk",
                "type": "no_target",
                "affects": "self",
                "description": "Gives +100 attack speed and +30% movement speed but causes you to take extra 30% damage.",
                "attributes": {
                    "Duration": 12
                },
                "mana": 25,
                "cooldown": 25
            },
            {
                "name": "Lifesteal",
                "type": "passive",
                "description": "Gives lifesteal on attacks.",
                "uam": 1,
                "attributes": {
                    "Lifesteal": "17%"
                }
            }
        ],
        "components": [
            26,
            171
        ]
    },
    "173": {
        "name": "recipe_diffusal_blade",
        "localized_name": "Recipe: Diffusal Blade",
        "cost": 850,
        "recipe": 1
    },
    "174": {
        "name": "diffusal_blade",
        "localized_name": "Diffusal Blade",
        "cost": 3300,
        "description": "An enchanted blade that allows the user to cut straight into the enemy's soul.",
        "bonuses": {
            "agility": "22/26",
            "intelligence": "6/10"
        },
        "abilities": [
            {
                "name": "Purge",
                "type": "target_unit",
                "affects": "units",
                "description": "Purges a target unit, removing buffs, slowing, and dealing damage if it is a summoned unit.",
                "attributes": {
                    "Range": 600,
                    "Slow Duration": 4
                },
                "cooldown": 8
            },
            {
                "name": "Feedback",
                "type": "passive",
                "affects": "enemies",
                "damage": "physical",
                "description": "Your attacks burn 20 mana (36 mana when upgraded) and deal the same amount in damage. Upgradable.",
                "uam": 1
            }
        ],
        "components": [
            22,
            22,
            19,
            173
        ]
    },
    "175": {
        "name": "recipe_ethereal_blade",
        "localized_name": "Recipe: Ethereal Blade",
        "cost": 0,
        "recipe": 1
    },
    "176": {
        "name": "ethereal_blade",
        "localized_name": "Ethereal Blade",
        "cost": 4900,
        "aliases": [
            "eb"
        ],
        "disassemblable": 1,
        "description": "A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.",
        "bonuses": {
            "strength": 10,
            "agility": 40,
            "intelligence": 10
        },
        "abilities": [
            {
                "name": "Ether Blast",
                "type": "target_unit",
                "affects": "units",
                "damage": "magical",
                "description": "Converts you and your target into ethereal form. Target unit is slowed and cannot attack or be attacked, and takes 2&times; your primary attribute + 75 as damage.",
                "attributes": {
                    "Movement Speed Slow": "80%",
                    "Duration": 3,
                    "Range": 800
                },
                "mana": 150,
                "cooldown": 30
            }
        ],
        "components": [
            37,
            52
        ]
    },
    "177": {
        "name": "recipe_soul_ring",
        "localized_name": "Recipe: Soul Ring",
        "cost": 125,
        "recipe": 1
    },
    "178": {
        "name": "soul_ring",
        "localized_name": "Soul Ring",
        "cost": 800,
        "description": "A ring that feeds on the souls of those around it.",
        "bonuses": {
            "hp_regen": 3,
            "mana_regen": "50%"
        },
        "abilities": [
            {
                "name": "Sacrifice",
                "type": "no_target",
                "affects": "self",
                "description": "Consume 150 HP to temporarily gain 150 mana. Lasts 10 seconds.",
                "cooldown": 30
            }
        ],
        "components": [
            27,
            28,
            177
        ]
    },
    "179": {
        "name": "recipe_arcane_boots",
        "localized_name": "Recipe: Arcane Boots",
        "cost": 0,
        "recipe": 1
    },
    "180": {
        "name": "arcane_boots",
        "localized_name": "Arcane Boots",
        "cost": 1450,
        "aliases": [
            "mana",
            "mb"
        ],
        "description": "Magi equipped with these boots are valued in battle.",
        "bonuses": {
            "mana": 250,
            "movement_speed": 60
        },
        "abilities": [
            {
                "name": "Replenish Mana",
                "type": "no target",
                "affects": "allies",
                "description": "Restores mana in an area around the hero.",
                "attributes": {
                    "Mana Restored": 135,
                    "Radius": 600
                },
                "mana": 25,
                "cooldown": 55
            }
        ],
        "components": [
            29,
            59
        ]
    },
    "181": {
        "name": "orb_of_venom",
        "localized_name": "Orb of Venom",
        "cost": 275,
        "side_shop": 1,
        "secret_shop": 1,
        "description": "Imbues your weapon with the venom of a poisonous spider.",
        "abilities": [
            {
                "name": "Poison Attack",
                "type": "passive",
                "affects": "enemies",
                "damage": "magical",
                "description": "Poisons the target, dealing damage over time and slowing, depending on whether your hero is melee or ranged.",
                "uam": 1,
                "attributes": {
                    "Damage per second": 3,
                    "Movement Speed Slow (Ranged Wielder)": "4%",
                    "Movement Speed Slow (Melee Wielder)": "12%",
                    "Duration": 4
                }
            }
        ]
    },
    "182": {
        "name": "stout_shield",
        "localized_name": "Stout Shield",
        "cost": 250,
        "side_shop": 1,
        "description": "One man's wine barrel bottem is another man's shield.",
        "abilities": [
            {
                "name": "Damage Block",
                "type": "passive",
                "description": "Gives a chance to block damage, depending on the type of hero you are.",
                "attributes": {
                    "Chance to Block": "60%",
                    "Damage Blocked (melee wielder)": 20,
                    "Damage Blocked (ranged wielder)": 10
                }
            }
        ]
    },
    "183": {
        "name": "recipe_invis_sword",
        "localized_name": "Recipe: Shadow Blade",
        "cost": 0,
        "recipe": 1
    },
    "184": {
        "name": "recipe_ancient_janggo",
        "localized_name": "Recipe: Drum of Endurance",
        "cost": 750,
        "recipe": 1
    },
    "185": {
        "name": "ancient_janggo",
        "localized_name": "Drum of Endurance",
        "cost": 1725,
        "description": "A relic that enchants the bodies of those around it for swifter movement in times of crisis.",
        "bonuses": {
            "strength": 9,
            "agility": 9,
            "intelligence": 9,
            "damage": 3
        },
        "abilities": [
            {
                "name": "Endurance",
                "type": "no_target",
                "affects": "allied_heroes",
                "description": "Gives bonus +10 attack speed and +10% movement speed to surrounding allies.",
                "attributes": {
                    "Radius": 900,
                    "Duration": 6
                },
                "cooldown": 30
            },
            {
                "name": "Swiftness Aura",
                "type": "aura",
                "affects": "allies",
                "description": "Gives bonus attack and movement speed to surrounding allies.",
                "attributes": {
                    "Bonus Attack Speed": 5,
                    "Bonus Movement Speed": "5%",
                    "Radius": 900
                }
            }
        ],
        "components": [
            73,
            19,
            184
        ]
    },
    "186": {
        "name": "recipe_medallion_of_courage",
        "localized_name": "Medallion of Courage",
        "cost": 200,
        "recipe": 1
    },
    "187": {
        "name": "medallion_of_courage",
        "localized_name": "Medallion of Courage",
        "cost": 1075,
        "description": "The bearer has no fear of combat.",
        "bonuses": {
            "mana_regen": "50%",
            "armor": 6
        },
        "abilities": [
            {
                "name": "Valor",
                "type": "target_unit",
                "affects": "enemies",
                "description": "Reduces the armor of you and your target. Lasts 7 seconds.",
                "attributes": {
                    "Armor Reduction": 6,
                    "Range": 800
                },
                "cooldown": 7
            }
        ],
        "components": [
            4,
            28,
            186
        ]
    },
    "188": {
        "name": "smoke_of_deceit",
        "localized_name": "Smoke of Deceit",
        "cost": 0,
        "shareable": 1,
        "stackable": 1,
        "abilities": [
            {
                "name": "Smoke of Deceit",
                "type": "no_target",
                "affects": "allied_heroes",
                "description": "pon activation, the user and all nearby allied player-controlled units gain invisiblity and bonus movement speed for a brief time. Minimap icons will also be hidden. Upon moving within 1025 range of an enemy hero or tower, the invisibility and movement speed bonus is lost.",
                "attributes": {
                    "Radius": 1200,
                    "Bonus Movement Speed": "15%",
                    "Duration": 40
                },
                "cooldown": 90
            }
        ]
    },
    "189": {
        "name": "recipe_veil_of_discord",
        "localized_name": "Recipe: Veil of Discord",
        "cost": 1250,
        "recipe": 1
    },
    "190": {
        "name": "veil_of_discord",
        "localized_name": "Veil of Discord",
        "cost": 2650,
        "aliases": [
            "vod"
        ],
        "description": "The headwear of corrupt magi.",
        "bonuses": {
            "intelligence": 12,
            "hp_regen": 6,
            "armor": 6
        },
        "abilities": [
            {
                "name": "Magic Weakness",
                "type": "target_point",
                "affects": "enemies",
                "description": "Emits a weakening blast that increases the magical damage enemies take. Lasts 20 seconds.",
                "attributes": {
                    "Radius": 550,
                    "Magical Damage Amplification": "25%",
                    "Range": 1000
                },
                "mana": 75,
                "cooldown": 30
            }
        ],
        "components": [
            6,
            19,
            189
        ]
    },
    "191": {
        "name": "recipe_necronomicon_2",
        "localized_name": "Recipe: Necronomicon (2)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 105
    },
    "192": {
        "name": "recipe_necronomicon_3",
        "localized_name": "Recipe: Necronomicon (3)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 105
    },
    "193": {
        "name": "necronomicon_2",
        "localized_name": "Necronomicon (2)",
        "cost": 3950,
        "duplicate": 106,
        "components": [
            106,
            105
        ]
    },
    "194": {
        "name": "necronomicon_3",
        "localized_name": "Necronomicon (3)",
        "cost": 5200,
        "duplicate": 106,
        "components": [
            193,
            105
        ]
    },
    "195": {
        "name": "recipe_diffusal_blade_2",
        "localized_name": "Recipe: Diffusal Blade (2)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 195
    },
    "196": {
        "name": "diffusal_blade",
        "localized_name": "Diffusal Blade (2)",
        "cost": 4150,
        "duplicate": 174,
        "components": [
            174,
            173
        ]
    },
    "197": {
        "name": "recipe_dagon_2",
        "localized_name": "Recipe: Dagon (2)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 103
    },
    "198": {
        "name": "recipe_dagon_3",
        "localized_name": "Recipe: Dagon (3)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 103
    },
    "199": {
        "name": "recipe_dagon_4",
        "localized_name": "Recipe: Dagon (4)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 103
    },
    "200": {
        "name": "recipe_dagon_5",
        "localized_name": "Recipe: Dagon (5)",
        "cost": 0,
        "recipe": 1,
        "duplicate": 103
    },
    "201": {
        "name": "dagon_2",
        "localized_name": "Dagon (2)",
        "cost": 3980,
        "duplicate": 104,
        "components": [
            104,
            103
        ]
    },
    "202": {
        "name": "dagon_3",
        "localized_name": "Dagon (3)",
        "cost": 5230,
        "duplicate": 104,
        "components": [
            201,
            103
        ]
    },
    "203": {
        "name": "dagon_4",
        "localized_name": "Dagon (4)",
        "cost": 6480,
        "duplicate": 104,
        "components": [
            202,
            103
        ]
    },
    "204": {
        "name": "dagon_5",
        "localized_name": "Dagon (5)",
        "cost": 7730,
        "duplicate": 104,
        "components": [
            203,
            103
        ]
    },
    "205": {
        "name": "recipe_rod_of_atos",
        "localized_name": "Recipe: Rod of Atos",
        "cost": 0,
        "recipe": 1
    },
    "206": {
        "name": "rod_of_atos",
        "localized_name": "Rod of Atos",
        "cost": 3100,
        "description": "Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.",
        "bonuses": {
            "intelligence": 25,
            "hp": 325
        },
        "abilities": [
            {
                "name": "Cripple",
                "type": "target_unit",
                "affects": "enemies",
                "description": "Slows the target's movement speed.",
                "attributes": {
                    "Movement Speed Slow": "60%",
                    "Duration": 4,
                    "Range": 1200
                },
                "mana": 50,
                "cooldown": 16
            }
        ],
        "components": [
            23,
            23,
            61
        ]
    },
    "207": {
        "name": "recipe_abyssal_blade",
        "localized_name": "Recipe: Abyssal Blade",
        "cost": 0,
        "recipe": 1
    },
    "208": {
        "name": "abyssal_blade",
        "localized_name": "Abyssal Blade",
        "cost": 6750,
        "disassemblable": 1,
        "description": "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
        "bonuses": {
            "strength": 10,
            "damage": 100
        },
        "abilities": [
            {
                "name": "Overwhelm",
                "type": "target_unit",
                "affects": "enemies",
                "description": "Stun a target enemy unit for 2 seconds. Goes through Magic Immunity.",
                "attributes": {
                    "Range": 140
                },
                "mana": 150,
                "cooldown": 60
            }
        ],
        "components": [
            143,
            54,
        ]
    },
    "209": {
        "name": "recipe_heavens_halberd",
        "localized_name": "Recipe: Heaven's Halberd",
        "cost": 0,
        "recipe": 1
    },
    "210": {
        "name": "heavens_halberd",
        "localized_name": "Heaven's Halberd",
        "cost": 3850,
        "description": "This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.",
        "bonuses": {
            "strength": 20,
            "damage": 25,
            "evasion": "25%"
        },
        "abilities": [
            {
                "name": "Disarm",
                "type": "target_unit",
                "affects": "enemies",
                "description": "Disarms the target for 4.5 seconds. Lasts 3 on melee targets.",
                "attributes": {
                    "Range": 600
                },
                "mana": 100,
                "cooldown": 30
            },
            {
                "name": "Lesser Maim",
                "type": "passive",
                "affects": "enemies",
                "description": "Gives a chance on attack to slow for 4 seconds.",
                "attributes": {
                    "Maim Chance": "15%",
                    "Movement Speed Slow": "20%",
                    "Attack Speed Slow": "20%"
                }
            }
        ],
        "components": [
            162,
			32
        ]
    },
    "211": {
        "name": "recipe_ring_of_aquila",
        "localized_name": "Recipe: Ring of Aquila",
        "cost": 0,
        "recipe": 1
    },
    "212": {
        "name": "ring_of_aquila",
        "localized_name": "Ring of Aquila",
        "cost": 985,
        "aliases": [
            "roa"
        ],
        "shareable": 1,
        "disassemblable": 1,
        "description": "The ring of the fallen Warlord Aquila continues to support armies in battle.",
        "bonuses": {
            "strength": 3,
            "agility": 6,
            "intelligence": 3,
            "damage": 9,
            "armor": 1
        },
        "abilities": [
            {
                "name": "Aquila Aura",
                "type": "toggle",
                "affects": "allies",
                "description": "Grants mana regeneration and armor in a 900 radius.",
                "attributes": {
                    "Bonus Mana Regeneration": 0.65,
                    "Bonus Armor": 2
                }
            }
        ],
        "components": [
            88,
            75
        ]
    },
    "213": {
        "name": "recipe_tranquil_boots",
        "localized_name": "Recipe: Tranquil Boots",
        "cost": 0,
        "recipe": 1
    },
    "214": {
        "name": "tranquil_boots",
        "localized_name": "Tranquil Boots",
        "cost": 975,
        "disassemblable": 1,
        "description": "While they increase the longevity of the wearer, this boot is not particularly reliable.",
        "bonuses": {
            "hp_regen": 3,
            "armor": 3,
            "movement_speed": 75
        },
        "components": [
            29,
            56,
            12
        ],
        "abilities": [
            {
                "name": "Heal",
                "type": "no_target",
                "affects": "self",
                "description": "Restores 250 HP over 20 seconds for the wearer. If you take damage from a tower or another player, the heal is lost. The tooltip incorrectly states that Roshan will cancel the heal.",
                "mana": 25,
                "cooldown": 60
            }
        ]
    },
    "215": {
        "name": "shadow_amulet",
        "localized_name": "Shadow Amulet",
        "cost": 1600,
        "bonuses": {
            "attack_speed": 30
        },
        "abilities": [
            {
                "name": "Fade",
                "type": "no_target",
                "affects": "self",
                "description": "Fade to invisibility. If you move you will become visible.",
                "attributes": {
                    "Fade Time": 2.6
                }
            }
        ]
    }
}

var base_items = {}
for (k in all_items) {
    var item = all_items[k];
    if (item && item.cost) {
        base_items[k]=item;
    }
}

function compareItemIdByCost(a, b) {
    return base_items[a].cost - base_items[b].cost
}

var sorted_base_items = Object.keys(base_items).sort(compareItemIdByCost);

for (x in sorted_base_items) {
    var item = base_items[sorted_base_items[x]];
    if (item.components && item.components.length) {
        var build_cost = 0;
        for (id in item.components) {
            var compo_item = base_items[item.components[id]];
            compo_build_cost = compo_item.build_cost || compo_item.cost;
            build_cost = Math.max(build_cost, compo_build_cost);
        }
        item.build_cost = build_cost;
    } else {
        item.build_cost = item.cost;
    }
}

var cd = {
    scale: 1,
    item_scale: 1,
    x: 0,
    y: 0,
    zoomscale: 0.1,
    item_group: new Kinetic.Group()
}

var zoom = function(evt) {
        evt.preventDefault();
            mx = evt.clientX /* - canvas.offsetLeft */,
            my = evt.clientY /* - canvas.offsetTop */,
            wheel = evt.wheelDelta / 120;
        var zoom = 1 + (cd.zoomscale * (evt.wheelDelta < 0 ? -1 : 1));
        var newscale = cd.scale * zoom;
        var itemscale = cd.item_scale / zoom;
        cd.x = mx / cd.scale + cd.x - mx / newscale;
        cd.y = my / cd.scale + cd.y - my / newscale;

        cd.stage.setOffset(cd.x, cd.y);
        cd.stage.setScale(newscale);
        cd.item_group.getChildren().each(function (shape, n) {
            shape.setScale(itemscale);
        });
        cd.stage.draw();

        cd.item_scale = itemscale;
        cd.scale = newscale;
}

$(document).ready(function () {
    var stage = new Kinetic.Stage({
        container: 'chart',
        width: '1400',
        height: '900'
    });
    cd.stage = stage

    var layer = new Kinetic.Layer();
    layer.setDraggable("draggable");

    var dragtangle = new Kinetic.Rect({
        x: -3000,
        y: -3000,
        width: 6000,
        height: 6000,
        fill: "#000000",
        opacity: 0
    });

    layer.add(dragtangle);

    for (k in base_items) {
        var item = base_items[k];
        var text = new Kinetic.Text({
            x: item.cost / 6000.0 * stage.getWidth(),
            y: item.build_cost / 4000.0 * stage.getHeight() + k % 15,
            text: item.localized_name,
            fontSize: 12,
            fontFamily: 'Arial',
            fill: item.recipe ? 'orange': 'green'
        });
        cd.item_group.add(text);
    }
    for (x = 0; x < 9000; x+=500) {
        var text = new Kinetic.Text({
            x: x / 6000.0 * stage.getWidth(),
            y: 0,
            text: x,
            fontSize: 12,
            fontFamily: 'Arial',
            fontStyle: 'bold',
            fill: 'black'
        });
        cd.item_group.add(text);
    }
    for (x = 0; x < 5000; x+=500) {
        var text = new Kinetic.Text({
            x: 0,
            y: x / 4000.0 * stage.getHeight(),
            text: x,
            fontSize: 12,
            fontFamily: 'Arial',
            fontStyle: 'bold',
            fill: 'black'
        });
        cd.item_group.add(text);
    }
    layer.add(cd.item_group);
    document.addEventListener("mousewheel", zoom, false);
    document.addEventListener("DOMMouseScroll", zoom, false);
    // add the layer to the stage
    stage.add(layer);
});
