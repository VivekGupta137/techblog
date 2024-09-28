import { Card } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const Counter = ({ count, increment, decrement }: CounterProps) => {
  return (
    <div>
      <Card>
        <div className="flex items-center justify-center p-10 min-h-[350px]">
          <div className="flex gap-2 items-end justify-center">
            <div>
              <Button
                variant={"outline"}
                size={"icon"}
                disabled={count === -10}
                onClick={decrement}
                aria-label="Decrement"
              >
                <Minus />
              </Button>
            </div>
            <div
              className={cn(
                "text-8xl text-primary font-bold font-jb-mono",
                count < 0 ? `text-red-500` : "",
                count > 0 ? `text-green-500` : ""
              )}
            >
              {count}
            </div>
            <div>
              <Button
                variant={"outline"}
                size={"icon"}
                disabled={count === 10}
                onClick={increment}
                aria-label="Increment"
              >
                <Plus />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Counter;
