import * as S from "./Pagination.styled";

import PageNumber from "./PageNumber/PageNumber";

interface IPaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pages,
  currentPage,
  onPageChange,
}: IPaginationProps) {
  return (
    <S.Pagination>
      {Array.from({ length: pages }, (_, index) => {
        const page = index + 1;
        return (
          <PageNumber
            key={page}
            page={page}
            onClick={() => onPageChange(page)}
            isActive={page === currentPage}
          />
        );
      })}
    </S.Pagination>
  );
}
