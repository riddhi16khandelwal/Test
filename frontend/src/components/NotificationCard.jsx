import { useEffect, useState } from "react";

function NotificationCard({ item }) {
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const viewedNotifications =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        )
      ) || [];

    setViewed(
      viewedNotifications.includes(item.ID)
    );
  }, [item.ID]);

  const handleView = () => {
    const viewedNotifications =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        )
      ) || [];

    if (
      !viewedNotifications.includes(item.ID)
    ) {
      viewedNotifications.push(item.ID);

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(viewedNotifications)
      );
    }

    setViewed(true);
  };

  return (
    <div
      onClick={handleView}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            background: "#e0e0e0",
            padding: "5px 10px",
            borderRadius: "20px",
          }}
        >
          {item.Type}
        </span>

        <span
          style={{
            background: viewed
              ? "green"
              : "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "20px",
          }}
        >
          {viewed ? "VIEWED" : "NEW"}
        </span>
      </div>

      <h3>{item.Message}</h3>

      <p>{item.Timestamp}</p>
    </div>
  );
}

export default NotificationCard;