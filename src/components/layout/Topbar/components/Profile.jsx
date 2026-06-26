const Profile = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-full transition duration-300">
      <div>
        <img
          src="profile.jpg"
          alt="Profile"
          className="size-10 rounded-full object-cover"
        />
      </div>
      <div className="text-sm font-medium">
        <span>محمد حسن عبیدی پور</span>
        <span className="block text-gray-500 text-xs">مدیر</span>
      </div>
    </div>
  );
};

export default Profile;
