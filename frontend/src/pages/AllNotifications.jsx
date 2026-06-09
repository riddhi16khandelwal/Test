import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    const data = await getNotifications();
    setNotifications(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default AllNotifications;