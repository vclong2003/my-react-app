import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: var(--fw-normal);
`;

export const Subtitle = styled.h3`
  font-weight: var(--fw-normal);
`;
