import type { expense } from "@/types";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

type props = {
  expense: expense;
  checkId: (id: string) => void;
};

function ExpenseItem({ expense, checkId }: props) {
  /* const deleteExpense = (e: any) => {
    console.log(e);
  }; */
  return (
    <div className="flex justify-center mt-2">
      <div className="w-full max-w-4xl flex flex-col">
        <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors animate-fade-in">
          <div className="flex-1 min-w-0 mr-4">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="font-medium text-foreground truncate">
                {expense.label}
              </h4>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-blue-500/20 text-blue-600 shrink-0">
                {expense.category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {formatDate(expense.date)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-foreground whitespace-nowrap">
              {`$${expense.amount}`}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => checkId(expense.id)}
              className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
