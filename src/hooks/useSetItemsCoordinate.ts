import * as React from "react";
import { setItemsCoordinate } from "../contexts/grid/grid.action";
import { useGridContext } from "../contexts/grid/grid.context";
import { Coordinate } from "../contexts/grid/grid.types";
import { getItemCoordinate } from "../utils/coordination/coordination.util";

// calculate coordinate for every index
const useSetItemsCoordinate = (totalItem: number) => {
  const {
    gridState: { rowSize, itemHeight, itemWidth, rowGap, colGap },
    dispatch,
    gridRef,
  } = useGridContext();

  const containerWidth = gridRef.current?.clientWidth || 0;

  React.useEffect(() => {
    const coordinates: Coordinate[] = [];

    // calculate grid container padding left to center items
    const paddingLeft =
      (containerWidth - (rowSize * (itemWidth + rowGap) - rowGap)) / 2;

    for (let i = 0; i < totalItem; i++) {
      const coordinate = getItemCoordinate(
        rowSize,
        i,
        itemHeight,
        itemWidth,
        rowGap,
        colGap,
        paddingLeft
      );
      coordinates.push(coordinate);
    }

    dispatch(setItemsCoordinate(coordinates));
  }, [
    dispatch,
    totalItem,
    rowSize,
    itemHeight,
    itemWidth,
    rowGap,
    colGap,
    containerWidth,
  ]);
};

export default useSetItemsCoordinate;
