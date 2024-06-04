import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="h-screen items-center justify-center lg:flex">
      <div className="flex size-full flex-col rounded-2xl bg-custom-bone-main lg:size-5/6 xl:h-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
