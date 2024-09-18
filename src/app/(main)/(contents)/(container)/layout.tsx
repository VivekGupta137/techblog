import TopBreadCrumb from "@/components/TopBreadCrumb";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="px-3 sm:px-6 pt-2 w-full lg:pl-12">
      <div className="max-w-full sm:max-w-[630px]">
        <TopBreadCrumb />
        <div className="pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
