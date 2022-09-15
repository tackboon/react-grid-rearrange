import * as React from "react";
import { gridReducer, GridState } from "./grid.reducer";

export const defaultGridState = {
  itemHeight: 0,
  itemWidth: 0,
  rowSize: 0,
  colSize: 0,
  rowGap: 0,
  colGap: 0,
  order: [],
  itemsCoordinate: [],
  initialCoordinate: { x: 0, y: 0 },
  movingCoordinate: { x: 0, y: 0 },
  movingIndex: -1,
  lastMovingIndex: -1,
  scrollMovement: { x: 0, y: 0 },
  accumulateScrollMovement: { x: 0, y: 0 },
  disableDragOnTouchScreen: true,
  isClick: false,
};

const gridRef = React.createRef<HTMLDivElement>();

const GridContext = React.createContext<{
  gridState: GridState;
  dispatch: React.Dispatch<any>;
  gridRef: React.RefObject<HTMLDivElement>;
}>({
  gridState: defaultGridState,
  dispatch: () => {},
  gridRef,
});

export const useGridContext = () => React.useContext(GridContext);

export const GridProvider = ({ children }: React.PropsWithChildren) => {
  const [gridState, dispatch] = React.useReducer(gridReducer, defaultGridState);
  const value = {
    gridState,
    dispatch,
    gridRef,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};
