import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Background, Container, Form } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
