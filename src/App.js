import logo from './logo.svg';
import './App.css';
import Frase03 from './Components/Frase';
import Lista from './Components/lista';
import { useEffect } from 'react';

function App() {
  const name="Jogar";

  const url="https://media.istockphoto.com/id/493120080/pt/vetorial/vector-ludo-tabuleiro-de-jogo.jpg?s=612x612&w=0&k=20&c=AIdjXoGO8h1wGrqDldJK3s30o5iN0guFU0wI2OIebAk="
 
useEffect(()=>{
  document.title='Ludo';
},[])


  return (
    <div className="App">
     
     <div className="App-header">
     <h1>Ludo!!!</h1>
     </div>
     <div className="AppCorpo">
     <br></br><h1>Como {name}:</h1>
     <h2 >Objetivo:</h2>
     <h5>É só matar quem estiver no caminho e chegar no final,<br></br>não esqueça de deixar um guarda matador, simples</h5>
     <h2>Quantidade de peças: 6457</h2><h3><br></br></h3>
     
     <h2>Frases<br></br> motivacionais 2<br></br> para recitar durante o jogo:</h2>
     <Frase03/>
     <img src={url} alt="Minha imagem"height="612" width="612"/>
     <br/>
     <Lista/>
     </div>
    </div>
  );
}

export default App;
