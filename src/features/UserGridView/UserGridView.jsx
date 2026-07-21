import Pagination from "../../components/Common/Pagination/Pagination";
import UserGridCard from "./components/UserGridCard";

const UserGridView = ({
  paginationUsers,
  loading,
  currentPage,
  setCurrentPage,
  usersPerPage,
  setUsersPerPage,
  usersCount,
  deleteHandler,
  editHandler,
}) => {
  return (
    <div>
      {loading ? (
        <p className="pt-4 px-3 border-t mt-6 border-color dark:border-gray-700">
          در حال اتصال...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-8 gap-4 sm:gap-3">
          {paginationUsers.map((user) => (
            <UserGridCard
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              key={user._id}
              user={user}
            />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={usersPerPage}
        setItemsPerPage={setUsersPerPage}
        itemCount={usersCount}
      />
    </div>
  );
};

export default UserGridView;
