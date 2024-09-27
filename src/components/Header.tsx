import { ThemeToggle } from "./ThemeToggle";
import ConnectDialog from "./ConnectDialog";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b h-[53px] sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[1] flex items-center justify-between">
      <Link href={"/"} aria-label="home page">
      <div className="font-bold text-2xl pl-3 font-bungee-reg">
        
      </div>
      </Link>
      <div className="flex items-center justify-end">
        <div className="justify-self-end">
          <ConnectDialog />
        </div>
        <div className=" p-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
