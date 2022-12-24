import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Info } from "../../components/Info";
import { Picture } from "../../components/Picture";
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, Content, Title, Stamps } from "./styles";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function MoviePreview() {
  const [preview, setPreview] = useState({});

  const params = useParams();

  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/notes/${params.id}`);

      setPreview(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link onClick={handleBack}>
            <FiArrowLeft size={20} />
            Voltar
          </Link>
          <Title>
            <h1>{preview.title}</h1>
            <span>{preview.rating}</span>
          </Title>
          <Stamps>
            <Info icon={Picture}>{user.name}</Info>
            <Info icon={FiClock}>
              {String(preview.updated_at).split(" ")[1]}
            </Info>
          </Stamps>
          <section>{preview.tag}</section>
          <p>{preview.description}</p>
      <Button title="Excluir" onClick={handleRemove} />
        </Content>
      </main>
    </Container>
  );
}
