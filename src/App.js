import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/logout" element={<Logout></Logout>}></Route>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                 <Home></Home>
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
