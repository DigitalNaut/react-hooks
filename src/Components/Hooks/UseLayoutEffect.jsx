import { useState, useRef, useLayoutEffect } from "react";

function MeasuringElements() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const element = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    setWidth(element.current?.clientWidth);
    setHeight(element.current?.clientHeight);
  }); // <-- Nota la falta de dependencias

  return (
    <section>
      <h2>Midiendo Elementos</h2>
      <span>
        <i>Ancho</i>: {width}
      </span>
      <span>
        <i>Alto</i>: {height}
      </span>
      <textarea ref={element} onClick={() => setWidth(0)} />
      {/* El onClick fuerza una actualización */}
    </section>
  );
}

// ------------------------------------------------------------

export default function UseLayoutEffect() {
  return (
    <>
      <h2>useLayoutEffect</h2>
      <MeasuringElements />
    </>
  );
}
