import "./App.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="w-full bg-[#FAFAFA] flex items-start  ">
      <div className="inline-flex flex-col items-start shrink-0 ">
        <Sidebar />
      </div>
      <div>Hello</div>
    </div>
  );
}

export default App;
