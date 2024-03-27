import React from "react";

import { rectSortingStrategy } from "@dnd-kit/sortable";

// import { Sortable } from "../sortable/Sortable";
import  {Sortable}  from '../sortable/Sortable'
import  GridContainer  from '../gridContainer/GridContainer';

const props = {
  adjustScale: true,
  Container: (props) => <GridContainer {...props} columns={5} />,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 140,
    height: 140,
  }),
};

const VariableSize = () => (
  <Sortable
    {...props}
    handle
    itemCount={14}
    getItemStyles={({ index }) => {
      if (index === 0 || index === 9) {
        return {
          fontSize: "3rem",
          padding: "36px 40px",
        };
      }

      return {};
    }}
    wrapperStyle={({ index }) => {
      if (index === 0 || index === 9 || index === 13) {
        return {
          height: 288,
          gridRowStart: "span 1",
          gridColumnStart: "span 3",
        };
      }

      return {
        width: 140,
        height: 140,
      };
    }}
  />
);

export default VariableSize;
