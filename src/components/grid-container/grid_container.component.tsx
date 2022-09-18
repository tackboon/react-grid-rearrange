import * as React from "react";
import styled from "styled-components";

import { GridProvider } from "../../contexts/grid/grid.context";
import GridWrapper, {
  GridWrapperType,
} from "../grid-wrapper/grid_wrapper.component";

const Container = styled.div`
  width: 100%;
`;

const GridContainer: React.FC<GridWrapperType> = ({
  totalItem,
  itemHeight,
  itemWidth,
  rowGap,
  colGap,
  scrollElementID,
  disableDrag,
  cb,
  children,
}) => (
  <Container>
    <GridProvider>
      <GridWrapper
        totalItem={totalItem}
        itemHeight={itemHeight}
        itemWidth={itemWidth}
        rowGap={rowGap}
        colGap={colGap}
        scrollElementID={scrollElementID}
        disableDrag={disableDrag}
        cb={cb}
        children={children}
      />
    </GridProvider>
  </Container>
);

export default GridContainer;
