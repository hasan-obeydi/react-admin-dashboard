import EditUserDetails from "../../../components/Common/EditItem/EditUserDetails";
import RemoveItem from "../../../components/Common/EditItem/RemoveItem";

const getColumns = (deleteHandler, editHandler) => {
  const columns = [
    {
      id: "row",
      header: "ردیف",
      cell: ({ row }) => row.index + 1,
      enableSorting: false,
    },
    {
      id: "profile",
      header: "پروفایل",
      cell: ({ row }) => (
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${row.original.firstname} ${row.original.lastname}`}
          className="w-10 h-10 rounded-full text-center mx-auto"
          alt={`${row.original.firstname} ${row.original.lastname}`}
        />
      ),
      enableSorting: false,
    },
    {
      id: "fullname",
      header: "نام و نام خانوادگی",
      accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    },
    {
      id: "username",
      accessorKey: "username",
      header: "نام کاربری",
    },
    {
      id: "email",
      accessorKey: "email",
      header: "ایمیل",
    },
    {
      id: "age",
      accessorKey: "age",
      header: "سن",
    },
    {
      id: "city",
      accessorKey: "city",
      header: "شهر",
    },
    {
      id: "action",
      header: "",
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <RemoveItem
            deleteHandler={deleteHandler}
            item={row.original}
            itemType="کاربر"
          />
          <EditUserDetails
            editHandler={editHandler}
            item={row.original}
            itemType="کاربر"
          />
        </div>
      ),
    },
  ];
  return columns;
};

export default getColumns;
