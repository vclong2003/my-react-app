import styled from "styled-components";
import { DEVICES } from "@config/responsiveBreakpoints";

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

export const Title = styled.h1`
  font-weight: var(--fw-normal);
  font-size: var(--fs-5xl);
  margin: var(--s-4) 0;
`;

export const FormContainer = styled.div`
  padding: var(--s-8) var(--s-20);
  flex: 1;
  overflow-y: auto;
`;
export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
`;
