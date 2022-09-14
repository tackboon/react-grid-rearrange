import * as React from "react";
import {
  setColGap,
  setItemHeight,
  setItemWidth,
  setRowGap,
} from "../contexts/grid/grid.action";
import { useGridContext } from "../contexts/grid/grid.context";

const useSetItemSize = (
  itemHeight: number,
  itemWidth: number,
  rowGap: number,
  colGap: number
) => {
  const { dispatch } = useGridContext();

  React.useEffect(() => {
    dispatch(setItemHeight(itemHeight));
    dispatch(setItemWidth(itemWidth));
    dispatch(setRowGap(rowGap));
    dispatch(setColGap(colGap));
  }, [dispatch, itemHeight, itemWidth, rowGap, colGap]);
};

export default useSetItemSize;
