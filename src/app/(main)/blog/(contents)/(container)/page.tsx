import { Card } from "@/components/ui/card";
import { contentsData } from "@/constants/contents";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Page() {
  return (
    <div>
      <div>
        <h1 className="mt-4 mb-2">
          <span className="pt-1 border-t-2 border-[hsl(var(--primary))] font-[500]">
            Blog
          </span>
        </h1>
      </div>
      <div className="flex gap-2">
        {contentsData.map((topics) => {
          const Icon = () => topics.icon;
          const disabled = topics.children.length === 0;
          return (
            <div key={topics.title} className="grow group">
              <Link href={disabled? "#": topics.url}>
                <Card
                  className={cn(
                    "p-3 transition-all duration-200",
                    disabled
                      ? "border-dashed cursor-not-allowed text-muted-foreground"
                      : "dark:group-hover:bg-[#212121]"
                  )}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <Icon />
                    </div>
                    <div>{topics.title}</div>
                    <FaExternalLinkAlt className="text-lg" />
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
