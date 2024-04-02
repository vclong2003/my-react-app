import styled from "styled-components";

export const AvatarImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

export const AvatarUpdateIcon = styled.img`
  display: none;
  width: 25%;
  height: auto;
  position: absolute;
`;

interface IAvatarProps {
  $isUpdatable?: boolean;
}

export const Avatar = styled.div<IAvatarProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $isUpdatable }) =>
    $isUpdatable &&
    ` &:hover {
      cursor: pointer;
      ${AvatarUpdateIcon} {
        display: block;
      }
      ${AvatarImage} {
        filter: brightness(0.5);
      }
    }`}
`;
