import EditUserDetails from "../../../components/Common/EditItem/EditUserDetails";
import RemoveItem from "../../../components/Common/EditItem/RemoveItem";

const UserGridCard = ({ deleteHandler, editHandler, user }) => {
  return (
    <article className="bg-white dark:bg-dark-primary rounded-lg p-4 hover:shadow-sm  border border-color dark:border-gray-700 flex flex-col justify-between">
      <header>
        <div className="flex items-center gap-2">
          <div>
            {" "}
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.firstname} ${user.lastname}`}
              className="w-20 rounded-full"
              alt={`${user.firstname} ${user.lastname}`}
            />
          </div>
          <span className="font-bold">
            {user.firstname} {user.lastname}
          </span>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="font-bold">نام کاربری :</span>{" "}
            <span>{user.username}</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-3 flex-wrap">
            <span className="font-bold">ایمیل :</span> <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-3 flex-wrap">
            <span className="font-bold">شهر :</span> <span>{user.city}</span>
          </div>
        </div>
      </header>
      <footer className="mt-1">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <span className="font-bold">سن :</span> <span>{user.age}</span>
          </div>
          <div className="flex items-center justify-end">
            <RemoveItem
              item={user}
              deleteHandler={deleteHandler}
              itemType="کاربر"
            />
            <EditUserDetails
              item={user}
              editHandler={editHandler}
              itemType="کاربر"
            />
          </div>
        </div>
      </footer>
    </article>
  );
};

export default UserGridCard;
