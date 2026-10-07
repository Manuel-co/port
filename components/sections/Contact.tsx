"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Label, Note, RevealLine, ease } from "../desk/primitives"

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(50).matches(/^[a-zA-Z\s]+$/, "Letters only").required("Name is required"),
  email: Yup.string().email("Valid email required").required("Email is required"),
  message: Yup.string().min(10).max(1000).required("Message is required"),
})

const contactLinks = [
  { label: "Email", href: "mailto:manuchimsoemmanuel2k@gmail.com" },
  { label: "X / Twitter", href: "https://x.com/NwekeManuchimso" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" },
  { label: "GitHub", href: "https://github.com/Manuel-co" },
]

const inputBase =
  "w-full bg-transparent border-0 border-b py-3 text-paper text-base outline-none placeholder:text-paper/30 transition-colors"

export function Contact({
  lines = ["Do you really", "need to keep", "scrolling?"],
  notes = ["Freelance, contract or full-time.", "The value is in building, not browsing."],
  label = "Get in touch",
  as: Heading = "h2",
}: {
  lines?: [string, string, string]
  notes?: [string, string]
  label?: string
  as?: "h1" | "h2"
} = {}) {
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

  const field = (invalid: boolean) =>
    `${inputBase} ${invalid ? "border-red-400" : "border-paper/50 focus:border-paper"}`

  return (
    <section id="contact" className="bleed-ink bg-ink text-paper pt-28 md:pt-36">
      <div className="px-4 md:px-6">
        <Label index="06" inverse>{label}</Label>

        <Heading className="sr-only">{lines.join(" ")}</Heading>
        <div className="mt-10">
          <div aria-hidden>
            <RevealLine inverse className="display-lg">{lines[0]}</RevealLine>
            <RevealLine inverse className="display-lg" delay={0.08}>{lines[1]}</RevealLine>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 border-b border-paper/70">
            <div aria-hidden>
              <RevealLine inverse rule={false} className="display-lg" delay={0.16}>{lines[2]}</RevealLine>
            </div>
            <div className="flex gap-10 pb-4">
              <Note inverse>{notes[0]}</Note>
              <Note inverse>{notes[1]}</Note>
            </div>
          </div>
        </div>

        <div id="contact-form" className="mt-20 grid lg:grid-cols-[1fr_1.3fr] gap-16 scroll-mt-24">
          {/* Links */}
          <div className="min-w-0">
            {contactLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                className="group flex items-baseline justify-between gap-4 border-b border-paper/30 py-4 first:border-t"
              >
                <span className="flex-1 min-w-0 truncate text-base md:text-lg transition-transform duration-300 group-hover:translate-x-2">{label}</span>
                <span className="transition-transform duration-300 group-hover:-rotate-45">→</span>
              </Link>
            ))}
          </div>

          {/* Form */}
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isValid, dirty }) => (
              <Form className="flex flex-col gap-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="note uppercase tracking-wide text-paper/50">Name</label>
                    <Field id="name" name="name" type="text" placeholder="Your name" className={field(!!(errors.name && touched.name))} />
                    <ErrorMessage name="name" component="p" className="text-red-400 text-xs mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="note uppercase tracking-wide text-paper/50">Email</label>
                    <Field id="email" name="email" type="email" placeholder="you@company.com" className={field(!!(errors.email && touched.email))} />
                    <ErrorMessage name="email" component="p" className="text-red-400 text-xs mt-1" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="note uppercase tracking-wide text-paper/50">Message</label>
                  <Field as="textarea" id="message" name="message" rows={4} placeholder="Tell me what you're building…"
                    className={`${field(!!(errors.message && touched.message))} resize-none`} />
                  <ErrorMessage name="message" component="p" className="text-red-400 text-xs mt-1" />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !isValid || !dirty}
                  className="pill-inverse self-start px-8 py-3 disabled:opacity-30 disabled:pointer-events-none"
                >
                  {isLoading ? "Sending…" : "Click to send"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Signature sign-off — the SVG is used as a mask so it paints in the paper colour */}
      {/* The observer sits on the unclipped wrapper; a fully clipped element never counts as in view */}
      {/* <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-28 px-4 md:px-6 pb-6"
      >
        <motion.img
          variants={{ hidden: { clipPath: "inset(0 100% 0 0)" }, shown: { clipPath: "inset(0 0% 0 0)" } }}
          transition={{ duration: 1.6, ease }}
          src="/manuchim-logo.svg"
          alt="Manuchim signature"
          draggable={false}
          // Full width at its natural proportions. The file is black; invert renders it in the paper colour.
          className="block w-50% h-auto select-none invert-[0.94]"
        />
      </motion.div> */}
    </section>
  )
}
