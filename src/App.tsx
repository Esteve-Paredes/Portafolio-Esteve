import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className=" grid h-screen items-center justify-center">
      <div className="flex h-fit flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
