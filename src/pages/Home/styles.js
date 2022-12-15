import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem 12rem auto;
  grid-template-areas:
    "header"
    "title"
    "movieList";
`;

export const Title = styled.div`
  grid-area: title;
  padding: 0 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h1 {
    flex: 1;
    font-size: 3.2rem;
  }
  > a {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    height: 5.6rem;
    width: 25rem;
    border: 0;
    padding: 0 3.2rem;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const MovieList = styled.div`
  grid-area: movieList;
  margin: 0 12rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
