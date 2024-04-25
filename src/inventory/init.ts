/// <reference types="@workadventure/iframe-api-typings" />

import { type UIWebsite } from '@workadventure/iframe-api-typings';
import { initPlayerInventory } from './index';
import { type Item } from './item.js';

export * from './index.js';
export type { Item };

// Waiting for the API to be ready
export const initializeInventorySystem = async () => {
  await WA.onInit();
  await initPlayerInventory();

  let inventoryIframe: UIWebsite | undefined;

  WA.ui.actionBar.addButton({
    id: 'inventory-btn',
    type: 'action',
    imageSrc: 'https://cdn-icons-png.flaticon.com/512/4138/4138061.png',
    toolTip: 'Inventaire',
    callback: async () => {
      if (!inventoryIframe) {
        inventoryIframe = await WA.ui.website.open({
          url: 'https://swartline.github.io/workadventure-inventory/src/inventory/iframes/inventory.html',
          position: {
            vertical: 'middle',
            horizontal: 'middle',
          },
          size: {
            height: '50vh',
            width: '50vw',
          },
          allowApi: true,
        });
        inventoryIframe.position.vertical = 'top';

        WA.player.state.inventory_open = true;
        WA.player.state.inventory_id = inventoryIframe.id;
      } else {
        inventoryIframe.close();
        inventoryIframe = undefined;
        WA.player.state.inventory_open = false;
      }
    },
  });

  WA.player.state.onVariableChange('inventory_open').subscribe((value) => {
    if (!value) {
      inventoryIframe = undefined;
    }
  });
};
