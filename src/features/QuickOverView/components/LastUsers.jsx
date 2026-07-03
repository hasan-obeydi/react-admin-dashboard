import LastSectionTitle from "./LastSectionTitle";
import LastUserCard from "./LastUserCard";

const LastUsers = ({ users, usersLoading }) => {
  return (
    <div className="col-span-2 bg-white dark:bg-dark-primary p-6 rounded-lg">
      <LastSectionTitle title="آخرین کاربران" link="/users" />
      {usersLoading ? (
        <p className="text-black dark:text-white">در حال اتصال...</p>
      ) : (
        <div className="space-y-4">
          {users
            .reverse()
            .slice(0, 4)
            .map((user) => (
              <LastUserCard key={user._id} {...user} />
            ))}
        </div>
      )}
    </div>
  );
};

export default LastUsers;
