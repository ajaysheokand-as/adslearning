import React, { useState } from "react";
import { Wrapper } from "../Helpers/Wrapper";
import { Button } from "../UI/Button";
import Card from "../UI/Card";
import { ErrorModel } from "../UI/ErrorModel";
import classes from "./AddUser.module.css";
export const AddUser = (props) => {
  const [enteredUsername, setEntredUsername] = useState("");
  const [enteredAge, setEntredAge] = useState("");
  const [error, setError] = useState();
  const AddUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty value)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid age (age > 0)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // console.log(enteredAge, enteredUsername);
    setEntredUsername("");
    setEntredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEntredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEntredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label for="username">UserName</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          ></input>
          <label for="age">Age (Years)</label>
          <input
            value={enteredAge}
            id="age"
            type="text"
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
