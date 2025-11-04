"use client"
import { useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

export function useAppTable<TData extends Record<string, any>, TValue>({
  data,
  columns,
  rowIdKey = "id",
}: {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  rowIdKey?: keyof TData
}) {
    const [rowSelection, setRowSelection] = useState({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 7, // number of rows per page
      })
    


  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => row[rowIdKey] as string,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel:getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange:setColumnFilters,
    onSortingChange:setSorting,
    getPaginationRowModel:getPaginationRowModel(),
    onPaginationChange:setPagination,
   
    state: {
      rowSelection,
      columnFilters,
      sorting,
      pagination
    },
  })

  return { table, rowSelection, columnFilters}
}
