import { useState, useMemo } from "react";

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function PreventingCostlyCalculations() {
  const [num, setNum] = useState(0);

  const result = useMemo(() => fibonacci(num), [num]);
  // CÓDIGO PROBLEMÁTICO:
  // const result = fibonacci(num);

  const [color, setColor] = useState("yellow");

  const increase = () => setNum((prevNum) => (prevNum >= 40 ? 0 : prevNum + 1));

  const changeColor = () =>
    setColor((prevColor) => (prevColor === "yellow" ? "blue" : "yellow"));

  return (
    <section>
      <h3>Previniendo Computaciones Costosas</h3>
      <span>Num: {num}</span>
      <span>Result: {result}</span>
      <div>
        <button onClick={increase}>Next</button>
        <button onClick={() => setNum(0)}>Reset</button>
        <button onClick={() => setNum(35)}>Set 35</button>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "0.25em",
          backgroundColor: color,
          cursor: "pointer",
        }}
        onClick={changeColor}
      />
    </section>
  );
}

// ------------------------------------------------------------

export default function UseMemo() {
  return (
    <>
      <h2>useMemo</h2>
      <PreventingCostlyCalculations />
    </>
  );
}
