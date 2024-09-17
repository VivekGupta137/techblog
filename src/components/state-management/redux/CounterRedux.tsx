"use client";

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented, RootState } from "./ReduxExample";
import { Card } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Card>
        <div className="flex items-center justify-center p-10 min-h-[350px]">
          <div className="flex gap-2 items-end justify-center">
            <div>
              <Button
                variant={"outline"}
                size={"icon"}
                disabled={count === -10}
                onClick={() => dispatch(decremented())}
              >
                <Minus />
              </Button>
            </div>
            <div
              className={cn(
                "text-8xl text-primary font-bold",
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
                onClick={() => dispatch(incremented())}
              >
                <Plus />
              </Button>
            </div>
          </div>
        </div>
      </Card>
  );
};

export default CounterRedux;
