"use client";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";
import { usePathname } from "next/navigation";
import { contentsData } from "@/constants/contents";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";

const Contents = ({ isMobile = false }: {isMobile: boolean}) => {
  const pathName = usePathname();
  const getLink = (url: string, label: string) => {
    const link = <Link className="hover:underline" href={url}>{label}</Link>;
    if (isMobile) return <SheetClose asChild>{link}</SheetClose>;
    return link;
  }
  return (
    <div className="pl-6">
      <ScrollArea className="w-full h-[calc(100vh-53px)] rounded-md">
        <div className="py-6">
          <h4 className="mb-4 text-sm font-medium leading-none font-gt-bold">
            Contents
          </h4>

          {contentsData.map((content) => {
            const isActive = pathName.startsWith(content.url);
            const isEnabled = content.children.length > 0;
            if (!isEnabled) return null;
            return (
              <div key={content.title} className="mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "font-bold",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {content.title}
                  </div>
                  {!isActive && (
                    <div className="cursor-pointer hover:underline text-muted-foreground hover:text-primary">
                      {getLink(content.url, "[+]")}
                    </div>
                  )}
                </div>
                {content.children.map((child) => {
                  const childIsActive = pathName.startsWith(child.url);
                  return (
                    <div key={child.title} className="pl-2 my-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "text-sm font-medium",
                            childIsActive
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {child.title}
                        </div>
                        {!childIsActive && (
                          
                          <div className="cursor-pointer hover:underline text-muted-foreground hover:text-primary">
                            {getLink(child.url, "[+]")}
                          </div>
                        )}
                      </div>
                      {childIsActive && (
                        <div className="ml-2 mt-2 border-l mb-5">
                          {child.child.map((child) => (
                            <div
                              key={child.title}
                              className={cn(
                                "pl-4 py-1 text-sm text-muted-foreground font-gt-reg",
                                pathName === child.url
                                  ? "border-primary border-l-4 text-primary"
                                  : ""
                              )}
                            
                            >
                              {getLink(child.url, child.title)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Contents;
