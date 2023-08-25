import './styles/style.css';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ThemealPage from "./components/ThemealPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ThemealPage />
    </div>
  );
}

export default App;
