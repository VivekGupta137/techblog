import MyCodeBlock from "@/components/MyCodeBlock";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Link1Icon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Link2, LucideLink, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";


const Page = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Context API</h1>
        <p className="text-sm text-muted-foreground">
          <span className="inline-block">
            A built-in way to manage state without an external library, using
            the React Context API along with useReducer or useState.
          </span>
        </p>
      </div>
      <div>
        <Link
          href={"https://react.dev/reference/react/createContext"}
          target="_blank"
          className={badgeVariants({ variant: "secondary" })}
        >
          <div className="flex items-center gap-1">
            <div className="bold">Docs</div>
            <SquareArrowOutUpRight size={10} />
          </div>
        </Link>
      </div>
      <div>
      {/* <MyCodeBlock code="console.log('Hello World!')" language="js" filename="index.js"/> */}
      </div>
    </div>
  );
};

export default Page;
