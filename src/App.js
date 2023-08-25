import React from "react";
import  {Routes, Route} from 'react-router-dom'
import './styles/style.css';
import HomePage from "./pages/HomePage";
import ThemealPage from "./pages/ThemealPage";

function App() {
  return (
        <div className="App">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/meal/:id' element={<ThemealPage />} />
            </Routes>
        </div>
  );
}

export default App;
