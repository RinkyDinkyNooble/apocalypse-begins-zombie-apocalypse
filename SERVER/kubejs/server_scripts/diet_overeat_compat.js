const DIET_TABLE = {
    "minecraft:apple": { fruits: 0.065 },
    "minecraft:baked_potato": { vegetables: 0.085 },
    "minecraft:beef": { proteins: 0.05 },
    "minecraft:beetroot": { vegetables: 0.025 },
    "minecraft:beetroot_soup": { vegetables: 0.1 },
    "minecraft:bread": { grains: 0.085 },
    "minecraft:carrot": { vegetables: 0.06 },
    "minecraft:chicken": { proteins: 0.035 },
    "minecraft:cod": { proteins: 0.03 },
    "minecraft:cooked_beef": { proteins: 0.12 },
    "minecraft:cooked_chicken": { proteins: 0.1 },
    "minecraft:cooked_cod": { proteins: 0.085 },
    "minecraft:cooked_mutton": { proteins: 0.105 },
    "minecraft:cooked_porkchop": { proteins: 0.12 },
    "minecraft:cooked_rabbit": { proteins: 0.085 },
    "minecraft:cooked_salmon": { proteins: 0.105 },
    "minecraft:cookie": { grains: 0.015, sugars: 0.015 },
    "minecraft:dried_kelp": { vegetables: 0.02 },
    "minecraft:glow_berries": { fruits: 0.03 },
    "minecraft:honey_bottle": { sugars: 0.075 },
    "minecraft:melon_slice": { fruits: 0.035 },
    "minecraft:mushroom_stew": { vegetables: 0.1 },
    "minecraft:mutton": { proteins: 0.035 },
    "minecraft:porkchop": { proteins: 0.05 },
    "minecraft:poisonous_potato": { vegetables: 0.035 },
    "minecraft:potato": { vegetables: 0.02 },
    "minecraft:pufferfish": { proteins: 0.015 },
    "minecraft:pumpkin_pie": { sugars: 0.035, proteins: 0.035, vegetables: 0.035 },
    "minecraft:rabbit": { proteins: 0.05 },
    "minecraft:rabbit_stew": { proteins: 0.075, vegetables: 0.075 },
    "minecraft:salmon": { proteins: 0.03 },
    "minecraft:suspicious_stew": { proteins: 0.1 },
    "minecraft:sweet_berries": { fruits: 0.03 },
    "minecraft:tropical_fish": { proteins: 0.015 },
    "farmersdelight:honey_glazed_ham": { grains: 0.045, sugars: 0.045, fruits: 0.045, proteins: 0.045 },
    "farmersdelight:stuffed_pumpkin": { grains: 0.065, fruits: 0.065, vegetables: 0.065 },
    "farmersdelight:pie_crust": { grains: 0.035 },
    "farmersdelight:raw_pasta": { grains: 0.035 },
    "farmersdelight:roast_chicken": { grains: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:cabbage_rolls": { proteins: 0.045, vegetables: 0.045 },
    "farmersdelight:fried_egg": { proteins: 0.07 },
    "farmersdelight:ham": { proteins: 0.075 },
    "farmersdelight:shepherds_pie": { proteins: 0.095, vegetables: 0.095 },
    "farmersdelight:apple_pie_slice": { grains: 0.015, sugars: 0.015, fruits: 0.015 },
    "farmersdelight:bacon": { proteins: 0.035 },
    "farmersdelight:bacon_and_eggs": { proteins: 0.13 },
    "farmersdelight:bacon_sandwich": { grains: 0.05, proteins: 0.05, vegetables: 0.05 },
    "farmersdelight:baked_cod_stew": { proteins: 0.095, vegetables: 0.095 },
    "farmersdelight:barbecue_stick": { proteins: 0.07, vegetables: 0.07 },
    "farmersdelight:beef_patty": { proteins: 0.08 },
    "farmersdelight:beef_stew": { proteins: 0.09, vegetables: 0.09 },
    "farmersdelight:bone_broth": { proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:cabbage": { vegetables: 0.04 },
    "farmersdelight:cabbage_leaf": { vegetables: 0.02 },
    "farmersdelight:cake_slice": { grains: 0.015, sugars: 0.015 },
    "farmersdelight:chicken_cuts": { proteins: 0.02 },
    "farmersdelight:chicken_sandwich": { grains: 0.05, proteins: 0.05, vegetables: 0.05 },
    "farmersdelight:chicken_soup": { proteins: 0.095, vegetables: 0.095 },
    "farmersdelight:cod_roll": { grains: 0.06, proteins: 0.06 },
    "farmersdelight:cod_slice": { proteins: 0.015 },
    "farmersdelight:cooked_bacon": { proteins: 0.08 },
    "farmersdelight:cooked_chicken_cuts": { proteins: 0.06 },
    "farmersdelight:cooked_cod_slice": { proteins: 0.06 },
    "farmersdelight:cooked_mutton_chops": { proteins: 0.065 },
    "farmersdelight:cooked_rice": { grains: 0.09 },
    "farmersdelight:cooked_salmon_slice": { proteins: 0.065 },
    "farmersdelight:dog_food": { grains: 0.03, proteins: 0.03 },
    "farmersdelight:dumplings": { grains: 0.045, proteins: 0.045, vegetables: 0.045 },
    "farmersdelight:egg_sandwich": { grains: 0.07, proteins: 0.07 },
    "farmersdelight:fish_stew": { proteins: 0.09, vegetables: 0.09 },
    "farmersdelight:fried_rice": { grains: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:fruit_salad": { fruits: 0.05, vegetables: 0.05 },
    "farmersdelight:glow_berry_custard": { sugars: 0.035, fruits: 0.035, proteins: 0.035 },
    "farmersdelight:grilled_salmon": { fruits: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:hamburger": { grains: 0.055, proteins: 0.055, vegetables: 0.055 },
    "farmersdelight:honey_cookie": { grains: 0.015, sugars: 0.015 },
    "farmersdelight:kelp_roll": { grains: 0.085, vegetables: 0.085 },
    "farmersdelight:kelp_roll_slice": { grains: 0.05, vegetables: 0.05 },
    "farmersdelight:melon_popsicle": { fruits: 0.05 },
    "farmersdelight:minced_beef": { proteins: 0.035 },
    "farmersdelight:mixed_salad": { vegetables: 0.1 },
    "farmersdelight:mushroom_rice": { grains: 0.09, vegetables: 0.09 },
    "farmersdelight:mutton_chops": { proteins: 0.02 },
    "farmersdelight:mutton_wrap": { grains: 0.05, proteins: 0.05, vegetables: 0.05 },
    "farmersdelight:nether_salad": { vegetables: 0.08 },
    "farmersdelight:noodle_soup": { grains: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:onion": { vegetables: 0.04 },
    "farmersdelight:pasta_with_meatballs": { grains: 0.06, proteins: 0.06, vegetables: 0.06 },
    "farmersdelight:pasta_with_mutton_chop": { grains: 0.06, proteins: 0.06, vegetables: 0.06 },
    "farmersdelight:pumpkin_slice": { vegetables: 0.05 },
    "farmersdelight:pumpkin_soup": { proteins: 0.095, vegetables: 0.095 },
    "farmersdelight:ratatouille": { vegetables: 0.13 },
    "farmersdelight:roasted_mutton_chops": { grains: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:salmon_roll": { grains: 0.06, proteins: 0.06 },
    "farmersdelight:salmon_slice": { proteins: 0.015 },
    "farmersdelight:smoked_ham": { proteins: 0.135 },
    "farmersdelight:squid_ink_pasta": { grains: 0.065, proteins: 0.065, vegetables: 0.065 },
    "farmersdelight:steak_and_potatoes": { grains: 0.06, proteins: 0.06, vegetables: 0.06 },
    "farmersdelight:stuffed_potato": { proteins: 0.075, vegetables: 0.075 },
    "farmersdelight:sweet_berry_cheesecake_slice": { grains: 0.015, fruits: 0.015, proteins: 0.015 },
    "farmersdelight:sweet_berry_cookie": { grains: 0.015, fruits: 0.015 },
    "farmersdelight:tomato": { vegetables: 0.02 },
    "farmersdelight:tomato_sauce": { vegetables: 0.07 },
    "farmersdelight:vegetable_noodles": { grains: 0.095, vegetables: 0.095 },
    "farmersdelight:vegetable_soup": { vegetables: 0.15 },
    "farmersdelight:wheat_dough": { grains: 0.015, proteins: 0.015 }
};

const DIET_GROUPS = ["fruits", "vegetables", "proteins", "grains", "sugars"]

ItemEvents.foodEaten(event => {
    const player = event.player;
    const itemId = event.item.id;
    if (player.foodLevel == 20 && DIET_TABLE[itemId]) {
        for (var group in DIET_TABLE[itemId]) {
            event.server.runCommandSilent(`/diet add ${player.username} ${group} ${DIET_TABLE[itemId][group]}`);
        }
    }
})

PlayerEvents.loggedIn(event => {
    const player = event.player;
    const firstTime = player.persistentData.getInt("first_time") || 0;
    if (firstTime == 0) {
        player.persistentData.putInt("first_time", 1);
        DIET_GROUPS.forEach(group => {
            event.server.runCommandSilent(`diet set ${player.username} ${group} 0.45`);
        });
    }
});

ItemEvents.rightClicked("minecraft:milk_bucket", function(event) {
    event.cancel();
});

ItemEvents.rightClicked("farmersdelight:milk_bottle", function(event) {
    event.cancel();
});