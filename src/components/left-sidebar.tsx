"use client";
import { Button } from "./ui/button";
import { Triangle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import MobileContents from "./MobileContents";
import { SiGithub, SiLinkedin, SiReact } from "react-icons/si";
import Link from "next/link";
import { contentsData } from "@/constants/contents";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const currentPath = usePathname();

  return (
    <TooltipProvider>
      <div className="fixed border-r inset-y h-full flex flex-col z-[1]">
        <div className="border-b p-2 md:hidden">
          <MobileContents />
        </div>
        <div className="border-b p-2 hidden md:block">
          <Link href={"/about"}>
            <Button
              variant="outline"
              size="icon"
              aria-label="Home"
              className="group"
            >
              <Triangle className="size-5 fill-foreground rotate-180 group-hover:hidden" />
              <div className="hidden group-hover:block">VG</div>
            </Button>
          </Link>
        </div>

        {contentsData.map((content) => {
          const disabled = content.children?.length === 0;
          return (
            <div key={content.title} className="p-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={disabled ? "#" : content.children[0].url}>
                    <Button
                      variant={
                        currentPath.startsWith(content.url)
                          ? "default"
                          : "secondary"
                      }
                      size="icon"
                      className="rounded-lg group"
                      aria-label={content.title}
                      disabled={disabled}
                    >
                      {content.icon}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {content.title + (disabled ? " (Coming soon)" : "")}
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}

        <div className="mt-auto">
          <div className="m-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://www.linkedin.com/in/vivek-gupta137/">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Account"
                  >
                    <SiLinkedin className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                My LinkedIn profile
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="m-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/VivekGupta137/techblog">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-auto rounded-full"
                    aria-label="Account"
                  >
                    <SiGithub className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Github repo for this blog
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="m-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Account"
                  >
                    VG
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                About me
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LeftSidebar;
