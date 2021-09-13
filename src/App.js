import React, { useState } from "react";
import "./styles.css";
const InvestmentWays = {
  CryptoCurrencies: [
    {
      name: "Dogecoin",
      value: "Ð"
    },
    {
      name: "Ethereum",
      value: "Ξ"
    },
    {
      name: "Litecoin",
      value: "Ł"
    }
  ],
  "ResidentialPrice(/900sqft)": [
    {
      name: "Haryana",
      value: "12 Lakhs"
    },
    {
      name: "Punjab",
      value: "40 Lakhs"
    },
    {
      name: "Karnataka",
      value: "33 Lakhs"
    }
  ],
  "SIP Types": [
    {
      name: "Regular",
      value: "Periodic investments needed"
    },
    {
      name: "Top-Up",
      value: "Can increase periodic investments"
    },
    {
      name: "Flexible",
      value: "No need of periodicity in investments"
    }
  ]
};
var select = Object.keys(InvestmentWays);
export default function App() {
  var [investOpt, investDetail] = useState("CryptoCurrencies");
  function clickHandler(investOpt) {
    investDetail(investOpt);
  }
  return (
    <div className="App">
      <div className="prime">
        <br></br>
        <h1>Investment Options </h1>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        {select.map((investOpt) => {
          return (
            <button key={investOpt} onClick={() => clickHandler(investOpt)}>
              {investOpt}
            </button>
          );
        })}
      </div>
      <ul>
        {InvestmentWays[investOpt].map((details) => (
          <li>
            <div>
              Name: {details.name}
              {" 🎁 "}
              Value: {details.value}
            </div>
          </li>
        ))}
      </ul>
      <div className="finalBtn">
        <button>
          <a href="https://economictimes.indiatimes.com/wealth/invest/top-10-investment-options/articleshow/64066079.cms?from=mdr">
            More Investment Options
          </a>
        </button>
      </div>
    </div>
  );
}
