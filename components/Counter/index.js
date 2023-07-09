import { useState } from "react";

import { WrapperStyle } from "./styles";

const Counter = ({ toggleTheme }) => {
  const [stateCount, setStateCount] = useState(0);

  return (
    <WrapperStyle>
      <div className="holder">
        <div className="title">Give Me A Message</div>
        <div className="number">me@owenmerry.com</div>
        <div onClick={toggleTheme}>Add Color</div>
      </div>
    </WrapperStyle>
  );
};

export default Counter;
