
import { useState, useEffect } from "react";

function App() {
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    document.title = `Notifications (${notifications})`;
  }, [notifications]);

  function addNotification() {
    setNotifications(prev => prev + 1);
  }

  function removeNotification() {
    setNotifications(prev => Math.max(0, prev - 1));
  }

  return (
    <div>
      <h1>Notifications: {notifications}</h1>

      <button onClick={addNotification}>
        Increase
      </button>

      <button onClick={removeNotification}>
        Decrease
      </button>
    </div>
  );
}

export default App;
