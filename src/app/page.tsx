'use client';

import Landing from './landing';
import NavBar from './navbar';
import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, rgb(247, 82, 250), rgb(56, 244, 251));
`;

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Landing />
    </Main>
  )
}
