import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { Form } from "react-router-dom";

import Input from "../components/Input";

function Contact() {
  return (
    <section className="flex h-[90vh] w-full flex-col" id="contactMe">
      {/* Contact Form */}
      <h1 className="mt-8 text-center text-3xl font-semibold">
        Contact <span className="text-primary-700">Me</span>
      </h1>

      <div className="flex flex-1 items-center gap-16 border-2 border-red-100">
        {/* Social Media Reachout Links */}
        <div className="flex h-3/4 w-1/2 flex-col rounded-2xl border-2 border-blue-800 px-8">
          <div className="flex flex-col gap-6 py-8">
            <h4 className="text-2xl font-semibold">Let&apos;s Connect</h4>
            <p>
              I&apos;m currently looking for new oppurtunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="mt-8 flex items-center gap-8 md:gap-12">
            <FaLinkedin className="size-6" />
            <RiTwitterXLine className="size-6" />
            <FaGithub className="size-6" />
            <SiInstagram className="size-6" />
          </div>
        </div>

        <div className="flex h-3/4 w-1/2 items-center justify-center rounded-2xl border-2 border-green-800">
          <Form
            action="/contactMe"
            className="flex size-full flex-col items-center gap-8 px-4 py-8"
          >
            <Input id="fullName" type="string" label="Full Name" />
            <div className="flex w-full flex-col items-stretch justify-center gap-8 md:flex-row md:gap-4">
              <Input id="phoneNo" type="number" label="Phone No." />
              <Input id="emailId" type="email" label="Email ID" />
            </div>
            <Input
              id="message"
              type="string"
              label="Your Message"
              textarea={true}
            />
            <button className="flex h-12 w-40 items-center justify-center gap-4 rounded-md bg-slate-300">
              <p>Get In Touch</p> <FaPaperPlane />
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
