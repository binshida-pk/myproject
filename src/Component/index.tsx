import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Mainbody from "./Mainbody";
import Login from "./Login";
import CardProps from "./Cardprop";
import Info from "./Info";
import Usersprop from "./Usersprop";
import Text from "./Text";

function CustomRoute() {
  return (
    <Dashboard>
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="login" element={<Login />} />
        <Route path="card" element={<CardProps />} />
        <Route path="info" element={<Info />} />
        <Route path="users" element={<Usersprop />} />
        <Route path="text" element={<Text />} />
      </Routes>
    </Dashboard>
  );
}
export default CustomRoute;
