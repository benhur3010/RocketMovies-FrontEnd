import { FiSearch } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [search, setSearch] = useState("");

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        type="text"
        onChange={e => setSearch(e.target.value)}
      />
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>
        <img src={avatarURL} alt="Foto do usuário"></img>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
