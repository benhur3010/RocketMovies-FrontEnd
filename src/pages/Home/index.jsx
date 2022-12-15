import { Container, Title, MovieList } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Home() {
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
        <Movie
          data={{
            title: "Van Helsing - O Caçador de Monstros",
            score: 10,
            summary:
              "O Dr. Van Helsing (Hugh Jackman) é um dos principais especialistas em monstros de sua época, no século XIX. Contratado pela Igreja Católica, ele parte para o leste europeu com a missão de eliminar o mais perigoso dos vampiros: o conde Drácula (Richard Roxburgh). Ao seu lado ele terá a ajuda de Anna Valerious (Kate Beckinsale), tendo ainda que enfrentar monstros como o lobisomem (Will Kemp) e Frankenstein (Shuler Hensley).",
            tags: [
              { id: 1, name: "Aventura" },
              { id: 2, name: "Ação" },
              { id: 3, name: "Fantasia" }
            ]
          }}
        />
        <Movie
          data={{
            title: "Transformers - O Filme",
            score: 10,
            summary:
              "Os Transformers — alienígenas gigantes que vivem na Terra camuflados sob a forma de carros, aviões e aparelhos eletrônicos —, batalham por uma fonte de energia escondida em nosso planeta: são os cruéis Decepticons, determinados a dominar o Universo, contra os pacíficos Autobots. Enquanto isso, os adolescentes Sam e Mikaela vivem tranquilamente sua vida sem saber que a fonte tão cobiçada pelos alienígenas está com eles.",
            tags: [
              { id: 1, name: "Aventura" },
              { id: 2, name: "Ação" },
              { id: 3, name: "Ficção Científica" }
            ]
          }}
        />
        <Movie
          data={{
            title: "Avengers - Endgame",
            score: 10,
            summary:
              "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
            tags: [
              { id: 1, name: "Aventura" },
              { id: 2, name: "Ação" },
              { id: 3, name: "Fantasia" }
            ]
          }}
        />
      </MovieList>
    </Container>
  );
}
