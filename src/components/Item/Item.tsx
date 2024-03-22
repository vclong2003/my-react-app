import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { setEdited, updateData } from "../../store/dummySlice";
import * as S from "./Item.styled";

interface IItemProps {
  id: number;
  initialTitle: string;
}

export default function Item({ id, initialTitle }: IItemProps) {
  const { willEdit } = useSelector((state: RootState) => state.dummy);
  const dispatch = useDispatch<AppDispatch>();

  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle, setTitle]);

  useEffect(() => {
    if (title === initialTitle) {
      dispatch(setEdited(false));
      return;
    }
    dispatch(setEdited(true));
  }, [title, initialTitle, dispatch]);

  useEffect(() => {
    if (willEdit && title !== initialTitle) {
      dispatch(updateData({ id, title }));
    }
  }, [willEdit, title, initialTitle, id, dispatch]);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setEditable(!editable);
  };

  return (
    <S.Input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      readOnly={!editable}
      onContextMenu={handleRightClick}
    />
  );
}
