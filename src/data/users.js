export const columns = [
  {
    id: "row",
    header: "ردیف",
    cell: ({ row }) => row.index + 1,
    enableSorting: false,
  },
  {
    id: "fullname",
    header: "نام و نام خانوادگی",
    accessorFn: (row) => `${row.firstname} ${row.lastname}`,
  },
  {
    id: "3",
    accessorKey: "username",
    header: "نام کاربری",
  },
  {
    id: "4",
    accessorKey: "email",
    header: "ایمیل",
  },
  {
    id: "5",
    accessorKey: "age",
    header: "سن",
  },
  {
    id: "6",
    accessorKey: "city",
    header: "شهر",
  },
];
