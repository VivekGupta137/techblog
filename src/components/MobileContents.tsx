import { Menu, Triangle } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import Contents from "./Contents";

const MobileContents = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/about"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              {/* <Triangle className="h-6 w-6 fill-foreground rotate-180" /> */}
              <div className="size-5 font-bungee-reg text-[20px]">V.</div>
              <span className="sr-only">Vivek&apos;s blog</span>
            </Link>
            <Contents />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileContents;
