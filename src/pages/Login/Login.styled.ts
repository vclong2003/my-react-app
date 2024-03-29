import styled from "styled-components";
import { DEVICES } from "@config/responsiveBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  justify-content: center;

  @media ${DEVICES.DESKTOP} {
    justify-content: flex-start;
  }
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: auto;
  display: none;

  @media ${DEVICES.DESKTOP} {
    display: unset;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--s-10) var(--s-10);
`;

export const Title = styled.h1`
  font-weight: var(--fw-normal);
  font-size: var(--fs-5xl);
  margin: var(--s-4) 0;
`;

export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
`;

export const RegisterLink = styled(Link)`
  font-size: var(--fs-2xl);
  color: var(--gold);
  text-decoration: none;
  margin: var(--s-2) 0;
`;
