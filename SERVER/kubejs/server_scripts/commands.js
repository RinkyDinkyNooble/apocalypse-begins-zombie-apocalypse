/**
 * Converts a command source position to floored integer coordinates.
 * @param {object} position - ctx.source.position
 * @returns {{ x: number, y: number, z: number }}
 * @example
 * var p = getPosition(ctx.source.position);
 * Utils.server.runCommandSilent("/setblock " + p.x + " " + p.y + " " + p.z + " minecraft:stone");
 */
const getPosition = (position) => {
	return { x: Math.floor(position.x()), y: Math.floor(position.y()), z: Math.floor(position.z()) }
}

var PasscodeUtils = Java.loadClass("net.geforcemods.securitycraft.util.PasscodeUtils");
var SaltData = Java.loadClass("net.geforcemods.securitycraft.misc.SaltData");
var PBEKeySpec = Java.loadClass("javax.crypto.spec.PBEKeySpec");
var SecretKeyFactory = Java.loadClass("javax.crypto.SecretKeyFactory");
var JavaString = Java.loadClass("java.lang.String");

/**
 * Places a SecurityCraft keypad block at the given position with a pre-set passcode and optional NBT.
 *
 * Handles full PBKDF2WithHmacSHA1 passcode hashing and salt registration before placement.
 * Defers block entity NBT writes by 1 tick to allow the block entity to fully initialize.
 *
 * @param {Internal.ServerLevel} serverLevel - The server level to place the block in.
 * @param {{ x: number, y: number, z: number }} p - The target position.
 * @param {{ id: string, stateString: string }} blockInfo - The block ID and optional block state string (e.g. `"[facing=north]"`).
 * @param {string} passcode - The raw passcode string to hash and store (e.g. `"1234"`).
 * @param {string} nbt - SNBT string appended to the setblock command for initial block entity data (e.g. `"{Items:[...]}"`).
 *
 * @example
 * placeKeypad(
 *   event.level,
 *   { x: 0, y: 64, z: 0 },
 *   { id: "securitycraft:keypad", stateString: "[facing=north]" },
 *   "1234",
 *   "{Items:[{Slot:0,id:'minecraft:diamond',Count:1}]}"
 * );
 *
 * @see PasscodeUtils
 * @see SaltData
 */
function placeKeypad(serverLevel, p, blockInfo, passcode, nbt) {
	SaltData.refreshLevel(serverLevel);

	var salt = PasscodeUtils.generateSalt();
	var saltUUID = SaltData.putSalt(salt);

	var preHash = new JavaString(PasscodeUtils.hashPasscodeWithoutSalt(passcode));
	var spec = new PBEKeySpec(preHash.toCharArray(), salt, 65536, 128);
	var factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
	var finalHashBytes = factory.generateSecret(spec).getEncoded();

	Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} ${blockInfo.id}${blockInfo.stateString}${nbt}`);

	Utils.server.scheduleInTicks(1, function () {
		var pos = new BlockPos(p.x, p.y, p.z);
		var be = serverLevel.getBlockEntity(pos);
		if (be != null) {
			be.setPasscode(finalHashBytes);
			be.setSaltKey(saltUUID);
			be.setChanged();
		}
	});
}

/**
 * Extracts block ID and state string from a raw blockstate object.
 * @param {object} stateInfo - raw blockstate, e.g. Arguments.BLOCK_STATE.getResult(ctx, "block[state]").getState()
 * @returns {{ id: string, stateString: string }}
 *          id          - e.g. "securitycraft:keypad"
 *          stateString - e.g. "[facing=north]" or "" if no properties
 * @example
 * var blockInfo = getBlockState(Arguments.BLOCK_STATE.getResult(ctx, "block[state]").getState());
 * Utils.server.runCommandSilent("/setblock " + p.x + " " + p.y + " " + p.z + " " + blockInfo.id + blockInfo.stateString);
 */
function getBlockState(stateInfo) {
	var stringForm = "" + stateInfo.toString();
	var match = stringForm.match(/\[.*\]/);
	return {
		id: "" + stateInfo.block.id,
		stateString: match ? match[0] : "",
	};
}

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event
	event.register(
		Commands.literal("spawn")
			.then(Commands.argument("entity", Arguments.RESOURCE_LOCATION.create(event))
				.then(Commands.argument("nbt", Arguments.NBT_TAG.create(event))
					.executes(ctx => {
						const nbt = Arguments.NBT_TAG.getResult(ctx, "nbt")
						const entity = Arguments.RESOURCE_LOCATION.getResult(ctx, "entity")
						const p = getPosition(ctx.source.position)
						Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} air`)
						Utils.server.runCommandSilent(`/summon ${entity} ${p.x} ${p.y} ${p.z} ${nbt}`)
						return 1
					})
				)
			)
	);
	event.register(
		Commands.literal("placeBlockEntity").then(
			Commands.argument("block[state]", Arguments.BLOCK_STATE.create(event))
				.then(Commands.argument("nbt", Arguments.NBT_TAG.create(event))
					.executes((ctx) => {
						const blockInfo = getBlockState(Arguments.BLOCK_STATE.getResult(ctx, "block[state]").getState());
						const nbt = Arguments.NBT_TAG.getResult(ctx, "nbt");
						const p = getPosition(ctx.source.position);
						Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} ${blockInfo.id}${blockInfo.stateString}${nbt}`);
						return 1;
					}),
				)
		),
	);
	event.register(
		Commands.literal("placeKeypad").then(
			Commands.argument("block[state]", Arguments.BLOCK_STATE.create(event)).then(
				Commands.argument("lootName", Arguments.STRING.create(event)).executes(function (ctx) {
					const blockInfo = getBlockState(Arguments.BLOCK_STATE.getResult(ctx, "block[state]").getState());
					const lootName = Arguments.STRING.getResult(ctx, "lootName");
					const passcode = KEYPAD_LOOT_TABLE[lootName]["code"];
					const nbt = KEYPAD_LOOT_TABLE[lootName]["loot"];
					placeKeypad(ctx.source.level, getPosition(ctx.source.position), blockInfo, passcode, nbt);
					return 1;
				})
			)
		)
	);
	event.register(
		Commands.literal("placeKeycardReader").then(
			Commands.argument("block[state]", Arguments.BLOCK_STATE.create(event)).then(
				Commands.argument("lootName", Arguments.STRING.create(event)).executes(function (ctx) {
					const blockInfo = getBlockState(Arguments.BLOCK_STATE.getResult(ctx, "block[state]").getState());
					const lootName = Arguments.STRING.getResult(ctx, "lootName");
					const signature = KEYCARD_LOOT_TABLE[lootName]["signature"];
					const acceptedLevels = KEYCARD_LOOT_TABLE[lootName]["acceptedLevels"];
					const p = getPosition(ctx.source.position);
					Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} ${blockInfo.id}${blockInfo.stateString}{owner:"owner",ownerUUID:"ownerUUID",signature:${signature},acceptedLevels:${acceptedLevels}}`);
					return 1;
				})
			)
		)
	);
	event.register(
		Commands.literal("spawnNPC").then(
			Commands.argument("tab", Arguments.STRING.create(event)).then(
				Commands.argument("name", Arguments.STRING.create(event)).executes(ctx => {
					const tab = Arguments.STRING.getResult(ctx, "tab")
					const name = Arguments.STRING.getResult(ctx, "name")
					const p = getPosition(ctx.source.position)
					Utils.server.runCommandSilent(`/setblock ${p.x} ${p.y} ${p.z} air`)
					Utils.server.runCommandSilent(`/noppes clone spawn ${name} ${tab} ${p.x} ${p.y} ${p.z}`)
					return 1
				})
			)
		)
	)
	event.register(
		Commands.literal("pregen").then(
			Commands.argument("world", Arguments.DIMENSION.create(event)).then(
				Commands.argument("shape", Arguments.STRING.create(event)).then(
					Commands.argument("radius", Arguments.FLOAT.create(event)).executes(ctx => {
						const world = Arguments.DIMENSION.getResult(ctx, "world")
						const shape = Arguments.STRING.getResult(ctx, "shape")
						const radius = Arguments.FLOAT.getResult(ctx, "radius")
						const p = getPosition(ctx.source.position)
						Utils.server.runCommandSilent(`/chunky world ${world}`)
						Utils.server.runCommandSilent(`/chunky shape ${shape}`)
						Utils.server.runCommandSilent(`/chunky center ${p.x} ${p.z}`)
						Utils.server.runCommandSilent(`/chunky radius ${radius}`)
						Utils.server.runCommandSilent(`/chunky start`)
						return 1
					})
				)
			)
		)
	)
})