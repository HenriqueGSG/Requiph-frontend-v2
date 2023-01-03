import { useState, useEffect, useContext } from "react";
import TableButtons from "./TableButtons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// const defaultData = [
//   {
//     id: "1",
//     name: "Henrique Guarnieri",
//     email: "Henriqueguarnieri.gg@gmail.com",
//     received_at: "2022-12-27",
//     file: "www.google.com",
//     selectec: false
//   },
// ];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    header: () => <span>Nome</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor((row) => `${row.file} ${row.id} ${row.selected}`, {
    id: "actions",
    header: () => "Actions",
    cell: (info) => {
      return (
        <TableButtons
          file={info.row.original.file}
          idResume={info.row.original.id}
          idJob={""}
          selected={info.row.original.selected}
        />
      );
    },

    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("received_at", {
    header: () => <span>Data</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

const TableTest = ({ dataTable, idPage }) => {
  const table = useReactTable({
    data: dataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <table className=" w-full text-center  text-sm h-32 overflow-auto">
        <thead className="bg-gray-200 sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-4" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableTest;
