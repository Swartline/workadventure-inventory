"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.initializeInventorySystem = void 0;
__exportStar(require("./index.js"), exports);
const index_1 = require("./index");
// Waiting for the API to be ready
const initializeInventorySystem = () => __awaiter(void 0, void 0, void 0, function* () {
    yield WA.onInit();
    yield (0, index_1.initPlayerInventory)();
    let inventoryIframe;
    WA.ui.actionBar.addButton({
        id: "inventory-btn",
        type: "action",
        imageSrc: "https://cdn-icons-png.flaticon.com/512/4138/4138061.png",
        toolTip: "Inventaire",
        callback: () => __awaiter(void 0, void 0, void 0, function* () {
            if (!inventoryIframe) {
                inventoryIframe = yield WA.ui.website.open({
                    url: "/src/test.html",
                    position: {
                        vertical: "middle",
                        horizontal: "middle",
                    },
                    size: {
                        height: "50vh",
                        width: "50vw",
                    },
                    allowApi: true,
                });
                inventoryIframe.position.vertical = "top";
                WA.player.state.inventory_open = true;
                WA.player.state.inventory_id = inventoryIframe.id;
            }
            else {
                inventoryIframe.close();
                inventoryIframe = undefined;
                WA.player.state.inventory_open = false;
            }
        }),
    });
    WA.player.state.onVariableChange("inventory_open").subscribe((value) => {
        if (!value) {
            inventoryIframe = undefined;
        }
    });
});
exports.initializeInventorySystem = initializeInventorySystem;
