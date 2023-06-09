import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  // Removes toasts on Escape key
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function dismissToast(id) {
    const nextToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(nextToasts);
  }

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
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
