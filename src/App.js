import './App.css';
import cowalaLogo from './images/logoCowala.svg';
import './index.js';
import { TelefoneMask } from 'telefone-mask-ng2';


function App() {

  

    return (
    <div className="App">
      <header className="App-header">
        <div className="top">
              <img src={cowalaLogo} alt="cowalaLogo" />
        </div>

       

        <div className="infos"> 
          <form href="App.js" >
                    <div>
                        <label id="labelNome"> Nome </label>
                        <input type="text" id="campoNome"  />
                    </div>
                
                    <div>
                        <label id="labelProfissao"> Profissao </label>
                        <input type="text" id="campoProfissao" />
                    </div>
                        
                    <div>
                        <label  id="labelTelefone"> Celular </label>
                        <input type="number" id="campoTelefone"  />
                    </div>
                   
                    <div>
                        <label id="myIP"> IP </label>
                        <input type="text" id="ip_address" />
                        <div >
                            <button id="encontrarIP"  >ENCONTRAR IP</button>
                        </div>
                        
                    </div>
                       
                    <div className="salvar" > 
                        <button type="submit" id="salvar">Salvar</button>
                    </div>
                    <div className="limpar">
                        <button type="reset" id="limpar">Limpar</button>
                    </div>
          </form>

        </div>
        
      </header>
    </div>
  );
}

export default App;
