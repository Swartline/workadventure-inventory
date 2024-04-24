import { type Item } from './item';

const ITEMS_VARIABLE_NAME = 'item';

export const getItems = (): Item[] => {
  return WA.player.state.loadVariable(ITEMS_VARIABLE_NAME) as Item[];
};

export const setItems = async (items: Item[]): Promise<undefined> => {
  await WA.player.state.saveVariable(ITEMS_VARIABLE_NAME, items);
};

export const addItem = async (item: Item): Promise<Item[]> => {
  const items = getItems();
  items.push(item);
  await setItems(items);
  return items;
};

export const removeItem = async (item: Item): Promise<Item[]> => {
  const items = getItems();
  const newItems = items.filter((currentItem: Item) => currentItem !== item);
  await setItems(newItems);
  return newItems;
};
