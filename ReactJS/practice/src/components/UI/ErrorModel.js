import React from "react";
import { Button } from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

export const ErrorModel = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};
