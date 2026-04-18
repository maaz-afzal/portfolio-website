import { useState } from "react";
import emailjs from "emailjs-com";
import FadeIn from "./FadeIn";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message too short (min 10 chars)";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          {/* Header */}
          <p className="text-purple-400 text-xs tracking-[3px] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-medium text-white mb-4">Contact Me</h2>
          <p className="text-gray-400 text-sm mb-12">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          {/* Card */}
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-8 text-left">
            <div className="flex flex-col gap-4 mb-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition ${
                    errors.name
                      ? "border-red-500/60"
                      : "border-purple-500/20 focus:border-purple-500/50"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition ${
                    errors.email
                      ? "border-red-500/60"
                      : "border-purple-500/20 focus:border-purple-500/50"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition resize-none ${
                    errors.message
                      ? "border-red-500/60"
                      : "border-purple-500/20 focus:border-purple-500/50"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm py-3 rounded-xl transition duration-300"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {/* Success / Error */}
            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-4">
                Message sent successfully! I'll get back to you soon. 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Divider */}
          <p className="text-gray-600 text-xs my-6">— or reach me directly —</p>

          {/* Direct Links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:maazafzal.khattak007@gmail.com"
              className="text-sm text-purple-400 border border-purple-500/30 px-5 py-2 rounded-full hover:bg-purple-500/10 transition duration-300"
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/maazafzalkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 border border-purple-500/30 px-5 py-2 rounded-full hover:bg-purple-500/10 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/maaz-afzal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 border border-purple-500/30 px-5 py-2 rounded-full hover:bg-purple-500/10 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
