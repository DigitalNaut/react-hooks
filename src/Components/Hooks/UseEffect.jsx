import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Card({ name, image }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span>{name}</span>
      <img src={image} alt="card" width="32px" height="32px" />
    </div>
  );
}

function CleaningUpEffects() {
  const [fetchStatus, setFetchStatus] = useState("Llamando API...");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    console.log("Llamando API...");

    (async function () {
      try {
        const { status, data } = await axios.get("http://localhost:3001/cats", {
          signal: controller.signal,
        });

        if (status === 200) {
          setFetchStatus(null);
          setFetchedData(data);
        } else setFetchStatus(`Error al llamar la API: ${status}`);
      } catch (error) {
        if (error.name === "AbortError") setFetchStatus("Cancelado");
      }
    })();

    // CLEANUP
    return () => {
      console.log("Petición cancelada");
      controller.abort();
    };
  }, []);

  return (
    <section>
      <h3>Limpiando Efectos</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
        {fetchStatus ||
          fetchedData.map(({ id, name, image }) => (
            <Card key={id} name={name} image={image} />
          ))}
      </div>
    </section>
  );
}

// ------------------------------------------------------------

export default function UseEffect() {
  return (
    <>
      <h2>useEffect</h2>
      <CleaningUpEffects />
    </>
  );
}
