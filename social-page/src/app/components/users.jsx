import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    return number >= 2
      ? `${number} Users are`
      : number === 1
      ? "1 User is"
      : "No one is";
  };

  return (
    <>
      <h2
        className={
          "fs-3 d-inline-flex p-1 text-white bg-primary " +
          (users.length ? "" : "bg-danger")
        }
      >
        {renderPhrase(users.length)} ready to hang out today
      </h2>
      {users.length ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user._id}>
                  <th>{user.name}</th>
                  <td>
                    <div className="d-flex ">
                      {user.qualities.map((quality) => {
                        return (
                          <p
                            key={quality._id}
                            className={"m-1 badge bg-" + quality.color}
                          >
                            {quality.name}
                          </p>
                        );
                      })}
                    </div>
                  </td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
export default Users;
