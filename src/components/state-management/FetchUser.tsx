import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, CheckCheckIcon, TriangleAlert } from "lucide-react";
import Link from "next/link";

interface FetchUserProps {
  getNextUser: () => void;
  getPreviousUser: () => void;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  userId: number;
}

const FetchUser = ({
  getNextUser,
  getPreviousUser,
  user,
  status,
  userId,
}: FetchUserProps) => {
    const mappedUser = {
    id: user?.id,
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    };
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`

  return (
    <Card className="flex flex-col justify-between min-h-[350px] relative">
      <div>
        <div>
            <h3 className="font-semibold text-lg text-primary my-2 ml-2">User Information</h3>
          <pre className="ml-2 font-jb-mono">
            {JSON.stringify(mappedUser, null, 4)}
          </pre>
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <Button variant={"outline"} onClick={getPreviousUser} disabled={(userId ?? 10) <= 1}>
            <ArrowLeft className="size-5 mr-2" /> Previous User
          </Button>
          <Button variant={"outline"} onClick={getNextUser} disabled={(userId ?? 10) >= 10}>
            Next User
            <ArrowRight className="size-5 ml-2" />
          </Button>
        </div>
        <div className="break-all flex gap-2 mt-2 ml-2">
            <b>API:</b>
            <Link href={url} target="_blank" className="text-muted-foreground hover:underline">
                {url}
            </Link>
        </div>
      </div>

      <div
        className={cn(
          "self-end px-2 rounded py-1",
          status === "succeeded"
            ? "bg-green-700"
            : status === "loading"
            ? "bg-yellow-600"
            : status === "failed"
            ? "bg-red-500"
            : "bg-gray-500"
        )}
      >
        <div className="flex gap-2">
          {status === "loading" ? <TriangleAlert size="1.5em" /> : null}
          {status.toLocaleUpperCase()}
          {status === "succeeded" ? <CheckCheckIcon size="1.5em" /> : null}
        </div>
      </div>
    </Card>
  );
};

export default FetchUser;
