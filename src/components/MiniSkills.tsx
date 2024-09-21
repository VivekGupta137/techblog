import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { SiApachespark } from "react-icons/si";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const MiniSkills = () => {
  const skills = [
    {
      title: "React",
      icon: <FaReact className="size-6 dark:text-blue-400 text-blue-600" />,
      description: "A JavaScript library for building user interfaces.",
      link: "https://reactjs.org/",
      group: "UI",
    },
    {
      title: "Spring",
      icon: <SiSpring className="size-6 dark:text-green-400 text-green-500" />,
      description: "A framework for building Java applications.",
      link: "https://spring.io/",
      group: "Backend",
    },
    {
      title: "Docker",
      icon: <SiDocker className="size-6 dark:text-blue-400 text-blue-500" />,
      description: "A platform for developing, shipping, and running applications.",
      link: "https://www.docker.com/",
      group: "DevOps",
    },
    {
      title: "AWS",
      icon: <FaAws className="size-6 dark:text-orange-400 text-orange-500" />,
      description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      link: "https://aws.amazon.com/",
      group: "Cloud",
    },
    {
      title: "SQL",
      icon: <TbSql className="size-6 dark:text-blue-500 text-blue-700" />,
      description: "A domain-specific language used in programming and designed for managing data held in a relational database management system.",
      link: "https://en.wikipedia.org/wiki/SQL",
      group: "Database",
    },
    {
      title: "Apache Spark",
      icon: (
        <SiApachespark className="size-6 dark:text-orange-400 text-orange-600" />
      ),
      description: "An open-source unified analytics engine for large-scale data processing.",
      link: "https://spark.apache.org/",
      group: "Big Data",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-10 justify-center">
      {/* skills */}
      {skills.map((skill) => (
        <Popover key={skill.title}>
          <PopoverTrigger asChild>
            <Button aria-label={skill.title} variant={"ghost"} className="p-2 rounded-full bg-background dark:bg-background-dark ">
              {skill.icon}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs md:max-w-sm">
            <div className="text-sm space-y-2">
              <div className="flex items-center justify-center mb-2 space-x-2">
                {skill.icon}
                <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {skill.title}
                </div>
              </div>
              <div className="flex justify-center space-x-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                  {skill.group}
                </span>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600"
                >
                  Official Page
                </a>
              </div>
              <div className="text-left text-gray-700 dark:text-gray-300">
                {skill.description}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default MiniSkills;