import React, { useContext, useEffect } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import CalculatorQuestion from "../Components/calculator/CalculatorQuestion";
import CalculatorResults from "../Components/calculator/CalculatorResults";
import "../CSS/Calculator.css";
import CalcContext from "../calcContext";

/** Directs traffic to result screen or current question based on URL */
const CalculatorQuestionCont = () => {
  const calcContext = useContext(CalcContext);
  let { path } = useRouteMatch();
  // let history = useHistory();
  useEffect(() => {}, []);

  /** Return a switch that routes to result screen, or question to display */
  return (
    <>
      <Switch>
        <Route exact path={`${path}/results`}>
          <CalculatorResults
            userResponse={calcContext.userResponse}
            branch={calcContext.branch}
          />
        </Route>
        <Route exact path={`${path}/:branchName/:number`}>
          <CalculatorQuestion />
        </Route>
      </Switch>
    </>
  );
};

export default CalculatorQuestionContainer;
