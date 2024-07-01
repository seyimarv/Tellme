import "./App.css";
import Footer from "./components/Footer";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-full bg-primary overflow-auto">
      {/* <Dashboard />
      <Footer /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
