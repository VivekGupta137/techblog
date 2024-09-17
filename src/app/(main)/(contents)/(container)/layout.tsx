import TopBreadCrumb from "@/components/TopBreadCrumb";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="pl-12 pt-2 w-full">
      <div className=" max-w-[630px]">
        <TopBreadCrumb />
        <div className="pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
