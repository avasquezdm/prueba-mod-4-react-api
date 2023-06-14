import './App.css';
import MiApi from "./components/MiApi/MiApi"

function App() {
  

  return (
    <div className="App">
      <header>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" alt="Bandera de Chile"/></div>
      <div>
      <h1>Feriados Chile</h1>
      <p>Válidos en todo el territorio nacional, del año en curso</p>
      </div>
      </header>
      <MiApi></MiApi>
      <footer>
        <p>Fuente: <a href="https://www.victorsanmartin.com/" target='_blank' rel="noreferrer">https://www.victorsanmartin.com/</a></p>
      <p>Para comentarios y consultas, <a href="mailto:a.vasquezdm@gmail.com">escríbeme</a>.</p>
      </footer>
    </div>
  );
}

export default App;
