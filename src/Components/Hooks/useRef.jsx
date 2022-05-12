import { useRef, useEffect, useState } from "react";

export function AutoFocus() {
  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <section>
      <h2>Auto Focus</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="email" name="email" ref={ref} placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

// ------------------------------------------------------------

export function ValueReferencing() {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);

  function incrementAndDelayLogging() {
    setStateNumber((prevNumber) => prevNumber + 1);
    numRef.current += 1;

    setTimeout(
      () => alert(`State: ${stateNumber} | Ref: ${numRef.current}`),
      1000
    );
  }

  return (
    <section>
      <h2>Referenciando Valores</h2>
      <button onClick={incrementAndDelayLogging}>Retardar log</button>
      <p>Estado: {stateNumber}</p>
      <p>Ref: {numRef.current}</p>
    </section>
  );
}

// ------------------------------------------------------------

export default function UseRef() {
  return (
    <>
      <h2>useRef</h2>
      <AutoFocus />
      <ValueReferencing />
    </>
  );
}
