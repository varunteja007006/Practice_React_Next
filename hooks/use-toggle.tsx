import { useState } from "react";

function useToggle(defaultValue: boolean) {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
}

export default useToggle;
