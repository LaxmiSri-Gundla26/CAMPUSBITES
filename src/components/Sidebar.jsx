import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <h1 className="logo">
        CampusBite
      </h1>

      <ul>

        <li><Link to="/">Home</Link></li>

        <li><Link to="/menu">Menu</Link></li>

        <li><Link to="/orders">Orders</Link></li>

        <li><Link to="/history">History</Link></li>

        <li><Link to="/billing">Billing</Link></li>

        <li><Link to="/admin">Admin</Link></li>

        <li><Link to="/profile">Profile</Link></li>

      </ul>

    </div>
  );
};

export default Sidebar;