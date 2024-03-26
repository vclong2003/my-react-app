import { useFormikContext } from "formik";
import { useEffect } from "react";
import { IProduct } from "../../../interfaces/product.interface";

interface IProductFormUpdaterProps {
  product?: IProduct;
}

export default function ProductFormUpdater({
  product,
}: IProductFormUpdaterProps) {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (product) {
      setFieldValue("order", product.order);
      setFieldValue("client", product.client);
      setFieldValue("status", product.status);
      setFieldValue("total", product.total);
      setFieldValue("currency", product.currency);
      setFieldValue("fundingMethod", product.fundingMethod);
    }
  }, [product, setFieldValue]);

  return <></>;
}
