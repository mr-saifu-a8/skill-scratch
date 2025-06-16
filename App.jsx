// src/App.jsx
import React from "react";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <CustomCursor />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to <span className="text-purple-600">Skill Scratch</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Exchange your skills and learn new ones!
        </p>
      </div>
    </div>
  );
}

export default App;
