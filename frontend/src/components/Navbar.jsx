import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#1976d2",
        padding: "15px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginRight: "20px",
          fontWeight: "bold",
        }}
      >
        ALL NOTIFICATIONS
      </Link>

      <Link
        to="/priority"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        PRIORITY NOTIFICATIONS
      </Link>
    </div>
  );
}

export default Navbar;