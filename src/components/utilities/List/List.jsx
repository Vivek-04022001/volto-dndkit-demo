import React, { forwardRef } from "react";

import styles from "./List.module.css";

export const List = forwardRef(
  ({ children, columns = 1, horizontal, style }, ref) => {
    return (
      <ul
        ref={ref}
        style={{
          ...style,
          "--columns": columns,
        }}
        className={`${styles.List} ${horizontal ? styles.horizontal : ""}`}
      >
        {children}
      </ul>
    );
  }
);
