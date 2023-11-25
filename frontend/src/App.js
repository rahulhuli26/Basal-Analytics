import "./App.css";
import { AllRoutes } from "./routes/Allroutes";
import NavbarComponent from "./components/NavbarComponent.jsx";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AllRoutes />
    </div>
  );
}

export default App;
