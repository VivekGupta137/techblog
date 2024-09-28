"use client";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import MobileContents from "./MobileContents";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { contentsData } from "@/constants/contents";
import { usePathname } from "next/navigation";
import { URL_MAP } from "@/constants/urlmap";

const LeftSidebar = () => {
  const currentPath = usePathname();

  return (
    <TooltipProvider>
      <div className="fixed border-r inset-y h-full flex flex-col z-[1]">
        <div className="border-b p-2 md:hidden">
          <MobileContents />
        </div>
        <div className="border-b p-2 hidden md:block">
          <Link href={URL_MAP["about"]}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Home"
              className="group"
            >
              {/* <Triangle className="size-5 fill-foreground rotate-180 group-hover:hidden" /> */}
              <div className="size-5 group-hover:block font-bungee-reg text-[20px]">
                V.
              </div>
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
                          : disabled
                          ? "ghost"
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
                <Link href={URL_MAP["about"]}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="mt-auto rounded-lg font-bungee-reg text-[20px]"
                    aria-label="Account"
                  >
                    V.
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
