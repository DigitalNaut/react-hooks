import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Level4() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const style = {
    border: "1px solid gray",
    padding: "1em",
    borderRadius: "0.5em",
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div style={style}>
      <h3>Nivel 4</h3>
      <UserContext.Provider value={{ theme, toggleTheme, style }}>
        <span>Tema: {theme}</span>
        <Level3 />
      </UserContext.Provider>
    </div>
  );
}
function Level3() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1em",
        borderRadius: "0.5em",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <h3>Nivel 3</h3>
      <p>No usa useContext</p>
      <Level2 />
    </div>
  );
}
function Level2() {
  const { style, toggleTheme } = useContext(UserContext);

  return (
    <div style={style}>
      <h3>Nivel 2</h3>
      <button onClick={toggleTheme}>Cambiar</button>
      <Level1 />
    </div>
  );
}
function Level1() {
  const { style } = useContext(UserContext);

  return (
    <div style={style}>
      <h3>Nivel 1</h3>
    </div>
  );
}

function GeneralUse() {
  return (
    <section>
      <h3>Uso General</h3>
      <Level4 />
    </section>
  );
}

// ------------------------------------------------------------

function Level4CC({ children, style }) {
  return (
    <div style={style}>
      <h3>Nivel 4</h3>
      {children}
    </div>
  );
}
function Level3CC({ children, style }) {
  return (
    <div style={style}>
      <h3>Nivel 3</h3>
      {children}
    </div>
  );
}
function Level2CC({ children, style }) {
  return (
    <div style={style}>
      <h3>Nivel 2</h3>
      {children}
    </div>
  );
}
function Level1CC({ children, style }) {
  return (
    <div style={style}>
      <h3>Nivel 1</h3>
      {children}
    </div>
  );
}

function ComponentComposition() {
  const [input, setInput] = useState("");

  const style = {
    border: "1px solid gray",
    padding: "1em",
    borderRadius: "0.5em",
  };

  return (
    <section>
      <h3>Composición de Componentes (alternativa sin context)</h3>
      <Level4CC style={style}>
        <span>Input: {input}</span>
        <Level3CC style={style}>
          <Level2CC style={style}>
            <input
              type="text"
              style={{ textAlign: "center" }}
              value={input}
              onChange={(event) => setInput(event.currentTarget.value)}
            />
            <Level1CC style={style}>
              <span>Input: {input}</span>
            </Level1CC>
          </Level2CC>
        </Level3CC>
      </Level4CC>
    </section>
  );
}

// ------------------------------------------------------------

export default function UseContext() {
  return (
    <>
      <h2>useContext</h2>
      <GeneralUse />
      <ComponentComposition />
    </>
  );
}
