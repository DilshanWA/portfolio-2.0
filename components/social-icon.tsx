import React from "react";
import { useTheme } from "next-themes";
import {
  RiLinkedinLine,
  RiFacebookLine,
  RiGithubLine,
} from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";

const socialIcons = [
  {
    icon: <RiGithubLine className="cursor-pointer hover:text-accent" />,
    href: "https://github.com/DilshanWA",
  },
  {
    icon: <RiLinkedinLine className="cursor-pointer hover:text-accent" />,
    href: "https://www.linkedin.com/in/dilshan-madusanka/",
  },
  {
    icon: <RiFacebookLine className="cursor-pointer hover:text-accent" />,
    href: "https://facebook.com",
  },
  {
    icon: <IoLogoInstagram className="cursor-pointer hover:text-accent" />,
    href: "https://instagram.com",
  }
]

export default function SocialIcon() {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col gap-5 text-2xl ${
        theme === "light" ? "text-gray-700" : "text-gray-300"
      }`}
    >
      {socialIcons.map((icons,index)=>(
        <a key={index} href={icons.href} target="_blank" rel="noopener noreferrer">
          {icons.icon}
        </a>
      ))}
    </div>
  );
}