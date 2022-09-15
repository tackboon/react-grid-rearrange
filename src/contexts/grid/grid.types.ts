export enum GRID_ACTION_TYPES {
  SET_ITEM_HEIGHT = "grid/SET_ITEM_HEIGHT",
  SET_ITEM_WIDTH = "grid/SET_ITEM_WIDTH",
  SET_ROW_SIZE = "grid/SET_ROW_SIZE",
  SET_COL_SIZE = "grid/SET_COL_SIZE",
  SET_ROW_GAP = "grid/SET_ROW_GAP",
  SET_COL_GAP = "grid/SET_COL_GAP",
  SET_ITEM_ORDER = "grid/SET_ITEM_ORDER",
  SET_ITEMS_COORDINATE = "grid/SET_ITEMS_COORDINATE",
  SET_MOVING_COORDINATE = "grid/SET_MOVING_COORDINATE",
  SET_MOVING_INDEX = "grid/SET_MOVING_INDEX",
  SET_LAST_MOVING_INDEX = "grid/SET_LAST_MOVING_INDEX",
  SET_INITIAL_COORDINATE = "grid/SET_INITIAL_COORDINATE",
  SET_SCROLL_MOVEMENT = "grid/SET_SCROLL_MOVEMENT",
  SET_ACCUMULATE_SCROLL_MOVEMENT = "grid/SET_ACCUMULATE_SCROLL_MOVEMENT",
  SET_DISABLE_DRAG_ON_TOUCH_SCREEN = "grid/SET_DISABLE_DRAG_ON_TOUCH_SCREEN",
  SET_IS_CLICK = "grid/SET_IS_CLICK",
}

export type Coordinate = {
  x: number;
  y: number;
};

export type ScrollMovement = {
  x: number;
  y: number;
};
