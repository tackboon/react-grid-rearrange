import clamp from "lodash.clamp";
import * as React from "react";
import { setItemOrder } from "../contexts/grid/grid.action";
import { useGridContext } from "../contexts/grid/grid.context";

const useRearrangeItem = () => {
  const {
    gridState: {
      order,
      itemsCoordinate,
      movingIndex,
      movingCoordinate,
      itemHeight,
      itemWidth,
      rowSize,
    },
    dispatch,
  } = useGridContext();

  React.useEffect(() => {
    const movingItemIndex = order.indexOf(movingIndex);
    if (movingItemIndex !== -1) {
      const coordinateMoved = {
        x: movingCoordinate.x - itemsCoordinate[movingItemIndex].x,
        y: movingCoordinate.y - itemsCoordinate[movingItemIndex].y,
      };

      // rearrange if coordinate moved greater than 50% of its size
      const x = Math.round(coordinateMoved.x / itemWidth);
      let y = Math.round(coordinateMoved.y / itemHeight);
      if (Math.abs(y) > 0.5) {
        y = y * rowSize;
      }

      // calculate new index
      const newIndex = clamp(x + y + movingItemIndex, 0, order.length - 1);
      if (newIndex !== movingItemIndex) {
        // change the order
        const newOrder = [...order];
        const [toBeMoved] = newOrder.splice(movingItemIndex, 1);
        newOrder.splice(newIndex, 0, toBeMoved);
        dispatch(setItemOrder(newOrder));
      }
    }
  }, [
    dispatch,
    movingCoordinate,
    movingIndex,
    itemHeight,
    itemWidth,
    itemsCoordinate,
    order,
    rowSize,
  ]);
};

export default useRearrangeItem;
