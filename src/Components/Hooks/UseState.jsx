import { useState } from "react";

function InfiniteRenderingLoop() {
  // CÓDIGO DE EJEMPLO DE UN LOOP INFINITO:
  // const [, setValue] = useState(0);
  // setValue(0);

  return (
    <section>
      <h3>Renderizado Infinito</h3>
      <p>
        Descomenta el código y revisa la consola con <code>F12</code>
      </p>
    </section>
  );
}

// ------------------------------------------------------------

function CountDisplay({ value }) {
  return <div>Clicks: {value}</div>;
}

function CountButton({ callback }) {
  return <button onClick={callback}>Click</button>;
}

function LiftingState() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h3>Levantando Estado</h3>
      <CountDisplay value={count} />
      <CountButton callback={() => setCount(count + 1)} />
    </section>
  );
}

// ------------------------------------------------------------

function AsyncUpdates() {
  const [myCount, setCount] = useState(0);

  const increment = () => {
    setCount(myCount + 1);
    console.log(myCount);

    // SOLUCIÓN AL PROBLEMA DE ESTADO ASÍNCRONO:
    // setCount((prevCount) => {
    //   const newCount = prevCount + 1;
    //   console.log(newCount);
    //   return newCount;
    // });
  };

  return (
    <section>
      <h3>Estado Asíncrono</h3>
      <p>
        Abre tu consola y revisa el log con <code>F12</code>
      </p>
      <CountDisplay value={myCount} />
      <CountButton callback={increment} />
    </section>
  );
}

// ------------------------------------------------------------

export default function UseState() {
  return (
    <>
      <h2>useState</h2>
      <InfiniteRenderingLoop />
      <LiftingState />
      <AsyncUpdates />
    </>
  );
}
