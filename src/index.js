import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import MyHello from "./chap03/MyHello";
//import StateParent from "./chap03/StateParent";
import EventMouse from "./chap03/EventMouse";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <EventMouse
    alt="ロゴ画像"
    beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
    afterSrc="https://www.web-deli.com/image/home_chara.gif"
  />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
