
import React, { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import  BookCard from "./components/BookCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <main className="container mt-4">
        <BookList searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
