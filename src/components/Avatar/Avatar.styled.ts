import styled from "styled-components";

export const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const AvatarUpdateIcon = styled.img`
  display: none;
  width: 30%;
  height: auto;
  position: absolute;
`;

interface IAvatarProps {
  $isUpdatable?: boolean;
}

export const Avatar = styled.div<IAvatarProps>`
  aspect-ratio: 1/1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $isUpdatable }) =>
    $isUpdatable &&
    `
  &:hover {
    cursor: pointer;
    ${AvatarUpdateIcon} {
      display: block;
    }
    ${AvatarImage} {
      filter: brightness(0.5);
    }
  }`}
`;
