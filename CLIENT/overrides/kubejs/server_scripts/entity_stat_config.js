/**
 * Generates a Minecraft attribute stat object for a living entity.
 *
 * Each value maps directly to a Minecraft or Forge attribute and is applied
 * as the entity's base attribute value.
 *
 * @param {number} health - Maximum health of the entity (minecraft:generic.max_health)
 * @param {number} armor - Armor value reducing incoming physical damage
 * @param {number} toughness - Armor toughness reducing high-damage scaling effects
 * @param {number} knockbackResistance - Knockback resistance (0.0 = none, 1.0 = full resistance)
 * @param {number} damage - Base attack damage dealt by the entity
 * @param {number} movementSpeed - Movement speed attribute (typical vanilla range ~0.1–0.3)
 *
 * @returns {Object} Attribute map keyed by Minecraft attribute identifiers
 */
const generateStats = (health, armor, toughness, knockbackResistance, damage, movementSpeed) => ({
    "minecraft:generic.max_health": health,
    "minecraft:generic.armor": armor,
    "minecraft:generic.armor_toughness": toughness,
    "minecraft:generic.knockback_resistance": knockbackResistance,
    "minecraft:generic.attack_damage": damage,
    "minecraft:generic.movement_speed": movementSpeed
})

const ENTITY_STATS = {

    //===================================================================
    //                          TIER 1
    //===================================================================

    // Natural Spawn
    "minecraft:zombie": generateStats(10, 0, 0, 0.0, 2, 0.2),

    // Parks / Street
    "infectious:bucket_zombie": generateStats(20, 10, 1, 0.3, 4, 0.25),
    "infectious:pylon_zombie": generateStats(26, 8, 1, 0.3, 6, 0.25),

    // Office
    "infectious:door_zombie": generateStats(36, 14, 2, 0.4, 8, 0.25),
    "infectious:iron_door_zombie": generateStats(58, 20, 4, 0.6, 12, 0.23),
    "undead_revamp2:therod": generateStats(75, 50, 3, 0.6, 30, 0.35),
    "undead_revamp2:thebidy": generateStats(8, 0, 0, 0.0, 2, 0.35),
    "undead_revamp2:bomber": generateStats(16, 4, 1, 0.2, 6, 0.3),
    "undead_revamp2:thepregnant": generateStats(100, 65, 3, 0.7, 16, 0.12),

    // Restaurant / Food Place
    "infectious:beehive_zombie": generateStats(24, 6, 1, 0.1, 6, 0.26),
    "infectious:zombie_spiter": generateStats(20, 0, 0, 0.0, 4, 0.3),
    "infectious:maggot_zombie": generateStats(40, 20, 2, 0.4, 10, 0.2),
    "infectious:claw_zombie": generateStats(20, 4, 1, 0.0, 20, 0.35),
    "infectious:pumpkin_zombie": generateStats(30, 4, 1, 0.2, 4, 0.26),
    "infectious:barrel_zombie": generateStats(10, 2, 0, 0.0, 2, 0.3),
    "infectious:mc_donalds_worker_zombie": generateStats(28, 0, 0, 0.0, 6, 0.26),
    "infectious:zombie_cook": generateStats(20, 2, 0, 0.0, 8, 0.26),
    "undead_revamp2:thesmoker": generateStats(30, 0, 0, 0.0, 6, 0.2),
    "undead_revamp2:clogger": generateStats(625, 60, 8, 0.9, 60, 0.2),

    // Club
    "infectious:bouncer_zombie": generateStats(40, 14, 2, 0.5, 12, 0.3),
    "infectious:disco_zombie": generateStats(40, 12, 1, 0.2, 10, 0.4),
    "infectious:zombie_dancer": generateStats(40, 10, 1, 0.2, 8, 0.45),
    "undead_revamp2:theheavy": generateStats(270, 75, 8, 0.8, 28, 0.1),

    // Hospital / Medical Place
    "infectious:zombie_head": generateStats(6, 0, 0, 0.0, 2, 0.18),
    "infectious:crawling_zombie": generateStats(8, 0, 0, 0.0, 2, 0.18),
    "infectious:armless_zombie": generateStats(8, 0, 0, 0.0, 2, 0.18),
    "infectious:bodyless_zombie": generateStats(8, 0, 0, 0.0, 2, 0.18),
    "infectious:headless_zombie": generateStats(12, 0, 0, 0.0, 4, 0.18),
    "infectious:blind_zombie": generateStats(18, 0, 0, 0.0, 6, 0.3),
    "infectious:zombie_doctor": generateStats(28, 2, 0, 0.0, 8, 0.3),
    "infectious:psycho_zombie": generateStats(32, 4, 1, 0.1, 10, 0.4),

    // Stadium
    "infectious:football_player_zombie": generateStats(80, 28, 4, 0.7, 35, 0.4),
    "infectious:zombie_climber": generateStats(70, 22, 3, 0.5, 30, 0.35),
    "infectious:zombie_runner": generateStats(60, 20, 3, 0.1, 20, 0.5),
    "infectious:baseball_bat_zombie": generateStats(56, 16, 3, 0.3, 25, 0.35),
    "infectious:firework_zombie": generateStats(50, 10, 3, 0.4, 20, 0.3),
    "undead_revamp2:thelurker": generateStats(575, 70, 10, 0.7, 50, 0.35),

    // Boxing Ring
    "infectious:zombie_boxer": generateStats(75, 22, 3, 0.7, 40, 0.35),

    // Zoo / Aquarium
    "infectious:pool_tube_zombie": generateStats(50, 20, 3, 0.1, 10, 0.35),
    "infectious:zombie_diver": generateStats(50, 22, 2, 0.1, 15, 0.3),
    "infectious:deep_sea_diver_zombie": generateStats(60, 26, 2, 0.3, 25, 0.35),
    "infectious:zombified_bear": generateStats(200, 40, 6, 0.8, 55, 0.4),
    "infectious:zombified_bird": generateStats(16, 2, 0, 0.0, 6, 0.2),
    "infectious:zombified_bird_flying": generateStats(16, 2, 0, 0.0, 6, 0.2),
    "infectious:zombified_boar": generateStats(100, 30, 4, 0.6, 45, 0.35),
    "infectious:zombified_spider": generateStats(150, 25, 4, 0.2, 20, 0.28),
    "infectious:zombified_wolf": generateStats(50, 18, 2, 0.1, 30, 0.37),

    // Police Station & Prison
    "infectious:chained_zombie": generateStats(60, 20, 3, 0.8, 20, 0.15),
    "infectious:zombie_police": generateStats(40, 18, 3, 0.2, 12, 0.25),
    "infectious:swat_zombie": generateStats(80, 30, 4, 0.5, 26, 0.28),
    "infectious:zombie_prisoner": generateStats(24, 2, 0, 0.0, 10, 0.2),

    // Fire Station
    "infectious:fire_fighter_zombie": generateStats(40, 18, 2, 0.4, 8, 0.3),

    // Bank
    "infectious:security_zombie": generateStats(40, 18, 2, 0.5, 12, 0.3),

    // Museum
    "infectious:zombie_painter": generateStats(40, 10, 1, 0.1, 10, 0.25),
    "infectious:ancient_zombie_boss": generateStats(2000, 100, 12, 1.0, 200, 0.2),
    "infectious:zombified_rex": generateStats(1000, 80, 8, 1.0, 100, 0.4),
    "infectious:mummy": generateStats(250, 30, 3, 0.2, 25, 0.2),
    "infectious:zombie_hitler": generateStats(100, 10, 1, 0.1, 16, 0.2),
    "infectious:zombie_archer": generateStats(80, 16, 1, 0.0, 10, 0.2),
    "infectious:zombie_horseman": generateStats(150, 24, 2, 0.3, 18, 0.3),
    "infectious:zombie_horseman_no_horse": generateStats(50, 22, 1, 0.1, 12, 0.2),
    "infectious:zombie_warrior": generateStats(90, 40, 3, 0.3, 30, 0.2),
    "undead_revamp2:thebeartamer": generateStats(70, 30, 2, 0.3, 12, 0.3),
    "undead_revamp2:thewolf": generateStats(60, 40, 2, 0.4, 24, 0.25),

    // Theme Park
    "infectious:tower_zombie": generateStats(100, 20, 3, 0.5, 22, 0.18),
    "infectious:zombie_on_stelts": generateStats(80, 20, 3, 0.2, 15, 0.15),
    "infectious:balloon_zombie_no_balloon": generateStats(50, 20, 3, 0.0, 18, 0.25),
    "infectious:zombie_clown": generateStats(60, 20, 3, 0.0, 20, 0.32),

    // Apartments & Library
    "infectious:zombie": generateStats(20, 6, 0, 0.0, 6, 0.2),
    "infectious:angry_zombie": generateStats(12, 0, 0, 0.0, 4, 0.2),
    "infectious:infectious_zombie": generateStats(12, 0, 0, 0.0, 4, 0.2),
    "infectious:fat_zombie": generateStats(40, 10, 0, 0.3, 10, 0.175),
    "infectious:old_zombie": generateStats(8, 0, 0, 0.0, 2, 0.1),
    "infectious:zombie_girl": generateStats(12, 0, 0, 0.0, 3, 0.21),
    "infectious:screamer": generateStats(12, 0, 0, 0.0, 4, 0.22),
    "infectious:sleepy_zombie": generateStats(16, 0, 0, 0.0, 2, 0.18),
    "infectious:brain_zombie": generateStats(18, 0, 0, 0.0, 6, 0.2),
    "infectious:zombie_screamer": generateStats(12, 0, 0, 0.0, 4, 0.23),
    "infectious:franklin_zombie": generateStats(40, 2, 0, 0.1, 5, 0.23),

    // Suite
    "infectious:zombie_batman": generateStats(300, 60, 10, 0.7, 60, 0.3),

    // Science Centre
    "infectious:zombie_astronaut": generateStats(40, 10, 2, 0.3, 6, 0.2),

    // Attached Gym
    "infectious:muscular_zombie": generateStats(60, 4, 2, 0.3, 20, 0.28),

    "infectious:big_zombie": generateStats(400, 65, 5, 0.9, 35, 0.15),
    "infectious:giant_zombie": generateStats(3000, 150, 20, 1.0, 250, 0.3),

    // Green House Extensions
    "infectious:zombie_farmer": generateStats(50, 10, 1, 0.0, 15, 0.2),
    "infectious:zombie_fisherman": generateStats(50, 10, 1, 0.1, 18, 0.3),
    "infectious:beekeeper_zombie": generateStats(40, 20, 2, 0.2, 22, 0.35),
    "infectious:zombie_lumberjack": generateStats(60, 20, 3, 0.3, 28, 0.25),

    // Shipping
    "infectious:zombie_miner": generateStats(40, 10, 1, 0.1, 15, 0.23),
    "infectious:construction_worker_zombie": generateStats(50, 20, 1, 0.2, 10, 0.28),

    // Lab
    "infectious:robotic_zombie": generateStats(500, 50, 5, 0.5, 50, 0.35),
    "infectious:mecha_zombie": generateStats(1000, 300, 20, 1.0, 200, 0.4),
    "infectious:zombie_scientist": generateStats(20, 10, 1, 0.1, 12, 0.2),
    "infectious:zombie_bomber": generateStats(100, 0, 0, 0.0, 10, 0.38),
    "infectious:mutant_zombie": generateStats(800, 150, 10, 0.9, 90, 0.35),
    "infectious:acid_zombie": generateStats(225, 24, 3, 0.4, 50, 0.3),
    "infectious:burned_zombie": generateStats(150, 0, 0, 0.0, 45, 0.15),
    "infectious:burning_zombie": generateStats(150, 0, 0, 0.0, 10, 0.35),
    "infectious:frozen_zombie": generateStats(80, 15, 2, 0.3, 18, 0.15),
    "infectious:fungal_zombie": generateStats(350, 45, 4, 0.5, 45, 0.3),
    "infectious:golden_zombie": generateStats(125, 40, 4, 0.6, 35, 0.2),
    "infectious:hazmat_zombie": generateStats(60, 10, 2, 0.3, 22, 0.25),
    "infectious:muddy_zombie": generateStats(50, 5, 0, 0.0, 20, 0.15),
    "infectious:radioactive_zombie": generateStats(700, 125, 8, 0.6, 75, 0.3),
    "infectious:spore_zombie": generateStats(600, 100, 7, 0.6, 67, 0.35),
    "infectious:withered_zombie": generateStats(50, 10, 2, 0.3, 20, 0.3),
    "infectious:zombie_breeder": generateStats(900, 200, 12, 0.9, 125, 0.2),

    // Paralament Building
    "infectious:zombie_soldier": generateStats(100, 30, 4, 0.5, 25, 0.2),
    "infectious:zombie_agent": generateStats(80, 25, 2, 0.2, 30, 0.35),

    //===================================================================
    //                          TIER 2
    //===================================================================
}

Object.entries(ENTITY_STATS).forEach(([entityId, stats]) => {
    EntityEvents.spawned(entityId, event => {
        const entity = event.entity
        Object.entries(stats).forEach(([stat, value]) => {
            const attr = entity.getAttribute(stat)
            if (attr) {
                attr.baseValue = value
                if (stat === "minecraft:generic.max_health") {
                    entity.heal(value)
                }
            }
        })
    })
})
