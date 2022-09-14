import { useMove } from "@use-gesture/react";
import { useGridContext } from "../contexts/grid/grid.context";

// scroll if drag to the viewport edge
const useDragToScroll = (scrollElementID: string) => {
  const {
    gridState: { movingIndex, itemHeight, itemWidth },
  } = useGridContext();

  let edgeTop = 0;
  let edgeBottom = 0;
  let edgeLeft = 0;
  let edgeRight = 0;
  let XScrollSize = 0;
  let YScrollSize = 0;

  // Set default scroll element to document
  let scrollEl: HTMLElement = document.documentElement;

  if (scrollElementID !== "") {
    scrollEl = document.getElementById(scrollElementID) as HTMLElement;
  }

  if (scrollEl) {
    // set trigger threshold to 60% of the item size
    // if item across container more than 60% of its size,
    // trigger scroll
    const XEdgeSize = itemWidth * 0.4;
    const YEdgeSize = itemHeight * 0.4;

    edgeTop = YEdgeSize;
    edgeBottom = scrollEl.clientHeight - YEdgeSize;
    edgeLeft = XEdgeSize;
    edgeRight = scrollEl.clientWidth - XEdgeSize;

    if (scrollElementID !== "") {
      const { top, right, bottom, left } = scrollEl.getBoundingClientRect();
      edgeTop = top + YEdgeSize;
      edgeBottom = bottom - YEdgeSize;
      edgeLeft = left + XEdgeSize;
      edgeRight = right - XEdgeSize;
    }

    // set scroll step size to 12% of item height/width
    XScrollSize = 0.12 * itemWidth;
    YScrollSize = 0.12 * itemHeight;
  }

  useMove(
    ({ xy: [x, y] }) => {
      if (scrollEl && movingIndex !== -1) {
        if (y > edgeBottom) {
          // scroll down
          scrollEl.scrollBy(0, YScrollSize);
        } else if (y < edgeTop) {
          // scroll up
          scrollEl.scrollBy(0, -YScrollSize);
        }

        if (x > edgeRight) {
          // scroll right
          scrollEl.scrollBy(XScrollSize, 0);
        } else if (x < edgeLeft) {
          // scroll left
          scrollEl.scrollBy(-XScrollSize, 0);
        }
      }
    },
    { target: window }
  );
};

export default useDragToScroll;
