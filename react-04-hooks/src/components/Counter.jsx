import { useEffect, useRef, useState } from "react";

function Counter() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const handleCountRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  const handleCountState = () => {
    setCountState(countState + 1);
  };

  useEffect(() => {
    console.log(countState);
  });

  return (
    <>
      <h2>Counter</h2>

      <p>countRef: {countRef.current}</p>

      <button type="button" onClick={handleCountRef}>
        Sumar 1 a countRef
      </button>

      <p>countState: {countState}</p>

      <button type="button" onClick={handleCountState}>
        Sumar 1 a countState
      </button>
    </>
  );
}

export default Counter;
