import React, { useState } from "react";
import { useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [render, SetForceRender] = useState(0);

  const nRenders = useRef(0);
  const handleReRender = () => {
    // Update state to force re-render
    SetForceRender(render + 1);
  };
  nRenders.current = nRenders.current + 1;

  return (
    <div>
      <p>This component has rendered {nRenders.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
