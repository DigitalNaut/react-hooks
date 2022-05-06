import { ReactComponent as HackademyLogo } from "../../assets/logo.svg";

import styles from "./Blurb.module.css";

export default function Blurb() {
  return (
    <div className={styles.container}>
      <h2>Sobre los Hooks de React</h2>
      <p>
        Este repo es una demostración de los diferentes hooks de&nbsp;
        <a href="https://es.reactjs.org/docs/getting-started.html">React</a>.
      </p>
      <p>
        Recuerda revisar la documentación para más detalles sobre uso apropiado.
      </p>

      <h3>Documentación</h3>
      <ul>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-intro.html">React Hooks</a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-reference.html">
            Hooks de React
          </a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-faq.html">FAQ de Hooks</a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-rules.html">
            Reglas de Hooks
          </a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-testing.html">
            Testing de Hooks
          </a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-lifecycle-methods.html">
            Métodos de ciclo de vida de Hooks
          </a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-conclusion.html">
            Conclusión de Hooks
          </a>
        </li>
        <li>
          <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo">
            useMemo
          </a>
        </li>
      </ul>

      <h3>Recursos</h3>
      <ul>
        <li>
          <a href="https://frontendmasters.com/courses/intermediate-react-v4">
            Intermediate React v4 - Frontend Masters
          </a>
        </li>
        <li>
          <a href="https://kentcdodds.com/blog/application-state-management-with-react">
            Application State Management with React - Kent C. Dodds
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=3XaXKiXtNjw">
            Using Composition in React to Avoid "Prop Drilling" - Michael
            Jackson
          </a>
        </li>
        <li>
          <a href="https://kentcdodds.com/blog/react-hooks-pitfalls">
            React Hooks Pitfalls - Kent C. Dodds
          </a>
        </li>
        <li>
          <a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively">
            How to Use React Context Effectively - Kent C. Dodds
          </a>
        </li>
      </ul>

      <HackademyLogo width={64} height={64} />
    </div>
  );
}
