import { useEffect, useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import HeaderButtons from "./components/HeaderButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import ProductGridView from "../../features/ProductGridView/ProductGridView";
import useResize from "../../hooks/useResize";
import { deleteProduct } from "../../api/products";

const Products = () => {
  useTitle("صفحه محصولات");
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE");
  const windowSize = useResize();
  useEffect(() => {
    if (windowSize.width <= 640) {
      setLayoutType("GRID");
    }
  }, [windowSize, setLayoutType]);
  const {
    data: products,
    setData: setProducts,
    // error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  const deleteHandler = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product._id !== id));
  };
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
          setProducts={setProducts}
          paginatedProducts={paginatedProducts}
          setPaginatedProducts={setPaginatedProducts}
          loading={productsLoading}
          deleteHandler={deleteHandler}
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
