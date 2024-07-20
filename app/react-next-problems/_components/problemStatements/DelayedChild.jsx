import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "../../CodeBlock";

function DelayedChild() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData);
    setMessage(form.message);
  };

  return (
    <CodeBlock>
      <p>
        <b>Parent component</b>
        <br />
        Input box: we need to enter a statement (ex. How are you?)
        <br />
        Button: When you click on this button, we need to pass the entered
        statement to child component.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row items-center"
      >
        <input
          className="input w-full max-w-xs my-3"
          placeholder="Input box"
          type="text"
          name="message"
          id="message"
        />
        <button
          type="submit"
          className="btn bg-green-400 hover:bg-green-500 ms-3"
        >
          Submit
        </button>
      </form>
      <p>
        <b>Child component</b>
        <br /> we need to receive the incoming statement and display the each
        word with 2sec delay on screen.
      </p>
      <ChildComponent data={message} />
    </CodeBlock>
  );
}

const ChildComponent = ({ data }) => {
  const [dataStr, setDataStr] = useState([]);

  function printData(data) {
    let inc = 0;
    const dataList = data.split(" ");
    const x = [];

    const interval = setInterval(() => {
      if (inc < dataList.length) {
        x.push(dataList[inc]);
        setDataStr([...x]);
        inc += 1;
      } else {
        clearInterval(interval);
      }
    }, 2000);
  }

  useEffect(() => {
    if (data) {
      printData(data);
    }
  }, [data]);

  return (
    <>
      <h3>Child</h3>
      <p>{dataStr.join(" ")}</p>
    </>
  );
};

export default DelayedChild;
