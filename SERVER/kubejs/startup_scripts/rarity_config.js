const TOOLTIP_EPIC_ITEMS = [
    "cure:fox_weed",
    "cure:fox_weed_paste",
    "cure:syringe",
    "cure:vaccine"
]

ItemEvents.modification(event => {
    TOOLTIP_EPIC_ITEMS.forEach(id => {
        event.modify(id, item => {
            item.rarity = "EPIC"
        })
    })
})