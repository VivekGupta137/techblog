"use client";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { usePathname } from "next/navigation";
import { cx } from "class-variance-authority";

const Contents = () => {
  const docs = [
    {
      title: "State Management",
      child: [
        {
          title: "Context API",
          url: "/react/state-management/context",
        },
        {
          title: "Redux",
          url: "/react/state-management/redux",
        },
        {
          title: "Zustand",
          url: "/react/state-management/zustand",
        },
      ],
    },
  ];
  const pathName = usePathname();

  return (
    <div className="pl-6">
      <ScrollArea className="w-full h-[calc(100vh-53px)]  rounded-md">
        <div className="py-6">
          <h4 className="mb-4 text-sm font-medium leading-none">Contents</h4>
          {docs.map((doc) => (
            <div key={doc.title} className="mb-4">
              <div className="text-sm font-medium">{doc.title}</div>
              <div className="ml-2 mt-2 border-l">
                {doc.child.map((child) => (
                  <div
                    key={child.title}
                    className={cx(
                      "pl-4 py-1 text-sm text-muted-foreground hover:underline",
                      pathName === child.url
                        ? "border-primary border-l-4 text-primary"
                        : ""
                    )}
                  >
                    <Link href={child.url}>{child.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Contents;
