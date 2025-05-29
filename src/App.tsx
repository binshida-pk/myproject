import { Routes, Route } from "react-router";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Mainbody from "./Component/Mainbody";
import Login from "./Component/Login";
import Card from "./Component/Card";
import Signin from "./Component/Signin";
import Info from "./Component/Info";
import Users from "./Component/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Mainbody />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          index
          path="/card"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Card />
            </>
          }
        ></Route>

        <Route
          index
          path="/signin"
          element={
            <>
              <Signin />
            </>
          }
        ></Route>

        <Route
          index
          path="/info"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Info />
            </>
          }
        ></Route>
        <Route
          index
          path="/users"
          element={
            <>
              <Navbar />
              <Sidebar />
              <Users />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
