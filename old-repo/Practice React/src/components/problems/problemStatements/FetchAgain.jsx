import { useEffect } from "react";
import CodeBlock from "../../CodeBlock";
import CustomHookForFetchAgain from "../../../custom_hooks/CustomHookForFetchAgain";

function FetchAgain() {
  const url = ``;

  const fetchAgain = () => {
    const interval = setInterval(() => {
      const data = CustomHookForFetchAgain(url);
      console.log(data);
    }, 10000);
  };

  useEffect(() => {
    // fetchAgain(); // Run this to get data in the intervals on 1min
  }, []);

  return (
    <CodeBlock>
      <h3>Problem Statement</h3>
      <p>
        They provided an URL, we need to fetch the data from that URL every one
        minute.
        <br />
        Conditions
        <li>
          Create a custom hook which will take the given URL as an input and
          returns the output. Main component should use the custom hook to get
          the result and display the output.
        </li>
      </p>
    </CodeBlock>
  );
}

export default FetchAgain;
