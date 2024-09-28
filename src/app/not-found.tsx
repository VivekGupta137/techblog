import { Button } from "@/components/ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="h-[100vh] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <div className="relative flex-col md:flex-row z-10 text-5xl md:text-8xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text  flex items-center gap-2 md:gap-8">
          <h1 className="font-gt-bold">404</h1>
        </div>
        <div className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text  flex items-center gap-2 md:gap-8">
          <h1 className="font-gt-bold">Oops! Page not found.</h1>
        </div>
        <p className="font-gt-reg text-muted-foreground mt-5 px-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" passHref legacyBehavior>
          <Button className="mt-4 z-10">Go back home</Button>
        </Link>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export default NotFound;
