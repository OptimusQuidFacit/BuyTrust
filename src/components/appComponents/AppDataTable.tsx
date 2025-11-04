"use client"

import {
  flexRender,
  type Table as TableType 
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"


interface DataTableProps<TData, TValue> {
  table: TableType<TData>
  headerClassName?: string
  rowClassName?: string
}

export function AppDataTable<TData extends Record<string, any>, TValue>({
  table,
  headerClassName,
  rowClassName,


}: DataTableProps<TData, TValue>) {
  const columns = table.getAllColumns()

  // console.log(table.getRowModel().rows.map(row=>({[row.id]:row.getIsSelected()})));
  // console.log(table.getRowModel().rows.map(row=>row.getIsSelected()))
  // console.log(columnFilters);

  return (
    <>
      <div className="overflow-scroll rounded-md border bg-white max-h-[60vh]">
        {/* <AppComboBox/> */}
        <Table>
          <TableHeader >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className={headerClassName} key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow className={rowClassName}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className={rowClassName} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nothing to show.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            >
            Next
          </Button>
        </div>
    </>
  )
}