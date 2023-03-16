import React from "react";

import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ dismissToast, toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast variant={item.variant} id={item.id} dismissToast={dismissToast}>
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
