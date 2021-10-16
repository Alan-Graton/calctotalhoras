import React from "react";

import DaySummary from "./DaySummary";

class App extends React.Component {
  constructor() {
    super();
    this.dailyValues = [0, 0, 0, 0, 0];
    // this.weeklyRequired = 35 * 60;
    // this.state = {
    //   weeklySummary: 0,
    //   overtime: 0,
    // };
  }

  dailySummary = (d, v) => {
    this.dailyValues[d] = v;
    // let sum = this.dailyValues.reduce((a, b) => {
    //   return a + b;
    // });
    // let ot = sum - this.weeklyRequired;

    // this.setState({ weeklySummary: minsToTimeStr(sum) });
    // this.setState({ overTime: minsToTimeStr(ot) });
  };

  render() {
    return (
      <div>
        <h1>Timesheet App</h1>
        <table className="days-container">
          <DaySummary
            dayName="Segunda-Feira"
            changeNotify={(v) => this.dailySummary(0, v)}
          />
        </table>
      </div>
    );
  }
}

export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
