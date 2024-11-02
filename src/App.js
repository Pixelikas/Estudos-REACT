import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const nome = 'Abgail'

  return (
    <div className="App">
        
        <HelloWorld />
        <Frase />
        <SayMyName nome = 'Astrogildo'/>
        <SayMyName nome = {nome}/>
        <Pessoa foto = 'https://via.placeholder.com/150' nome ='Ursula' idade = '28' profissao = 'Programadora'/>

    </div>
  );
}

export default App;
