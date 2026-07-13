const RECIPE_TYPES = [
    "minecraft:crafting",
    "minecraft:smelting",
    "minecraft:blasting",
    "minecraft:smoking",
    "minecraft:campfire_cooking",
    "minecraft:stonecutting",
    "minecraft:smithing",
    "cfm:grill_cooking",
    "cfm:freezer_solidify",
    "mekanism:crushing",
    "mekanism:enriching",
    "mekanism:smelting",
    "mekanism:chemical_infusing",
    "mekanism:combining",
    "mekanism:separating",
    "mekanism:washing",
    "mekanism:evaporating",
    "mekanism:activating",
    "mekanism:centrifuging",
    "mekanism:crystallizing",
    "mekanism:dissolution",
    "mekanism:compressing",
    "mekanism:purifying",
    "mekanism:injecting",
    "mekanism:nucleosynthesizing",
    "mekanism:energy_conversion",
    "mekanism:gas_conversion",
    "mekanism:oxidizing",
    "mekanism:infusion_conversion",
    "mekanism:pigment_extracting",
    "mekanism:pigment_mixing",
    "mekanism:metallurgic_infusing",
    "mekanism:painting",
    "mekanism:reaction",
    "mekanism:rotary",
    "mekanism:sawing",
    "superbwarfare:vehicle_assembling",
    "superbwarfare:researching",
    "farmersdelight:cooking",
    "farmersdelight:cutting",
    "nfm:chopping",
    "nfm:cooking",
    "nfm:toasting"
]

const BANNED_ITEM_TABLE = {
    "minecraft": {
        "warped": ["warped_sign", "warped_hyphae", "stripped_warped_stem", "warped_fungus", "warped_slab", "warped_nylium", "warped_trapdoor", "warped_button", "warped_wart_block", "warped_pressure_plate", "warped_door", "warped_stem", "warped_fence", "stripped_warped_hyphae", "warped_hanging_sign", "warped_stairs", "warped_fungus_on_a_stick", "warped_roots", "warped_planks", "warped_fence_gate"],
        "crimson": ["crimson_stairs", "crimson_hanging_sign", "crimson_slab", "crimson_fence", "crimson_pressure_plate", "crimson_trapdoor", "crimson_fence_gate", "crimson_fungus", "crimson_roots", "stripped_crimson_hyphae", "crimson_planks", "crimson_button", "stripped_crimson_stem", "crimson_door", "crimson_stem", "crimson_hyphae", "crimson_nylium", "crimson_sign"],
        "end": ["ender_eye", "end_stone", "end_stone_brick_slab", "ender_chest", "end_stone_brick_stairs", "end_crystal", "end_portal_frame", "end_stone_bricks", "ender_pearl", "end_stone_brick_wall"],
        "mob_drops": ["phantom_membrane", "spider_eye", "scute", "shulker_shell", "ghast_tear", "nether_star"],
        "food": ["enchanted_golden_apple", "golden_apple", "chorus_fruit"],
        "armor": ["turtle_helmet", "golden_horse_armor", "elytra", "golden_helmet", "golden_chestplate", "golden_leggings", "golden_boots"],
        "tools": ["trident", "golden_sword", "golden_axe", "golden_pickaxe", "golden_shovel", "golden_hoe"],
        "blocks": ["enchanting_table", "respawn_anchor", "dragon_egg", "piglin_head", "creeper_head", "zombie_head", "player_head", "dragon_head", "purpur_stairs", "purpur_block", "purpur_pillar", "purpur_slab", "chorus_plant", "chorus_flower", "beacon", "soul_campfire", "soul_lantern", "red_nether_bricks", "red_nether_brick_wall", "red_nether_brick_slab", "red_nether_brick_stairs", "nether_gold_ore", "smithing_table", "basalt", "polished_basalt", "smooth_basalt"],
        "items": ["soul_torch", "totem_of_undying", "popped_chorus_fruit", "nether_wart", "dragon_breath", "turtle_egg", "sniffer_egg"],
        "shulker_boxes": ["brown_shulker_box", "cyan_shulker_box", "green_shulker_box", "light_gray_shulker_box", "light_blue_shulker_box", "lime_shulker_box", "red_shulker_box", "black_shulker_box", "white_shulker_box", "shulker_box", "yellow_shulker_box", "magenta_shulker_box", "shulker_spawn_egg", "purple_shulker_box", "pink_shulker_box", "gray_shulker_box", "orange_shulker_box", "blue_shulker_box"],
        "candles": ["blue_candle", "purple_candle", "white_candle", "light_gray_candle", "gray_candle", "pink_candle", "black_candle", "green_candle", "candle", "cyan_candle", "magenta_candle", "brown_candle", "lime_candle", "light_blue_candle", "yellow_candle", "red_candle", "orange_candle"],
        "banners": ["magenta_banner", "brown_banner", "yellow_banner", "white_banner", "green_banner", "light_gray_banner", "gray_banner", "pink_banner", "mojang_banner_pattern", "light_blue_banner", "black_banner", "flower_banner_pattern", "lime_banner", "purple_banner", "piglin_banner_pattern", "orange_banner", "blue_banner", "cyan_banner", "red_banner", "globe_banner_pattern", "skull_banner_pattern", "creeper_banner_pattern"],
        "smithing": ["netherite_upgrade_smithing_template", "wayfinder_armor_trim_smithing_template", "snout_armor_trim_smithing_template", "shaper_armor_trim_smithing_template", "raiser_armor_trim_smithing_template", "tide_armor_trim_smithing_template", "vex_armor_trim_smithing_template", "dune_armor_trim_smithing_template", "rib_armor_trim_smithing_template", "host_armor_trim_smithing_template", "coast_armor_trim_smithing_template", "spire_armor_trim_smithing_template", "ward_armor_trim_smithing_template", "silence_armor_trim_smithing_template", "sentry_armor_trim_smithing_template", "wild_armor_trim_smithing_template", "eye_armor_trim_smithing_template"],
        "spawn_eggs": ["ender_dragon_spawn_egg", "iron_golem_spawn_egg", "pillager_spawn_egg", "cow_spawn_egg", "silverfish_spawn_egg", "blaze_spawn_egg", "camel_spawn_egg", "polar_bear_spawn_egg", "squid_spawn_egg", "phantom_spawn_egg", "salmon_spawn_egg", "ghast_spawn_egg", "allay_spawn_egg", "wolf_spawn_egg", "husk_spawn_egg", "spider_spawn_egg", "llama_spawn_egg", "zombified_piglin_spawn_egg", "skeleton_horse_spawn_egg", "parrot_spawn_egg", "bat_spawn_egg", "sheep_spawn_egg", "slime_spawn_egg", "cod_spawn_egg", "piglin_spawn_egg", "ravager_spawn_egg", "sniffer_spawn_egg", "strider_spawn_egg", "fox_spawn_egg", "mule_spawn_egg", "warden_spawn_egg", "cave_spider_spawn_egg", "axolotl_spawn_egg", "hoglin_spawn_egg", "elder_guardian_spawn_egg", "witch_spawn_egg", "goat_spawn_egg", "villager_spawn_egg", "turtle_spawn_egg", "pufferfish_spawn_egg", "creeper_spawn_egg", "zombie_horse_spawn_egg", "zombie_spawn_egg", "evoker_spawn_egg", "dolphin_spawn_egg", "zoglin_spawn_egg", "panda_spawn_egg", "snow_golem_spawn_egg", "stray_spawn_egg", "donkey_spawn_egg", "trader_llama_spawn_egg", "enderman_spawn_egg", "horse_spawn_egg", "tropical_fish_spawn_egg", "pig_spawn_egg", "ocelot_spawn_egg", "shulker_spawn_egg", "zombie_villager_spawn_egg", "wandering_trader_spawn_egg", "magma_cube_spawn_egg", "mooshroom_spawn_egg", "piglin_brute_spawn_egg", "drowned_spawn_egg", "glow_squid_spawn_egg", "frog_spawn_egg", "chicken_spawn_egg", "endermite_spawn_egg", "wither_spawn_egg", "rabbit_spawn_egg", "wither_skeleton_spawn_egg", "bee_spawn_egg", "skeleton_spawn_egg", "vex_spawn_egg", "vindicator_spawn_egg", "tadpole_spawn_egg", "cat_spawn_egg", "guardian_spawn_egg"],
        "pottery": ["skull_pottery_sherd", "angler_pottery_sherd", "miner_pottery_sherd", "howl_pottery_sherd", "friend_pottery_sherd", "explorer_pottery_sherd", "plenty_pottery_sherd", "prize_pottery_sherd", "shelter_pottery_sherd", "arms_up_pottery_sherd", "blade_pottery_sherd", "brewer_pottery_sherd", "heartbreak_pottery_sherd", "burn_pottery_sherd", "heart_pottery_sherd", "sheaf_pottery_sherd", "danger_pottery_sherd", "archer_pottery_sherd", "snort_pottery_sherd", "mourner_pottery_sherd"],
        "foliage": ["twisting_vines", "weeping_vines", "nether_sprouts", "wither_rose", "torchflower", "torchflower_crop"]
    },
    "cold_sweat": {
        "items": ["thermometer", "minecart_insulation", "insulated_minecart", "soulspring_lamp"],
        "food": ["soul_sprout"],
        "armor": ["hoglin_helmet", "hoglin_chestplate", "hoglin_leggings", "hoglin_boots", "goat_fur_helmet", "goat_fur_chestplate", "goat_fur_leggings", "goat_fur_boots", "chameleon_helmet", "chameleon_chestplate", "chameleon_leggings", "chameleon_boots"],
        "spawn_eggs": ["chameleon_spawn_egg"]
    },
    "cfm": {
        "crimson_blocks": ["crimson_coffee_table", "stripped_crimson_kitchen_sink_light", "stripped_crimson_upgraded_gate", "stripped_crimson_park_bench", "crimson_crate", "stripped_crimson_mail_box", "crimson_desk", "stripped_crimson_desk", "stripped_crimson_chair", "crimson_upgraded_gate", "stripped_crimson_upgraded_fence"],
        "warped_blocks": ["stripped_warped_upgraded_gate", "stripped_warped_kitchen_sink_dark", "stripped_warped_kitchen_drawer", "warped_coffee_table", "warped_upgraded_gate", "warped_kitchen_sink_dark", "stripped_warped_mail_box", "stripped_warped_blinds", "stripped_warped_desk", "stripped_warped_desk_cabinet", "warped_table", "stripped_warped_coffee_table", "warped_mail_box", "stripped_warped_table", "warped_desk_cabinet", "stripped_warped_crate", "warped_park_bench", "stripped_warped_kitchen_sink_light", "warped_crate", "warped_upgraded_fence", "warped_bedside_cabinet", "warped_kitchen_sink_light", "warped_cabinet", "warped_kitchen_counter", "stripped_warped_bedside_cabinet", "stripped_warped_cabinet", "stripped_warped_kitchen_counter", "stripped_warped_park_bench", "warped_blinds", "warped_desk", "stripped_warped_chair", "warped_kitchen_drawer", "warped_chair", "stripped_warped_upgraded_fence"],
        "items": ["spatula"]
    },
    "nfm": {
        "items": ["crowbar", "knife", "soap", "soapy_water_bucket", "super_soapy_water_bucket"],
        "food": ["bread_slice", "cooked_kebab", "cooked_sausage", "kebab", "sausage", "toast"]
    },
    "farmersdelight": {
        "food": ["nether_salad"]
    },
    "grapplemod": {
        "all": ["launcheritem", "throwupgradeitem", "staffupgradeitem", "repeller", "longfallboots", "motorupgradeitem", "swingupgradeitem", "ropeupgradeitem", "limitsupgradeitem", "rocketupgradeitem", "baseupgradeitem", "doubleupgradeitem", "block_grapple_modifier", "forcefieldupgradeitem", "magnetupgradeitem"]
    },
    "infectious": {
        "spawn_eggs": ["big_zombie_spawn_egg", "pool_tube_zombie_spawn_egg", "zombified_boar_spawn_egg", "crawling_zombie_spawn_egg", "claw_zombie_spawn_egg", "zombified_wolf_spawn_egg", "pylon_zombie_spawn_egg", "construction_worker_zombie_spawn_egg", "zombie_miner_spawn_egg", "fire_fighter_zombie_spawn_egg", "zombie_batman_spawn_egg", "zombie_agent_spawn_egg", "muscular_zombie_spawn_egg", "radioactive_zombie_spawn_egg", "swat_zombie_spawn_egg", "mecha_zombie_spawn_egg", "zombie_head_spawn_egg", "bucket_zombie_spawn_egg", "zombie_on_stelts_spawn_egg", "doom_zombie_spawn_egg", "zombie_fisherman_spawn_egg", "zombie_clown_spawn_egg", "giant_zombie_spawn_egg", "golden_zombie_spawn_egg", "zombie_dancer_spawn_egg", "balloon_zombie_spawn_egg", "angry_zombie_spawn_egg", "ancient_zombie_spawn_egg", "burned_zombie_spawn_egg", "disco_zombie_spawn_egg", "zombie_doctor_spawn_egg", "spore_zombie_spawn_egg", "mummy_spawn_egg", "baseball_bat_zombie_spawn_egg", "zombified_bird_spawn_egg", "maggot_zombie_spawn_egg", "chained_zombie_spawn_egg", "zombie_archer_spawn_egg", "zombie_painter_spawn_egg", "armless_zombie_spawn_egg", "screamer_spawn_egg", "zombified_bear_spawn_egg", "burning_zombie_spawn_egg", "robotic_zombie_spawn_egg", "blind_zombie_spawn_egg", "door_zombie_spawn_egg", "zombie_horseman_spawn_egg", "infectious_zombie_spawn_egg", "tower_zombie_spawn_egg", "zombie_climber_spawn_egg", "zombie_soldier_spawn_egg", "frozen_zombie_spawn_egg", "firework_zombie_spawn_egg", "zombified_chicken_spawn_egg", "bouncer_zombie_spawn_egg", "mc_donalds_worker_zombie_spawn_egg", "bodyless_zombie_spawn_egg", "acid_zombie_spawn_egg", "security_zombie_spawn_egg", "pumpkin_zombie_spawn_egg", "zombie_boxer_spawn_egg", "zombie_scientist_spawn_egg", "sleepy_zombie_spawn_egg", "zombie_diver_spawn_egg", "zombie_lumberjack_spawn_egg", "deep_sea_diver_zombie_spawn_egg", "muddy_zombie_spawn_egg", "iron_door_zombie_spawn_egg", "zombie_girl_spawn_egg", "zombie_hitler_spawn_egg", "zombie_warrior_spawn_egg", "barrel_zombie_spawn_egg", "zombie_runner_spawn_egg", "zombie_spiter_spawn_egg", "brain_zombie_spawn_egg", "old_zombie_spawn_egg", "zombie_farmer_spawn_egg", "tower_zombie_2_spawn_egg", "franklin_zombie_spawn_egg", "mutant_zombie_spawn_egg", "hazmat_zombie_spawn_egg", "zombie_cook_spawn_egg", "zombified_rex_spawn_egg", "enchanted_zombie_spawn_egg", "zombie_prisoner_spawn_egg", "psycho_zombie_spawn_egg", "withered_zombie_spawn_egg", "zombie_breeder_spawn_egg", "fat_zombie_spawn_egg", "beehive_zombie_spawn_egg", "lootdrop_spawn_egg", "fungal_zombie_spawn_egg", "zombified_spider_spawn_egg", "zombie_spawn_egg", "football_player_zombie_spawn_egg", "zombie_police_spawn_egg", "zombie_astronaut_spawn_egg", "glitched_zombie_spawn_egg", "zombie_bomber_spawn_egg", "headless_zombie_spawn_egg", "beekeeper_zombie_spawn_egg"],
    },
    "lootr": {
        "all": ["trophy"]
    },
    "securitycraft": {
        "items": ["universal_owner_changer", "universal_key_changer", "universal_block_modifier", "universal_block_remover", "universal_block_reinforcer_lvl3", "universal_block_reinforcer_lvl2", "universal_block_reinforcer_lvl1"]
    },
    "undead_revamp2": {
        "weapons_and_tools": ["wincallerfan", "sleepingsmokebomb", "bonedagger", "chainsword", "toothmace", "bostroxsword"],
        "armor": ["shieldmask_helmet", "witherchargemask_helmet", "nullifymask_helmet", "imbuemask_helmet", "cloggerarmor_helmet", "cloggerarmor_boots", "cloggerarmor_chestplate", "cloggerarmor_leggings", "primodialarmour_chestplate", "primodialarmour_boots", "primodialarmour_helmet", "bostroxset_helmet", "bostroxset_chestplate", "bostroxset_boots"],
        "materials_and_upgrades": ["cloggerupgrade", "heavyupgrade", "bostroxingot"],
        "blocks": ["blockofbostrox", "bostrokestone", "bostroxwall", "cobbledbostroxstairs", "bostroxstairs", "bostroxslabs", "cobbledbostroxslab", "woodennest", "cobbledbostroxwall"],
        "food": ["spittea", "spiiterfriedegg", "aciddicsackbowl", "fizzysnowgoo"],
        "containers_and_sacks": ["f_iresack", "acidsack", "huntersackpink", "flightsack", "luckysack", "huntersackred"],
        "other": ["rabidspw", "the_somnolenceextract", "queenbeeperfume", "arapoholiaspray"]
    }
}

/**
 * Generates a flat array of "modid:itemid" strings from a nested banned item table.
 *
 * @param {Object.<string, Object.<string, string[]>>} table - A map of mod IDs to category
 *   maps, where each category maps to an array of item IDs belonging to that mod.
 * @returns {string[]} Flat list of fully-qualified resource location strings (e.g. "minecraft:beacon").
 *
 * @example
 * var list = generateBannedItemList({
 *   "minecraft": { "blocks": ["beacon", "dragon_egg"] },
 *   "cold_sweat": { "armor": ["hoglin_helmet"] }
 * });
 * // => ["minecraft:beacon", "minecraft:dragon_egg", "cold_sweat:hoglin_helmet"]
 */
function generateBannedItemList(table) {
    var out = [];

    for (var modId in table) {
        var categories = table[modId];
        for (var category in categories) {
            categories[category].forEach(function (itemId) {
                out.push(modId + ":" + itemId);
            });
        }
    }

    return out;
}

const BANNED_ITEM_LIST = generateBannedItemList(BANNED_ITEM_TABLE);

ServerEvents.recipes(event => {
    event.remove({ type: "minecraft:smithing_transform" });
    event.remove({ type: "minecraft:smithing_trim" });
    event.remove({ output: "sophisticatedbackpacks:netherite_backpack" });
    event.remove({ output: "cure:fox_weed_paste" });
    event.remove({ output: "cure:syringe" });
    event.remove({ output: "cure:vaccine" });

    event.shaped(
        "sophisticatedbackpacks:netherite_backpack",
        [
            "NNN",
            "NBN",
            "NNN"
        ],
        {
            N: "minecraft:netherite_ingot",
            B: "sophisticatedbackpacks:diamond_backpack"
        }
    )

    event.shaped(
        "cure:syringe",
        [
            " AA",
            "ACA",
            "BA "
        ],
        {
            A: "mekanism:structural_glass",
            B: "mekanism:steel_casing",
            C: "superbwarfare:steel_spring"
        }
    )

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "mekanism:dust_copper"
            }
        },
        output: {
            item: "superbwarfare:copper_plate"
        }
    })

    event.custom({
        type: "mekanism:combining",
        mainInput: {
            ingredient: {
                item: "superbwarfare:primer"
            }
        },
        extraInput: {
            ingredient: {
                item: "minecraft:iron_nugget"
            }
        },
        output: {
            item: "superbwarfare:handgun_ammo"
        }
    })

    event.custom({
        type: "mekanism:combining",
        mainInput: {
            ingredient: {
                item: "superbwarfare:primer"
            }
        },
        extraInput: {
            ingredient: {
                item: "minecraft:gold_nugget"
            }
        },
        output: {
            item: "superbwarfare:shotgun_ammo"
        }
    })

    event.custom({
        type: "mekanism:combining",
        mainInput: {
            ingredient: {
                item: "superbwarfare:primer"
            }
        },
        extraInput: {
            ingredient: {
                item: "mekanism:nugget_osmium"
            }
        },
        output: {
            item: "superbwarfare:rifle_ammo"
        }
    })

    event.custom({
        type: "mekanism:combining",
        mainInput: {
            ingredient: {
                item: "superbwarfare:primer"
            }
        },
        extraInput: {
            ingredient: {
                item: "mekanism:nugget_steel"
            }
        },
        output: {
            item: "superbwarfare:sniper_ammo"
        }
    })

    event.custom({
        type: "mekanism:combining",
        mainInput: {
            ingredient: {
                item: "superbwarfare:primer"
            }
        },
        extraInput: {
            ingredient: {
                item: "mekanism:nugget_tin"
            }
        },
        output: {
            item: "superbwarfare:heavy_ammo"
        }
    })

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "cure:fox_weed"
            }
        },
        output: {
            item: "cure:fox_weed_paste"
        }
    })

    event.shaped(
        Item.of("superbwarfare:c4_bomb", 2, { Control: false }),
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "superbwarfare:high_energy_explosives",
            B: "minecraft:clock"
        }
    )

    BANNED_ITEM_LIST.forEach(item => {
        //event.remove({ input: item });
        event.remove({ output: item });
        RECIPE_TYPES.forEach(type => {
            //event.remove({ input: item, type: type });
            event.remove({ output: item, type: type });
        });
    });
    /* event.remove({ id: "mekanism:sawing/door/warped" })
    TODO: Thorough Recipe Removal (ex. Mekanism, etc)
    */
})