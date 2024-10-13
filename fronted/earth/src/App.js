import soccer from './soccer.webp';
import './App.css';
import Component from './Component.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={soccer} className="App-soccer" alt="soccer" />
        <p>
          Bienvenido
        </p>
        <p>Elaborado por David Gómez Rodriguez</p>
        <p>Fecha: 04/10/2024</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component/>
      </header>
    </div>
  );
}

export default App;
