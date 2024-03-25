import * as S from "./Avatar.styled";

import DummyAvatar from "../../assets/images/avatar_placeholder.png";

interface IAvatarProps {
  imageUrl: string | null;
}

export default function Avatar({ imageUrl }: IAvatarProps) {
  return (
    <S.Avatar>
      <S.AvatarImage src={imageUrl || DummyAvatar} alt="Avatar" />
    </S.Avatar>
  );
}
