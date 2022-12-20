import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
// Importando um tema que te permite controlar o design do seu projeto com cores, fontes, tamanhos, espaços, etc...
import { AuthProvider } from "./hooks/auth";

import theme from "./styles/theme";
// Importante o thema da nossa aplicação.

import GlobalStyles from "./styles/global";
// Estilização Global, ou seja, que vai ser utilizada por todas as páginas.

import { Routes } from "./routes";

//ReactDOM é a forma que o React usa para manipular os elementos.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
