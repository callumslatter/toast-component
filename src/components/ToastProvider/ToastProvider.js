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

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
