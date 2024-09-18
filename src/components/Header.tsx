import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
    return ( <div className="border-b h-[53px] sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[1]">
        <div className="absolute right-0 p-2">
            <ThemeToggle />
        </div>
    </div> );
}
 
export default Header;