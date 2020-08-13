import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookmarkedItems from "./components/BookmarkedItems";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/items" component={BookmarkedItems} />
    </Router>
  );
}

export default App;
