import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { expense, formInputs } from "../types/index";
import { create } from "../services/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const REQUIRED_MESSAGE = "This field is required";

const schema = yup
  .object({
    label: yup.string().required(REQUIRED_MESSAGE),
    amount: yup
      .number()
      .positive()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .required(REQUIRED_MESSAGE),
    date: yup.string().required(REQUIRED_MESSAGE),
    category: yup.string().required(REQUIRED_MESSAGE),
  })
  .required();

type Props = {
  onUpdate: () => void;
};
function AddExpense({ onUpdate }: Props) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      label: "",
      date: "",
      category: "",
    },
  });

  const onSubmit = async (data: formInputs) => {
    const completeExpenseData: expense = {
      id: crypto.randomUUID(),
      label: data.label,
      amount: data.amount,
      date: data.date,
      category: data.category,
    };

    try {
      await create("expenses", completeExpenseData);
      toast.success("Expense added successfully");
      reset();
      onUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-4xl flex flex-col  gap-5">
        <CardHeader>
          <CardTitle>Add New Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-3 flex-col">
                <Label htmlFor="Label">Label</Label>
                <Input
                  id="Label"
                  {...register("label")}
                  type="text"
                  placeholder="e.g., Uber ride"
                />
                {errors.label && (
                  <p className="text-red-500 text-xs">
                    {errors.label?.message}
                  </p>
                )}
              </div>
              <div className="flex gap-3 flex-col">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  {...register("amount")}
                  type="number"
                  placeholder="0.00"
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs">
                    {errors.amount?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-3 flex-col">
                <Label htmlFor="date">Date</Label>
                <Input {...register("date")} id="date" type="date" />
                {errors.date && (
                  <p className="text-red-500 text-xs">{errors.date?.message}</p>
                )}
              </div>
              <div className="flex gap-3 flex-col">
                <Label htmlFor="category">Category</Label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="Food & Dining">
                          Food & Dining
                        </SelectItem>
                        <SelectItem value="Transport">Transport</SelectItem>
                        <SelectItem value="Shopping">Shopping</SelectItem>
                        <SelectItem value="Entertainment">
                          Entertainment
                        </SelectItem>
                        <SelectItem value="Bills & Utilities">
                          Bills & Utilities
                        </SelectItem>
                        <SelectItem value="Health">Health</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category && (
                  <p className="text-red-500 text-xs">
                    {errors.category?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Button type="submit" className="bg-teal-600">
                <Plus /> Add Expense
              </Button>
            </div>
            {/* {errors && (
              <p className="text-red-500 text-sm mt-2">
                Errors: {JSON.stringify(errors, null, 2)}
              </p>
            )} */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddExpense;
