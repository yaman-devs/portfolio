"use client";
import ProjectCard from "./project-card";
import img from "@/public/images/LittleMissStyle.png";
import Break from "./break";

export default function Projects() {
  return (
    <div className="relative flex flex-col  items-center mb-8">
      <Break section="Projects" />

      <div className="flex flex-col items-center py-8 md:py-16 xl:py-16 px-4 md:px-28 xl:px-48 2xl:px-72  text-2xl w-full gap-4 md:gap-16 xl:gap-32 ">
        {" "}
        <ProjectCard
          title="Little Miss Style"
          description="Girls dresses clothing brand based in Turkey. Feel free to look around; perhaps you will find something of interest to your daughter."
          tags={["Nextjs", "WixAPI", "Tailwind"]}
          image={img.src}
          url="#"
        />
        <ProjectCard
          title="Little Miss Style"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio autem exercitationem unde doloremque repellat blanditiis quibusdam ducimus sint nesciunt ex aperiam optio pariatur, officiis harum nihil quia consequuntur non molestias corporis et necessitatibus maxime! "
          tags={["Nextjs", "WixAPI", "Tailwind"]}
          image={img.src}
          url="#"
        />
      </div>
    </div>
  );
}
