import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.util";
import { Coordinate, GRID_ACTION_TYPES, ScrollMovement } from "./grid.types";

export type SetItemHeight = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ITEM_HEIGHT,
  number
>;

export type SetItemWidth = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ITEM_WIDTH,
  number
>;

export type SetRowSize = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ROW_SIZE,
  number
>;

export type SetColSize = ActionWithPayload<
  GRID_ACTION_TYPES.SET_COL_SIZE,
  number
>;

export type SetRowGap = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ROW_GAP,
  number
>;

export type SetColGap = ActionWithPayload<
  GRID_ACTION_TYPES.SET_COL_GAP,
  number
>;

export type SetItemOrder = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ITEM_ORDER,
  number[]
>;

export type SetItemsCoordinate = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ITEMS_COORDINATE,
  Coordinate[]
>;

export type SetMovingCoordinate = ActionWithPayload<
  GRID_ACTION_TYPES.SET_MOVING_COORDINATE,
  Coordinate
>;

export type SetMovingIndex = ActionWithPayload<
  GRID_ACTION_TYPES.SET_MOVING_INDEX,
  number
>;

export type SetLastMovingIndex = ActionWithPayload<
  GRID_ACTION_TYPES.SET_LAST_MOVING_INDEX,
  number
>;

export type SetInitialCoordinate = ActionWithPayload<
  GRID_ACTION_TYPES.SET_INITIAL_COORDINATE,
  Coordinate
>;

export type SetScrollMovement = ActionWithPayload<
  GRID_ACTION_TYPES.SET_SCROLL_MOVEMENT,
  ScrollMovement
>;

export type SetAccumulateScrollMovement = ActionWithPayload<
  GRID_ACTION_TYPES.SET_ACCUMULATE_SCROLL_MOVEMENT,
  ScrollMovement
>;

export type SetDisableDrag = ActionWithPayload<
  GRID_ACTION_TYPES.SET_DISABLE_DRAG,
  boolean
>;

export type SetIsClick = ActionWithPayload<
  GRID_ACTION_TYPES.SET_IS_CLICK,
  boolean
>;

export type SetIsImmediateAnimate = ActionWithPayload<
  GRID_ACTION_TYPES.SET_IS_IMMEDIATE_ANIMATE,
  boolean
>;

export const setItemHeight = withMatcher(
  (height: number): SetItemHeight =>
    createAction(GRID_ACTION_TYPES.SET_ITEM_HEIGHT, height)
);

export const setItemWidth = withMatcher(
  (width: number): SetItemWidth =>
    createAction(GRID_ACTION_TYPES.SET_ITEM_WIDTH, width)
);

export const setRowSize = withMatcher(
  (rowSize: number): SetRowSize =>
    createAction(GRID_ACTION_TYPES.SET_ROW_SIZE, rowSize)
);

export const setColSize = withMatcher(
  (colSize: number): SetColSize =>
    createAction(GRID_ACTION_TYPES.SET_COL_SIZE, colSize)
);

export const setRowGap = withMatcher(
  (gapSize: number): SetRowGap =>
    createAction(GRID_ACTION_TYPES.SET_ROW_GAP, gapSize)
);

export const setColGap = withMatcher(
  (gapSize: number): SetColGap =>
    createAction(GRID_ACTION_TYPES.SET_COL_GAP, gapSize)
);

export const setItemOrder = withMatcher(
  (order: number[]): SetItemOrder =>
    createAction(GRID_ACTION_TYPES.SET_ITEM_ORDER, order)
);

export const setItemsCoordinate = withMatcher(
  (coordinates: Coordinate[]): SetItemsCoordinate =>
    createAction(GRID_ACTION_TYPES.SET_ITEMS_COORDINATE, coordinates)
);

export const setMovingCoordinate = withMatcher(
  (coordinate: Coordinate): SetMovingCoordinate =>
    createAction(GRID_ACTION_TYPES.SET_MOVING_COORDINATE, coordinate)
);

export const setMovingIndex = withMatcher(
  (index: number): SetMovingIndex =>
    createAction(GRID_ACTION_TYPES.SET_MOVING_INDEX, index)
);

export const setLastMovingIndex = withMatcher(
  (index: number): SetLastMovingIndex =>
    createAction(GRID_ACTION_TYPES.SET_LAST_MOVING_INDEX, index)
);

export const setInitialCoordinate = withMatcher(
  (coordinate: Coordinate): SetInitialCoordinate =>
    createAction(GRID_ACTION_TYPES.SET_INITIAL_COORDINATE, coordinate)
);

export const setScrollMovement = withMatcher(
  (scroll: ScrollMovement): SetScrollMovement =>
    createAction(GRID_ACTION_TYPES.SET_SCROLL_MOVEMENT, scroll)
);

export const setAccumulateScrollMovement = withMatcher(
  (scroll: ScrollMovement): SetAccumulateScrollMovement =>
    createAction(GRID_ACTION_TYPES.SET_ACCUMULATE_SCROLL_MOVEMENT, scroll)
);

export const setDisableDrag = withMatcher(
  (status: boolean): SetDisableDrag =>
    createAction(GRID_ACTION_TYPES.SET_DISABLE_DRAG, status)
);

export const setIsClick = withMatcher(
  (status: boolean): SetIsClick =>
    createAction(GRID_ACTION_TYPES.SET_IS_CLICK, status)
);

export const setIsImmediateAnimate = withMatcher(
  (status: boolean): SetIsImmediateAnimate =>
    createAction(GRID_ACTION_TYPES.SET_IS_IMMEDIATE_ANIMATE, status)
);
