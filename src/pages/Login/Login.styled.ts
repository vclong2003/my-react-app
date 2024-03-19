import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

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

export const Subtitle = styled.h3`
  font-weight: var(--fw-normal);
  font-size: var(--fs-xl);
  margin: var(--s-4) 0;
`;

export const Error = styled.p`
  color: var(--red);
  font-size: var(--fs-md);
  margin: var(--s-4) 0;
`;
