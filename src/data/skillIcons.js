import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiMysql,
  SiFigma,
  SiVuedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiDocker,
  SiCplusplus,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const matchers = [
  [/html/i, SiHtml5],
  [/css/i, SiCss3],
  [/typescript/i, SiTypescript],
  [/javascript/i, SiJavascript],
  [/next/i, SiNextdotjs],
  [/react/i, SiReact],
  [/vue/i, SiVuedotjs],
  [/tailwind/i, SiTailwindcss],
  [/python/i, SiPython],
  [/php/i, SiPhp],
  [/c\+\+/i, SiCplusplus],
  [/docker/i, SiDocker],
  [/node/i, SiNodedotjs],
  [/sql/i, SiMysql],
  [/figma/i, SiFigma],
  [/github/i, SiGithub],
  [/git/i, SiGit],
];

export function getSkillIcon(skillName) {
  const match = matchers.find(([pattern]) => pattern.test(skillName));
  return match ? match[1] : FiCode;
}
