"use client"

import Link from "next/link"
import { Mail, Twitter, Linkedin, Github, Send, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(50).matches(/^[a-zA-Z\s]+$/, "Letters only").required("Name is required"),
  email: Yup.string().email("Valid email required").required("Email is required"),
  message: Yup.string().min(10).max(1000).required("Message is required"),
})

const contactLinks = [
  { icon: Mail, label: "Email", value: "manuchimsoemmanuel2k@gmail.com", href: "mailto:manuchimsoemmanuel2k@gmail.com", color: "bg-[#FF6B7A]" },
  { icon: Twitter, label: "X / Twitter", value: "@NwekeManuchimso", href: "https://x.com/NwekeManuchimso", color: "bg-[#2F81F7]" },
  { icon: Linkedin, label: "LinkedIn", value: "Nweke Emmanuel", href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", color: "bg-[#6366F1]" },
  { icon: Github, label: "GitHub", value: "Manuel-co", href: "https://github.com/Manuel-co", color: "bg-black" },
]

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const initialValues = { name: "", email: "", message: "" }

  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setIsLoading(true)
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: values.name, from_email: values.email, message: values.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      if (response.status === 200) { toast.success("Message sent!"); resetForm() }
      else throw new Error()
    } catch { toast.error("Failed to send. Please try again.") }
    finally { setIsLoading(false) }
  }

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black mb-4">
            Let's work{" "}
            <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              together.
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Available for freelance work, collaborations, and interesting projects. Reach out and let's build something great.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">

          {/* Contact links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <Link key={href} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                className="flex items-center gap-4 p-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all no-underline">
                <span className={`w-11 h-11 ${color} border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-sm font-bold text-black truncate">{value}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-black/30 flex-shrink-0" />
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className="bg-[#F5F5F5] border-4 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold text-black mb-6 font-zalando">Send a message</h3>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ errors, touched, isValid, dirty }) => (
                <Form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-black/50 uppercase tracking-widest mb-2">Name</label>
                      <Field id="name" name="name" type="text"
                        className={`w-full px-4 py-3 bg-white border-4 rounded-xl text-black text-sm font-medium outline-none transition-all ${errors.name && touched.name ? "border-red-500" : "border-black focus:border-[#6366F1]"}`} />
                      <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1 font-semibold" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-black/50 uppercase tracking-widest mb-2">Email</label>
                      <Field id="email" name="email" type="email"
                        className={`w-full px-4 py-3 bg-white border-4 rounded-xl text-black text-sm font-medium outline-none transition-all ${errors.email && touched.email ? "border-red-500" : "border-black focus:border-[#6366F1]"}`} />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1 font-semibold" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-black/50 uppercase tracking-widest mb-2">Message</label>
                    <Field as="textarea" id="message" name="message" rows={5}
                      className={`w-full px-4 py-3 bg-white border-4 rounded-xl text-black text-sm font-medium outline-none transition-all resize-vertical ${errors.message && touched.message ? "border-red-500" : "border-black focus:border-[#6366F1]"}`} />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-xs mt-1 font-semibold" />
                  </div>

                  <button type="submit" disabled={isLoading || !isValid || !dirty}
                    className={`flex items-center justify-center gap-2 py-4 font-bold text-sm border-4 border-black rounded-xl transition-all font-zalando ${
                      isLoading || !isValid || !dirty
                        ? "bg-black/20 text-black/40 cursor-not-allowed shadow-none"
                        : "bg-black text-white shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                    }`}>
                    <Send className="w-4 h-4" />
                    {isLoading ? "Sending…" : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}
