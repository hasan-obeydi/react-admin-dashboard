import Pagination from "../../components/Common/Pagination/Pagination";
import UserGridCard from "./components/UserGridCard";

const UserGridView = ({
  users,
  paginatedUsers,
  setPaginatedUsers,
  loading,
  deleteHandler,
  editHandler,
}) => {
  return (
    <div>
      {loading ? (
        <p className="py-4">در حال اتصال...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 mt-8 gap-4 sm:gap-3">
          {paginatedUsers.map((user) => (
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
        items={users}
        setPaginatedItems={setPaginatedUsers}
        itemsPerPage={6}
      />
    </div>
  );
};

export default UserGridView;
