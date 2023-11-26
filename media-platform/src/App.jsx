import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Protected } from "./components/Protected";
import SideNavbar from "./components/SideNavbar";
import MainPage from "./pages/MainPage";
import UserRegistrationAndLoginComponent from "./pages/UserRegistrationAndLoginComponent";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <Routes>

        <Route path="/" element={<UserRegistrationAndLoginComponent />}></Route>
        
        <Route path="/user_page" element={<UserPage />}></Route>

        <Route path="/main_page" element={<MainPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
