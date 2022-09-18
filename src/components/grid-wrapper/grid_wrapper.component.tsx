import { SpringValue, useSprings } from "@react-spring/web";
import * as React from "react";
import styled from "styled-components";

import { useGridContext } from "../../contexts/grid/grid.context";
import { animateFn } from "../../utils/animation/animation.util";
import { initOrder } from "../../utils/order/init_order.util";
import { setDisableDrag, setItemOrder } from "../../contexts/grid/grid.action";
import useSetGridSize from "../../hooks/useSetGridSize";
import useSetItemsCoordinate from "../../hooks/useSetItemsCoordinate";
import useSetItemSize from "../../hooks/useSetItemSize";
import useRearrangeItem from "../../hooks/useRearrangeItem";
import useScrollMovementHandler from "../../hooks/useScrollMovementHandler";
import useDragToScroll from "../../hooks/useDragToScroll";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export type GridAnimationStyle = {
  scale: SpringValue<number>;
  x: SpringValue<number>;
  y: SpringValue<number>;
  zIndex: SpringValue<number>;
};

export type GridCallbackProps = {
  isDragging: boolean;
  order: number[];
  lastMovingIndex: number;
  isClick: boolean;
};

export type GridWrapperType = {
  totalItem: number;
  itemHeight: number;
  itemWidth: number;
  rowGap?: number;
  colGap?: number;
  scrollElementID?: string;
  disableDrag?: boolean;
  children: (styles: GridAnimationStyle[]) => JSX.Element[];
  cb?: ({
    isDragging,
    order,
    lastMovingIndex,
    isClick,
  }: GridCallbackProps) => void;
};

const GridWrapper: React.FC<GridWrapperType> = ({
  totalItem,
  itemHeight,
  itemWidth,
  rowGap = 0,
  colGap = 0,
  scrollElementID = "",
  disableDrag = false,
  cb,
  children,
}) => {
  const {
    gridState: {
      order,
      itemsCoordinate,
      movingCoordinate,
      movingIndex,
      lastMovingIndex,
      isClick,
    },
    dispatch,
    gridRef,
  } = useGridContext();

  React.useEffect(() => {
    dispatch(setDisableDrag(disableDrag));
  }, [dispatch, disableDrag]);

  // // create initial order
  React.useEffect(() => {
    const itemsOrder = initOrder(totalItem);
    dispatch(setItemOrder(itemsOrder));
  }, [dispatch, totalItem]);

  useSetItemSize(itemHeight, itemWidth, rowGap, colGap);
  useSetGridSize(totalItem, gridRef);
  useSetItemsCoordinate(totalItem);
  useRearrangeItem();
  useScrollMovementHandler(scrollElementID);
  useDragToScroll(scrollElementID);

  const [springs] = useSprings(
    totalItem,
    animateFn(order, itemsCoordinate, movingCoordinate, movingIndex),
    [totalItem, order, itemsCoordinate, movingCoordinate, movingIndex]
  );

  React.useEffect(() => {
    if (cb) {
      cb({ isDragging: movingIndex !== -1, order, lastMovingIndex, isClick });
    }

    // order is not in the condition to reduce unnecessary render
    // we only take final order in this callback
  }, [movingIndex, lastMovingIndex, isClick, cb]);

  return <Wrapper ref={gridRef}>{children(springs)}</Wrapper>;
};

export default GridWrapper;
