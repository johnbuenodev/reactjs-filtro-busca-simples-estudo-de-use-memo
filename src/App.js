import { useEffect, useMemo, useState } from 'react';
import './App.css';

const dispositivos = [
  'Iphone 10',
  'Iphone 13',
  'iphone 14',
  'iphone 11',
  'Xiaomi mi 11',
  'xiaomi black shark 4',
  'Xiaomi Mi 11 Ultra',
  'smartphones moto g20',
  'smartphones moto g21',
  'smartphones moto g22'
]


function App() {
 
  const [busca,setBusca] = useState('');

  //Em um contexto que tenha varios dados não é bom passar um lowerCase para fazer 
  //cada map filter deixando o valor de pesquisa em caixa baixa porq tem um custo
  //const filtered =  busca.length >= 2 ? dispositivos.filter(
  //  (item) => item.toLowerCase().includes(busca.toLowerCase())) : dispositivos;

  //Esse seria o melhor modo:
  //Criado uma constante busca em lowerCase e substituir o busca.toLowerCase
  
  //Declarado o valor no useMemo, somente quando o valor for alterado 
  //Vai executar o processo, e somente o processo declarado não atualizando
  //outras funções ou variaveis com exemplo uso do Gancho useEffect

  const filtered = useMemo(() => { 
    const buscaDispositivoLowerCase = busca.toLowerCase();
    //if(buscaDispositivoLowerCase.length >= 3) {
      return dispositivos.filter(
        (item) => item.toLowerCase().includes(buscaDispositivoLowerCase));
    //} else {
      //return dispositivos;
    //}
  },[busca]);

  return (
    <div className="App">
      <div>- Exemplo de Busca -</div>
      <div>Dispositivos conectados:</div>
      <div>
        <input type="text" value={busca} onChange={(event) => setBusca(event.target.value) }/>
      </div>
      <ul className="item-decoration">
        {
          filtered.map((dispositivo) => 
            <li key={dispositivo}>{ dispositivo }</li>

          )
        }
      </ul>
    </div>
  );
}

export default App;
