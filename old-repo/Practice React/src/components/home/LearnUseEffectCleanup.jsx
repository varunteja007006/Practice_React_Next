import React, { useState } from "react";
import CodeBlock from "../CodeBlock";
import ToggleComponent from "../subcomponents/ToggleComponent";
import YellowBtn from "../subcomponents/YellowBtn";

function LearnUseEffectCleanup() {
  const [toggle, setToggle] = useState(false);

  const togglebtn = () => {
    setToggle(!toggle);
  };

  return (
    <CodeBlock
      heading={"Learn UseEffect Cleanup 💚"}
      explanation={`Some effects require cleanup to reduce memory leaks.

    Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
    
    We do this by including a return function at the end of the useEffect Hook.`}
    >
      <div className="flex flex-row gap-4 align-middle items-center mt-3">
        <YellowBtn
          type={"button"}
          handleButton={togglebtn}
          label={"Toggle me"}
        ></YellowBtn>
        {/* The re-render is going to run the UseEffect every time the component (ToggleComponent) is shown.  */}
        {toggle && <ToggleComponent></ToggleComponent>}
      </div>
    </CodeBlock>
  );
}

export default LearnUseEffectCleanup;
