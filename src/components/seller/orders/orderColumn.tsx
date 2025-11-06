
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
import moment from "moment"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
        id:string,
        buyerId:string,
        sellerId:string,
        product:Record<any, any>,
        quantity:number,
        totalAmount:number,
        status:string,
        paymentStatus:string,
        isConfirmed:boolean,
        timeStamp:Date
    }

export const orderColumns: ColumnDef<Order>[] = [
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
    accessorKey:"id",
    header: "Order Id"
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    accessorFn: (row) => row.product?.name, // 👈 use accessorFn for nested value

    cell:({row})=>{
      let name = row.original.product.name
      return<p className="font-semibold">{name}</p>
    },
    enableColumnFilter:true
  },
  {
    accessorKey:"quantity",
    header:"Qty"
  },
  {
    accessorKey: "totalAmount",
    header: ({column})=>{
      return (
        <Button
        className="text-xs"
          variant="ghost"
          onClick={() => column.toggleSorting()}
        >
          Order Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell:({row})=>{
      let price=row.original.totalAmount
      const formatted= price.toLocaleString("en-NG", {style:"currency", currency:"NGN"})
      return formatted
    }
  },
  {
    accessorKey:"status",
    header:"Order Status",
    filterFn: (row, columnId, filterValue: string[]) => {
        if (!Array.isArray(filterValue)) return true
        const value = row.getValue<string>(columnId)
        return filterValue.includes(value)
      },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    filterFn: (row, columnId, filterValue: string[]) => {
        if (!Array.isArray(filterValue)) return true
        const value = row.getValue<string>(columnId)
        return filterValue.includes(value)
      },
  },
  {
    accessorKey:"timeStamp",
    header:"Order Date",
    filterFn: (row, columnId, filterValue) => {
        // You can write your own condition here
        const rowDate = new Date(row.getValue(columnId));
        console.log(rowDate)
        const [start, end] = filterValue; // example: [firstDate, secondDate]
    
        // If filterValue is undefined, show all
        if (!start || !end) return true;
    
        // Custom condition (e.g., using moment)
        return moment(rowDate).isBetween(start, end, "day", "[]");
      },
    cell:({row})=>{
        const date = row.original.timeStamp;
        return date?.toLocaleDateString("en-CA");
    }
  },
  {
    id:"actions",
    cell:({row})=>{
      const order = row.original
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
            <DropdownMenuItem className="text-xs"><Eye className="text-secondary"/> View Order </DropdownMenuItem>
            {/* <DropdownMenuItem className="text-xs"><Edit className="text-secondary"/> Edit Product </DropdownMenuItem> */}
            <DropdownMenuItem className="text-xs"><Delete className="text-secondary"/>Delete Order </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

  },


]