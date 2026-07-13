const HELMET_TAGS_DEFAULT = [
    "forge:armors",
    "forge:armor",
    "forge:armors/helmets",
    "forge:helmets",
    "bookshelf:armor",
    "bookshelf:helmets"
]

const CHESTPLATE_TAGS_DEFAULT = [
    "forge:armors",
    "forge:armor",
    "forge:armors/chestplates",
    "forge:chestplates",
    "bookshelf:armor",
    "bookshelf:chestplates"
]

const LEGGINGS_TAGS_DEFAULT = [
    "forge:armors",
    "forge:armor",
    "forge:armors/leggings",
    "forge:leggings",
    "bookshelf:armor",
    "bookshelf:leggings"
]

const BOOTS_TAGS_DEFAULT = [
    "forge:armors",
    "forge:armor",
    "forge:armors/boots",
    "forge:boots",
    "bookshelf:armor",
    "bookshelf:boots"
]

const TAG_ARMOR_SETS = [
    "infectious:hazmat_suit_",
    "infectious:security_armor_",
    "infectious:soldier_armor_",
    "infectious:swatarmor_",
    "zrikons_military_armor:spec_ops_full_",
    "zrikons_military_armor:spec_ops_full_winter_",
    "zrikons_military_armor:military_armor_spec_ops_black_",
    "zrikons_military_armor:pilot_suite_"
]

const TAG_REMOVAL = [
    { "superbwarfare:steel_ingot": ["forge:ingots/steel"] },
    { "superbwarfare:steel_block": ["forge:storage_blocks/steel"] }
]

const TAG_ADDITION = []

const BANNED_TAG = "abza:banned_item";

/**
 * Adds the default armor-related item tags to every armor piece
 * belonging to a set that shares a common item ID prefix.
 *
 * The following armor pieces are processed:
 * [helmet, chestplate, leggings, boots]
 *
 * Each piece automatically receives the tags defined in its
 * corresponding default tag array:
 *
 * helmet     -> HELMET_TAGS_DEFAULT
 * chestplate -> CHESTPLATE_TAGS_DEFAULT
 * leggings   -> LEGGINGS_TAGS_DEFAULT
 * boots      -> BOOTS_TAGS_DEFAULT
 *
 * Example:
 * addArmorSetTags(event, "infectious:hazmat_suit_")
 *
 * Will apply:
 * - HELMET_TAGS_DEFAULT     to infectious:hazmat_suit_helmet
 * - CHESTPLATE_TAGS_DEFAULT to infectious:hazmat_suit_chestplate
 * - LEGGINGS_TAGS_DEFAULT   to infectious:hazmat_suit_leggings
 * - BOOTS_TAGS_DEFAULT      to infectious:hazmat_suit_boots
 *
 * @param {Internal.TagEventJS} event - The KubeJS item tag event.
 * @param {string} prefix - The shared item ID prefix of the armor set.
 */
function addArmorSetTags(event, prefix) {
    const pieces = {
        helmet: HELMET_TAGS_DEFAULT,
        chestplate: CHESTPLATE_TAGS_DEFAULT,
        leggings: LEGGINGS_TAGS_DEFAULT,
        boots: BOOTS_TAGS_DEFAULT
    }

    Object.entries(pieces).forEach(([piece, tags]) => {
        tags.forEach(tag => {
            event.add(tag, `${prefix}${piece}`)
        })
    })
}

ServerEvents.tags("item", event => {
    TAG_REMOVAL.forEach(entry => {
        Object.entries(entry).forEach(([item, tags]) => {
            tags.forEach(tag => {
                event.remove(tag, item);
            })
        })
    })
    TAG_ADDITION.forEach(entry => {
        Object.entries(entry).forEach(([item, tags]) => {
            tags.forEach(tag => {
                event.add(tag, item);
            })
        })
    })
    BANNED_ITEM_LIST.forEach(item => {
        event.add(BANNED_TAG, item);
        //event.removeAllTagsFrom(item); -> Once Mekanism Complete
    })
    TAG_ARMOR_SETS.forEach(prefix => {
        addArmorSetTags(event, prefix);
    })
})

const T1_MODS = ["minecraft", "infectious", "undead_revamp2"]

ServerEvents.tags("entity_type", event => {
    Object.keys(ENTITY_STATS).forEach(entityId => {
        const mod = entityId.split(":")[0]
        const modTag = `abza:${mod}_mobs`
        event.add(modTag, entityId)
        if (T1_MODS.includes(mod)) {
            event.add("abza:t1_mobs", entityId)
        }
    })
})