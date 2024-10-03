import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import Contents from "./Contents";
import { URL_MAP } from "@/constants/urlmap";

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
              href={URL_MAP['about']}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <div className="font-bungee-reg text-[30px]">V.</div>
              <span className="sr-only">Vivek&apos;s blog</span>
            </Link>
            <Contents isMobile />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileContents;
