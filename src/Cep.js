import { useState } from "react";
import Buscacep from "./image/Buscacep.png";
import "antd/dist/antd.css";
import { Input, Layout, Col, Row, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

export const Cep = () => {
  const [campoPesquisa, setCampoPesquisa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [endereco, setEndereco] = useState([]);

  const busca = () => {
    if (campoPesquisa === "") {
      setMensagem("Digite um CEP");
    } else {
      fetch(`https://viacep.com.br/ws/${campoPesquisa}/json/`)
        .then((response) => response.json())
        .then((data) => setEndereco(data));

      setCampoPesquisa("");
      setMensagem("");
    }
  };

  return (
    <Layout className="container">
      <Row justify="center" align="middle" className="content">
        <Col xs={20} md={18} lg={16}>
          <div className="image">
            <img src={Buscacep} alt="Logo" />
          </div>
          <Title level={3} className="description">
            Aqui você encontra o CEP de todo o Brasil
          </Title>

          <Search
            placeholder="Digite o CEP"
            allowClear
            enterButton
            size="large"
            value={campoPesquisa}
            onChange={(event) => setCampoPesquisa(event.target.value)}
            onSearch={busca}
          />

          <div className="address">
            <p className="alert">{mensagem}</p>
            <p>{endereco.cep}</p>
            <p>{endereco.logradouro}</p>
            <p>{endereco.complemento}</p>
            <p>{endereco.bairro}</p>
            <p>
              {endereco.localidade} {endereco.uf}
            </p>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
