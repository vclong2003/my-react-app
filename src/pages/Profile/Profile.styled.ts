import styled from "styled-components";

import { default as BaseAvatar } from "@components/Avatar/Avatar";

export const Container = styled.div`
  margin: var(--s-4) auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 768px;
  background-color: var(--light-gray);
  border-radius: var(--br-lg);
  padding: var(--s-5);
  box-shadow: var(--shadow-lg);
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: var(--s-5);
  color: var(--blue-gray);
`;

export const LeftContainer = styled.div`
  flex: 10;
`;
export const RightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled(BaseAvatar)`
  padding: var(--s-2);
`;

export const LogoutButton = styled.button`
  background-color: var(--blue-gray);
  padding: var(--s-2) var(--s-4);
  color: var(--white);
  border-radius: var(--br-md);
  cursor: pointer;
  margin: var(--s-3) 0;
`;
