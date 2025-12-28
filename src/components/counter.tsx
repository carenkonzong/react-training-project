import { Button } from "@/components/ui/button";
import { useState } from "react";

function Counter() {
  /* const [disabled, setDisabled] = useState(false); */
  const [count, setCount] = useState<number>(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="border h-screen flex items-center justify-center flex-col gap-5">
      <div
        className={`border py-3 px-10 rounded-xl ${
          count === 0 ? "bg-gray-200" : "bg-green-500"
        }`}
      >
        {count}
      </div>
      <div className="flex gap-3">
        <Button disabled={count === 0} onClick={decrease} variant={"outline"}>
          Decrease
        </Button>
        <Button onClick={reset} variant={"destructive"}>
          Reset
        </Button>
        <Button onClick={increase} variant={"default"}>
          Increase
        </Button>
      </div>
    </div>
  );
}

export default Counter;
