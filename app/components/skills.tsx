import Image from "next/image";

const SkillCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="opacity-0 flex items-center justify-start gap-4 border border-slate-800 rounded-md px-4 py-6 aspect-[7/2]">
      <Image
        src={image}
        className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px]"
        alt={title}
        width={32}
        height={32}
      />
      <div className="flex flex-col h-full justify-center ">
        <div className="text-sm sm:text-base font-bold">{title}</div>
        <div className="text-xs md:text-sm  text-gray-400">{description}</div>
      </div>
    </div>
  );
};

const skills = [
  {
    image: "/icons/html.svg",
    title: "HTML",
    description: "Markup Language",
  },
  {
    image: "/icons/css.svg",
    title: "CSS",
    description: "Styling Language",
  },
  {
    image: "/icons/javascript.svg",
    title: "Javascript",
    description: "Programming Language",
  },
  {
    image: "/icons/react.svg",
    title: "React",
    description: "JavaScript library",
  },
  {
    image: "/icons/typescript.svg",
    title: "Typescript",
    description: "Typed JavaScript",
  },
  {
    image: "/icons/vuejs.svg",
    title: "Vue.js",
    description: "JavaScript framework",
  },
  {
    image: "/icons/nextjs.svg",
    title: "Next.js",
    description: "React framework",
  },
  {
    image: "/icons/tailwind.svg",
    title: "Tailwind",
    description: "CSS framework",
  },
  {
    image: "/icons/git.svg",
    title: "Git",
    description: "version control",
  },
  {
    image: "/icons/nodejs.svg",
    title: "Node.js",
    description: "Server-side JavaScript runtime",
  },
];

export default function Skills() {
  return (
    <div
      id="skillset"
      className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4  "
    >
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}
