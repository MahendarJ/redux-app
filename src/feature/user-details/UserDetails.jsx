import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUserInfo,
  editUserInfo,
  getUserInfo,
  postUserInfo,
} from "./UserDetailsSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company_name: "",
    company_catch_phrase: "",
    company_bs: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
    },
  });

  const handleDetails = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1]; // Extract the address field name
      setUserDetails({
        ...userDetails,
        address: {
          ...userDetails.address,
          [addressField]: value,
        },
      });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleSave = () => {
    // dispatch(postUserInfo(userDetails));
    // dispatch(editUserInfo(userDetails));
    // dispatch(getUserInfo());
    dispatch(deleteUserInfo());
  };

  return (
    <div style={{ display: "flex", gap: "10rem", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          <u>User info:</u>
        </h2>
        <label htmlFor="name">Name:</label>
        <input name="name" value={userDetails.name} onChange={handleDetails} />
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          value={userDetails.username}
          onChange={handleDetails}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={userDetails.email}
          onChange={handleDetails}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          name="phone"
          value={userDetails.phone}
          onChange={handleDetails}
        />
        <label htmlFor="website">Website:</label>
        <input
          name="website"
          value={userDetails.website}
          onChange={handleDetails}
        />
        <label htmlFor="company_name">Company Name:</label>
        <input
          name="company_name"
          value={userDetails.company_name}
          onChange={handleDetails}
        />
        <label htmlFor="company_catch_phrase">Company Catch Phrase:</label>
        <input
          name="company_catch_phrase"
          value={userDetails.company_catch_phrase}
          onChange={handleDetails}
        />
        <label htmlFor="company_bs">Company Bs:</label>
        <input
          name="company_bs"
          value={userDetails.company_bs}
          onChange={handleDetails}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          <u>Address:</u>
        </h2>
        <label htmlFor="street">Street:</label>
        <input
          name="address.street"
          value={userDetails.address.street}
          onChange={handleDetails}
        />
        <label htmlFor="suite">Suite:</label>
        <input
          name="address.suite"
          value={userDetails.address.suite}
          onChange={handleDetails}
        />
        <label htmlFor="city">City:</label>
        <input
          name="address.city"
          value={userDetails.address.city}
          onChange={handleDetails}
        />
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          name="address.zipcode"
          value={userDetails.address.zipcode}
          onChange={handleDetails}
        />
        <label htmlFor="lat">Lat:</label>
        <input
          name="address.lat"
          value={userDetails.address.lat}
          onChange={handleDetails}
        />
        <label htmlFor="lng">Lng:</label>
        <input
          name="address.lng"
          value={userDetails.address.lng}
          onChange={handleDetails}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserDetails;
