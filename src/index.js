import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'
import axios from 'axios'
import InputMask from 'react-input-mask';


//export default guardarInfos();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

const url = 'https://ip-fast.com/api/ip/'

function getIp(){
  axios.get(url).then( res => {
    const data = res.data
    document.getElementById('ip_address').value = data;
    console.log(data)
  }).catch(error => console.error(error))
}
getIp();

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




reportWebVitals();