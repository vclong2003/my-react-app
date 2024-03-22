import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { reset, setWillEdit } from "../../store/dummySlice";
import Item from "../Item/Item";
import { useEffect } from "react";
import * as S from "./MainPage.styled";

export default function MainPage() {
  const { data, edited } = useSelector((state: RootState) => state.dummy);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (edited) {
      dispatch(setWillEdit(false));
    }
  }, [edited, dispatch]);

  const handleReset = () => {
    dispatch(reset());
  };

  const handleConfirm = () => {
    dispatch(setWillEdit(true));
  };

  return (
    <S.Container>
      <S.Button onClick={handleReset}>Reset</S.Button>
      <S.Button onClick={handleConfirm} disabled={!edited}>
        Confirm
      </S.Button>
      <S.ItemList>
        {data.map((item) => (
          <Item key={item.id} id={item.id} initialTitle={item.title} />
        ))}
      </S.ItemList>
    </S.Container>
  );
}
