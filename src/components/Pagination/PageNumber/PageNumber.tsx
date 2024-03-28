import * as S from "./PageNumber.styled";

interface IPageNumberProps {
  page: number;
  isActive: boolean;
  onClick: (page: number) => void;
}

export default function PageNumber({
  page,
  isActive,
  onClick,
}: IPageNumberProps) {
  return (
    <S.PageNumber $isActive={isActive} onClick={() => onClick(page)}>
      {page}
    </S.PageNumber>
  );
}
