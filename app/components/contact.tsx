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
  {
    icon: "icons/twitter.svg",
    title: "Twitter",
    value: "@yamansdev",
    link: "https://www.x.com/yamansdev/",
  },
];
export default function Contact() {
  return (
    <div
      id="contactList"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
    >
      {contact.map((contact, index) => (
        <div
          className="flex items-center gap-4 p-4 bg-slate-900 border border-amber-400 rounded-md"
          key={index}
        >
          <Image
            src={contact.icon}
            alt={contact.title}
            width={32}
            height={32}
            className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] "
          />
          <div className="flex flex-col h-full justify-center ">
            <h1 className="text-lg font-bold ">{contact.title}</h1>
            <Link
              href={contact.link}
              target="_blank"
              className="text-gray-400 text-sm"
            >
              {contact.value}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
