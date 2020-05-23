import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Translator from "./Components/Translator/Translator";
import History from "./Components/History/History";

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
          <Translator/>
          <History/>
      </main>
    </div>
  );
}

export default App;
