# Apocalypse Begins

**Apocalypse Begins** is a custom Minecraft modpack focused on surviving a zombie apocalypse. The ultimate goal is to survive for 100 days while battling infection and crafting a cure using advanced technology.

## Key Features

### 🧟 Zombie Apocalypse Survival
The world is overrun. Your primary objective is to survive against the hordes of zombies and other dangers.

### 📅 100 Days Challenge
The pack features a built-in progression system that tracks your survival.
- Milestones are achieved and quests completed at **Day 10, 25, 50, and 100**.
- Handled by: `kubejs/server_scripts/100_days_quest.js`

### 💉 Infection & Cure Mechanics
You are at risk of contracting the virus. Manage your health and work towards a permanent cure.
- **Infection**: Players can contract `infectious:infection`.
- **Relief**:
    - **Golden Apples** & **Enchanted Golden Apples**: Temporarily clear infection.
    - **Antibiotics**: Clear `hordes:infected` status.
- **The Cure**:
    - **Vaccine**: Grants permanent `hordes:immunity`.
    - **Crafting**: Requires **Create** mod mechanics (Mechanical Crafting and Mixing) to produce the Syringe and Vaccine.
    - Handled by: `kubejs/server_scripts/vaccine.js`

### 🚫 Locked Dimensions
To focus the survival experience on the Overworld, inter-dimensional travel is restricted.
- **The Nether** and **The End** portals are **disabled**.
- Handled by: `kubejs/server_scripts/disable_portal.js`

## Project Structure

This project relies heavily on **KubeJS** to customize the gameplay experience.

### `kubejs/server_scripts/`
Server-side scripts that define the rules and recipes of the world:
- **`100_days_quest.js`**: Logic for tracking days survived and updating quest progress.
- **`vaccine.js`**: Custom recipes for the cure (Syringe, Fox Weed) and event handlers for infection/immunity effects.
- **`disable_portal.js`**: Prevents Nether and End portal usage.
- **`loot.js`**: Customizes loot tables to balance the survival economy.
- **`diet.js`**: Integrates dietary mechanics for added survival challenge.
- **`create_ore_excavation.js`**: Integration between Create and Ore Excavation mods.
- **`entity_buff.js`**: Likely strengthens mobs to scale difficulty.

### `kubejs/client_scripts/`
Client-side scripts for UI and visual changes:
- **`tooltips.js`**: Adds helpful information to items in-game.

## Configuration & Mechanics

The `config/` directory contains critical settings that define the modpack's difficulty and behavior.

### 🧟 Enemy Spawning & Events
- **Hordes (`hordes-common.toml`)**:
    - **Events**: A zombie horde event occurs every **5 days** (configurable).
    - **Infection**: Enabled for both players and villagers. Villagers have an 85% infection chance, players 75%.
    - **Mechanics**: Zombies do **not** burn in sunlight. Piglins and Illagers are set to hunt zombies.
- **Bad Mobs (`badmobs-common.toml`)**:
    - **Vanilla Spawn Filtering**: Heavily modifies spawning to remove non-zombie fantasy elements.
    - **Disabled**: Creepers, Skeletons, Spiders, Endermen, Witches, and most other fantasy/nether mobs are **disabled** from natural spawning.
    - **Allowed**: Zombies (Husks, Drowned), Animals (Cows, Pigs, etc.), and passive mobs.
- **Improved Mobs (`improvedmobs/common.toml`)**:
    - **Difficulty Scaling**: Mobs get stronger over time (Health, Damage, Speed, Armor).
    - **AI Enhancements**:
        - **Breaching**: Zombies can break glass, doors, and fence gates to get to you.
        - **Stealing**: Mobs can steal items from chests.
        - **Equipment**: Zombies spawn with armor and weapons, including enchanted gear.
- **Undead Mobs (`Undead_mobs.toml`)**:
    - Adds special infected types to the spawn pool:
        - **Pregnant**: Spawns 'Bidy' and 'Sucker' variants on death.
        - **Hunter**: Can destroy doors/fences, lifesteal, and does not burn in sun.
        - **Bomber**: Explodes on impact (radius 9) leaving goo.
        - **Wolf**, **Bidy**, **Clogger**: Additional variants with unique behaviors.

### ⚔️ Combat & Items
- **Starter Kit (`starterkit/kits/standard.txt`)**:
    - Players spawn with **Security Armor**, a **SWAT Shield**, a **Baton**, a **Glock 17** (with ammo), and a **Grenade**.
    - Includes basic food and water + temporary climate immunity.
- **Item Obliterator (`item_obliterator.json5`)**:
    - **Blacklist**: Removes specific items from gameplay, mostly from the `undead_revamp2` mod (e.g., various masks, sacks, specific armors) to balance progression or prevent bugs.
- **Superb Warfare (`superbwarfare-common.toml`)**: Configures modern weaponry/combat mechanics.
- **First Aid (`firstaid-common.toml`)**: Replaces standard health with a locational damage system (Head, Body, Limbs).

### 🏃 Survival & Movement
- **Diet (`diet-server.toml`)**: Enforces dietary variety. You cannot survive on bread alone.
- **ParCool (`parcool-client.toml`)**: Adds parkour movements (wall jumping, ledge grabbing) to aid in escaping hordes.
- **Hardcore Revival (`hardcorerevival-common.toml`)**: Allows players to revive teammates in multiplayer within a time limit before they die permanently (or respawn).

### 🌍 World & Visuals
- **Lost Cities (`lostcities/`)**: Configures the world generation to create abandoned urban environments (cities with loot). **[schem-to-lostcities-part](https://github.com/RinkyDinkyNooble/schem-to-lostcities-part)**: A helper tool used to convert building schematics into the "Part" format required by the Lost Cities mod. This allowed for the integration of custom structures into the detailed urban environments generated by the pack.
- **Distant Horizons (`DistantHorizons.toml`)**: Enables Level-of-Detail (LOD) rendering for massive render distances without killing performance.
- **Stylish Effects (`stylisheffects-client.toml`)**: Enhances visual feedback for status effects.
- **FTB Quests (`ftbquests/`)**: Configuration for the quest book structure and rewards.

---

<a href="https://www.curseforge.com/minecraft/modpacks/apocalypse-begins-zombie-apocalypse">Apocalypse Begins</a> by <a href="https://www.curseforge.com/members/rinkynooble/projects">RinkyDinkyNooble</a> is marked <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 Universal</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">