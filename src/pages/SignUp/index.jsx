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

import { Link } from "react-router-dom";
import React, { useState } from "react";

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
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    fetch(`${api.baseURL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(response => {
        if (response.ok) {
          return alert("Usuário criado com sucesso!");
        }
        return response.text().then(text => {
          throw new Error(text);
        });
      })
      .catch(e => {
        if (e) {
          const errorObject = JSON.parse(e.message);
          alert(errorObject.message);
        } else {
          alert("Um erro ocorreu!");
        }
      });
  }

  const checkCEP = e => {
    // Tudo que for de 0 a 9 ele vai encontrar e substituir por vazio.
    const cep = e.target.value.replace(/\D/g, "");

    // Se existir o value ou se for diferente de 8 a função irá retornar.
    if (cep?.length !== 8) {
      return;
    }

    // Para capturar os dados através de um request, transformar em json e jogar no console o endereço referente ao cep.
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          icon={HiOutlineIdentification}
          placeholder="CPF"
          type="number"
          onChange={e => setRegister(e.target.value)}
        />
        <Input
          icon={FiPhone}
          placeholder="Phone"
          type="phone"
          onChange={e => setPhone(e.target.value)}
        />
        <Input
          icon={FiCodepen}
          placeholder="CEP"
          type="text"
          onBlur={e => {
            setPostalCode(e.target.value);
          }}
        />
        <Input
          icon={FiMapPin}
          placeholder="Rua"
          type="text"
          onChange={e => setStreet(e.target.value)}
        />
        <Input
          icon={AiOutlineFieldNumber}
          placeholder="Número"
          type="text"
          onChange={e => setStreetNumber(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          placeholder="Bairro"
          type="text"
          onChange={e => setNeighborhood(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          placeholder="Cidade"
          type="text"
          onChange={e => setCity(e.target.value)}
        />
        <Input
          icon={FiMapPin}
          placeholder="Estado"
          type="text"
          onChange={e => setState(e.target.value)}
        />
        <Input
          icon={FiTag}
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
