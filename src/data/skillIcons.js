import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiNestjs,
  SiMysql,
  SiFigma,
  SiMiro,
  SiTailwindcss,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiCode, FiImage } from "react-icons/fi";

const matchers = [
  [/html/i, SiHtml5],
  [/css/i, SiCss],
  [/typescript/i, SiTypescript],
  [/javascript|^js$/i, SiJavascript],
  [/next/i, SiNextdotjs],
  [/nest/i, SiNestjs],
  [/react/i, SiReact],
  [/tailwind/i, SiTailwindcss],
  [/python/i, SiPython],
  [/java/i, FaJava],
  [/docker/i, SiDocker],
  [/node/i, SiNodedotjs],
  [/sql/i, SiMysql],
  [/figma/i, SiFigma],
  [/miro/i, SiMiro],
  [/canva/i, FiImage],
  [/github/i, SiGithub],
  [/git/i, SiGit],
];

export function getSkillIcon(skillName) {
  const match = matchers.find(([pattern]) => pattern.test(skillName));
  return match ? match[1] : FiCode;
}
