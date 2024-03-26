import Popup from "../../../components/Popup/Popup";
import ProductForm from "../ProductForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setSelectedProduct } from "../../../store/product/productSlice";
import {
  IProduct,
  IUpdateProductPayload,
} from "../../../interfaces/product.interface";
import { updateProduct } from "../../../store/product/productActions";

export default function UpdateProductPopup() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector(
    (state: RootState) => state.productSlice
  );

  const onCLose = () => dispatch(setSelectedProduct(null));

  const onUpdate = (values: Partial<IProduct>) => {
    dispatch(updateProduct(values as IUpdateProductPayload));
  };

  return (
    <Popup show={selectedProduct !== null} onClose={onCLose}>
      <ProductForm product={selectedProduct!} onSubmit={onUpdate} />
    </Popup>
  );
}
