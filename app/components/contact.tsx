import Image from "next/image";
import Link from "next/link";

const contact = [
  {
    icon: "icons/email.svg",
    title: "Email",
    value: "yamansdev@gmail.com",
    link: "mailto:yamansdev@gmail.com",
  },
  {
    icon: "icons/linkedin.svg",
    title: "Linkedin",
    value: "@yaman-nayal",
    link: "https://www.linkedin.com/in/yaman-nayal/",
  },
];
export default function Contact() {
  return (
    <div
      id="contactList"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
    >
      {contact.map((contact, index) => (
        <Link href={contact.link} target="_blank" className="" key={index}>
          <div className="flex items-center gap-4 p-4 bg-slate-900 border border-amber-400 rounded-md hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90">
            <Image
              src={contact.icon}
              alt={contact.title}
              width={32}
              height={32}
              className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] "
            />
            <div className="flex flex-col h-full justify-center ">
              <h1 className="text-lg font-bold ">{contact.title}</h1>
              <div className="text-gray-400 text-sm">{contact.value}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
