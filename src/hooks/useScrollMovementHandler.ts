import { useScroll } from "@use-gesture/react";

import {
  setAccumulateScrollMovement,
  setScrollMovement,
} from "../contexts/grid/grid.action";
import { useGridContext } from "../contexts/grid/grid.context";

// record and accumulate every scroll distance
// for adjusting item position while scrolling and dragging together
const useScrollMovementHandler = (scrollElementID: string) => {
  const {
    gridState: { movingIndex, accumulateScrollMovement },
    dispatch,
  } = useGridContext();

  // Set default scroll element to window
  let scrollEl: HTMLElement | Window = window;
  if (scrollElementID !== "") {
    scrollEl = document.getElementById(scrollElementID) as HTMLElement;
  }

  useScroll(
    ({ last, movement: [x, y] }) => {
      if (movingIndex !== -1) {
        if (!last) {
          // if scrolling
          dispatch(setScrollMovement({ x, y }));
        } else {
          // if scroll end
          dispatch(
            setAccumulateScrollMovement({
              x: accumulateScrollMovement.x + x,
              y: accumulateScrollMovement.y + y,
            })
          );
          dispatch(
            setScrollMovement({
              x: 0,
              y: 0,
            })
          );
        }
      }
    },
    {
      target: scrollEl,
    }
  );
};

export default useScrollMovementHandler;
