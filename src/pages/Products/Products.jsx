import { useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import HeaderButtons from "./components/HeaderButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import ProductGridView from "../../features/ProductGridView/ProductGridView";

const Products = () => {
  useTitle("صفحه محصولات");
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE");
  const {
    data: products,
    // setData: setProducts,
    // error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  return (
    <section>
      <SectionTitle
        title={"محصولات"}
        buttons={
          <HeaderButtons
            layoutType={layoutType}
            setLayoutType={setLayoutType}
          />
        }
      />
      {layoutType === "TABLE" ? (
        <ProductTableView
          products={products}
          paginatedProducts={paginatedProducts}
          setPaginatedProducts={setPaginatedProducts}
          loading={productsLoading}
        />
      ) : (
        <ProductGridView
          products={products}
          paginatedProducts={paginatedProducts}
          setPaginatedProducts={setPaginatedProducts}
          loading={productsLoading}
        />
      )}
    </section>
  );
};

export default Products;
