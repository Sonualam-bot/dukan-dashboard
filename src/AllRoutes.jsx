import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;