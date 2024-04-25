"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePlayerItem = exports.addPlayerItem = exports.clearPlayerInventory = exports.initPlayerInventory = exports.getPlayerInventory = void 0;
const INVENTORY_VARIABLE_NAME = 'inventory';
const getPlayerInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    const inventory = (yield WA.player.state.loadVariable(INVENTORY_VARIABLE_NAME));
    return inventory;
});
exports.getPlayerInventory = getPlayerInventory;
const initPlayerInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    const inventory = yield (0, exports.getPlayerInventory)();
    if (inventory === undefined) {
        yield WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, []);
    }
});
exports.initPlayerInventory = initPlayerInventory;
const clearPlayerInventory = () => __awaiter(void 0, void 0, void 0, function* () {
    yield WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, []);
});
exports.clearPlayerInventory = clearPlayerInventory;
const addPlayerItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const inventory = yield (0, exports.getPlayerInventory)();
    inventory.push(item);
    yield WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, inventory);
    return inventory;
});
exports.addPlayerItem = addPlayerItem;
const removePlayerItem = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const inventory = yield (0, exports.getPlayerInventory)();
    inventory.forEach((currentItem, index) => {
        if (currentItem.id === item.id) {
            inventory.splice(index, 1);
        }
    });
    yield WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, inventory);
    return inventory;
});
exports.removePlayerItem = removePlayerItem;
