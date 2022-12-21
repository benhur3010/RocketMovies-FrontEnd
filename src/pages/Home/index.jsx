import { Container, Title, MovieList } from "./styles";

import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get("/notes");
      setMovies(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Header />
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
