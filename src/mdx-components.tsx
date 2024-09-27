import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl text-primary font-gt-bold ">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 font-gt-bold">
        {children}
      </h2>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-4" id={(children as string).toLocaleLowerCase()}>
        <span className="pt-1 text-sm border-t-2 border-[hsl(var(--primary))] font-[500]">
          {children}
        </span>
      </h4>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    
    p: ({ children }) => (
      <p className="dark:text-muted-foreground mt-2 mb-4 font-gt-reg">{children}</p>
    ),
    a: ({ children, href }) => (
      <Link
        className="text-primary underline dark:text-muted-foreground dark:hover:bg-[#212121] hover:bg-gray-200 px-1 rounded-sm transition-all duration-300"
        href={href as string}
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6 dark:text-muted-foreground font-gt-reg">{children}</ul>,
    strong: ({ children }) => <strong className="font-gt-bold">{children}</strong>,
    ...components,
  };
}
