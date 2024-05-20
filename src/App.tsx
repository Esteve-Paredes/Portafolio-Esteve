import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className=" grid h-screen items-center justify-center">
      <div className="h-[768px] w-[720px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
