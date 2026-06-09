import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";

const TYPE_WEIGHT = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [topN, setTopN] = useState(10);

  useEffect(() => {
    loadNotifications();
  }, [filter, topN]);

  const loadNotifications = async () => {
    const data = await getNotifications();

    let filteredData = [...data];

    if (filter !== "All") {
      filteredData = filteredData.filter(
        (item) => item.Type === filter
      );
    }

    const sorted = filteredData
      .sort((a, b) => {
        const weightDiff =
          TYPE_WEIGHT[b.Type] -
          TYPE_WEIGHT[a.Type];

        if (weightDiff !== 0)
          return weightDiff;

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      })
      .slice(0, topN);

    setNotifications(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Notifications</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <label>Filter Type: </label>

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Placement</option>
            <option>Result</option>
            <option>Event</option>
          </select>
        </div>

        <div>
          <label>Top N: </label>

          <select
            value={topN}
            onChange={(e) =>
              setTopN(Number(e.target.value))
            }
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;