"use client"
import Posts from "@/components/Posts";
import { contentsData } from "@/constants/contents";
import { notFound, usePathname } from "next/navigation";

const Page = () => {
    const pathName = usePathname();
    const topicPosts = contentsData.find((topic) => pathName.startsWith(topic.url));
    if(!topicPosts) return notFound();


  return (
    <div>
      <div>
        <h1 className="mt-4 mb-2">
          <span className="pt-1 border-t-2 border-[hsl(var(--primary))] font-[500]">
            Notes and Experiments in {topicPosts.title}
          </span>
        </h1>
      </div>
      <Posts />
    </div>
  );
};

export default Page;
