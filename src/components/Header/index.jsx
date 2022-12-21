import { FiSearch } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" type="text" />
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarURL} alt="Foto do usuário"></img>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
