const NEGATIVE_EFFECT = [
    "minecraft:wither",
    "minecraft:blindness",
    "minecraft:nausea",
    "minecraft:mining_fatigue",
    "minecraft:poison"
]

function hasFullSet(player) {
    return (
        player.headArmorItem.id === "infectious:hazmat_suit_helmet" &&
        player.chestArmorItem.id === "infectious:hazmat_suit_chestplate" &&
        player.legsArmorItem.id === "infectious:hazmat_suit_leggings" &&
        player.feetArmorItem.id === "infectious:hazmat_suit_boots"
    )
}

PlayerEvents.tick(event => {
    const player = event.player
    if (!player) return
    if (hasFullSet(player)) {
        NEGATIVE_EFFECT.forEach(e => player.removeEffect(e))
    }
})

EntityEvents.hurt(event => {
    const entity = event.entity
    if (!entity.player) return
    if (!hasFullSet(entity)) return
    const player = event.player
    const source = event.source
    if (String(source).includes("(mekanism.radiation)")) {
        event.server.runCommandSilent(`/mek radiation heal ${player.username}`)
        event.cancel()
    }
})
