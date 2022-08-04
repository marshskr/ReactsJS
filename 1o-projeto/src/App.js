import './App.css';
import HellWorld from './components/HelloWorld';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const amor = 'Naii Perfeita'
  const url =   'https://via.placeholder.com/150'
  return (
    <div className="App">
      <section>
        <h1>Alterando JSX</h1>
      </section>
      <p>Olá {amor}</p>
      <img src={url} alt="minha imagem"/>
     <section><HellWorld/></section>
     <Frase/>
     <SayMyName nome="Marsh" />
     <section>
       <Pessoa nome="Marsh" idade="20" profissao="desempregado fudido"/>
     </section>
    </div>
  );
}

export default App;
