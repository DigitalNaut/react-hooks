import { useReducer } from "react";

const step = 25;

function limit(value) {
  return value < 0 ? 0 : value > 255 ? 255 : value;
}

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_RED":
      return { ...state, r: limit(state.r + step) };
    case "INCREASE_GREEN":
      return { ...state, g: limit(state.g + step) };
    case "INCREASE_BLUE":
      return { ...state, b: limit(state.b + step) };
    case "DECREASE_RED":
      return { ...state, r: limit(state.r - step) };
    case "DECREASE_GREEN":
      return { ...state, g: limit(state.g - step) };
    case "DECREASE_BLUE":
      return { ...state, b: limit(state.b - step) };
    default:
      return state; // Retorna state si no se encuentra el tipo de acción
  }
}

function GeneralUse() {
  const initialValue = { r: 0, g: 0, b: 0 };
  const [{ r, g, b }, dispatch] = useReducer(reducer, initialValue);

  return (
    <section>
      <h3>Uso General</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => dispatch({ type: "INCREASE_RED" })}>R+</button>
        <button onClick={() => dispatch({ type: "INCREASE_GREEN" })}>G+</button>
        <button onClick={() => dispatch({ type: "INCREASE_BLUE" })}>B+</button>

        <div
          style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            margin: "0.5em",
            padding: "0.5em",
            borderRadius: "0.25em",
          }}
        >
          <i style={{ color: "red" }}>{r}</i>,&nbsp;
          <i style={{ color: "green" }}>{g}</i>,&nbsp;
          <i style={{ color: "blue" }}>{b}</i>
        </div>

        <button onClick={() => dispatch({ type: "DECREASE_RED" })}>R-</button>
        <button onClick={() => dispatch({ type: "DECREASE_GREEN" })}>G-</button>
        <button onClick={() => dispatch({ type: "DECREASE_BLUE" })}>B-</button>
      </div>
    </section>
  );
}

// ------------------------------------------------------------

export default function UseReducer() {
  return (
    <>
      <h2>useReducer</h2>
      <GeneralUse />
    </>
  );
}
