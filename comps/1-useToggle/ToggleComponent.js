import useToggle from "./useToggle";
import React from "react";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
