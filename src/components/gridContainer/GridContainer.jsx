import React from "react";

import styles from "./GridContainer.module.css";

function GridContainer({ children, columns }) {
  return (
    <ul
      className={`${styles.GridContainer} `}
      style={{
        "--col-count": columns,
      }}
    >
      {children}
    </ul>
  );
}

export default GridContainer;
