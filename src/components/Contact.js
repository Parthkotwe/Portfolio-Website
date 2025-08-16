import React, { useRef, useState } from "react";
import { Element } from "react-scroll"; // for smooth scrolling
import { FaPaperPlane, FaRegSmileBeam } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_tqw1if5", "template_rxyqqci", form.current, {
        publicKey: "IVlDdqGGBNvUF3b6N",
      })
      .then(
        () => {
          form.current.reset();
          setIsLoading(false);
          setIsSubmitted(true);
        },
        () => {
          setIsLoading(false);
        }
      );
  };

  return (
    <Element
      name="contact"
      className="text-center mb-20 sm:mb-28 pb-10 px-4 w-[min(100%,38rem)] mx-auto"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 -mt-2">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:parthkotwe848@gmail.com">
          parthkotwe848@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Form */}
      <form
        className="mt-10 flex flex-col items-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="h-14 w-full rounded-lg border border-black/10 px-4"
          placeholder="Your email"
          name="user_email"
          type="email"
          disabled={isSubmitted || isLoading}
          required
          maxLength={500}
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          name="message"
          disabled={isSubmitted || isLoading}
          required
          maxLength={1000}
        />
        <button
          type="submit"
          value="Send"
          disabled={isSubmitted || isLoading}
          className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 ${
            isSubmitted
              ? "bg-slate-400 hover:bg-slate-400"
              : "bg-gray-800 hover:bg-gray-950"
          }`}
        >
          {isLoading ? (
            <>
              Sending
              <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
            </>
          ) : isSubmitted ? (
            <>
              Sent{" "}
              <FaRegSmileBeam className="text-lg opacity-70 transition-all group-hover:scale-100" />
            </>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </Element>
  );
}
