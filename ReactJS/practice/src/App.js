import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={[]} />
    </div>
  );
}

export default App;
