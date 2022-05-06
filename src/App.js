import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Blurb from "./Components/Blurb/Blurb";
import ErrorBoundaries from "./Components/Error/ErrorBoundary";
import UseCallback from "./Components/Hooks/UseCallback";
import UseContext from "./Components/Hooks/UseContext";
import UseEffect from "./Components/Hooks/UseEffect";
import UseLayoutEffect from "./Components/Hooks/UseLayoutEffect";
import PreventingCostlyCalculations from "./Components/Hooks/UseMemo";
import UseReducer from "./Components/Hooks/UseReducer";
import UseRef from "./Components/Hooks/useRef";
import UseState from "./Components/Hooks/UseState";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blurb />} />
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useMemo" element={<PreventingCostlyCalculations />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useContext" element={<UseContext />} />
          <Route path="useCallback" element={<UseCallback />} />
          <Route path="ErrorBoundary" element={<ErrorBoundaries />} />
          <Route path="*" element={<h1>404 No encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
