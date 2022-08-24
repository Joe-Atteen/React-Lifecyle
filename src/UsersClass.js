import React, { Component } from "react";

class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("users", users);
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>UsersClass</h1>
        {this.state.users.map((users, index) => {
          return (
            <div key={index}>
              <p>Name: {users.name}</p>
              <p>Phone: {users.phone}</p>
              <p>Website: {users.website}</p>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default UsersClass;
