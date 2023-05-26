import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import dummyData from "./dummyData";
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/** Site application.
 *
 * App -> TodoApp
 **/

function App() {
  return (
    <main className="App">
      <Header />
      <section className="container mt-4">
        <TodoApp initialTodos={dummyData} />

        <Footer />
      </section>
    </main>
  );
}

export default App;
