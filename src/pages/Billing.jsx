import Sidebar from "../components/Sidebar";

const Billing = () => {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1>Billing Dashboard</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>₹5,240</h2>
            <p>Revenue</p>
          </div>

          <div className="dashboard-card">
            <h2>52</h2>
            <p>Orders</p>
          </div>

          <div className="dashboard-card">
            <h2>52</h2>
            <p>Tokens</p>
          </div>

          <div className="dashboard-card">
            <h2>₹101</h2>
            <p>Average Bill</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Billing;