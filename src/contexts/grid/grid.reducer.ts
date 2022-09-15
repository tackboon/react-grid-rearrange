import {
  setAccumulateScrollMovement,
  setColGap,
  setColSize,
  setDisableDragOnTouchScreen,
  setInitialCoordinate,
  setIsClick,
  setItemHeight,
  setItemOrder,
  setItemsCoordinate,
  setItemWidth,
  setLastMovingIndex,
  setMovingCoordinate,
  setMovingIndex,
  setRowGap,
  setRowSize,
  setScrollMovement,
} from "./grid.action";
import { Coordinate, ScrollMovement } from "./grid.types";

export type GridState = {
  readonly itemHeight: number;
  readonly itemWidth: number;
  readonly rowSize: number;
  readonly colSize: number;
  readonly rowGap: number;
  readonly colGap: number;
  readonly order: number[];
  readonly itemsCoordinate: Coordinate[];
  readonly initialCoordinate: Coordinate;
  readonly movingCoordinate: Coordinate;
  readonly movingIndex: number;
  readonly lastMovingIndex: number;
  readonly scrollMovement: ScrollMovement;
  readonly accumulateScrollMovement: ScrollMovement;
  readonly disableDragOnTouchScreen: boolean;
  readonly isClick: boolean;
};

export const gridReducer = (state: GridState, action: any): GridState => {
  if (setItemHeight.match(action)) {
    return {
      ...state,
      itemHeight: action.payload,
    };
  }

  if (setItemWidth.match(action)) {
    return {
      ...state,
      itemWidth: action.payload,
    };
  }

  if (setRowSize.match(action)) {
    return {
      ...state,
      rowSize: action.payload,
    };
  }

  if (setColSize.match(action)) {
    return {
      ...state,
      colSize: action.payload,
    };
  }

  if (setRowGap.match(action)) {
    return {
      ...state,
      rowGap: action.payload,
    };
  }

  if (setColGap.match(action)) {
    return {
      ...state,
      colGap: action.payload,
    };
  }

  if (setItemOrder.match(action)) {
    return {
      ...state,
      order: action.payload,
    };
  }

  if (setItemsCoordinate.match(action)) {
    return {
      ...state,
      itemsCoordinate: action.payload,
    };
  }

  if (setMovingCoordinate.match(action)) {
    return {
      ...state,
      movingCoordinate: action.payload,
    };
  }

  if (setMovingIndex.match(action)) {
    return {
      ...state,
      movingIndex: action.payload,
    };
  }

  if (setLastMovingIndex.match(action)) {
    return {
      ...state,
      lastMovingIndex: action.payload,
    };
  }

  if (setInitialCoordinate.match(action)) {
    return {
      ...state,
      initialCoordinate: action.payload,
    };
  }

  if (setScrollMovement.match(action)) {
    return {
      ...state,
      scrollMovement: action.payload,
    };
  }

  if (setAccumulateScrollMovement.match(action)) {
    return {
      ...state,
      accumulateScrollMovement: action.payload,
    };
  }

  if (setDisableDragOnTouchScreen.match(action)) {
    return {
      ...state,
      disableDragOnTouchScreen: action.payload,
    };
  }

  if (setIsClick.match(action)) {
    return {
      ...state,
      isClick: action.payload,
    };
  }

  return state;
};
