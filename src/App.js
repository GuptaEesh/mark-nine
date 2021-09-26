import React, { useState } from "react";
import "./styles.css";
const InvestmentWays = {
  CryptoCurrencies: [
    {
      url: "https://assets.gadgets360cdn.com/img/crypto/dogecoin-og-logo.png",
      name: "Dogecoin",
      value: "Ð"
    },
    {
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg",
      name: "Ethereum",
      value: "Ξ"
    },
    {
      url:
        "https://cdn.gobankingrates.com/wp-content/uploads/2021/01/iStock-1135926802-e1611267915503.jpg",
      name: "Litecoin",
      value: "Ł"
    }
  ],
  "ResidentialPrice(/900sqft)": [
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/IN-HR.svg/2000px-IN-HR.svg.png",
      name: "Haryana",
      value: "12 Lakhs"
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/IN-PB.svg/250px-IN-PB.svg.png",
      name: "Punjab",
      value: "40 Lakhs"
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/IN-KA.svg/250px-IN-KA.svg.png",
      name: "Karnataka",
      value: "33 Lakhs"
    }
  ],
  "SIP Types": [
    {
      url:
        "https://images.moneycontrol.com/static-mcnews/2019/08/investment_home-652x435.jpg",
      name: "Regular",
      value: "Periodic investments needed"
    },
    {
      url:
        "https://www.edelweissmf.com/images/EDL/insights/trivia/SIP_Mitigation_1.jpg",
      name: "Top-Up",
      value: "Can increase periodic investments"
    },
    {
      url:
        "https://img.etimg.com/thumb/msid-70771378,width-640,resizemode-4,imgsize-63243/what-is-a-flexi-sip.jpg",
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
            <img src={details.url}></img>

            <div>
              Name: {details.name}
              {" 🎁 "}
            </div>
            <div>Value: {details.value}</div>
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
