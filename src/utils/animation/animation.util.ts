import { Coordinate } from "../../contexts/grid/grid.types";

export const animateFn = (
  order: number[],
  itemsCoordinate: Coordinate[],
  movingCoordinate: Coordinate,
  movingIndex: number,
  isImmediateAnimate: boolean
) => (index: number) => {
  const itemIndex = order.indexOf(index);
  const coordinate = { x: 0, y: 0 };

  if (itemsCoordinate[itemIndex]) {
    coordinate.x = itemsCoordinate[itemIndex].x;
    coordinate.y = itemsCoordinate[itemIndex].y;
  }

  const isDragging = index === movingIndex;

  return {
    x: isDragging ? movingCoordinate.x : coordinate.x,
    y: isDragging ? movingCoordinate.y : coordinate.y,
    scale: isDragging ? 1.1 : 1,
    zIndex: isDragging ? 99 : 1,
    // prevent dragging delay
    immediate:
      isDragging || isImmediateAnimate
        ? (n: any) => n === "x" || n === "y" || n === "zIndex"
        : undefined,
  };
};
