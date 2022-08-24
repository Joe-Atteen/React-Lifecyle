import React, { useState, useEffect } from "react";
import axios from "axios";

function UsingAxios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>UsingAxios</h1>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <p>email: {item.email}</p>
            <p>username: {item.username}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default UsingAxios;
