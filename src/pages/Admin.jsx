import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1>Admin Panel</h1>

        <div className="admin-form">

          <input
            type="text"
            placeholder="Food Name"
          />

          <input
            type="number"
            placeholder="Price"
          />

          <input
            type="text"
            placeholder="Category"
          />

          <button>
            Add Item
          </button>

        </div>

      </div>

    </div>
  );
};

export default Admin;