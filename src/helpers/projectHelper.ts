import AstroIcon from "../icons/tech/AstroIcon.astro";
import BootstrapIcon from "../icons/tech/BootstrapIcon.astro";
import CssIcon from "../icons/tech/CssIcon.astro";
import CypressIcon from "../icons/tech/CypressIcon.astro";
import HtmlIcon from "../icons/tech/HtmlIcon.astro";
import JavaScriptIcon from "../icons/tech/JavaScriptIcon.astro";
import JestIcon from "../icons/tech/JestIcon.astro";
import Materialicon from "../icons/tech/Materialicon.astro";
import NextIcon from "../icons/tech/NextIcon.astro";
import NodeIcon from "../icons/tech/NodeIcon.astro";
import PostgreIcon from "../icons/tech/PostgreIcon.astro";
import ReactIcon from "../icons/tech/ReactIcon.astro";
import TailwindIcon from "../icons/tech/TailwindIcon.astro";
import TypescriptIcon from "../icons/tech/TypescriptIcon.astro";

const TAG_CLASS = "bg-black text-white";

export const TAGS = {
  ASTRO: { name: "Astro", class: TAG_CLASS, icon: AstroIcon },
  BOOTSTRAP: { name: "Bootstrap", class: TAG_CLASS, icon: BootstrapIcon },
  CSS: { name: "CSS", class: TAG_CLASS, icon: CssIcon },
  CYPRESS: { name: "Cypress", class: TAG_CLASS, icon: CypressIcon },
  HTML: { name: "HTML", class: TAG_CLASS, icon: HtmlIcon },
  JAVASCRIPT: { name: "Javascript", class: TAG_CLASS, icon: JavaScriptIcon },
  JEST: { name: "Jest", class: TAG_CLASS, icon: JestIcon },
  MATERIALUI: { name: "Material UI", class: TAG_CLASS, icon: Materialicon },
  NEXT: { name: "Next.js", class: TAG_CLASS, icon: NextIcon },
  NODEJS: { name: "Node.js", class: TAG_CLASS, icon: NodeIcon },
  POSTGRESQL: { name: "PostgreSQL", class: TAG_CLASS, icon: PostgreIcon },
  REACT: { name: "React", class: TAG_CLASS, icon: ReactIcon },
  TAILWIND: { name: "Tailwind", class: TAG_CLASS, icon: TailwindIcon },
  TYPESCRIPT: { name: "Typescript", class: TAG_CLASS, icon: TypescriptIcon },
};
