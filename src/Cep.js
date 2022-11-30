import { useState } from "react";
import "antd/dist/antd.css";
import { Input, Layout, Col, Row, Typography, Form } from "antd";

const { Title } = Typography;
const { Search } = Input;
const { Header, Content, Footer } = Layout;

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
      <Content>
        <Row justify="center" align="middle" className="content">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Title level={2}>Busca CEP</Title>
            
              <Search
                value={campoPesquisa}
                placeholder="Digite o CEP"
                onChange={(event) => setCampoPesquisa(event.target.value)}
                onSearch={busca}
                enterButton
              />

            <div className="endereco">
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
      </Content>
      <Footer id="footer">Busca CEP ©2022 by Bruna Oliveira</Footer>
    </Layout>
  );
};
