
import AppToolTip from "@/components/appComponents/AppToolTip"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Delete, Edit, Ellipsis, Eye, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string,
  name: string,
  price: number,
  category: string[]
  description: string,
  image:string[],
  stock:number
}

export const productColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell:({row})=>{
      let name = row.original.name
      return<p className="font-semibold">{name}</p>
    },
    enableColumnFilter:true
  },
  {
    accessorKey: "price",
    header: ({column})=>{
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting()}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell:({row})=>{
      let price=row.original.price
      const formatted= price.toLocaleString("en-NG", {style:"currency", currency:"NGN"})
      return formatted
    }
  },
  {
    accessorKey: "description",
    header: "Description",
    cell:({row})=>{
      let content= row.original.description
      const shortString= content.slice(0, 20)
      
       return <div className="flex gap-1">
                <p>{shortString}</p>
                <div className="self-end">
                  <AppToolTip tip="See more about this product">
                    <Ellipsis className="hover:text-secondary cursor-pointer" size={13}/>
                  </AppToolTip>
                </div>
              </div>
      }

  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    id:"actions",
    cell:({row})=>{
      const product = row.original
      return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-8 w-8 pt-2  cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="text-xs">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs"><Eye className="text-secondary"/> View Product </DropdownMenuItem>
            <DropdownMenuItem className="text-xs"><Edit className="text-secondary"/> Edit Product </DropdownMenuItem>
            <DropdownMenuItem className="text-xs"><Delete className="text-secondary"/>Delete Product </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

  },


]