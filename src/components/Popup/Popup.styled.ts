import styled from "styled-components";

interface IPopupOverlayProps {
  $show?: boolean;
}

export const PopupOverlay = styled.div<IPopupOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black-opacity);
  z-index: 10;
  display: ${({ $show }) => ($show ? "flex" : "none")};
  flex-direction: row;
  padding-top: var(--s-10);
  justify-content: center;
  align-items: flex-start;
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 var(--s-8);
  background-color: var(--white);
  padding: var(--s-4);
  border-radius: var(--br-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

export const PopupHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: auto;
  cursor: pointer;
  margin-bottom: var(--s-3);
`;

export const PopupBody = styled.div``;
