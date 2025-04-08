import { memo } from "../../hocs";
import { Item } from "../../types";
import { renderLog } from "../../utils";
import { ItemListHeader } from "./ItemListHeader";
import { ItemListStats } from "./ItemListStats";
import { ItemRow } from "./ItemRow";
import { Input } from "../common";
import { useItemList } from "../../hooks";

export const ItemList: React.FC<{
  items: Item[];
  onAddItemsClick: () => void;
}> = memo(({ items, onAddItemsClick }) => {
  renderLog("ItemList rendered");

  const { filter, setFilter, filteredItems, totalPrice, averagePrice, theme } =
    useItemList(items);

  return (
    <div className="mt-8">
      <ItemListHeader onAddItemsClick={onAddItemsClick} />
      <Input
        type="text"
        name="filter"
        placeholder="상품 검색..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4"
      />
      <ItemListStats
        count={filteredItems.length}
        totalPrice={totalPrice}
        averagePrice={averagePrice}
      />
      <ul className="space-y-2">
        {filteredItems.map((item) => (
          <ItemRow key={item.id} item={item} theme={theme} />
        ))}
      </ul>
    </div>
  );
});
