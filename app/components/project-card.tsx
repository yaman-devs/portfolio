import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
}: {
  title: string;
  description: string;
  tags: Array<string>;
  image: string;
}) {
  return (
    <>
      {" "}
      <div className="hidden xl:grid xl:grid-cols-10 gap-0">
        <div className="flex flex-col col-span-4 gap-2 z-10">
          <h1 className="text-2xl">{title}</h1>
          <p className=" bg-secondary xl:w-[110%] rounded-lg p-4 text-slate-400">
            {description}
          </p>
          <ul className="flex gap-2 text-gray-500">
            {tags.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Link href={"#"} className="col-span-6 relative ">
          <div className="h-full w-full -z-10 absolute bg-primary  rounded-lg "></div>
          <Image
            src={image}
            alt="Project Image"
            width={1600}
            height={900}
            className="aspect-video rounded-lg hover:translate-x-[2%] hover:translate-y-[2%] "
          />
        </Link>
      </div>
      <div className="flex flex-col xl:hidden gap-4">
        <div className="flex flex-col text-center col-span-4 gap-2">
          <h1 className="text-2xl">{title}</h1>
          <Link href={"#"} className="col-span-6">
            <Image
              src={image}
              alt="Project Image"
              width={1600}
              height={900}
              className="aspect-video rounded-lg -z-10"
            />
          </Link>
          <p className=" bg-secondary xl:w-[110%] rounded-lg p-4 text-slate-400">
            {description}
          </p>
          <ul className="flex justify-center gap-2 text-gray-500">
            {tags.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
