import { useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import HeaderButtons from "./components/HeaderButton";

const Products = () => {
  useTitle("صفحه محصولات");
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const {
    data: products,
    setData: setProducts,
    // error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  return (
    <section>
      <SectionTitle title={"محصولات"} buttons={<HeaderButtons />} />
      <ProductTableView
        products={products}
        setProducts={setProducts}
        paginatedProducts={paginatedProducts}
        setPaginatedProducts={setPaginatedProducts}
        loading={productsLoading}
      />
    </section>
  );
};

export default Products;
