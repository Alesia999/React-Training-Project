import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import API from "../api";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data));
  });
  const handleClick = () => {
    history.push("/users");
  };

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Profession: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Completed Meetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate} </h2>
        <button onClick={handleClick}>All Users</button>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

UserPage.propTypes = {
  userId: propTypes.string.isRequired,
};

export default UserPage;
