import { useState, useEffect, useCallback, memo } from "react";

const ExpensiveComputationComponent = memo(function ({ compute, count }) {
  return (
    <div>
      Computado: {compute(count)}
      <br />
      <span>Último renderizado: {new Date().toLocaleTimeString()}</span>
    </div>
  );
});

function fibonacci(num) {
  if (num < 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function CallbackComponent() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  const compute = useCallback(() => fibonacci(count), [count]);
  // const compute = () => fibonacci(count);

  return (
    <div>
      <h2>Callback</h2>
      <span>{time.toLocaleTimeString()}</span>
      <br />
      <br />
      <ExpensiveComputationComponent compute={compute} count={count} />

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Conteo: {count}
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// ------------------------------------------------------------

export default function UseCallback() {
  return (
    <>
      <h2>useCallback</h2>
      <CallbackComponent />
    </>
  );
}
