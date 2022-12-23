import { Container, Title, MovieList } from "./styles";

import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/notes");
      setMovies(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header onChange={setSearch}/>
      <Title>
        <h1>Meus filmes</h1>
        <Link to="/new">
          <FiPlus size={20} />
          Adicionar filme
        </Link>
      </Title>
      <MovieList>
        {movies.map(item => (
          <Movie key={item.id} data={item} />
        ))}
      </MovieList>
    </Container>
  );
}
