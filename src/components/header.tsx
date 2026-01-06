import { Wallet } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="text-emerald-500 w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
            <Wallet className="w-5 h-5 text-primary-foreground " />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Expense Tracker
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your daily expenses
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
