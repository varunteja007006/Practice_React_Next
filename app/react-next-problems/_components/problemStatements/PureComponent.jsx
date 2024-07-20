import { useState, useEffect, useRef } from "react";
import CodeBlock from "../../CodeBlock";

function PureComponent() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:3030/users");
    const dataJson = await response.json();
    setData(dataJson);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CodeBlock>
      <div>
        <h1 className="text-bold text-2xl">Parent Component</h1>
        <p>
          Problem Statement: Create a parent and child component. Avoid
          re-rendering the child component unless the data has changed.{" "}
        </p>
        <ChildComponent data={data} />
      </div>
    </CodeBlock>
  );
}

// Child component
const ChildComponent = ({ data }) => {
  // Compare the current state of the data to the previous state of the data
  const previousData = useRef(data);
  if (previousData.current !== data) {
    // The data has changed, so re-render the child component
    previousData.current = data;
    return (
      <ul>
        {data.map((item) => (
          <span key={item.id}>
            <li>Name: {item.name}</li>
            <li className="mb-5">Email: {item.email}</li>
          </span>
        ))}
      </ul>
    );
    ``;
  } else {
    // The data has not changed, so do not re-render the child component
    return null;
  }
};

export default PureComponent;
