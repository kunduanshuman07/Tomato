import React from "react";
import "./Profile.css";
const Profile = () => {
  const currentUser = localStorage.getItem("currentUser");
  const user = currentUser ? JSON.parse(currentUser).fname : null;
  const email = currentUser ? JSON.parse(currentUser).email : null;
  const phone = currentUser ? JSON.parse(currentUser).phone : null;
  return (
    <div class="profile-page">
      <div class="profile-picture">
        <img src="profile-picture.jpg" alt="Profile Picture" />
      </div>

      <div class="profile-details">
        <h2>{user}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: </p>
      </div>

      <a class="edit-profile-button" href="#">
        Edit Profile
      </a>
    </div>
  );
};

export default Profile;
