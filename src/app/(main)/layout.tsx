import Header from "@/components/Header";
import LeftSidebar from "@/components/left-sidebar";

const Layout = ({children} : Readonly<{
    children: React.ReactNode;
  }>) => {
    return ( <div>
        <div>
            <LeftSidebar />
        </div>
        <div className="pl-[53px]">
            <Header />
            {children}
        </div>
    </div> );
}
 
export default Layout;