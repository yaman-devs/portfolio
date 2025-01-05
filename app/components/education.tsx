function EducationCard({
  FOS,
  institution,
  startDate,
  endDate,
}: {
  FOS: string;
  institution: string;
  startDate: string;
  endDate: string;
}) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-slate-900 border border-slate-800 rounded-md">
      <h1 className="text-lg font-bold ">{FOS}</h1>
      <p className="text-gray-400 text-sm lg:text-base">{institution}</p>
      <p className="text-gray-400 text-sm">
        {startDate} - {endDate}
      </p>
    </div>
  );
}

const education = [
  {
    FOS: "Associate degree in Computer Programming",
    institution: "Anadolu University",
    startDate: "2021",
    endDate: "2023",
  },
  {
    FOS: "Full Stack Web Development",
    institution: "The Odin Project",
    startDate: "2022",
    endDate: "2023",
  },
];

export default function Education() {
  return (
    <div id="educationList" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {education.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </div>
  );
}
