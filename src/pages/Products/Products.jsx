import SectionTitle from "../../components/Common/SectionTitle";
import useTitle from "../../hooks/useTitle";

const Products = () => {
  useTitle("صفحه محصولات");
  return (
    <section>
      <SectionTitle title={'لیست محصولات'} />
    </section>
  );
};

export default Products;
