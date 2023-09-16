import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
// import Navbar from "./pages/navbar";

function App() {
  const mode = useSelector((state) => state.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isAuth = Boolean(useSelector((state) => state.token));
  console.log(isAuth)

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
         
          <Route path="/" element={<LoginPage />} />
          <Route path="/home"
           element={isAuth ? <HomePage /> : <Navigate to="/"/>} />

          <Route path="/profile/:userId"
           element={isAuth ? <ProfilePage /> : <Navigate to="/"/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
