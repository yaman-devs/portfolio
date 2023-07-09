"use client";

export default function Contact() {
  return (
    <form
      name="contact"
      data-netlify="true"
      className="flex flex-col justify-center gap-2 items-center min-h-[250px] bg-primary-button"
    >
      <div>
        <input
          className="min-w-[300px] px-2 bg-transparent border focus-visible:outline-none "
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
          className="min-w-[300px] px-2 bg-transparent border focus-visible:outline-none "
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          className="min-w-[300px] min-h-[100px] px-2 bg-transparent border focus-visible:outline-none "
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
  );
}
