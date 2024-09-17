import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

const BadgeLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={badgeVariants({ variant: "secondary" })}
    >
      <div className="flex items-center gap-1">
        <div className="bold">{label}</div>
        <SquareArrowOutUpRight size={10} />
      </div>
    </Link>
  );
};

export default BadgeLink;
