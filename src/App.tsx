import React, { useState } from "react";
import { useCallback, useMemo } from "./hooks";
import { User, Notification } from "./types";
import { UserContext, NotificationContext, ThemeProvider } from "./context";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (message: string, type: Notification["type"]) => {
      const newNotification: Notification = {
        id: Date.now(),
        message,
        type,
      };
      setNotifications((prev) => [...prev, newNotification]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  }, []);

  const login = useCallback(
    (email: string) => {
      setUser({ id: 1, name: "홍길동", email });
      addNotification("성공적으로 로그인되었습니다", "success");
    },
    [addNotification]
  );

  const logout = useCallback(() => {
    setUser(null);
    addNotification("로그아웃되었습니다", "info");
  }, [addNotification]);

  const userContextValue = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  const notificationContextValue = useMemo(
    () => ({ notifications, addNotification, removeNotification }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <ThemeProvider>
      <UserContext.Provider value={userContextValue}>
        <NotificationContext.Provider value={notificationContextValue}>
          <HomePage />
        </NotificationContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
