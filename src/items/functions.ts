import { Item } from './item';

const ITEMS_VARIABLE_NAME = 'item';

export const getItems = (): Array<Item> => {
  return WA.player.state.loadVariable(ITEMS_VARIABLE_NAME) as Array<Item>;
};

export const setItems = (items: Array<Item>) => {
  WA.player.state.saveVariable(ITEMS_VARIABLE_NAME, items);
};

export const addItem = (item: Item): Array<Item> => {
  const items = getItems();
  items.push(item);
  setItems(items);
  return items;
};

export const removeItem = (item: Item): Array<Item> => {
  const items = getItems();
  const newItems = items.filter((currentItem: Item) => currentItem !== item);
  setItems(newItems);
  return newItems;
};
