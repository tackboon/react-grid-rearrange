import { animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import * as React from "react";
import styled from "styled-components";

import {
  setAccumulateScrollMovement,
  setInitialCoordinate,
  setLastMovingIndex,
  setMovingCoordinate,
  setMovingIndex,
  setScrollMovement,
} from "../../contexts/grid/grid.action";
import { useGridContext } from "../../contexts/grid/grid.context";
import { checkIsInsideGrid } from "../../utils/coordination/coordination.util";
import { checkIsTouchScreendevice } from "../../utils/device/check_device.util";
import { GridAnimationStyle } from "../grid-wrapper/grid_wrapper.component";

const Wrapper = styled(animated.div)`
  flex-shrink: 0;
  position: absolute;
  background-color: #fff;
  ${({ $isDraggable }: { $isDraggable: boolean }) =>
    $isDraggable ? "user-select: none;touch-action: none;" : ""}
`;

type BlockWrapperType = {
  index: number;
  animationStyle: GridAnimationStyle;
} & React.PropsWithChildren;

const BlockWrapper: React.FC<BlockWrapperType> = ({
  children,
  index,
  animationStyle,
}) => {
  const {
    gridState: {
      order,
      itemsCoordinate,
      movingIndex,
      initialCoordinate,
      scrollMovement,
      accumulateScrollMovement,
      disableDragOnTouchScreen,
    },
    dispatch,
    gridRef,
  } = useGridContext();

  const bind = useGesture({
    onDragStart: () => {
      const itemIndex = order.indexOf(index);

      if (
        movingIndex === -1 &&
        itemIndex !== -1 &&
        itemsCoordinate[itemIndex]
      ) {
        dispatch(setInitialCoordinate(itemsCoordinate[itemIndex]));
        dispatch(setMovingCoordinate(itemsCoordinate[itemIndex]));
        dispatch(setMovingIndex(index));
      }
    },
    onDrag: ({ movement: [mx, my], xy: [px, py], cancel }) => {
      if (movingIndex !== -1) {
        const itemIndex = order.indexOf(index);
        if (itemIndex !== -1) {
          // cancel if moved out of bound
          if (!checkIsInsideGrid({ x: px, y: py }, gridRef)) {
            cancel();
          } else {
            // calculate moving coordinate
            // moving coordinate = initial coordinate + distance moved + scrolled distance
            const x =
              initialCoordinate.x +
              mx +
              scrollMovement.x +
              accumulateScrollMovement.x;
            const y =
              initialCoordinate.y +
              my +
              scrollMovement.y +
              accumulateScrollMovement.y;

            dispatch(setMovingCoordinate({ x, y }));
          }
        }
      }
    },
    onDragEnd: () => {
      dispatch(setMovingIndex(-1));
      dispatch(setAccumulateScrollMovement({ x: 0, y: 0 }));
      dispatch(setScrollMovement({ x: 0, y: 0 }));
      dispatch(setLastMovingIndex(index));
    },
  });

  // disable drag in touch screen device
  let dragProps = {};
  const isTouchScreendevice = checkIsTouchScreendevice();
  if (!isTouchScreendevice || !disableDragOnTouchScreen) {
    dragProps = { ...bind() };
  }

  return (
    <Wrapper
      {...dragProps}
      style={animationStyle}
      $isDraggable={!isTouchScreendevice || !disableDragOnTouchScreen}
    >
      {children}
    </Wrapper>
  );
};

export default BlockWrapper;
