import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant }) {
  const [toastIsShown, setToastIsShown] = React.useState(true);

  function dismissToast() {
    setToastIsShown(false);
  }

  // If type is supplied, render icon accordingly
  const Icon = variant ? ICONS_BY_VARIANT[variant] : "Info";

  return (
    toastIsShown && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>{children}</p>
        <button className={styles.closeButton} onClick={dismissToast}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    )
  );
}

export default Toast;
