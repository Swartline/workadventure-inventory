import { type Item } from './item';
export declare const getPlayerInventory: () => Promise<Item[]>;
export declare const initPlayerInventory: () => Promise<void>;
export declare const clearPlayerInventory: () => Promise<void>;
export declare const addPlayerItem: (item: Item) => Promise<Item[]>;
export declare const removePlayerItem: (item: Item) => Promise<Item[]>;
