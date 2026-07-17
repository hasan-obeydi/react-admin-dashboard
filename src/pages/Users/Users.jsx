import { useEffect, useReducer, useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import useResize from "../../hooks/useResize";
import useTitle from "../../hooks/useTitle";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import HeaderButtons from "./components/HeaderButtons";
import UsersTable from "./components/UsersTable";
import toast, { Toaster } from "react-hot-toast";
import { addUser, deleteUser, EditUser, getUsers } from "../../api/users";
import userReducer from "../../reducers/userReducer";
import { clearInputs } from "../../utils/clearInputs";
import UserGridView from "../../features/UserGridView/UserGridView";

const Users = () => {
  useTitle("صفحه کاربران");
  const {
    data: users,
    setData: setUsers,
    // error: usersError,
    loading: usersLoading,
  } = useFetch("https://react-js-cms.iran.liara.run/api/users");
  const [newUser, dispatch] = useReducer(userReducer, {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    age: "",
    city: "",
  });
  const [paginatedUsers, setPaginatedUsers] = useState([]);
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
  const submitValidation = (item, newUser, toggle) => {
    if (
      newUser &&
      (!newUser.firstname ||
        !newUser.lastname ||
        !newUser.username ||
        !newUser.email ||
        !newUser.age ||
        !newUser.city)
    ) {
      toast.error(
        "لطفا مقادیر عنوان، موجودی، قیمت و توضیحات را به درستی وارد کنید.",
      );
    } else if (
      newUser &&
      item &&
      newUser.firstname === item.firstname &&
      newUser.lastname === item.lastname &&
      newUser.username === item.username &&
      newUser.email === item.email &&
      Number(newUser.age) === Number(item.age) &&
      newUser.city === item.city
    ) {
      toast.error("لطفا مقادیر را تغییر دهید.");
    } else {
      toggle();
      return true;
    }
  };
  const deleteHandler = async (item, newUser, toggle) => {
    toggle();
    await toast
      .promise(deleteUser(item._id), {
        loading: "در حال حذف کاربر...",
        success: `کاربر ${item.username} با موفقیت حذف شد.`,
        error: `خطا در حذف کاربر ${item.username}`,
      })
      .then((response) => {
        if (response.ok) {
          setUsers((prev) =>
            prev.filter((product) => product._id !== item._id),
          );
        }
      });
  };
  const editHandler = async (item, newUser, toggle) => {
    const isSubmit = submitValidation(item, newUser, toggle);
    if (isSubmit) {
      await toast
        .promise(EditUser(item._id, newUser), {
          loading: "در حال ویرایش کاربر...",
          success: "کاربر با موفقیت ویرایش شد.",
          error: `خطا در ویرایش کاربر.`,
        })
        .then((response) => {
          if (response.ok) {
            const newUsers = users.map((user) => {
              if (user._id === item._id) {
                user.firstname = newUser.firstname;
                user.lastname = newUser.lastname;
                user.username = newUser.username;
                user.email = newUser.email;
                user.age = Number(newUser.age);
                user.city = newUser.city;
              }
              return user;
            });
            setUsers(newUsers);
          }
        });
    }
  };
  const addUserHandler = async (item, newUser, toggle) => {
    const isSubmit = submitValidation(item, newUser, toggle);
    if (isSubmit) {
      await toast
        .promise(addUser(newUser), {
          loading: "در حال افزودن کاربر",
          success: `کاربر ${newUser.username} با موفقیت اضافه شد.`,
          error: `خطا در افزودن محصول`,
        })
        .then((response) => {
          if (response.ok) {
            getUsers().then((datas) => {
              setUsers(datas);
            });
            clearInputs(dispatch, "کاربر");
          }
        });
    }
  };
  return (
    <section>
      <div>
        <Toaster position="top-left" reverseOrder={false} />
      </div>
      <SectionTitle
        title={"کاربران"}
        buttons={
          <HeaderButtons
            newUser={newUser}
            addUserHandler={addUserHandler}
            dispatch={dispatch}
            layoutType={usersLayoutType}
            setLayoutType={setUsersLayoutType}
          />
        }
      />

      {usersLayoutType === "TABLE" ? (
        <UsersTable
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          users={[...users].reverse()}
          loading={usersLoading}
        />
      ) : (
        <UserGridView
          users={users}
          paginatedUsers={paginatedUsers}
          setPaginatedUsers={setPaginatedUsers}
          loading={usersLoading}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      )}
    </section>
  );
};

export default Users;
