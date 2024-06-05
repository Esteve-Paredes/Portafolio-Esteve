import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex h-screen flex-col overflow-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
