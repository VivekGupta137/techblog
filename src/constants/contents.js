import { SiReact } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { SiSpring } from "react-icons/si";

export const contentsData = [
  {
    title: "React",
    url: "/blog/react",
    icon: (
      <SiReact className="size-7 text-blue-500 group-hover:animate-[spin_5s_linear_infinite]" />
    ),
    children: [
      {
        title: "State Management",
        url: "/blog/react/state-management",
        description: "State Management in React using Context, Redux, Zustand, Recoil, Jotai",
        child: [
          {
            title: "Context API",
            url: "/blog/react/state-management/context",
          },
          {
            title: "Redux",
            url: "/blog/react/state-management/redux",
          },
          {
            title: "Zustand",
            url: "/blog/react/state-management/zustand",
          },
          {
            title: "Recoil",
            url: "/blog/react/state-management/recoil",
          },
          {
            title: "Jotai",
            url: "/blog/react/state-management/jotai",
          },
          {
            title: "Conclusion",
            url: "/blog/react/state-management/conclusion",
          },
        ],
      },
    ],
  },
  {
    title: "Spring",
    url: "/blog/spring",
    icon: <SiSpring className="size-7 text-green-500 " />,
    children: [{
      title: "Spring Security",
      url: "/blog/spring/spring-security",
      description: "Helping people to learn Spring security in a simple way or maybe making notes for myself 😅",
      child: [
        {
          title: "Is Spring Security is EZ ? 🤐",
          url: "/blog/spring/spring-security/security-is-ez",
        },
        {
          title: "Username and Password Authentication",
          url: "#",
        },
        {
          title: "JWT Authentication(Token Based)",
          url: "#",
        },
        {
          title: "OAuth2 Authentication",
          url: "#",
        },
        {
          title: "SAML Authentication",
          url: "#"
        },
        {
          title: "CORS and CSRF 🤬",
          url: "#",
        },
        {
          title: "Conclusion",
          url: "#",
        },
      ],
    },],
  },
  {
    title: "System Design",
    url: "/blog/system-design",
    icon: <MdArchitecture className="size-7  " />,
    children: [],
  },
  {
    title: "Coding",
    url: "/blog/cp",
    icon: <SiLeetcode className="size-7 text-orange-500 " />,
    children: [],
  },
];
