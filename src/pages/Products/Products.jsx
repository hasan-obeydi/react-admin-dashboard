import SectionTitle from "../../components/Common/SectionTitle";
import ProductTableView from "../../features/ProductTableView/ProductTableView";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";

const Products = () => {
  useTitle("صفحه محصولات");
  const {
    data: products,
    setData: setProducts,
    // error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  return (
    <section>
      <SectionTitle title={"محصولات"} />
      <ProductTableView
        products={products}
        setProducts={setProducts}
        loading={productsLoading}
      />
    </section>
  );
};

export default Products;
