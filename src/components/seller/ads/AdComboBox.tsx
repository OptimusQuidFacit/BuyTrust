"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { products } from "@/lib/dummyData"
import { Table } from "@tanstack/react-table"

type props <TData extends Record<string, any>> = {
    table: Table<TData>
    icon?: React.ReactElement
  }

const formattedProducts=products.map(product=>({value:product.name, label:product.name, id:product.id}))

export function AdComboBox <TData extends Record<string, any>>({table, icon}:props<TData>) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const columnFilterValue = (table.getColumn("name")?.getFilterValue() as string) ?? "";

  React.useEffect(() => {
    setValue(columnFilterValue);
  }, [columnFilterValue]);

  React.useEffect(() => {
    table.getColumn("name")?.setFilterValue(value)
  }, [value])
  
//   const {table} = useAppTable({data:products, columns:productColumns, rowIdKey:"id"})

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] gap-2 text-xs overflow-hidden"
        >
          {icon}
          {value|| "Search Product..."}
          {/* <ChevronsUpDown className="opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Product..." className="h-8 text-xs" value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onValueChange={(value:string) =>
            table.getColumn("name")?.setFilterValue(value)
          }/>
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup>
            {table.getRowModel().rows.map((row) => (
                <CommandItem
                className="text-xs"
                  key={row.id}
                  value={row.original.name}
                  onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                  }}
                >
                  {row.original.name}
                  <Check className={cn("ml-auto", value === row.original.name ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
