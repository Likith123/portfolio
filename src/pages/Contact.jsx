import Input from "../components/Input";

function Contact() {
  return (
    <section className="w-full min-h-[90vh] bg-lightBgColor px-32">
      {/* Contact Form */}
      <h1 className="pt-8 text-3xl font-semibold text-center">
        Contact <span className="text-primary">Me</span>
      </h1>

      <div className="w-[100%] h-[80%] flex flex-1 justify-center items-center gap-16 pt-12">
        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <form
            action="/contactMe"
            className="size-[100%] flex flex-col items-center justify-center gap-8"
          >
            <Input id="fullName" type="string" label="Full Name" />
            <Input id="phoneNo" type="number" label="Phone No." />
            <Input id="emailId" type="email" label="Email ID" />
            <button className="bg-slate-500 rounded-sm w-40 h-12">
              Get In Touch
            </button>
          </form>
        </div>
        <div className="w-[0.5px] h-[75%] bg-black"></div>
        <div className="w-[50%] h-[100%]">
          <p>SocialMediaLinks</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
