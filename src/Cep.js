import { useState } from "react";

export const Cep = () => {

    const [campoPesquisa, setCampoPesquisa] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [endereco, setEndereco] = useState([]);

    function pesquisar(){
        if(campoPesquisa === ''){
            setMensagem('Digite algo')
        }else{

            fetch( `https://viacep.com.br/ws/${campoPesquisa}/json/`) 
            .then((response) => response.json())
            .then((data) => setEndereco(data));

            setCampoPesquisa('')
        }
    }

    return(
        <div>
            <h1>Cep</h1>
            <input
                type="text"
                value={campoPesquisa}
                placeholder='Digite um cep'
                onChange={(event) => setCampoPesquisa(event.target.value)}
            />
            <button onClick={pesquisar}>Pesquisar</button>
            <div>
                <p>{mensagem}</p><br/>
                <p>{endereco.cep}</p>
                <p>{endereco.logradouro}</p>
                <p>{endereco.complemento}</p>
                <p>{endereco.bairro}</p>
                <p>{endereco.localidade} - {endereco.uf}</p>
            </div>
        </div>

    );
}