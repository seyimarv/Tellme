import "./App.css";
import Footer from "./components/Footer";
import * as React from "react";
import RouteProvider from "./router";

function App() {
  return (
    <div className="h-full bg-primary overflow-auto">
      <RouteProvider />
    </div>
  );
}

export default App;
