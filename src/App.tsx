import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import Login from "modules/auth/views/Login";
import Signup from "modules/auth/views/Signup";
import Home from "modules/home/views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="auth" element={<Login />}></Route>
          <Route path="register" element={<Signup />}></Route>
          <Route path="*" element={<div>page not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
