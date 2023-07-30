import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const heroContent = useSelector((state) => state.hero);
  const contactDetails = useSelector((state) => state.contact);

  const [loggedIn, setLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleLogin = () => {
    const hardcodedAdminId = "admin";
    const hardcodedAdminPassword = "123";

    if (
      adminId === hardcodedAdminId &&
      adminPassword === hardcodedAdminPassword
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setAdminId("");
    setAdminPassword("");
  };

  const handleHeroContentChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_HERO",
      payload: { ...heroContent, [name]: value },
    });
  };

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_CONTACT",
      payload: { ...contactDetails, [name]: value },
    });
  };

  return (
    <div className="admin-dashboard">
      {loggedIn ? (
        <div>
          <h2>Welcome Admin!</h2>
          <div className="content-management">
            <h3>Hero Banner Content</h3>
            <input
              type="text"
              name="title"
              value={heroContent.title}
              onChange={handleHeroContentChange}
            />
            <textarea
              name="description"
              value={heroContent.description}
              onChange={handleHeroContentChange}
            />
            <h3>Content Details</h3>
            <input
              type="text"
              name="address"
              value={contactDetails.address}
              onChange={handleContactDetailsChange}
            />
            <input
              type="text"
              name="phone"
              value={contactDetails.phone}
              onChange={handleContactDetailsChange}
            />
            <input
              type="email"
              name="email"
              value={contactDetails.email}
              onChange={handleContactDetailsChange}
            />
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Admin Login</h2>
          <p>
            ID: admin <br /> password: 123
          </p>
          <input
            type="text"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
