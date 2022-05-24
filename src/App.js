
import './App.css';
import Cuerpo from "./Cuerpo"
import Arriba from "./Arriba"
import Abajo from "./Abajo"
import Cabeza from "./Cabeza"

function App() {
  return(
    <>
    <head>
    <Cabeza/>
    </head>
    <header>
    <Arriba/>
    </header>
  <body>
    <Cuerpo/>
    <br/>
    <footer>
    <Abajo/>
    </footer>
</body>
    </>
  );
}

export default App;
