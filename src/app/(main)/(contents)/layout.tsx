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
        <div className="hidden border-r fixed md:block md:w-[200px] lg:w-[300px] ">
          <Contents />
        </div>
        <div className="md:pl-[200px] lg:pl-[300px] grow w-full">{children}</div>
      </div>
      <div className="md:pl-[200px] lg:pl-[300px]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
