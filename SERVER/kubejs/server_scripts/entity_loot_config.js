
/**
 * Creates a drop descriptor.
 * @param {string}   item   - e.g. "minecraft:iron_sword"
 * @param {number}   chance - 0.0 to 1.0, default 1.0
 * @param {number}   count  - stack size, default 1
 * @param {object}   nbt    - optional NBT object e.g. { Damage: 10 }, default null
 * @param {function} fn     - optional LootEntry modifier, e.g:
 * @example drop("minecraft:iron_sword", 1.0, 1)
 * @example drop("minecraft:iron_sword", 1.0, 1, { Damage: 10 })
 * @example drop("minecraft:bow", 0.5, 1, null, function(e) { return e.enchantRandomly(); })
 * @example drop("minecraft:bow", 0.5, 1, null, function(e) { return e.enchantRandomly().damage([0.3, 0.9]); })
 * @see https://github.com/AlmostReliable/lootjs/wiki/1.20.1
 */
function drop(item, chance, count, nbt, fn) {
    if (chance === undefined) chance = 1.0;
    if (count === undefined) count = 1;
    if (nbt === undefined) nbt = null;
    if (fn === undefined) fn = null;
    return { item: item, chance: chance, count: count, nbt: nbt, fn: fn };
}

/**
 * Internal. Converts a drop descriptor into a LootEntry. Do not call directly.
 */
function buildEntry(dropDef) {
    var entry = dropDef.nbt
        ? LootEntry.of(dropDef.item, dropDef.count, dropDef.nbt)
        : LootEntry.of(dropDef.item, dropDef.count);
    entry = entry.when(function (c) { return c.randomChance(dropDef.chance); });
    if (dropDef.fn) {
        entry = dropDef.fn(entry);
    }
    return entry;
}

const COMMON_MONEY_DROPS = [
    drop("saros__money_mod:cent_1", 0.1),
    drop("saros__money_mod:cent_2", 0.05),
];

const UNCOMMON_MONEY_DROPS = [
    drop("saros__money_mod:cent_5", 0.2),
    drop("saros__money_mod:cent_10", 0.1),
];

const RARE_MONEY_DROPS = [
    drop("saros__money_mod:cent_20", 0.4),
    drop("saros__money_mod:cent_50", 0.2),
];

const EPIC_MONEY_DROPS = [
    drop("saros__money_mod:euro_1", 0.8),
    drop("saros__money_mod:euro_2", 0.4),
];

const LEGENDARY_MONEY_DROPS = [
    drop("saros__money_mod:euro_5", 0.9),
    drop("saros__money_mod:euro_10", 0.6),
];

const MYTHIC_MONEY_DROPS = [
    drop("saros__money_mod:euro_20", 0.95),
    drop("saros__money_mod:euro_50", 0.75),
];

const BASE_T1_DROPS = [
    drop("minecraft:rotten_flesh", 0.25),
    drop("minecraft:string", 0.5),
    drop("minecraft:bone", 0.15)
];

const MINIBOSS_T1_DROPS = [
    drop("minecraft:rotten_flesh", 0.25, 5),
    drop("minecraft:string", 0.5, 4),
    drop("minecraft:bone", 0.15, 2)
];

const SEMIBOSS_T1_DROPS = [
    drop("minecraft:rotten_flesh", 0.25, 10),
    drop("minecraft:string", 0.5, 8),
    drop("minecraft:bone", 0.15, 3)
];

const BOSS_T1_DROPS = [
    drop("minecraft:rotten_flesh", 0.25, 20),
    drop("minecraft:string", 0.5, 12),
    drop("minecraft:bone", 0.15, 4)
];

const ENTITY_LOOT_TABLE = {
    // Natural Spawn
    "minecraft:zombie": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),

    // Parks / Street
    "infectious:bucket_zombie": MINIBOSS_T1_DROPS.concat([]),
    "infectious:pylon_zombie": MINIBOSS_T1_DROPS.concat([]),

    // Office
    "infectious:door_zombie": MINIBOSS_T1_DROPS.concat([]),
    "infectious:iron_door_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "undead_revamp2:therod": SEMIBOSS_T1_DROPS.concat([]),
    "undead_revamp2:thebidy": BASE_T1_DROPS.concat([]),
    "undead_revamp2:bomber": BASE_T1_DROPS.concat([]),
    "undead_revamp2:thepregnant": SEMIBOSS_T1_DROPS.concat([]),

    // Restaurant / Food Place
    "infectious:beehive_zombie": MINIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "infectious:zombie_spiter": MINIBOSS_T1_DROPS.concat([]),
    "infectious:maggot_zombie": MINIBOSS_T1_DROPS.concat([]),
    "infectious:claw_zombie": MINIBOSS_T1_DROPS.concat([]),
    "infectious:pumpkin_zombie": MINIBOSS_T1_DROPS.concat([]),
    "infectious:barrel_zombie": BASE_T1_DROPS.concat(MYTHIC_MONEY_DROPS),
    "infectious:mc_donalds_worker_zombie": MINIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "infectious:zombie_cook": MINIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "undead_revamp2:thesmoker": MINIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "undead_revamp2:clogger": BOSS_T1_DROPS.concat([]),

    // Club
    "infectious:bouncer_zombie": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "infectious:disco_zombie": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "infectious:zombie_dancer": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "undead_revamp2:theheavy": BOSS_T1_DROPS.concat([]),

    // Hospital / Medical Place
    "infectious:zombie_head": BASE_T1_DROPS.concat([]),
    "infectious:crawling_zombie": BASE_T1_DROPS.concat([]),
    "infectious:armless_zombie": BASE_T1_DROPS.concat([]),
    "infectious:bodyless_zombie": BASE_T1_DROPS.concat([]),
    "infectious:headless_zombie": BASE_T1_DROPS.concat([]),
    "infectious:blind_zombie": BASE_T1_DROPS.concat([]),
    "infectious:zombie_doctor": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS.concat([
        drop("minecraft:writable_book", 1.0, 1, generateBookNBT(["Building 006", `Chest Code: ${getCode("building006_chest")}`]))
    ])),
    "infectious:psycho_zombie": MINIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),

    // Stadium
    "infectious:football_player_zombie": SEMIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),
    "infectious:zombie_climber": SEMIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "infectious:zombie_runner": SEMIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),
    "infectious:baseball_bat_zombie": SEMIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),
    "infectious:firework_zombie": SEMIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "undead_revamp2:thelurker": BOSS_T1_DROPS.concat([]),

    // Boxing Ring
    "infectious:zombie_boxer": SEMIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),

    // Zoo / Aquarium
    "infectious:pool_tube_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:zombie_diver": SEMIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "infectious:deep_sea_diver_zombie": SEMIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),
    "infectious:zombified_bear": BOSS_T1_DROPS.concat([]),
    "infectious:zombified_bird": BASE_T1_DROPS.concat([]),
    "infectious:zombified_bird_flying": BASE_T1_DROPS.concat([]),
    "infectious:zombified_boar": BOSS_T1_DROPS.concat([]),
    "infectious:zombified_spider": BOSS_T1_DROPS.concat([]),
    "infectious:zombified_wolf": SEMIBOSS_T1_DROPS.concat([]),

    // Police Station & Prison
    "infectious:chained_zombie": SEMIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "infectious:zombie_police": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS.concat([
        drop("dyairdrop:flaregun1", 0.5, 1)
    ])),
    "infectious:swat_zombie": SEMIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS.concat([
        drop("dyairdrop:flaregun2", 0.5, 1)
    ])),
    "infectious:zombie_prisoner": MINIBOSS_T1_DROPS.concat(COMMON_MONEY_DROPS),

    // Fire Station
    "infectious:fire_fighter_zombie": MINIBOSS_T1_DROPS.concat(RARE_MONEY_DROPS),

    // Bank
    "infectious:security_zombie": MINIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS.concat([
        drop("securitycraft:keycard_lv1", 0.25, 1, { "ownerName": "owner", "ownerUUID": "ownerUUID", "linked": true, "signature": KEYCARD_LOOT_TABLE["building005_vault"]["signature"] })
    ])),

    // Museum
    "infectious:zombie_painter": MINIBOSS_T1_DROPS.concat(EPIC_MONEY_DROPS),
    "infectious:ancient_zombie_boss": BOSS_T1_DROPS.concat([]),
    "infectious:zombified_rex": BOSS_T1_DROPS.concat([]),
    "infectious:mummy": BOSS_T1_DROPS.concat([]),
    "infectious:zombie_hitler": BOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:zombie_archer": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:zombie_horseman": BOSS_T1_DROPS.concat([]),
    "infectious:zombie_horseman_no_horse": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:zombie_warrior": SEMIBOSS_T1_DROPS.concat([]),
    "undead_revamp2:thebeartamer": SEMIBOSS_T1_DROPS.concat([]),
    "undead_revamp2:thewolf": SEMIBOSS_T1_DROPS.concat([]),

    // Theme Park
    "infectious:tower_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:zombie_on_stelts": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:balloon_zombie_no_balloon": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:zombie_clown": SEMIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),

    // Apartments & Library
    "infectious:zombie": MINIBOSS_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:angry_zombie": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:infectious_zombie": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:fat_zombie": MINIBOSS_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:old_zombie": BASE_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),
    "infectious:zombie_girl": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:screamer": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:sleepy_zombie": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:brain_zombie": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:zombie_screamer": BASE_T1_DROPS.concat(COMMON_MONEY_DROPS),
    "infectious:franklin_zombie": MINIBOSS_T1_DROPS.concat(UNCOMMON_MONEY_DROPS),

    // Suite
    "infectious:zombie_batman": BOSS_T1_DROPS.concat(MYTHIC_MONEY_DROPS),

    // Science Centre
    "infectious:zombie_astronaut": MINIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),

    // Attached Gym
    "infectious:muscular_zombie": SEMIBOSS_T1_DROPS.concat(COMMON_MONEY_DROPS.concat([
        drop("dyairdrop:flaregun3", 0.5, 1)
    ])),

    "infectious:big_zombie": BOSS_T1_DROPS.concat([
        drop("minecraft:writable_book", 1.0, 1, generateBookNBT(["Building 007", `Chest Code: ${getCode("building007_chest")}`])),
        drop("dyairdrop:flaregun4", 0.5, 1)
    ]),
    "infectious:giant_zombie": BOSS_T1_DROPS.concat([]),

    // Green House Extensions
    "infectious:zombie_farmer": SEMIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:zombie_fisherman": SEMIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:beekeeper_zombie": MINIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:zombie_lumberjack": SEMIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),

    // Shipping
    "infectious:zombie_miner": MINIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:construction_worker_zombie": SEMIBOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),

    // Lab
    "infectious:robotic_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:mecha_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:zombie_scientist": MINIBOSS_T1_DROPS.concat(MYTHIC_MONEY_DROPS),
    "infectious:zombie_bomber": BOSS_T1_DROPS.concat([]),
    "infectious:mutant_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:acid_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:burned_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:burning_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:frozen_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:fungal_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:golden_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:hazmat_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:muddy_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:radioactive_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:spore_zombie": BOSS_T1_DROPS.concat([]),
    "infectious:withered_zombie": SEMIBOSS_T1_DROPS.concat([]),
    "infectious:zombie_breeder": BOSS_T1_DROPS.concat([]),

    // Parliament Building
    "infectious:zombie_soldier": BOSS_T1_DROPS.concat(LEGENDARY_MONEY_DROPS),
    "infectious:zombie_agent": SEMIBOSS_T1_DROPS.concat(MYTHIC_MONEY_DROPS)
};

NativeEvents.onEvent(
    Java.loadClass("net.minecraftforge.event.entity.living.LivingExperienceDropEvent"),
    (event) => {
        if (event.getEntity().getType().toString() !== "minecraft:player") {
            event.setDroppedExperience(0)
        }
    }
)

LootJS.modifiers((event) => {
    event.disableZombieHeadDrop();
    event.removeGlobalModifier("@farmersdelight");
    event.removeGlobalModifier("@superbwarfare");
    event.removeGlobalModifier("@cold_sweat");
    event.removeGlobalModifier("@sophisticatedbackpacks");
    for (const [entityId, table] of Object.entries(ENTITY_LOOT_TABLE)) {
        let modifier = event.addEntityLootModifier(entityId);
        modifier.removeLoot(Ingredient.all);
        modifier.dropExperience(ENTITY_STATS[entityId]["minecraft:generic.max_health"]);
        for (const dropDef of table) {
            modifier.addLoot(buildEntry(dropDef));
        }
        modifier.apply((context) => {
            const player = context.getPlayer();
            if (!player) return;
            const luck = player.getAttribute("generic.luck").value;
            context.forEachLoot((item) => {
                item.count = Math.round(item.count * (1 + luck));
            });
        });
    }
});
