import * as S from "./Avatar.styled";

import DummyAvatar from "../../assets/images/avatar_placeholder.png";

interface IAvatarProps extends JSX.IntrinsicAttributes {
  imageUrl?: string | null;
}

export default function Avatar({ imageUrl, ...props }: IAvatarProps) {
  return (
    <S.Avatar>
      <S.AvatarImage {...props} src={imageUrl || DummyAvatar} alt="Avatar" />
    </S.Avatar>
  );
}
