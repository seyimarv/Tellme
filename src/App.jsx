import "./App.css";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="h-full bg-primary overflow-auto">
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
