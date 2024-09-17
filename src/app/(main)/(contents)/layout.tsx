import Contents from "@/components/Contents";
import Footer from "@/components/Footer";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return (
    <div>
      <div className="flex gap-5 relative">
        <div className="border-r fixed w-[300px]">
          <Contents />
        </div>
        <div className="pl-[300px] grow">{children}</div>
      </div>
      <div className="pl-[300px]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
