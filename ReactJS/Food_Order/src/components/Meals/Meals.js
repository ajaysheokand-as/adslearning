import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import { AvilableMeals } from "./AvilableMeals";

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvilableMeals />
    </Fragment>
  );
};
