import React, { useState } from "react";
import "./app.css";

function App() {
  const [initInvestment, setInitInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [duration, setDuration] = useState(0); // Changed to a single number
  const [additionalContributions, setAdditionalContributions] = useState(0);
  let savedTotalValue = initInvestment;

  function updateInitInvestment(e: any) {
    setInitInvestment(parseFloat(e.target.value) || 0); // Parse input as float
  }

  function updateAnnualReturnRate(e: any) {
    setAnnualReturnRate(parseFloat(e.target.value) / 100 || 0); // Store as a percentage
  }

  function updateDuration(e: any) {
    setDuration(parseInt(e.target.value) || 0); // Parse as integer
  }

  function updateAdditionalContributions(e: any) {
    setAdditionalContributions(parseFloat(e.target.value) || 0);
  }

  // Function to generate an array of years based on the duration
  const generateYears = (numYears: number) => {
    return Array.from({ length: numYears }, (_, i) => i + 1);
  };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div style={{ border: "solid 1px white", width: "100%", height: "10%" }}>Header</div>

      <div style={{ border: "solid 1px white", width: "100%", height: "45%", display: "flex" }}>
        <div style={{ width: "50%", height: "100%" }}>
          <form>
            <div>
              <p>Initial Investment</p>
              <input
                name="initInvestment"
                onChange={updateInitInvestment}
                type="number" // Ensure input is numeric
              />
            </div>

            <div>
              <p>Annual Return Rate (%)</p>
              <input
                name="annualReturnRate"
                onChange={updateAnnualReturnRate}
                type="number" // Ensure input is numeric
              />
            </div>

            <div>
              <p>Duration (years)</p>
              <input
                name="duration"
                onChange={updateDuration}
                type="number" // Ensure input is numeric
              />
            </div>

            <div>
              <p>Additional Contributions (per year)</p>
              <input
                name="additionalContributions"
                onChange={updateAdditionalContributions}
                type="number" // Ensure input is numeric
              />
            </div>
          </form>
        </div>

        <div style={{ width: "50%", height: "100%" }}>
          <p>Initial Investment: ${initInvestment}</p>
          <p>Annual Return Rate: {annualReturnRate * 100}%</p>
          <p>Duration: {duration} years</p>
          <p>Additional Contributions: ${additionalContributions} per year</p>
        </div>
      </div>

      <div style={{ border: "solid 1px white", width: "100%", height: "45%",overflow:"auto" }}>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <p>Year</p>
        <p>Saved Total Value</p>
        <p>Annual Return</p>
        <p>Total Investment Value</p>

        </div>

        {generateYears(duration).map((year, key) => {
  let annualReturn = savedTotalValue * annualReturnRate;
  savedTotalValue += annualReturn + additionalContributions;

  return (
    <div key={key} style={{display:"flex", justifyContent:"space-evenly"}}>
      <p>Year {year }</p>
      <p>Saved Total Value: ${savedTotalValue.toFixed(2)}</p>
      <p>Annual Return: ${annualReturn.toFixed(2)}</p>
      <p>Total Investment Value: ${savedTotalValue.toFixed(2)}</p>
    </div>
  );
})}
      </div>
    </div>
  );
}

export default App;
