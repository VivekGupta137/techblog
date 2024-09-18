import { ThemeToggle } from "./ThemeToggle";
import MobileContents from "./MobileContents";

const Header = () => {
  return (
    <div className="border-b h-[53px] sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[1] flex items-center justify-end">
      <div className=" p-2">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
