import { Container } from "./styles";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Picture() {

  const { user } = useAuth();

  const avatarURL = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceholder;

  return (
    <Container>
      <img src={avatarURL} alt="Foto do usuário" />
    </Container>
  );
}
