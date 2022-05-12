import { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError)
      return (
        <span
          style={{
            color: "red",
            textAlign: "center",
          }}
        >
          Error: {this.state.error?.message}
        </span>
      ); // Estilizar aquí

    return this.props.children;
  }
}

function FaultyComponent() {
  throw new Error("Algo malo sucedió.");
}

function MyComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Mi componente feliz</h1>
      {show && <FaultyComponent />}
      <button onClick={() => setShow(true)}>
        Mostrar componente con error
      </button>
      <p />
      <p>👀 No responde a errores de evento:</p>
      <button
        onClick={() => {
          throw new Error("Error de evento");
        }}
      >
        Arrojar un error de evento (ver consola)
      </button>
    </>
  );
}

function GeneralUseCase() {
  return (
    <section>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </section>
  );
}

// ------------------------------------------------------------

export default function ErrorBoundaries() {
  return (
    <>
      <h2>Límite de Error</h2>
      <GeneralUseCase />
    </>
  );
}
