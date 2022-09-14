import * as React from "react";
import { Coordinate } from "../../contexts/grid/grid.types";

export const calRowSize = (
  containerWidth: number,
  itemWidth: number,
  rowGap: number
) => {
  return itemWidth !== 0
    ? Math.floor((containerWidth + rowGap) / (itemWidth + rowGap))
    : 0;
};

export const calColSize = (totalItem: number, rowSize: number) => {
  return rowSize !== 0 ? Math.ceil(totalItem / rowSize) : 0;
};

export const getItemCoordinate = (
  rowSize: number,
  index: number,
  itemHeight: number,
  itemWidth: number,
  rowGap: number,
  colGap: number,
  paddingLeft: number
): Coordinate => {
  const coordinate = { x: 0, y: 0 };
  if (rowSize > 0) {
    const col = Math.floor(index % rowSize);
    const row = Math.floor(index / rowSize);

    coordinate.x = paddingLeft + col * itemWidth + col * rowGap;
    coordinate.y = row * itemHeight + row * colGap;
  }
  return coordinate;
};

export const checkIsInsideGrid = (
  coordinate: Coordinate,
  gridRef: React.RefObject<HTMLDivElement>
): boolean => {
  const el = gridRef.current;
  if (el) {
    const { top, right, bottom, left } = el.getBoundingClientRect();
    if (
      coordinate.x < right &&
      coordinate.x > left &&
      coordinate.y < bottom &&
      coordinate.y > top
    ) {
      return true;
    }
  }
  return false;
};
