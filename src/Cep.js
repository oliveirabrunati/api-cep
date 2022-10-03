import { useState } from "react";


export const Cep = () => {

    const [campoPesquisa, setCampoPesquisa] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [cep, setCep] = useState([]);

    fetch('https://viacep.com.br/ws/01001000/json/',{
        method:'GET'
    })
        .then((response) => response.json())
        .then((data) => setCep(data));

    function pesquisar(){
        if(campoPesquisa === ''){
            setMensagem('Digite algo')
        }else{
            setMensagem(campoPesquisa)
            setCampoPesquisa('')
        }

    }

    return(
        <div>
            <h1>Cep</h1>
            <input
                type="text"
                value={campoPesquisa}
                placeholder='Digite alguma coisa'
                onChange={(event) => setCampoPesquisa(event.target.value)}
            />
            <button onClick={pesquisar}>Pesquisar</button>
            <span>{mensagem}</span><br/>
            <div>
                <p>{cep.cep}</p>
                <p>{cep.logradouro}</p>
                <p>{cep.complemento}</p>
                <p>{cep.bairro}</p>
                <p>{cep.localidade}</p>
                <p>{cep.uf}</p>
            </div>
        </div>

    );
}