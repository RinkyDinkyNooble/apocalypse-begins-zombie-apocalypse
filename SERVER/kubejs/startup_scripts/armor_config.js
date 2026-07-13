/**
 * Modifies an entire or partial armor set based on a shared item ID prefix.
 *
 * The armor pieces are processed in the following order:
 * [helmet, chestplate, leggings, boots]
 *
 * Each piece's stats should be provided in the format:
 * [armorProtection, armorToughness, armorKnockbackResistance]
 *
 * If fewer than four sets of stats are provided, only the corresponding
 * pieces will be modified. For example, providing two sets of stats
 * will modify only the helmet and chestplate.
 *
 * Example usage (full set):
 * modifySet(event, "minecraft:leather_", [
 *     [1, 0, 0.0], // Helmet
 *     [2, 0, 0.0], // Chestplate
 *     [2, 0, 0.0], // Leggings
 *     [1, 0, 0.0]  // Boots
 * ])
 *
 * Example usage (partial set):
 * modifySet(event, "minecraft:leather_", [
 *     [1, 0, 0.0], // Helmet
 *     [2, 0, 0.0]  // Chestplate
 * ])
 *
 * @param {Internal.ItemModificationEventJS} event - The event object for modifying items.
 * @param {string} prefix - The shared item ID prefix for the armor set.
 * @param {number[][]} stats - A 2D array of stats for each armor piece, in order.
 */
function modifySet(event, prefix, stats) {
    const pieces = ["helmet", "chestplate", "leggings", "boots"]

    stats.forEach((values, index) => {
        const piece = pieces[index]
        if (!piece) return

        const [protection, toughness, knockbackResistance] = values

        event.modify(`${prefix}${piece}`, item => {
            item.armorProtection = protection
            item.armorToughness = toughness
            item.armorKnockbackResistance = knockbackResistance
        })
    })
}

ItemEvents.modification(event => {

    modifySet(event, "minecraft:chainmail_", [
        [2, 0, 0.0],
        [4, 0, 0.0],
        [3, 0, 0.0],
        [1, 0, 0.0]
    ])

    modifySet(event, "minecraft:iron_", [
        [4, 1, 0.3],
        [6, 1, 0.3],
        [5, 1, 0.3],
        [3, 1, 0.3]
    ])

    modifySet(event, "minecraft:diamond_", [
        [6, 3, 0.6],
        [8, 3, 0.6],
        [7, 3, 0.6],
        [5, 3, 0.6]
    ])

    modifySet(event, "minecraft:netherite_", [
        [8, 5, 1.0],
        [10, 5, 1.0],
        [9, 5, 1.0],
        [7, 5, 1.0]
    ])

    modifySet(event, "infectious:security_armor_", [
        [2, 0, 0.0],
        [4, 0, 0.0],
        [3, 0, 0.0],
        [1, 0, 0.0]
    ])

    modifySet(event, "infectious:hazmat_suit_", [
        [2, 0, 0.0],
        [4, 0, 0.0],
        [3, 0, 0.0],
        [1, 0, 0.0]
    ])

    modifySet(event, "infectious:soldier_armor_", [
        [2, 0, 0.0],
        [4, 0, 0.0],
        [3, 0, 0.0],
        [1, 0, 0.0]
    ])

    modifySet(event, "infectious:swatarmor_", [
        [2, 0, 0.0],
        [4, 0, 0.0],
        [3, 0, 0.0],
        [1, 0, 0.0]
    ])

    modifySet(event, "zrikons_military_armor:spec_ops_full_", [
        [4, 1, 0.3],
        [6, 1, 0.3],
        [5, 1, 0.3],
        [3, 1, 0.3]
    ])

    modifySet(event, "zrikons_military_armor:spec_ops_full_winter_", [
        [4, 1, 0.3],
        [6, 1, 0.3],
        [5, 1, 0.3],
        [3, 1, 0.3]
    ])

    modifySet(event, "zrikons_military_armor:military_armor_spec_ops_black_", [
        [4, 1, 0.3],
        [6, 1, 0.3],
        [5, 1, 0.3],
        [3, 1, 0.3]
    ])

    modifySet(event, "zrikons_military_armor:pilot_suite_", [
        [4, 1, 0.3],
        [6, 1, 0.3],
        [5, 1, 0.3],
        [3, 1, 0.3]
    ])

    modifySet(event, "phayriosisreborn:crimsonscale_armor_", [
        [6, 3, 0.6],
        [8, 3, 0.6],
        [7, 3, 0.6],
        [5, 3, 0.6]
    ])

    modifySet(event, "phayriosisreborn:carapace_armor_", [
        [6, 3, 0.7],
        [8, 3, 0.7],
        [7, 3, 0.7],
        [5, 3, 0.7]
    ])

    modifySet(event, "phayriosisreborn:primordialsentientarmor_", [
        [6, 3, 0.8],
        [8, 3, 0.8],
        [7, 3, 0.8],
        [5, 3, 0.8]
    ])
})
