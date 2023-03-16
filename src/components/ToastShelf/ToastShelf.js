import React from "react";

import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastStack }) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toastStack.map((item) => {
          return (
            <Toast variant={item.variant} key={item.key}>
              {item.message}
            </Toast>
          );
        })}
      </li>
    </ol>
  );
}

export default ToastShelf;
