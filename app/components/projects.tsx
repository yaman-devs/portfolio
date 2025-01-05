import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  image,
  title,
  description,
  source,
  link,
  technologies,
}: {
  image: string;
  title: string;
  description: string;
  source: string;
  link: string;
  technologies: string[];
}) {
  return (
    <div className="flex flex-col max-w-[500px] gap-4 p-3 sm:p-4  bg-slate-900 border border-slate-800  rounded-md">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="aspect-video rounded-lg "
      />
      <div>
        <h1 className="text-lg xl:text-xl font-bold ">{title}</h1>
        <p className="text-gray-400 text-sm xl:text-base">{description}</p>
      </div>

      <div className="flex  max-sm:flex-col max-sm:gap-4 mt-auto">
        <ul className="flex items-center gap-2 ">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="text-gray-400 border border-slate-700 rounded-full text-xs xl:text-sm px-2 py-1 "
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="sm:ml-auto flex gap-4 text-sm md:text-lg">
          <Link
            href={source}
            className="opacity-75 hover:opacity-100 flex items-center gap-2 "
            target="_blank"
          >
            <Image
              src="/icons/source.svg"
              alt={title + " source code"}
              width={20}
              height={20}
            />
            Source
          </Link>
          <Link
            href={link}
            className="opacity-75 hover:opacity-100 flex items-center gap-2"
            target="_blank"
          >
            <Image
              src="/icons/website.svg"
              alt={title + " live website"}
              width={20}
              height={20}
            />
            Website
          </Link>
        </div>
      </div>
    </div>
  );
}
const projects = [
  {
    image: "/projects/1.png",
    title: "Personal Portfolio",
    description:
      "My portfolio showcases my work as a web developer, featuring responsive designs, interactive elements, and a focus on clean, functional websites.",
    source: "https://github.com/yamansdev/yamansdev.github.io",
    link: "https://yamansdev.github.io/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    image: "/projects/2.png",
    title: "Tic Tac Toe Unlimited",
    description:
      "This Tic Tac Toe game has no draws. Play vs a friend or computer. Earn points by aligning 3 marks in a row (up, down, across, or diagonally). First to reach 3000 points wins.",
    source: "https://github.com/yamansdev/tic-tac-toe-unlimited",
    link: "https://tic-tac-toe-unlimited.netlify.app/",
    technologies: ["vue.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <div id="projectsList" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
