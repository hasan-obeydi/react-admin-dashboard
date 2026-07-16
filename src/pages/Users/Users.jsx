import { useEffect } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import useResize from "../../hooks/useResize";
import useTitle from "../../hooks/useTitle";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import HeaderButtons from "./components/HeaderButtons";
import UsersTable from "./components/UsersTable";

const Users = () => {
  useTitle("صفحه کاربران");
  const {
    data: users,
    // setData: setUsers,
    // error: usersError,
    loading: usersLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/users");
  const [usersLayoutType, setUsersLayoutType] = useLocalStorage(
    "usersLayout",
    "TABLE",
  );
  const windowSize = useResize();
  useEffect(() => {
    if (windowSize.width <= 640) {
      setUsersLayoutType("GRID");
    }
  }, [windowSize, setUsersLayoutType]);

  return (
    <section>
      <SectionTitle
        title={"کاربران"}
        buttons={
          <HeaderButtons
            layoutType={usersLayoutType}
            setLayoutType={setUsersLayoutType}
          />
        }
      />
      <UsersTable users={[...users].reverse()} loading={usersLoading} />
    </section>
  );
};

export default Users;
