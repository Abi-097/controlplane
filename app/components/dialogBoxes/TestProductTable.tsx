import { FillButton } from "@/components/libs/buttons";
import React, { useState, useCallback, useRef } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Calendar } from "@/components/ui/calendar";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FiPlus } from "react-icons/fi";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

interface Product {
  id: number;
  name: string;
  billingStartDate: string;
  price: number;
  quantity: number;
  discount: number;
  tax: number;
  amount: number;
  expanded: boolean;
}

const ItemType = "PRODUCT_ROW";

interface DraggableRowProps {
  product: Product;
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  deleteProduct: (id: number) => void;
  toggleExpand: (id: number) => void;
  handleInputChange: (id: number, field: keyof Product, value: any) => void;
}

const DraggableRow: React.FC<DraggableRowProps> = ({
  product,
  index,
  moveRow,
  deleteProduct,
  toggleExpand,
  handleInputChange,
}) => {
  const ref = useRef<HTMLTableRowElement>(null); // Ref for row element
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item: { index: number }) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      // Move row if necessary
      moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // Combine drag and drop

  return (
    <tr ref={ref} className={`border-t ${isDragging ? "opacity-50" : ""}`}>
      <td className="p-2 cursor-move">
        <span className="text-gray-400">⋮⋮</span>
      </td>
      <td className="p-2">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <Input
            type="text"
            value={product.name}
            onChange={(e) =>
              handleInputChange(product.id, "name", e.target.value)
            }
            className="border p-1 w-full"
            placeholder="Start typing to search"
          />
        </div>
      </td>
      <td className="p-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                " justify-start text-left font-normal ",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </td>
      <td className="p-2">
        <Input
          type="number"
          value={product.price}
          onChange={(e) =>
            handleInputChange(product.id, "price", e.target.value)
          }
          className="border p-1 w-full"
        />
      </td>
      <td className="p-2">
        <Input
          type="number"
          value={product.quantity}
          onChange={(e) =>
            handleInputChange(product.id, "quantity", e.target.value)
          }
          className="border p-1 w-full"
        />
      </td>
      <td className="p-2">
        <Input
          type="number"
          value={product.discount}
          onChange={(e) =>
            handleInputChange(product.id, "discount", e.target.value)
          }
          className="border p-1 w-full"
        />
      </td>
      <td className="p-2">
        <Input
          type="number"
          value={product.tax}
          onChange={(e) => handleInputChange(product.id, "tax", e.target.value)}
          className="border p-1 w-full"
        />
      </td>
      <td className="p-2">
        <Input
          type="number"
          value={product.amount}
          readOnly
          className="border p-1 w-full"
        />
      </td>
      <td className="p-2 flex flex-row items-center">
        <button
          onClick={() => toggleExpand(product.id)}
          className=" text-gray-800 p-1 rounded"
        >
          <FiPlus size={18}/>
        </button>
        <button
          onClick={() => deleteProduct(product.id)}
          className=" p-1 rounded"
        >
          <RiDeleteBin5Line className="mr-2 text-red-500" size={18} />
        </button>
      </td>
    </tr>
  );
};

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "",
      billingStartDate: "",
      price: 0,
      quantity: 0,
      discount: 0,
      tax: 0,
      amount: 0,
      expanded: false,
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: "",
        billingStartDate: "",
        price: 0,
        quantity: 0,
        discount: 0,
        tax: 0,
        amount: 0,
        expanded: false,
      },
    ]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const toggleExpand = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, expanded: !product.expanded }
          : product
      )
    );
  };

  const handleInputChange = (id: number, field: keyof Product, value: any) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const moveRow = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedProducts = [...products];
      const [draggedProduct] = updatedProducts.splice(dragIndex, 1);
      updatedProducts.splice(hoverIndex, 0, draggedProduct);
      setProducts(updatedProducts);
    },
    [products]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-tableBg  text-white text-left">
                <th className="p-2 "></th>
                <th className="p-2 w-[25vw]">Products</th>
                <th className="p-2">Billing Start Date</th>
                <th className="p-2 w-[150px]">Price</th>
                <th className="p-2 w-[150px]">Quantity</th>
                <th className="p-2 w-[150px]">Discount</th>
                <th className="p-2 w-[100px]">Tax %</th>
                <th className="p-2 w-[150px]">Amount</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <DraggableRow
                  key={product.id}
                  product={product}
                  index={index}
                  moveRow={moveRow}
                  deleteProduct={deleteProduct}
                  toggleExpand={toggleExpand}
                  handleInputChange={handleInputChange}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 w-[150px]">
          <FillButton
            onClick={addProduct}
            className="bg-saveButton hover:hoverSaveButton"
          >
            Add Product
          </FillButton>
        </div>
      </div>
    </DndProvider>
  );
};

export default ProductTable;
