const ForgeRegistries = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
const CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")
const ListTag = Java.loadClass("net.minecraft.nbt.ListTag")
const Component = Java.loadClass("net.minecraft.network.chat.Component")
const ItemStack = Java.loadClass("net.minecraft.world.item.ItemStack")

NativeEvents.onEvent(Java.loadClass("net.minecraftforge.event.AnvilUpdateEvent"), event => {
    var left = event.getLeft()
    var right = event.getRight()
    var leftId = left.getItem().toString()
    var rightId = right.isEmpty() ? "empty" : right.getItem().toString()
    var name = event.getName()
    var isEnchantedBook = rightId === "enchanted_book"
    var isNameOnly = rightId === "empty"
    var finalCost = 1

    if (!isEnchantedBook && !isNameOnly) {
        event.setCanceled(true)
        return
    }

    var isValidTarget = leftId === "enchanted_book" ||
        left.getTags().anyMatch(t => t.location().toString() === "forge:tools") ||
        left.getTags().anyMatch(t => t.location().toString() === "forge:armors")

    if (isEnchantedBook && !isValidTarget) {
        event.setCanceled(true)
        return
    }

    if (isEnchantedBook) {
        var output = left.copy()
        var isLeftBook = leftId === "enchanted_book"
        var targetKey = isLeftBook ? "StoredEnchantments" : "Enchantments"
        var bookTag = right.getOrCreateTag()
        if (bookTag.contains("StoredEnchantments")) {
            var storedList = bookTag.getList("StoredEnchantments", 10)
            for (var i = 0; i < storedList.size(); i++) {
                var entry = storedList.getCompound(i)
                var enchId = entry.getString("id")
                var enchLvl = entry.getShort("lvl")
                var enchantment = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId))
                if (enchantment) {
                    var tag = output.getOrCreateTag()
                    var enchList = tag.contains(targetKey) ? tag.getList(targetKey, 10) : new ListTag()
                    var existingLevel = 0
                    for (var j = 0; j < enchList.size(); j++) {
                        if (enchList.getCompound(j).getString("id") === enchId) {
                            existingLevel = enchList.getCompound(j).getShort("lvl")
                            enchList.remove(j)
                            break
                        }
                    }
                    var finalLevel = (existingLevel === enchLvl) ? enchLvl + 1 : Math.max(existingLevel, enchLvl)
                    if (finalLevel > existingLevel) {
                        finalCost += finalLevel * 10
                    }
                    var enchEntry = new CompoundTag()
                    enchEntry.putString("id", enchId)
                    enchEntry.putShort("lvl", finalLevel)
                    enchList.add(enchEntry)
                    tag.put(targetKey, enchList)
                }
            }
        }
        if (name && name !== "") {
            output.setHoverName(Component.literal(name))
        }
        event.setOutput(output)
        event.setCost(finalCost)
        event.setMaterialCost(0)
    }
})
