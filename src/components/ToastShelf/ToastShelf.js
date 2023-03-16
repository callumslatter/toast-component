import React from "react";

import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((item) => {
        return (
          <li className={styles.toastWrapper} key={item.id}>
            <Toast variant={item.variant} id={item.id}>
              {item.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
