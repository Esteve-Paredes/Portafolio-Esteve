import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="flex flex-col bg-custom-vanilla sm:w-1/2 md:w-3/5  lg:w-2/3 xl:size-3/4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
