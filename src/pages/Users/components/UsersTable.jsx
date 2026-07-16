import { useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns } from "../../../data/users";
import TableHeader from "../../../components/Common/Table/components/TableHeader";
import UsersPagination from "./usersPagination";

const UsersTable = ({ users, loading }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const globalFilterFn = (row, columnId, value) => {
    const search = value.toLowerCase();
    return Object.values(row.original).join(" ").toLowerCase().includes(search);
  };
  const table = useReactTable({
    data: users ?? [],
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div className="w-full bg-white dark:bg-dark-primary rounded-lg shadow-md py-4 mt-8 border border-color dark:border-gray-700">
      <TableHeader
        header={{
          title: "لیست کاربران",
          buttons: undefined,
          value: globalFilter,
          setFilter: setGlobalFilter,
        }}
      />
      {loading ? (
        <div className="px-3 border-t pt-3 mt-2 border-color dark:border-gray-700">
          در حال اتصال...
        </div>
      ) : (
        <table className="mt-5 w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-gradiant h-12 text-sm" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="cursor-pointer select-none text-white"
                    onClick={() => {
                      header.column.toggleSorting();
                    }}
                    key={header.id}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {header.column.getCanSort() &&
                      ({
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted()] ??
                        null)}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                className="text-sm *:font-semibold h-15 even:bg-gray-200 dark:even:bg-gray-800 text-gray-700 dark:text-gray-300"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td className="text-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <UsersPagination table={table} />
    </div>
  );
};

export default UsersTable;
