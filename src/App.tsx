import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="block h-screen items-center justify-center lg:flex">
      <div className="flex size-full flex-col bg-custom-vanilla lg:size-3/4 2xl:size-3/4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
