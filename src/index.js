import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Slider from "./components/Slider";
import SliderItem1 from "./components/SliderItem1";
import SliderItem2 from "./components/SliderItem2";

function App() {
  return (
    <div className="App">
      <Slider>
        <SliderItem1 />
        <SliderItem2 />
        <SliderItem1 />
        <SliderItem2 />
        <SliderItem1 />
      </Slider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
