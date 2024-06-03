import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="h-screen items-center justify-center lg:flex">
      <div className="bg-custom-bone-main flex size-full flex-col rounded-2xl lg:size-5/6 2xl:size-2/3">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
