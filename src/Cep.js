import { useState } from "react";
import "antd/dist/antd.css";
import { Input, Typography} from 'antd';



export const Cep = () => {

    const [campoPesquisa, setCampoPesquisa] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [endereco, setEndereco] = useState([]);


    const {Title} = Typography;
    const {Search} = Input;
    
    const busca = () => {
        if(campoPesquisa === ''){
            setMensagem('Digite um CEP')
        }else{

            fetch( `https://viacep.com.br/ws/${campoPesquisa}/json/`) 
            .then((response) => response.json())
            .then((data) => setEndereco(data));

            setCampoPesquisa('')
            setMensagem('')
        }
    }

    return(
        <div className="container">

            <Title>Buscar Cep</Title>

            <Search 
                value={campoPesquisa}
                placeholder="Digite o CEP"
                onChange={(event) => setCampoPesquisa(event.target.value)}
                onSearch={busca}
                enterButton 
            />

            <div className="endereco">
                <p>{mensagem}</p><br/>
                <p>{endereco.cep}</p>
                <p>{endereco.logradouro}</p>
                <p>{endereco.complemento}</p>
                <p>{endereco.bairro}</p>
                <p>{endereco.localidade} {endereco.uf}</p>
            </div>
        </div>

    );
}