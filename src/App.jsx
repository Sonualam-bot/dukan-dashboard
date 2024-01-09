import AllRoutes from "./AllRoutes";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="w-full  bg-[#FAFAFA] flex items-start  ">
      <div className="flex  flex-col items-start shrink-0 ">
        <Sidebar />
      </div>
      <div className="flex-1  ">
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
