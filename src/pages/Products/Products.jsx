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
import toast, { Toaster } from "react-hot-toast";

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
  const deleteHandler = async (id, itemTitle) => {
    const isDelete = await deleteProduct(id);
    if (isDelete) {
      setProducts((prev) => prev.filter((product) => product._id !== id));
      toast.success(`محصول ${itemTitle} با موفقیت حذف شد.`);
    } else {
      toast.error(`محصول ${itemTitle} با موفقیت حذف نشد.`);
    }
  };
  return (
    <section>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
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
