import SectionTitle from "../../components/Common/SectionTitle";
import useTitle from "../../hooks/useTitle";

const Users = () => {
  useTitle("صفحه کاربران");
  return (
    <section>
      <SectionTitle title={"لیست کاربران"} />
    </section>
  );
};

export default Users;
