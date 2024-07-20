import React, { useState } from "react";
import CodeBlock from "../CodeBlock";
import { ContactField } from "../subcomponents";
function LearnMultiPageForms() {
  const [phone, SetPhone] = useState("");
  
  const handlePhone = (e) => {
    console.log(e.target.value);
    SetPhone(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(Object.fromEntries(form));
  };

  return (
    <CodeBlock heading={"Learn Multi-Page forms"}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-fit gap-3 text-black"
      >
        <input
          className="p-3"
          placeholder="firstname"
          type="text"
          name="firstname"
          id="firstname"
        />
        <input
          className="p-3"
          placeholder="lastname"
          type="text"
          name="lastname"
          id="lastname"
        />
        <ContactField phone={phone} handlePhone={handlePhone}></ContactField>
        <button type="submit" className="p-3 bg-white">
          Submit
        </button>
      </form>
    </CodeBlock>
  );
}

export default LearnMultiPageForms;
