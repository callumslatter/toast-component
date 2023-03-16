import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissToast = React.useCallback((id) => {
    const nextToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(nextToasts);
  });

  function createToast(message, variant) {
    // Refactor
    const nextToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToasts([...toasts, nextToast]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, dismissToast, createToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
