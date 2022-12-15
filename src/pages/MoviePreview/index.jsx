import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Info } from "../../components/Info";
import { Picture } from "../../components/Picture";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, Content, Title, Stamps } from "./styles";

import { Link } from "react-router-dom";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/">
            <FiArrowLeft size={20} />
            Voltar
          </Link>
          <Title>
            <h1>Van Helsing - O Caçador de Monstros</h1>
            <span>10</span>
          </Title>
          <Stamps>
            <Info icon={Picture}>por Ben-Hur Bueno</Info>
            <Info icon={FiClock}>14/11/2022 às 18:05</Info>
          </Stamps>
          <section>
            <Tag name="Aventura" />
            <Tag name="Ação" />
            <Tag name="Fantasia" />
          </section>
          <p>
            O Dr. Van Helsing (Hugh Jackman) é um dos principais especialistas
            em monstros de sua época, no século XIX. Contratado pela Igreja
            Católica, ele parte para o leste europeu com a missão de eliminar o
            mais perigoso dos vampiros: o conde Drácula (Richard Roxburgh). Ao
            seu lado ele terá a ajuda de Anna Valerious (Kate Beckinsale), tendo
            ainda que enfrentar monstros como o lobisomem (Will Kemp) e
            Frankenstein (Shuler Hensley).
          </p>
        </Content>
      </main>
    </Container>
  );
}
