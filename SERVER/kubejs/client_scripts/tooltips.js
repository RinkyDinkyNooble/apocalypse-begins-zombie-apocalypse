ItemEvents.tooltip(event => {

    // Cure

    event.addAdvanced("cure:fox_weed", (item, advanced, text) => {
        text.clear();
        text.add(Text.gold("Mysterious Plant"));
        text.add(Text.white("Can be found in a lab"));
    });

    event.addAdvanced("cure:fox_weed_paste", (item, advanced, text) => {
        text.clear();
        text.add(Text.gold("Mysterious Plant Paste"));
        text.add(Text.white("Obtained by thoroughly crushing a mysterious plant"));
    });

    event.addAdvanced("cure:syringe", (item, advanced, text) => {
        text.clear();
        text.add(Text.gold("Precision Needle"));
        text.add(Text.white("A needle capable of highly precise penetration of the skin"));
    });

    event.addAdvanced("cure:vaccine", (item, advanced, text) => {
        text.clear();
        text.add(Text.gold("Zombie Infection Cure"));
        text.add(Text.lightPurple("Permanently effects all forms of infections"));
        text.add(Text.darkGray("You remain immune even after death"));
    });

    // Weapons

    event.addAdvanced("superbwarfare:rgo_grenade", (item, advanced, text) => {
        text.clear();
        text.add(Text.yellow("Impact Grenade"));
    });

    // Milk Bottle

    event.addAdvanced("farmersdelight:milk_bottle", (item, advanced, text) => {
        text.clear();
        text.add(Text.white("Milk Bottle"));
    });
});
