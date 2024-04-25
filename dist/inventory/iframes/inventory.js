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
const __1 = require("..");
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield WA.onInit();
    (_a = document.getElementById("closeModal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        close();
    });
    const inventory = document.getElementById("inventory");
    const items = yield (0, __1.getPlayerInventory)();
    function addCard(item) {
        if (inventory != null) {
            if (item === undefined) {
                inventory.innerHTML += `<div class="card"></div>`;
            }
            else {
                inventory.innerHTML += `<div class="card">
            <img src="${item === null || item === void 0 ? void 0 : item.sprite_url}" alt="${item === null || item === void 0 ? void 0 : item.description}" title="${item.name}" style="width:95%">
          </div>`;
            }
        }
    }
    //Creation of the cards in the inventory
    let nbCard = 30;
    items.length > 30 ? (nbCard = Math.ceil(items.length / 10) * 10) : null;
    for (let i = 0; i < nbCard; i++) {
        if (items[i] !== undefined) {
            addCard(items[i]);
        }
        else {
            addCard();
        }
    }
    function close() {
        return __awaiter(this, void 0, void 0, function* () {
            WA.ui.website
                .getById(String(WA.player.state.inventory_id))
                .then((website) => {
                if (website) {
                    WA.player.state.inventory_open = false;
                    website.close();
                }
            });
        });
    }
}))();
