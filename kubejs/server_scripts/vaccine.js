ServerEvents.recipes(event => {  
    event.recipes.create.mechanical_crafting("cure:syringe", [
        "      N",
        "    BN ",
        "   G B ",
        "IBG G  ",
        " IBG   ",
        "  IB   ",
        "   I   "
    ], {
        B: "minecraft:nether_brick",
        N: "create_crush_everything:netherite_shard",
        I: "create_new_age:overcharged_iron_sheet",
        G: "minecraft:glass"
    });
    event.recipes.create.mixing("cure:fox_weed", ["minecraft:fern", "minecraft:grass", "minecraft:seagrass", "minecraft:enchanted_golden_apple"]).heated();
    event.recipes.create.mixing("cure:fox_weed_paste", ["cure:fox_weed", Fluid.of("create:flowing_potion", "{Potion: 'minecraft:strong_regeneration'}")]).superheated();
});

const infection = "infectious:infection";
const immunity = "hordes:immunity";

PlayerEvents.tick(event => {
    const player = event.player;
    const isInfected = player.hasEffect(infection);
    const isImmune = player.hasEffect(immunity);
    if (isImmune && isInfected) {
        player.removeEffect(infection);
    }
});

ItemEvents.foodEaten("cure:vaccine", (event) => {
    event.server.runCommandSilent(
        `/effect give ${event.player.username} hordes:immunity infinite 1 true`
    );
});

ItemEvents.foodEaten("minecraft:golden_apple", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} infectious:infection`
    );
});

ItemEvents.foodEaten("minecraft:enchanted_golden_apple", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} infectious:infection`
    );
});

ItemEvents.foodEaten("infectious:antibiotics", (event) => {
    event.server.runCommandSilent(
        `/effect clear ${event.player.username} hordes:infected`
    );
});