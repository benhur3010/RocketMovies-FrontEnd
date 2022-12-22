import { Background, Container, Form } from "./styles";
import { AiOutlineFieldNumber } from "react-icons/ai";
import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowLeft,
  FiPhone,
  FiCodepen,
  FiMapPin,
  FiTag
} from "react-icons/fi";
import { HiOutlineIdentification } from "react-icons/hi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../services/api.js";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");
  const [phone, setPhone] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");
  const [complement, setComplement] = useState("");

  const navigate = useNavigate();

  const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

  function handleSignUp() {
    if (
      !name ||
      !email ||
      !password ||
      !register ||
      !phone ||
      !postalcode ||
      !street ||
      !streetNumber ||
      !neighborhood ||
      !city ||
      !uf
    ) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", {
        name,
        email,
        password,
        register,
        phone,
        postalcode,
        street,
        streetNumber,
        neighborhood,
        city,
        uf,
        complement
      })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  useEffect(() => {
    if (postalcode.length === 8) {
      async function getCEP() {
        const cep = await fetch(`https://viacep.com.br/ws/${postalcode}/json/`)
          .then(res => res.json())
          .then(data => data);

        setCity(cep.localidade);
        setNeighborhood(cep.bairro);
        setStreet(cep.logradouro);
        setUF(cep.uf);
      }
      getCEP();
    }
  }, [postalcode]);

  

  function checkCEP() {
    if (postalcode.length !== 8) {
      return alert("CEP Incompleto!");
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          icon={FiUser}
          value={name}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          value={email}
          placeholder="E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          value={password}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          icon={HiOutlineIdentification}
          value={register}
          placeholder="CPF"
          type="text"
          onChange={e => setRegister(e.target.value)}
        />
        <Input
          icon={FiPhone}
          placeholder="Phone"
          value={phone}
          type="phone"
          onChange={e => setPhone(e.target.value)}
        />
        <Input
          icon={FiCodepen}
          placeholder="CEP"
          value={postalcode}
          type="number"
          onChange={e => setPostalCode(e.target.value)}
          onBlur={checkCEP}
        />
        <Input
          icon={FiMapPin}
          value={street}
          placeholder="Rua"
          type="text"
          onChange={e => setStreet(e.target.value)}
        />
        <Input
          icon={AiOutlineFieldNumber}
          value={streetNumber}
          placeholder="Número"
          type="text"
          onChange={e => setStreetNumber(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          value={neighborhood}
          placeholder="Bairro"
          type="text"
          onChange={e => setNeighborhood(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          value={city}
          placeholder="Cidade"
          type="text"
          onChange={e => setCity(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          value={uf}
          placeholder="Estado"
          type="text"
          onChange={e => setUF(e.target.value)}
        />
        <Input
          icon={FiTag}
          value={complement}
          placeholder="Complemento"
          type="text"
          onChange={e => setComplement(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
