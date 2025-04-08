// src/hooks/useItemList.ts
import { useState } from "react";
import { useMemo } from "../../hooks";
import { useThemeState } from "../../context";
import { Item } from "../../types";

export function useItemList(items: Item[]) {
  const [filter, setFilter] = useState("");
  const theme = useThemeState();

  const filteredItems = useMemo(() => {
    if (filter === "") return items;
    const lower = filter.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [items, filter]);

  const totalPrice = useMemo(() => {
    return filteredItems.reduce((sum, item) => sum + item.price, 0);
  }, [filteredItems]);

  const averagePrice = useMemo(() => {
    return Math.round(totalPrice / filteredItems.length) || 0;
  }, [totalPrice, filteredItems.length]);

  return {
    filter,
    setFilter,
    filteredItems,
    totalPrice,
    averagePrice,
    theme,
  };
}
