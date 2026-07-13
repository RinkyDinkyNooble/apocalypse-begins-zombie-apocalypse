import crafttweaker.api.item.IItemStack;

var retainNBT as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    val armor = inputs[0];
    var result = usualOut;
    if (armor.hasTag) {
        result = result.withTag(armor.getOrCreateTag());
    }
    result = result.withDamage(armor.damage);
    return result;
};

var retainNBTShaped as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut, inputs) => {
    var result = usualOut;
    for row in inputs {
        for item in row {
            if (item.hasTag) {
                result = result.withTag(item.getOrCreateTag());
                return result;
            }
        }
    }
    return result;
};

// Chainmail

craftingTable.addShaped("chainmail_helmet", <item:minecraft:chainmail_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>], 
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>]
]);

craftingTable.addShaped("chainmail_chestplate", <item:minecraft:chainmail_chestplate>, [
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>]
]);

craftingTable.addShaped("chainmail_leggings", <item:minecraft:chainmail_leggings>, [
    [<item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>]
]);

craftingTable.addShaped("chainmail_boots", <item:minecraft:chainmail_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>],
    [<item:minecraft:iron_nugget>, <item:minecraft:air>, <item:minecraft:iron_nugget>]
]);

// Iron

craftingTable.remove(<item:minecraft:iron_helmet>);
craftingTable.addShaped("iron_helmet", <item:minecraft:iron_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_helmet>, <item:minecraft:iron_ingot>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:iron_chestplate>);
craftingTable.addShaped("iron_chestplate", <item:minecraft:iron_chestplate>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_chestplate>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:iron_leggings>);
craftingTable.addShaped("iron_leggings", <item:minecraft:iron_leggings>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_leggings>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:iron_boots>);
craftingTable.addShaped("iron_boots", <item:minecraft:iron_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:iron_ingot>, <item:minecraft:chainmail_boots>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]
], retainNBTShaped);

// Diamond

craftingTable.remove(<item:minecraft:diamond_helmet>);
craftingTable.addShaped("diamond_helmet", <item:minecraft:diamond_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:iron_helmet>, <item:minecraft:diamond>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:diamond_chestplate>);
craftingTable.addShaped("diamond_chestplate", <item:minecraft:diamond_chestplate>, [
    [<item:minecraft:diamond>, <item:minecraft:iron_chestplate>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:diamond_leggings>);
craftingTable.addShaped("diamond_leggings", <item:minecraft:diamond_leggings>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:iron_leggings>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>]
], retainNBTShaped);

craftingTable.remove(<item:minecraft:diamond_boots>);
craftingTable.addShaped("diamond_boots", <item:minecraft:diamond_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:diamond>, <item:minecraft:iron_boots>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>]
], retainNBTShaped);

// Netherite

craftingTable.addShaped("netherite_helmet", <item:minecraft:netherite_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>], 
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>], 
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_helmet>, <item:minecraft:netherite_ingot>]
], retainNBTShaped);

craftingTable.addShaped("netherite_chestplate", <item:minecraft:netherite_chestplate>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_chestplate>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>]
], retainNBTShaped);

craftingTable.addShaped("netherite_leggings", <item:minecraft:netherite_leggings>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_leggings>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:air>, <item:minecraft:netherite_ingot>]
], retainNBTShaped);

craftingTable.addShaped("netherite_boots", <item:minecraft:netherite_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:diamond_boots>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:air>, <item:minecraft:netherite_ingot>]
], retainNBTShaped);

// Hazmat Suit 

craftingTable.addShaped("hazmat_suit_helmet", <item:infectious:hazmat_suit_helmet>, [
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>],
    [<item:mekanism:ingot_lead>, <item:minecraft:chainmail_helmet>, <item:mekanism:ingot_lead>],
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>]
], retainNBTShaped);

craftingTable.addShaped("hazmat_suit_chestplate", <item:infectious:hazmat_suit_chestplate>, [
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>],
    [<item:mekanism:ingot_lead>, <item:minecraft:chainmail_chestplate>, <item:mekanism:ingot_lead>],
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>]
], retainNBTShaped);

craftingTable.addShaped("hazmat_suit_leggings", <item:infectious:hazmat_suit_leggings>, [
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>],
    [<item:mekanism:ingot_lead>, <item:minecraft:chainmail_leggings>, <item:mekanism:ingot_lead>],
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>]
], retainNBTShaped);

craftingTable.addShaped("hazmat_suit_boots", <item:infectious:hazmat_suit_boots>, [
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>],
    [<item:mekanism:ingot_lead>, <item:minecraft:chainmail_boots>, <item:mekanism:ingot_lead>],
    [<item:minecraft:yellow_dye>, <item:mekanism:ingot_lead>, <item:minecraft:yellow_dye>]
], retainNBTShaped);

// Security Armor 

craftingTable.addShaped("security_armor_helmet", <item:infectious:security_armor_helmet>, [
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:chainmail_helmet>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>]
], retainNBTShaped);

craftingTable.addShaped("security_armor_chestplate", <item:infectious:security_armor_chestplate>, [
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:chainmail_chestplate>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>]
], retainNBTShaped);

craftingTable.addShaped("security_armor_leggings", <item:infectious:security_armor_leggings>, [
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:chainmail_leggings>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>]
], retainNBTShaped);

craftingTable.addShaped("security_armor_boots", <item:infectious:security_armor_boots>, [
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:chainmail_boots>, <item:minecraft:gray_dye>],
    [<item:minecraft:gray_dye>, <item:minecraft:gray_dye>, <item:minecraft:gray_dye>]
], retainNBTShaped);


// Soldier Armor

craftingTable.addShaped("soldier_armor_helmet", <item:infectious:soldier_armor_helmet>, [
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:chainmail_helmet>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>]
], retainNBTShaped);

craftingTable.addShaped("soldier_armor_chestplate", <item:infectious:soldier_armor_chestplate>, [
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:chainmail_chestplate>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>]
], retainNBTShaped);

craftingTable.addShaped("soldier_armor_leggings", <item:infectious:soldier_armor_leggings>, [
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:chainmail_leggings>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>]
], retainNBTShaped);

craftingTable.addShaped("soldier_armor_boots", <item:infectious:soldier_armor_boots>, [
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:chainmail_boots>, <item:minecraft:brown_dye>],
    [<item:minecraft:brown_dye>, <item:minecraft:brown_dye>, <item:minecraft:brown_dye>]
], retainNBTShaped);


// SWAT Armor

craftingTable.addShaped("swatarmor_helmet", <item:infectious:swatarmor_helmet>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:chainmail_helmet>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("swatarmor_chestplate", <item:infectious:swatarmor_chestplate>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:chainmail_chestplate>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("swatarmor_leggings", <item:infectious:swatarmor_leggings>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:chainmail_leggings>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("swatarmor_boots", <item:infectious:swatarmor_boots>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:chainmail_boots>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);


// Spec Ops Full 

craftingTable.addShaped("spec_ops_full_helmet", <item:zrikons_military_armor:spec_ops_full_helmet>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:iron_helmet>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_chestplate", <item:zrikons_military_armor:spec_ops_full_chestplate>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_leggings", <item:zrikons_military_armor:spec_ops_full_leggings>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:iron_leggings>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>, <item:minecraft:green_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_boots", <item:zrikons_military_armor:spec_ops_full_boots>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>,<item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:iron_boots>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>,<item:minecraft:green_dye>]
], retainNBTShaped);


// Winter Spec Ops 

craftingTable.addShaped("spec_ops_full_winter_helmet", <item:zrikons_military_armor:spec_ops_full_winter_helmet>, [
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:iron_helmet>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_winter_chestplate", <item:zrikons_military_armor:spec_ops_full_winter_chestplate>, [
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_winter_leggings", <item:zrikons_military_armor:spec_ops_full_winter_leggings>, [
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:iron_leggings>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>, <item:minecraft:white_dye>]
], retainNBTShaped);

craftingTable.addShaped("spec_ops_full_winter_boots", <item:zrikons_military_armor:spec_ops_full_winter_boots>, [
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>,<item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:iron_boots>, <item:minecraft:white_dye>],
    [<item:minecraft:white_dye>, <item:minecraft:white_dye>,<item:minecraft:white_dye>]
], retainNBTShaped);


// Black Spec Ops 

craftingTable.addShaped("military_armor_spec_ops_black_helmet", <item:zrikons_military_armor:military_armor_spec_ops_black_helmet>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:iron_helmet>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("military_armor_spec_ops_black_chestplate", <item:zrikons_military_armor:military_armor_spec_ops_black_chestplate>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("military_armor_spec_ops_black_leggings", <item:zrikons_military_armor:military_armor_spec_ops_black_leggings>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:iron_leggings>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>, <item:minecraft:black_dye>]
], retainNBTShaped);

craftingTable.addShaped("military_armor_spec_ops_black_boots", <item:zrikons_military_armor:military_armor_spec_ops_black_boots>, [
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>,<item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:iron_boots>, <item:minecraft:black_dye>],
    [<item:minecraft:black_dye>, <item:minecraft:black_dye>,<item:minecraft:black_dye>]
], retainNBTShaped);


// Pilot Suite 

craftingTable.addShaped("pilot_suite_helmet", <item:zrikons_military_armor:pilot_suite_helmet>, [
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:iron_helmet>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>]
], retainNBTShaped);

craftingTable.addShaped("pilot_suite_chestplate", <item:zrikons_military_armor:pilot_suite_chestplate>, [
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:iron_chestplate>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>]
], retainNBTShaped);

craftingTable.addShaped("pilot_suite_leggings", <item:zrikons_military_armor:pilot_suite_leggings>, [
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:iron_leggings>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>]
], retainNBTShaped);

craftingTable.addShaped("pilot_suite_boots", <item:zrikons_military_armor:pilot_suite_boots>, [
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>,<item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:iron_boots>, <item:minecraft:cyan_dye>],
    [<item:minecraft:cyan_dye>, <item:minecraft:cyan_dye>,<item:minecraft:cyan_dye>]
], retainNBTShaped);

// Crimsonscale

craftingTable.remove(<item:phayriosisreborn:crimsonscale_armor_helmet>);
craftingTable.addShaped("crimsonscale_armor_helmet", <item:phayriosisreborn:crimsonscale_armor_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:converted_heart>, <item:phayriosisreborn:crimsonscale>],
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:minecraft:diamond_helmet>, <item:phayriosisreborn:crimsonscale_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:crimsonscale_armor_chestplate>);
craftingTable.addShaped("crimsonscale_armor_chestplate", <item:phayriosisreborn:crimsonscale_armor_chestplate>, [
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:minecraft:diamond_chestplate>, <item:phayriosisreborn:crimsonscale_fragment>],
    [<item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:converted_heart>, <item:phayriosisreborn:crimsonscale>],
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:crimsonscale_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:crimsonscale_armor_leggings>);
craftingTable.addShaped("crimsonscale_armor_leggings", <item:phayriosisreborn:crimsonscale_armor_leggings>, [
    [<item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:converted_heart>, <item:phayriosisreborn:crimsonscale>],
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:minecraft:diamond_leggings>, <item:phayriosisreborn:crimsonscale_fragment>],
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:minecraft:air>, <item:phayriosisreborn:crimsonscale_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:crimsonscale_armor_boots>);
craftingTable.addShaped("crimsonscale_armor_boots", <item:phayriosisreborn:crimsonscale_armor_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>],
    [<item:phayriosisreborn:crimsonscale>, <item:minecraft:diamond_boots>, <item:phayriosisreborn:crimsonscale>],
    [<item:phayriosisreborn:crimsonscale_fragment>, <item:minecraft:air>,<item:phayriosisreborn:crimsonscale_fragment>]
], retainNBTShaped);

// Carapace

craftingTable.remove(<item:phayriosisreborn:carapace_armor_helmet>);
craftingTable.addShaped("carapace_armor_helmet", <item:phayriosisreborn:carapace_armor_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:phayriosisreborn:primordial_carapace>, <item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:primordial_carapace>],
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:minecraft:diamond_helmet>, <item:phayriosisreborn:primordial_carapace_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:carapace_armor_chestplate>);
craftingTable.addShaped("carapace_armor_chestplate", <item:phayriosisreborn:carapace_armor_chestplate>, [
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:minecraft:diamond_chestplate>, <item:phayriosisreborn:primordial_carapace_fragment>],
    [<item:phayriosisreborn:primordial_carapace>, <item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:primordial_carapace>],
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:phayriosisreborn:primordial_carapace_fragment>, <item:phayriosisreborn:primordial_carapace_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:carapace_armor_leggings>);
craftingTable.addShaped("carapace_armor_leggings", <item:phayriosisreborn:carapace_armor_leggings>, [
    [<item:phayriosisreborn:primordial_carapace>, <item:phayriosisreborn:crimsonscale>, <item:phayriosisreborn:primordial_carapace>],
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:minecraft:diamond_leggings>, <item:phayriosisreborn:primordial_carapace_fragment>],
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:minecraft:air>, <item:phayriosisreborn:primordial_carapace_fragment>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:carapace_armor_boots>);
craftingTable.addShaped("carapace_armor_boots", <item:phayriosisreborn:carapace_armor_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>],
    [<item:phayriosisreborn:primordial_carapace>, <item:minecraft:diamond_boots>, <item:phayriosisreborn:primordial_carapace>],
    [<item:phayriosisreborn:primordial_carapace_fragment>, <item:minecraft:air>,<item:phayriosisreborn:primordial_carapace_fragment>]
], retainNBTShaped);

// Conscious

craftingTable.remove(<item:phayriosisreborn:primordialsentientarmor_helmet>);
craftingTable.addShaped("primordialsentientarmor_helmet", <item:phayriosisreborn:primordialsentientarmor_helmet>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:phayriosisreborn:primordial_sentient_mindtissue>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:diamond_helmet>, <item:phayriosisreborn:tendons_of_sentience>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:primordialsentientarmor_chestplate>);
craftingTable.addShaped("primordialsentientarmor_chestplate", <item:phayriosisreborn:primordialsentientarmor_chestplate>, [
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:diamond_chestplate>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:phayriosisreborn:parasitic_eye>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:phayriosisreborn:primordial_sentient_mindtissue>, <item:phayriosisreborn:tendons_of_sentience>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:primordialsentientarmor_leggings>);
craftingTable.addShaped("primordialsentientarmor_leggings", <item:phayriosisreborn:primordialsentientarmor_leggings>, [
    [<item:phayriosisreborn:tendons_of_sentience>, <item:phayriosisreborn:primordial_sentient_mindtissue>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:diamond_leggings>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:air>, <item:phayriosisreborn:tendons_of_sentience>]
], retainNBTShaped);

craftingTable.remove(<item:phayriosisreborn:primordialsentientarmor_boots>);
craftingTable.addShaped("primordialsentientarmor_boots", <item:phayriosisreborn:primordialsentientarmor_boots>, [
    [<item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:diamond_boots>, <item:phayriosisreborn:tendons_of_sentience>],
    [<item:phayriosisreborn:tendons_of_sentience>, <item:minecraft:air>,<item:phayriosisreborn:tendons_of_sentience>]
], retainNBTShaped);

// Netherite Hammer

craftingTable.addShaped("netherite_hammer", <item:superbwarfare:netherite_hammer>, [
    [<item:minecraft:netherite_ingot>, <item:minecraft:netherite_block>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
], retainNBTShaped);

// Netherite Knife

craftingTable.addShaped("netherite_knife", <item:farmersdelight:netherite_knife>, [
    [<item:minecraft:air>, <item:minecraft:netherite_ingot>,<item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>]
], retainNBTShaped);

// Superb Warfare

craftingTable.remove(<item:superbwarfare:ammo_box>);
craftingTable.addShaped("ammo_box", <item:superbwarfare:ammo_box>, [
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>,<item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:barrel>, <item:minecraft:green_dye>],
    [<item:minecraft:green_dye>, <item:minecraft:green_dye>,<item:minecraft:green_dye>]
]);

craftingTable.remove(<item:superbwarfare:laser_unit>);
craftingTable.addShaped("laser_unit", <item:superbwarfare:laser_unit>, [
    [<item:minecraft:copper_ingot>, <item:minecraft:glass_pane>,<item:minecraft:copper_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:amethyst_shard>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:redstone>,<item:minecraft:iron_ingot>]
]);

// Blueprints

craftingTable.remove(<item:superbwarfare:glock_17_blueprint>);
craftingTable.remove(<item:superbwarfare:taser_blueprint>);
craftingTable.remove(<item:superbwarfare:marlin_blueprint>);
craftingTable.remove(<item:superbwarfare:mp_443_blueprint>);
craftingTable.remove(<item:superbwarfare:m_1911_blueprint>);
craftingTable.remove(<item:superbwarfare:glock_18_blueprint>);
craftingTable.remove(<item:superbwarfare:mosin_nagant_blueprint>);
craftingTable.remove(<item:superbwarfare:k_98_blueprint>);
craftingTable.remove(<item:superbwarfare:hunting_rifle_blueprint>);
craftingTable.remove(<item:superbwarfare:m_4_blueprint>);
craftingTable.remove(<item:superbwarfare:hk_416_blueprint>);
craftingTable.remove(<item:superbwarfare:ak_12_blueprint>);
craftingTable.remove(<item:superbwarfare:ak_47_blueprint>);
craftingTable.remove(<item:superbwarfare:mp_5_blueprint>);
craftingTable.remove(<item:superbwarfare:qbz_95_blueprint>);
craftingTable.remove(<item:superbwarfare:m_870_blueprint>);
craftingTable.remove(<item:superbwarfare:m_2_hb_blueprint>);
craftingTable.remove(<item:superbwarfare:m_79_blueprint>);
craftingTable.remove(<item:superbwarfare:rpg_blueprint>);
craftingTable.remove(<item:superbwarfare:sks_blueprint>);

// Tier 1 Guns

craftingTable.addShapeless("glock_17", <item:superbwarfare:glock_17>, [
    <item:superbwarfare:common_material_pack>, <item:superbwarfare:glock_17_blueprint>
]);

craftingTable.addShapeless("taser", <item:superbwarfare:taser>, [
    <item:superbwarfare:common_material_pack>, <item:superbwarfare:taser_blueprint>, <item:superbwarfare:battery>
]);

craftingTable.addShapeless("marlin", <item:superbwarfare:marlin>, [
    <item:superbwarfare:common_material_pack>, <item:superbwarfare:marlin_blueprint>
]);

craftingTable.addShapeless("mp_443", <item:superbwarfare:mp_443>, [
    <item:superbwarfare:common_material_pack>, <item:superbwarfare:mp_443_blueprint>
]);

craftingTable.addShapeless("m_1911", <item:superbwarfare:m_1911>, [
    <item:superbwarfare:common_material_pack>, <item:superbwarfare:m_1911_blueprint>
]);

// Tier 1.5 Guns

craftingTable.addShapeless("glock_18", <item:superbwarfare:glock_18>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:glock_18_blueprint>
]);

craftingTable.addShapeless("mosin_nagant", <item:superbwarfare:mosin_nagant>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:mosin_nagant_blueprint>
]);

craftingTable.addShapeless("k_98", <item:superbwarfare:k_98>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:k_98_blueprint>
]);

craftingTable.addShapeless("hunting_rifle", <item:superbwarfare:hunting_rifle>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:hunting_rifle_blueprint>
]);

craftingTable.addShapeless("m_4", <item:superbwarfare:m_4>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:m_4_blueprint>
]);

craftingTable.addShapeless("hk_416", <item:superbwarfare:hk_416>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:hk_416_blueprint>
]);

craftingTable.addShapeless("ak_12", <item:superbwarfare:ak_12>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:ak_12_blueprint>
]);

craftingTable.addShapeless("ak_47", <item:superbwarfare:ak_47>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:ak_47_blueprint>
]);

craftingTable.addShapeless("mp_5", <item:superbwarfare:mp_5>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:mp_5_blueprint>
]);

craftingTable.addShapeless("qbz_95", <item:superbwarfare:qbz_95>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:qbz_95_blueprint>
]);

craftingTable.addShapeless("m_870", <item:superbwarfare:m_870>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:m_870_blueprint>
]);

craftingTable.addShapeless("m_2_hb", <item:superbwarfare:m_2_hb>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:m_2_hb_blueprint>
]);

craftingTable.addShapeless("m_79", <item:superbwarfare:m_79>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:m_79_blueprint>
]);

craftingTable.addShapeless("rpg", <item:superbwarfare:rpg>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:rpg_blueprint>
]);

craftingTable.addShapeless("sks", <item:superbwarfare:sks>, [
    <item:superbwarfare:rare_material_pack>, <item:superbwarfare:sks_blueprint>
]);

// Steel

blastFurnace.remove(<item:superbwarfare:steel_ingot>);
craftingTable.remove(<item:superbwarfare:steel_ingot>);
craftingTable.removeByInput(<item:superbwarfare:steel_ingot>);
craftingTable.remove(<item:superbwarfare:steel_block>);

// End Rod

craftingTable.remove(<item:minecraft:end_rod>);
craftingTable.addShaped("end_rod", <item:minecraft:end_rod> * 4, [
    [<item:minecraft:air>, <item:betterblockz:cyberlight_blockz_0>,<item:minecraft:air>],
    [<item:minecraft:air>, <item:betterblockz:cyberlight_blockz_0>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:stone>,<item:minecraft:air>]
]);

// Blaze Rod
craftingTable.addShapeless("blaze_rod", <item:minecraft:blaze_rod>, [
    <item:minecraft:flint_and_steel>, <item:superbwarfare:tungsten_rod>
]);

// Black Stone

craftingTable.addShapeless("blackstone", <item:minecraft:blackstone>, [
    <item:minecraft:cobblestone>, <item:minecraft:black_dye>
]);

// Ice Box

craftingTable.addShaped("ice_box", <item:cold_sweat:icebox>, [
    [<item:minecraft:cobbled_deepslate_slab>, <item:minecraft:cobbled_deepslate_slab>,<item:minecraft:cobbled_deepslate_slab>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>,<tag:items:minecraft:planks>]
]);

// Sewing Table

craftingTable.addShaped("sewing_table", <item:cold_sweat:sewing_table>, [
    [<tag:items:minecraft:planks>, <item:minecraft:red_wool>,<tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>],
    [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>,<tag:items:minecraft:planks>]
]);

// Upgrade Base

craftingTable.remove(<item:sophisticatedbackpacks:upgrade_base>);
craftingTable.addShaped("upgrade_base", <item:sophisticatedbackpacks:upgrade_base>, [
    [<item:minecraft:slime_ball>, <item:minecraft:iron_ingot>,<item:minecraft:slime_ball>],
    [<item:minecraft:iron_ingot>, <item:minecraft:leather>, <item:minecraft:iron_ingot>],
    [<item:minecraft:slime_ball>, <item:minecraft:iron_ingot>,<item:minecraft:slime_ball>]
]);


// Crafting Upgrade

craftingTable.addShaped("crafting_upgrade", <item:sophisticatedbackpacks:crafting_upgrade>, [
    [<item:minecraft:air>, <item:minecraft:chest>,<item:minecraft:air>],
    [<item:minecraft:iron_ingot>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:iron_ingot>],
    [<item:minecraft:air>, <item:minecraft:crafting_table>,<item:minecraft:air>]
]);

// Magnet Upgrade

craftingTable.addShaped("magnet_upgrade", <item:sophisticatedbackpacks:magnet_upgrade>, [
    [<item:minecraft:air>, <item:minecraft:redstone>,<item:minecraft:air>],
    [<item:minecraft:iron_ingot>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:iron_ingot>],
    [<item:minecraft:air>, <item:mekanismgenerators:electromagnetic_coil>,<item:minecraft:air>]
]);

// Feeding Upgrade

craftingTable.addShaped("feeding_upgrade", <item:sophisticatedbackpacks:feeding_upgrade>, [
    [<item:minecraft:air>, <item:minecraft:redstone>,<item:minecraft:air>],
    [<item:minecraft:iron_ingot>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:iron_ingot>],
    [<item:minecraft:air>, <item:minecraft:apple>,<item:minecraft:air>]
]);

// Refill Upgrade

craftingTable.addShaped("refill_upgrade", <item:sophisticatedbackpacks:refill_upgrade>, [
    [<item:minecraft:air>, <item:minecraft:redstone>,<item:minecraft:air>],
    [<item:minecraft:iron_ingot>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:iron_ingot>],
    [<item:minecraft:air>, <item:mekanism:basic_logistical_transporter>,<item:minecraft:air>]
]);

// Potions

brewing.removeRecipeByReagent(<item:minecraft:nether_wart>);
brewing.removeRecipeByReagent(<item:minecraft:glowstone_dust>);
brewing.removeRecipeByReagent(<item:minecraft:redstone>);
brewing.removeRecipeByReagent(<item:minecraft:fermented_spider_eye>);
brewing.removeRecipeByReagent(<item:minecraft:gunpowder>);
brewing.removeRecipeByReagent(<item:minecraft:dragon_breath>);
brewing.removeRecipeByReagent(<item:minecraft:sugar>);
brewing.removeRecipeByReagent(<item:minecraft:rabbit_foot>);
brewing.removeRecipeByReagent(<item:minecraft:glistering_melon_slice>);
brewing.removeRecipeByReagent(<item:minecraft:spider_eye>);
brewing.removeRecipeByReagent(<item:minecraft:ghast_tear>);
brewing.removeRecipeByReagent(<item:minecraft:blaze_powder>);
brewing.removeRecipeByReagent(<item:minecraft:magma_cream>);
brewing.removeRecipeByReagent(<item:minecraft:golden_carrot>);
brewing.removeRecipeByReagent(<item:minecraft:pufferfish>);
brewing.removeRecipeByReagent(<item:minecraft:turtle_helmet>);
brewing.removeRecipeByReagent(<item:minecraft:phantom_membrane>);
brewing.removeRecipeByReagent(<item:minecraft:potion>);
brewing.removeRecipeByReagent(<item:minecraft:bone_meal>);
brewing.removeRecipeByReagent(<item:minecraft:copper_ingot>);
brewing.removeRecipeByReagent(<item:minecraft:iron_ingot>);
brewing.removeRecipeByReagent(<item:minecraft:amethyst_shard>);
brewing.removeRecipeByReagent(<item:cold_sweat:soul_sprout>);
brewing.removeRecipeByReagent(<item:minecraft:quartz>);
brewing.removeRecipeByReagent(<item:minecraft:poisonous_potato>);
brewing.removeRecipeByReagent(<item:phayriosisreborn:spewer_cap>);
brewing.removeRecipeByReagent(<item:minecraft:potion>.withTag({Potion: "minecraft:healing"}));
brewing.removeRecipeByReagent(<item:minecraft:potion>.withTag({Potion: "minecraft:strong_healing"}));
brewing.removeRecipeByReagent(<item:minecraft:potion>.withTag({Potion: "minecraft:harming"}));
brewing.removeRecipeByReagent(<item:minecraft:potion>.withTag({Potion: "minecraft:strong_harming"}));

// Medical Items

craftingTable.remove(<item:marbledsfirstaid:pain_pills>);
craftingTable.remove(<item:marbledsfirstaid:curative_pills>);
craftingTable.remove(<item:marbledsfirstaid:panacea_pills>);

// Leather

craftingTable.remove(<item:minecraft:leather>);

// XP Tome

craftingTable.remove(<item:xpbook:xp_tome>);
craftingTable.addShaped("xp_tome", <item:xpbook:xp_tome>, [
    [<item:minecraft:purple_dye>, <item:mekanism:basic_chemical_tank>,<item:minecraft:purple_dye>],
    [<item:minecraft:amethyst_shard>, <item:minecraft:book>, <item:minecraft:amethyst_shard>],
    [<item:minecraft:purple_dye>, <item:mekanism:basic_fluid_tank>,<item:minecraft:purple_dye>]
]);

// Gun Powder

craftingTable.remove(<item:minecraft:gunpowder>);

// Primer

craftingTable.remove(<item:superbwarfare:primer>);
craftingTable.addShaped("primer", <item:superbwarfare:primer> * 16, [
    [<item:minecraft:air>, <item:minecraft:air>,<item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:gunpowder>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:superbwarfare:copper_plate>,<item:minecraft:air>]
]);

// Ammo

craftingTable.remove(<item:superbwarfare:handgun_ammo>);
craftingTable.remove(<item:superbwarfare:shotgun_ammo>);
craftingTable.remove(<item:superbwarfare:rifle_ammo>);
craftingTable.remove(<item:superbwarfare:sniper_ammo>);
craftingTable.remove(<item:superbwarfare:heavy_ammo>);