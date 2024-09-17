"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Fragment } from "react";

const TopBreadCrumb = () => {
  const pathname = usePathname();
  const tokens = pathname.split("/").filter((token) => token !== "");

  const lastToken = tokens[tokens.length - 1];

  const toUpperCase = (str: string) => {
    if (!str ) return "";
    str = str.replace(/-/g, " ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="mb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {tokens
            .filter((_token, index) => index != tokens.length - 1)
            .map((token, index) => (
              <Fragment key={token}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/${tokens.slice(0, index + 1).join("/")}`}
                  >
                    {toUpperCase(token)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{toUpperCase(lastToken)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default TopBreadCrumb;
