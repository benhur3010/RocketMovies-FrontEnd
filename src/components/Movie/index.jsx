import { Container, Info } from "./styles";
import { useNavigate } from "react-router-dom";

import { Tag } from "../Tag";

export function Movie({ data, ...rest }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/preview/${data.id}`)} {...rest}>
      <Info>
        <h1>{data.title}</h1>
        <span>{data.rating}</span>
      </Info>
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
