/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
// import RequireAuth from "./contexts/RequireAuth";
import {
  LandingPage,
  Login,
  AdminDashboard,
  DashboardHome,
  UsersPage,
  DataManagementPage,
} from "./pages";
import RequireAuth from "./contexts/RequireAuth";

function App() {
  const roles = ["admin", "user"];

  return (
    <Routes>
      {/* Default route: redirect to landing page */}
      <Route index element={<LandingPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route element={<RequireAuth allowedRoles={roles} />}>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="data" element={<DataManagementPage />} />
        </Route>
      </Route>

      {/* Redirect all unknown routes to NotFound page */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
