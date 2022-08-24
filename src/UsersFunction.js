import React, { useState, useEffect } from "react";

function UsersFunction() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((users) => {
        console.log("data", users);
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>UsersFunction</h1>
      {users.map((users) => {
        return (
          <div key={users.id}>
            <p>title: {users.title}</p>
            <p>body: {users.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UsersFunction;
