// Villager Trades
villagerTrades.removeAllTrades(<profession:minecraft:farmer>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:armorer>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:butcher>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:cleric>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:fisherman>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:fletcher>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:leatherworker>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:librarian>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:mason>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:shepherd>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:toolsmith>, 1);
villagerTrades.removeAllTrades(<profession:minecraft:weaponsmith>, 1);
villagerTrades.removeAllTrades(<profession:infectious:crafter>, 1);
villagerTrades.removeAllTrades(<profession:superbwarfare:armory>, 1);
villagerTrades.removeAllTrades(<profession:toughasnails:climatologist>, 1);
villagerTrades.removeAllTrades(<profession:infectious:undead_collector>, 1);
villagerTrades.removeAllWanderingTrades(1);
villagerTrades.removeAllWanderingTrades(2);

// Vaccine
craftingTable.remove(<item:minecraft:golden_apple>);
craftingTable.remove(<item:cure:vaccine>);
craftingTable.remove(<item:cure:syringe>);
craftingTable.remove(<item:cure:fox_weed_paste>);
craftingTable.addShaped("vaccine", <item:cure:vaccine>, [
    [<item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>],
    [<item:cure:fox_weed_paste>, <item:cure:syringe>, <item:cure:fox_weed_paste>],
    [<item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>, <item:cure:fox_weed_paste>]
]);

// String
craftingTable.addShapeless("wool_to_string", <item:minecraft:string> * 4, [<tag:items:minecraft:wool>]);

// Leather 
furnace.addJsonRecipe("rotten_flesh_to_leather", {
    ingredient: <item:minecraft:rotten_flesh>,
    result: <item:minecraft:leather>.registryName,
    experience: 0.1 as float,
    cookingtime: 200
});

// Saddle
craftingTable.addShaped("saddle", <item:minecraft:saddle>, [
    [<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// Sync
craftingTable.remove(<item:sync:sync_core>);
craftingTable.addShaped("sync_core", <item:sync:sync_core>, [
    [<item:minecraft:diamond>, <item:minecraft:lapis_block>, <item:minecraft:diamond>], 
    [<item:minecraft:lapis_block>, <item:minecraft:totem_of_undying>, <item:minecraft:lapis_block>], 
    [<item:minecraft:diamond>, <item:minecraft:lapis_block>, <item:minecraft:diamond>]
]);

// Morphine
craftingTable.remove(<item:firstaid:morphine>);
craftingTable.addShaped("morphine", <item:firstaid:morphine>, [
    [<item:minecraft:potion>.withTag({Potion: "minecraft:water"}), <item:farmersdelight:milk_bottle>, <item:minecraft:air>], 
    [<item:minecraft:honey_bottle>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

// Medical Kit
craftingTable.remove(<item:infectious:medikit>);
craftingTable.remove(<item:infectious:bandage>);
craftingTable.remove(<item:superbwarfare:medical_kit>);
craftingTable.addShaped("medical_kit", <item:superbwarfare:medical_kit>, [
    [<item:firstaid:plaster>, <item:firstaid:bandage>, <item:firstaid:plaster>], 
    [<item:firstaid:bandage>, <item:firstaid:bandage>, <item:firstaid:bandage>], 
    [<item:firstaid:plaster>, <item:firstaid:bandage>, <item:firstaid:plaster>]
]);

// Vein Finder
craftingTable.remove(<item:createoreexcavation:vein_finder>);
craftingTable.addShaped("vein_finder", <item:createoreexcavation:vein_finder>, [
    [<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:observer>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
]);