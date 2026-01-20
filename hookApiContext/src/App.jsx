// src/App.jsx
import ProveedorCD from "./context/ProveedorCD.jsx";
import ListaCDs from "./components/ListaCDs.jsx";

function App() {
  return (
    <ProveedorCD>
      <ListaCDs />
    </ProveedorCD>
  );
}

export default App;
