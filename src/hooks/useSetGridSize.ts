import * as React from "react";
import { setColSize, setRowSize } from "../contexts/grid/grid.action";
import { useGridContext } from "../contexts/grid/grid.context";
import {
  calColSize,
  calRowSize,
} from "../utils/coordination/coordination.util";

const useSetGridSize = (
  totalItem: number,
  gridRef: React.RefObject<HTMLDivElement>
) => {
  const {
    gridState: { rowSize, itemWidth, itemHeight, rowGap, colGap },
    dispatch,
  } = useGridContext();

  // calculate row size on screen resize
  React.useEffect(() => {
    const onResize = () => {
      const containerWidth = gridRef.current?.clientWidth || 0;
      const rowSize = calRowSize(containerWidth, itemWidth, rowGap);
      dispatch(setRowSize(rowSize));
    };

    onResize(); // set initial row size

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [dispatch, itemWidth, rowGap, gridRef]);

  // calculate col size and set grid container height
  React.useEffect(() => {
    const colSize = calColSize(totalItem, rowSize);
    dispatch(setColSize(colSize));

    if (gridRef.current) {
      const containerHeight = colSize * (itemHeight + colGap) - colGap;
      gridRef.current.style.height = `${containerHeight}px`;
    }
  }, [dispatch, totalItem, rowSize, itemHeight, colGap, gridRef]);
};

export default useSetGridSize;
