import { UIWebsite } from "@workadventure/iframe-api-typings";
import { getPlayerInventory } from "..";
import { Item } from "../item";

(async () => {
  await WA.onInit();
  document.getElementById("closeModal")?.addEventListener("click", () => {
    close();
  });

  const inventory = document.getElementById("inventory");

  const items = await getPlayerInventory();

  function addCard(item?: Item): void {
    if (inventory != null) {
      if (item === undefined) {
        inventory.innerHTML += `<div class="card"></div>`;
      } else {
        inventory.innerHTML += `<div class="card">
            <img src="${item?.sprite_url}" alt="${item?.description}" title="${item.name}" style="width:95%">
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
    } else {
      addCard();
    }
  }

  async function close() {
    WA.ui.website
      .getById(String(WA.player.state.inventory_id))
      .then((website: UIWebsite | undefined) => {
        if (website) {
          WA.player.state.inventory_open = false;
          website.close();
        }
      });
  }
})();
