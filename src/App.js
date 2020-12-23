import logo from './logo.jpg';
import './App.css';
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
        <SearchPage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/> <br/>

        <a className="App-link"
          target="_blank"
          rel="noopener noreferrer">
          Game Of Throne Battles
        </a>
      </header>
    </div>
  );
}

export default App;
