import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase2,
  IconUser,
  IconMail,
  IconFolderHeart,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function FloatingDockDemo() {
  const navigate = useNavigate();
  const links = [
    {
      title: "About me",
      icon: (
        <IconUser className="h-full w-full text-gray-500 dark:text-gray-300" onClick={()=>navigate("/")}/>
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <IconFolderHeart className="h-full w-full text-gray-500 dark:text-gray-300" />
      ),
      href: "#",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase2 className="h-full w-full text-gray-500 dark:text-gray-300" />
      ),
      href: "#",
    },
    {
      title: "Contact me",
      icon: (
        <IconMail className="h-full w-full text-gray-500 dark:text-gray-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-gray-500 dark:text-gray-300" onClick={()=>window.open("https://www.linkedin.com/in/joan-sebastian-ruiz-angarita-b798b8316/","_blank")}/>
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-gray-500 dark:text-gray-300" onClick={()=>window.open("https://github.com/JoanSebastianRuiz", "_blank")} />
      ),
      href: "#",
    },
  ];
  return (
    (<div className="flex justify-center">
        <div className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="absolute bottom-2 right-2"
          desktopClassName="absolute bottom-2"
          items={links} />
      </div>
    </div>
)
  );
}



