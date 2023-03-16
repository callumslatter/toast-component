import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const defaultMessage = ""
  const defaultVariantOption = VARIANT_OPTIONS[0]

  const [message, setMessage] = React.useState(defaultMessage);
  const [variant, setVariant] = React.useState(defaultVariantOption);
  const [toastIsShown, setToastIsShown] = React.useState(false);

  const [toastStack, setToastStack] = React.useState([]);

  function addToastToShelf() {
    const nextToast = (
      <Toast variant={variant} handleDismiss={dismissToast} key={crypto.randomUUID()}>
        {message}
      </Toast>
    );
    setToastStack([...toastStack, nextToast]);
    setMessage(defaultMessage)
    setVariant(defaultVariantOption)
  }

  function dismissToast() {
    setToastIsShown(false);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf>
        {toastStack.map((item) => {
          return item;
        })}
      </ToastShelf>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              className={styles.messageInput}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    checked={option === variant}
                    value={option}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => addToastToShelf()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
