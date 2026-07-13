const INFECTED_EFFECT = "infectious:infection"
const IMMUNITY_EFFECT = "hordes:immunity"

function giveImmunity(event, player) {
    event.server.runCommandSilent(
        `/effect give ${player.username} hordes:immunity infinite 0 true`
    );
}

PlayerEvents.tick(event => {
    const player = event.player;
    const isInfected = player.hasEffect(INFECTED_EFFECT);
    const isImmune = player.hasEffect(IMMUNITY_EFFECT);
    if (isImmune && isInfected) {
        player.removeEffect(INFECTED_EFFECT);
    }
    if (player.persistentData.vaccinated  && !isImmune) {
        giveImmunity(event, player);
    }
});

PlayerEvents.respawned(event => {
    const player = event.player
    if (player.persistentData.vaccinated) {
        giveImmunity(event, player);
    }
    DIET_GROUPS.forEach(name => {
        event.server.runCommandSilent(`/diet set ${player.username} ${name} 0.25`);
    })
})

ItemEvents.foodEaten("cure:vaccine", (event) => {
    const player = event.player

    if (!player.persistentData.vaccinated) {
        player.persistentData.vaccinated = true;
        giveImmunity(event, player);
    }
});
