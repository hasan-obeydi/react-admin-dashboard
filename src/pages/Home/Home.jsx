import useTitle from "../../hooks/useTitle";
import SectionTitle from "../../components/Common/SectionTitle";
import Summaries from "../../features/Summaries/Summaries";
import useFetch from "../../hooks/useFetch";
import DataChart from "../../features/DataChart/DataChart";

const Home = () => {
  useTitle("داشبورد مدیریت");
  const {
    data: products,
    setData: setProducts,
    error: productsError,
    loading: productsLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/products");
  const {
    data: users,
    setData: setUsers,
    error: usersError,
    loading: usersLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/users");
  return (
    <section>
      <SectionTitle title={"داشبورد"} />
      <Summaries productsLength={products.length} usersLength={users.length} />
      <DataChart title={"نمودار داده"} />
    </section>
  );
};

export default Home;
