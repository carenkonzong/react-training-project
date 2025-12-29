import type { expense } from "../types/index";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ExpenseItem from "./ExpenseItem";
import { toast } from "sonner";

type Props = {
  onReset: () => void;
  expenses: expense[];
};

function ExpenseList({ expenses, onReset }: Props) {
  const knowExpenseId = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/expenses/${id}`, {
        method: "DELETE",
      });
      console.log(response.status);
      if (response.status === 200) {
        toast.success("Expense deleted successfully");
      }
      onReset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-4xl flex flex-col  ">
        <CardContent>
          <h1 className="text-sm mb-3 text-gray-500">Filters</h1>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="text-xs" htmlFor="category">
                Category
              </Label>
              <Select>
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Food & Dining">Food & Dining</SelectItem>
                  <SelectItem value="Transport">Transport</SelectItem>
                  <SelectItem value="Shopping">Shopping</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Bills & Utilities">
                    Bills & Utilities
                  </SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="from" className="text-xs">
                From
              </Label>
              <Input id="from" type="date" />
            </div>
            <div>
              <Label htmlFor="to" className="text-xs">
                To
              </Label>
              <Input id="to" type="date" />
            </div>
          </div>
          <div className="border-b mb-7 mt-6"></div>
          <div className="flex items-center justify-between">
            <CardTitle>Expenses</CardTitle>
            <h2 className="text-gray-500 text-sm">{`${expenses.length} Items`}</h2>
          </div>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              checkId={knowExpenseId}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default ExpenseList;
