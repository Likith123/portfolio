import Input from "../components/Input";

function Contact() {
  return (
    <section className="bg-primary-700-100 flex h-[90vh] w-full flex-col px-32">
      {/* Contact Form */}
      <h1 className="mt-8 text-center text-3xl font-semibold">
        Contact <span className="text-primary-700">Me</span>
      </h1>

      <div className="flex flex-1 items-center gap-16 border-2 border-red-100">
        <div className="flex h-3/4 w-1/2 items-center justify-center rounded-2xl border-2 border-green-800">
          <form
            action="/contactMe"
            className="flex size-full flex-col items-center gap-8 px-4 py-8"
          >
            <Input id="fullName" type="string" label="Full Name" />
            <div className="flex w-full items-stretch justify-center gap-4">
              <Input id="phoneNo" type="number" label="Phone No." />
              <Input id="emailId" type="email" label="Email ID" />
            </div>
            <Input id="message" type="string" label="Your Message" textarea = {true}/>
            <button className="h-12 w-40 rounded-md bg-slate-300">
              Get In Touch
            </button>
          </form>
        </div>

        {/* Social Media Reachout Links */}
        <div className="flex h-3/4 w-1/2 justify-center rounded-2xl border-2 border-blue-800">
          <p>SocialMediaLinks</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
