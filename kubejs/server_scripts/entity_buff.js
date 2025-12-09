
let gameTime = 0;
let timeChecked = false;

ServerEvents.tick(event => {
    if (timeChecked === false) {
        gameTime = event.server.persistentData.getInt("custom_game_time") || 0;
        timeChecked = true;
    }
    gameTime++;
    event.server.persistentData.putInt("custom_game_time", gameTime)
})
/*
const healthCap = 100.0
const knockbackResistanceCap = 1.0
const movementSpeedCap = 2.1
const attackDamageCap = 30.0

const buff = (event) => {
    const entity = event.entity;
    const dayCount = Math.floor(gameTime / 24000);
    const attackDamage = entity.getAttribute("minecraft:generic.attack_damage").baseValue + dayCount * 0.1;
    const maxHealth = entity.getAttribute("minecraft:generic.max_health").baseValue + dayCount;
    const knockbackResistance = entity.getAttribute("minecraft:generic.knockback_resistance").baseValue + dayCount * 0.01;
    const movementSpeed = entity.getAttribute("minecraft:generic.movement_speed").baseValue + dayCount * 0.01;
    if (attackDamage >= attackDamageCap) {
        entity.getAttribute("minecraft:generic.attack_damage").baseValue = attackDamageCap;
    } else {
        entity.getAttribute("minecraft:generic.attack_damage").baseValue = attackDamage;
    }
    if (maxHealth >= healthCap) {
        entity.getAttribute("minecraft:generic.max_health").baseValue = healthCap;
        entity.health = healthCap;
    } else {
        entity.getAttribute("minecraft:generic.max_health").baseValue = maxHealth;
        entity.health = maxHealth;
    }
    if (knockbackResistance >= knockbackResistanceCap) {
        entity.getAttribute("minecraft:generic.knockback_resistance").baseValue = knockbackResistanceCap;
    } else {
        entity.getAttribute("minecraft:generic.knockback_resistance").baseValue = knockbackResistance;
    }
    if (movementSpeed >= movementSpeedCap) {
        entity.getAttribute("minecraft:generic.movement_speed").baseValue = movementSpeedCap;
    } else {
        entity.getAttribute("minecraft:generic.movement_speed").baseValue = movementSpeed;
    }
}

EntityEvents.spawned("minecraft:zombie", event => {
    buff(event)
});
*/
let lastDayCount = null;
ServerEvents.tick(event => {
    const dayCount = Math.floor(gameTime / 24000);
    if (lastDayCount == null || dayCount > lastDayCount) {
        lastDayCount = dayCount;
        event.server.runCommandSilent(`/improvedmobs difficulty set ${dayCount}`);
    }
})