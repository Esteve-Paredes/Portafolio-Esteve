import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className=" grid h-screen items-center justify-center">
      <div className="h-[800px] w-[800px] bg-custom-vanilla">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
