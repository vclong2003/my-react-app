import { useDispatch } from "react-redux";
import * as S from "./Home.styled";
import Table from "./Table/Table";
import { AppDispatch } from "../../store";
import { useEffect } from "react";
import { getAllProducts } from "../../store/product/productActions";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <S.Home>
      <S.Container>
        <Table />
      </S.Container>
    </S.Home>
  );
}
