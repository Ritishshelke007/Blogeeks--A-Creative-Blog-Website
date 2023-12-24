import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserAuth from "./pages/UserAuth";
import { createContext, useState, useEffect } from "react";
import { lookInSession } from "./common/sessions";

export const userContext = createContext({});

function App() {
  const [userAuthContext, setUserAuthContext] = useState({});

  useEffect(() => {
    let userInSession = lookInSession("user");
    userInSession
      ? setUserAuthContext(JSON.parse(userInSession))
      : setUserAuthContext({ access_token: null });
  }, []);

  return (
    <>
      <userContext.Provider value={{ userAuthContext, setUserAuthContext }}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/signin" element={<UserAuth type="sign-in" />} />
            <Route path="/signup" element={<UserAuth type="sign-up" />} />
          </Route>
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
