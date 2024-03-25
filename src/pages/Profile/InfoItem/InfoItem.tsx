import * as S from "./InfoItem.styled";

interface IInfoItemProps {
  label: string;
  value: string;
}

export default function InfoItem({ label, value }: IInfoItemProps) {
  return (
    <S.InfoItem>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.InfoItem>
  );
}
