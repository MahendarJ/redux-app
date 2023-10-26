import React, { useState } from "react";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company_name: "",
    company_catch_phrase: "",
    company_bs: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });
  console.log(userDetails)
  const handleDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({...userDetails,[name]:value});
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
          name="street"
          value={userDetails.street}
          onChange={handleDetails}
        />
        <label htmlFor="suite">Suite:</label>
        <input
          name="suite"
          value={userDetails.suite}
          onChange={handleDetails}
        />
        <label htmlFor="city">City:</label>
        <input name="city" value={userDetails.city} onChange={handleDetails} />
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          name="zipcode"
          value={userDetails.zipcode}
          onChange={handleDetails}
        />
        <label htmlFor="lat">Lat:</label>
        <input name="lat" value={userDetails.lat} onChange={handleDetails} />
        <label htmlFor="lng">Lng:</label>
        <input name="lng" value={userDetails.lng} onChange={handleDetails} />
      </div>
    </div>
  );
};

export default UserDetails;
