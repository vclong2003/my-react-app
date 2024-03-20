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

export const FormContainer = styled.div``;
