import React from "react";
import User from "./User";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  return (
    <div className="container flex">
      <div>
        <header>
          <h1>devfinder</h1>
        </header>
        <User />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
