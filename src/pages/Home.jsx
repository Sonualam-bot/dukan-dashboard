import Navbar from "../navbar/Navbar";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div className=" overflow-y-scroll h-[100vh] ">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Home;
