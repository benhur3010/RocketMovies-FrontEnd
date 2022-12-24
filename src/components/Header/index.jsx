import { FiSearch } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header({ handleChange, search }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [isHomePage, setIsHomePage] = useState(true);

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  useEffect(() => {
    function whereIsPage() {
      if (window.location.pathname == "/") {
        setIsHomePage(true);
      } else {
        setIsHomePage(false);
      }
    }
    whereIsPage();
  }, []);

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        type="text"
        value={search}
        onChange={e => handleChange(e)}
        disabled={isHomePage ? false : true}
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
