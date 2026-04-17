"use client"

import Link from "next/link"
import { Mail, Twitter, Linkedin, Github, Send, ArrowUpRight } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .required("Message is required"),
})

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "manuchimsoemmanuel2k@gmail.com",
    href: "mailto:manuchimsoemmanuel2k@gmail.com",
    external: false,
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@NwekeManuchimso",
    href: "https://x.com/NwekeManuchimso",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Nweke Emmanuel",
    href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Manuel-co",
    href: "https://github.com/Manuel-co",
    external: true,
  },
]

const inputStyle = (hasError: boolean) => ({
  width: "100%",
  padding: "11px 14px",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)"}`,
  borderRadius: 10,
  color: "#fff",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
  fontFamily: "inherit",
})

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
      if (response.status === 200) {
        toast.success("Message sent successfully!")
        resetForm()
      } else {
        throw new Error("Failed")
      }
    } catch {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      style={{ background: "rgb(5,5,5)", padding: "96px 0", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
          <span style={{
            display: "inline-block", fontSize: 11, fontWeight: 600,
            color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em",
            textTransform: "uppercase", marginBottom: 14,
          }}>
            Contact
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Let's work<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>together.</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
            Available for freelance work, collaborations, and interesting projects. Reach out and let's build something great.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }} className="lg:grid-cols-[1fr_1.4fr]">

          {/* Left — contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "16px 18px", borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s",
                  group: "true",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <span style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: "rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon style={{ width: 17, height: 17, color: "rgba(255,255,255,0.7)" }} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {value}
                  </p>
                </div>
                <ArrowUpRight style={{ width: 14, height: 14, color: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>

          {/* Right — form */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            padding: "32px",
          }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Send a message
            </h3>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ errors, touched, isValid, dirty }) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="sm:grid-cols-2 grid-cols-1">
                    <div>
                      <label htmlFor="name" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.45)", marginBottom: 7, letterSpacing: "0.02em" }}>
                        Name
                      </label>
                      <Field
                        id="name" name="name" type="text"
                        style={inputStyle(!!(errors.name && touched.name))}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.3)";
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor = errors.name && touched.name ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)";
                        }}
                      />
                      <ErrorMessage name="name" component="p" className="text-red-400 text-xs mt-1.5" />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.45)", marginBottom: 7, letterSpacing: "0.02em" }}>
                        Email
                      </label>
                      <Field
                        id="email" name="email" type="email"
                        style={inputStyle(!!(errors.email && touched.email))}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.3)";
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          e.target.style.borderColor = errors.email && touched.email ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)";
                        }}
                      />
                      <ErrorMessage name="email" component="p" className="text-red-400 text-xs mt-1.5" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: "block", fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.45)", marginBottom: 7, letterSpacing: "0.02em" }}>
                      Message
                    </label>
                    <Field
                      as="textarea" id="message" name="message" rows={5}
                      style={{ ...inputStyle(!!(errors.message && touched.message)), resize: "vertical" as const }}
                      onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.3)";
                      }}
                      onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                        e.target.style.borderColor = errors.message && touched.message ? "rgba(239,68,68,0.6)" : "rgba(255,255,255,0.1)";
                      }}
                    />
                    <ErrorMessage name="message" component="p" className="text-red-400 text-xs mt-1.5" />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !isValid || !dirty}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      padding: "12px 24px", borderRadius: 100,
                      background: isLoading || !isValid || !dirty ? "rgba(255,255,255,0.1)" : "#fff",
                      color: isLoading || !isValid || !dirty ? "rgba(255,255,255,0.3)" : "#000",
                      fontSize: 14, fontWeight: 600, border: "none",
                      cursor: isLoading || !isValid || !dirty ? "not-allowed" : "pointer",
                      transition: "background 0.2s, color 0.2s",
                      fontFamily: "inherit",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <Send style={{ width: 14, height: 14 }} />
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
