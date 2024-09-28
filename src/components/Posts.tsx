"use client";
import CONSTANTS from "@/constants/constants";
import { contentsData } from "@/constants/contents";
import { Card } from "./ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

const Posts = () => {
  const pathName = usePathname();
  

  const topicPosts = contentsData.find((topic) => pathName.startsWith(topic.url));

  if (!topicPosts) return notFound();

  return (
    <div>
      {topicPosts.children.map((post, index) => (
        <Link href={post.url} key={post.title} className="group ">
          <Card className="p-3 dark:group-hover:bg-[#212121] cursor-pointer transition-all duration-200">
            <div className="flex justify-between border-b dark:group-hover:border-[var(--primary)] transition-all duration-200">
              <h2 className="font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 font-gt-bold">
                {post.title}
              </h2>

              <FaExternalLinkAlt className="text-lg" />
            </div>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
            <div></div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
