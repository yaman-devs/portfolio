"use client";
import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30%" });
  useEffect(() => {
    isInView
      ? animate(ref.current, {
          width: ["90%", "100%"],
        })
      : animate(ref.current, {
          width: ["100%", "90%"],
          // scaleX: [1, 0.8],
        });
  }, [isInView]);
  return (
    <div className="relative flex flex-col justify-center items-center  py-8 ">
      <div ref={ref} className="bg-secondary  h-full absolute -z-10"></div>
      <h1 className="text-2xl md:text-3xl mb-8">Contact Me</h1>
      <div className="px-10 text-center md:px-32  md:max-w-[60rem] mb-8 md:mb-16">
        I am currently seeking new opportunities.
        <br /> If you are interested in collaborating or have any inquiries,
        please feel free to send me a message, and I will promptly respond to
        you. Thank you!
      </div>
      <form
        method="POST"
        data-netlify="true"
        action={"/"}
        name="contact"
        className="flex flex-col w-full justify-center gap-2 items-center min-h-[250px] "
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            className="min-w-[300px] lg:min-w-[500px] px-2 py-1 bg-transparent border focus-visible:outline-none "
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="min-w-[300px] lg:min-w-[500px] px-2 py-1 bg-transparent border focus-visible:outline-none "
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            className="min-w-[300px] lg:min-w-[500px] min-h-[100px] px-2 py-1 bg-transparent border focus-visible:outline-none "
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-2 mt-4 bg-transparent border focus-visible:outline-none hover:opacity-75 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
