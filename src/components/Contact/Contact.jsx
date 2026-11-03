
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_gzh5bnv",
        "template_piboy4r",
        form.current,
        "G0q1y2y1n32ZwSpfn"
      );

      form.current.reset();

      toast.success("Message sent successfully! 🚀", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error sending message:", error);

      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#8245ec]/70 focus:bg-[#8245ec]/[0.06] focus:shadow-[0_0_15px_rgba(130,69,236,0.12)]";

  return (
    <section
      id="contact"
      className="relative px-[7vw] py-20 font-sans md:px-[7vw] lg:px-[12vw]"
    >
      <ToastContainer />

      {/* Section Heading */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a78bfa]">
          Let's Connect
        </p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Get In Touch
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#8245ec]" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          Have an opportunity, a question, or just want to connect?
          I'd love to hear from you. Drop me a message!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="relative mx-auto max-w-2xl">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#8245ec]/20 via-purple-500/10 to-pink-500/20 opacity-70 blur-xl" />

        <div className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_40px_rgba(130,69,236,0.08)] backdrop-blur-xl sm:p-10">
          {/* Form Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8245ec]/30 bg-[#8245ec]/10 text-2xl">
              ✉️
            </div>

            <h3 className="text-xl font-bold text-white md:text-2xl">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="user_name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="user_name"
                type="text"
                name="user_name"
                placeholder="Enter your name"
                autoComplete="name"
                required
                className={inputStyle}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="user_email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>

              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className={inputStyle}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                required
                className={inputStyle}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className={`${inputStyle} resize-none`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8245ec] to-purple-600 py-4 text-sm font-semibold text-white shadow-[0_5px_20px_rgba(130,69,236,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(130,69,236,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending Message..." : "Send Message"}

              {!isSending && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
          </form>

          {/* Bottom Note */}
          <p className="mt-6 text-center text-xs text-gray-500">
            Your information will only be used to respond to your message.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
