import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from "react";
import './App.css'
import axios from 'axios'
import InputMask from 'react-input-mask';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// function GuardarInfos(){
//   const [nome, setNome] = useState("");
//   const [profissao, setProfissao] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [ip, setIp] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let infosObj = { 'nome': nome, 'profissao': profissao, 'telefone': telefone, 'IP': ip }

//     localStorage.setItem('infosUser', JSON.stringify(infosObj));

//     let recuperaInfos = localStorage.getItem('infosUser');
//     console.log(recuperaInfos);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="" id='labelNome'>Nome
//           <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
//       </label>
//       <label htmlFor="" id='labelProfissao'>Profissão
//           <input type="text" value={profissao} onChange={(e) => setProfissao(e.target.value)} />
//       </label>
//     </form>
//   )

// }
// ReactDOM.render(<GuardarInfos />, document.getElementById('root'));
 

function guardarInfos() {
  let nome = document.getElementById('campoNome').value;
  let profissao = document.getElementById('campoProfissao').value;
  let telefone = document.getElementById('campoTelefone').value;
  let ip = document.getElementById('ip_address').value;

  let infosObj = { 'nome': nome, 'profissao': profissao, 'telefone': telefone, 'IP': ip }
  
  localStorage.setItem('infosUser', JSON.stringify(infosObj));

  let recuperaInfos = localStorage.getItem('infosUser');
console.log(recuperaInfos);
}
guardarInfos();

const url = 'https://ip-fast.com/api/ip/'

function getIp(){
  axios.get(url).then( res => {
    const data = res.data
    document.getElementById('ip_address').value = data;
    console.log(data)
  }).catch(error => console.error(error))
}
getIp();



reportWebVitals();
