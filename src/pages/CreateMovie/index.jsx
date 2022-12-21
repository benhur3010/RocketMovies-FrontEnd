import { Container, Form, TextArea, TagArea } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";

import { FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function CreateMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewMovie(e) {
    if (!title) {
      return alert("Digite o título da nota");
    }
    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Novo filme</h1>
          <section>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 10)"
              onChange={e => setRating(e.target.value)}
            />
          </section>
          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <h3>Marcadores</h3>
          <TagArea>
            {tags.map((tag, index) => (
              <NewTag
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <NewTag
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </TagArea>
          <section>
            <button type="button" onClick={handleNewMovie}>
              Salvar Alterações
            </button>
          </section>
        </Form>
      </main>
    </Container>
  );
}
