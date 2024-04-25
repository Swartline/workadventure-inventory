import { type Item } from './item';

const INVENTORY_VARIABLE_NAME: string = 'inventory';

export const getPlayerInventory = async (): Promise<Item[]> => {
  const inventory = (await WA.player.state.loadVariable(
    INVENTORY_VARIABLE_NAME,
  )) as Item[];
  return inventory;
};

export const initPlayerInventory = async (): Promise<void> => {
  const inventory = await getPlayerInventory();
  if (inventory === undefined) {
    await WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, []);
  }
};

export const clearPlayerInventory = async (): Promise<void> => {
  await WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, []);
};

export const addPlayerItem = async (item: Item): Promise<Item[]> => {
  const inventory = await getPlayerInventory();
  inventory.push(item);
  await WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, inventory);
  return inventory;
};

export const removePlayerItem = async (item: Item): Promise<Item[]> => {
  const inventory = await getPlayerInventory();

  inventory.forEach((currentItem: Item, index: number) => {
    if (currentItem.id === item.id) {
      inventory.splice(index, 1);
    }
  });

  await WA.player.state.saveVariable(INVENTORY_VARIABLE_NAME, inventory);

  return inventory;
};
