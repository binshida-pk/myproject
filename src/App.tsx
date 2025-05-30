import { Route, Routes } from "react-router-dom";
import CustomRoute from "./Component";
import Signin from "./Component/Signin";


function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<CustomRoute />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
