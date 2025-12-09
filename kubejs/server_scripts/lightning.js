/* // It may feel unfair
let scheduledStrikes = [];

PlayerEvents.tick(event => {
    if (!event.player.level.isThundering()) { return; }
    if (Math.random() < 0.05) {
        const player = event.player;
        const notUnderRoof = player.level.canSeeSkyFromBelowWater(player.blockPosition());
        if (notUnderRoof) {
            scheduledStrikes.push({
                x: player.x,
                y: player.y,
                z: player.z,
                ticksRemaining: 15 
            });
        }
    }
    for (let i = scheduledStrikes.length - 1; i >= 0; i--) {
        scheduledStrikes[i].ticksRemaining--;
        if (scheduledStrikes[i].ticksRemaining <= 0) {
            const strike = scheduledStrikes[i];
            event.server.runCommandSilent(`/summon minecraft:lightning_bolt ${strike.x} ${strike.y} ${strike.z}`);
            scheduledStrikes.splice(i, 1);
        }
    }
});*/