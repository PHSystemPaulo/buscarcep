import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import apiBuscaCEP from './ServiceAPI/apiBuscaCEP';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleBusca(){
if (input === ''){
  alert("Preencha o Número do CEP !")
  return;
}
// Exemplo de URL da API
//const apiUrl = "https://viacep.com.br/ws/";

try{
const response = await apiBuscaCEP.get (`${input}/json`);
setCep(response.data);
setInput("");

}catch{

alert("Erro na busca pelo CEP !");
setInput(""); 
}
  }

  return (
    
     <div className="container">
    
      <h2 className="title" >PHSystem BuscaCEP</h2>

      <div className="containerInput">
<input 
type="text"  
placeholder="Informe o CEP"
value={input}
onChange={(e) => setInput(e.target.value)}
    />

    <button className="buttonBusca" onClick={handleBusca}>
<FiSearch size={30} color="#F00"/>
    </button>
    </div>

{Object.keys(cep).length>0 && (
  <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>Endereço: {cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>Bairro: {cep.bairro}</span>
      <span>Cidade: {cep.localidade}</span>
      <span>Uf: {cep.uf}</span>
    </main>
)}
    
    </div>
  );
}

export default App;
