import Sidebar from "../components/Sidebar";

const History = () => {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1>Order History</h1>

        <div className="history-item">
          Token: CB101 | ₹120
        </div>

        <div className="history-item">
          Token: CB102 | ₹180
        </div>

        <div className="history-item">
          Token: CB103 | ₹90
        </div>

      </div>

    </div>
  );
};

export default History;