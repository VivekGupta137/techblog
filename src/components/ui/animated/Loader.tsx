import { cn } from "@/lib/utils";
import { GrPowerCycle } from "react-icons/gr";


const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn("animate-spin flex items-center ", className)}
      role="status"
      aria-label="loading"
    >   <GrPowerCycle className="text-secondary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
