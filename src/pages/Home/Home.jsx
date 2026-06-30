import useTitle from "../../hooks/useTitle";
import SectionTitle from "../../components/Common/SectionTitle";

const Home = () => {
  useTitle("داشبورد مدیریت");
  return (
    <section>
      <SectionTitle title={"داشبورد"} />
    </section>
  );
};

export default Home;
