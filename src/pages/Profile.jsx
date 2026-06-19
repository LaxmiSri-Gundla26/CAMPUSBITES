import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="container">

      <Sidebar />

      <div className="content">

        <h1>Student Profile</h1>

        <div className="profile-card">

          <h2>Laxmi Sri</h2>

          <p>Email: student@campusbite.com</p>

          <p>Role: Student</p>

          <p>College: Campus User</p>

        </div>

      </div>

    </div>
  );
};

export default Profile;