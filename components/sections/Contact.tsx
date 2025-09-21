"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

// Validation schema
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
    .required("Message is required")
})

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    name: "",
    email: "",
    message: "",
  }

  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setIsLoading(true)

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (response.status === 200) {
        toast.success("Message sent successfully!")
        resetForm()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Failed to send email:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-400 mb-6">
              I'm currently available for freelance work, collaborations, and interesting projects. If you have a
              project that needs a developer with my skill set, or if you just want to chat about technology, feel
              free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <Link href="mailto:manuchimsoemmanuel2k@gmail.com" className="hover:text-gray-300 transition-colors">
                  manuchimsoemmanuel2k@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 mr-3 text-gray-400" />
                <Link
                  href="https://x.com/NwekeManuchimso" 
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  @NwekeManuchimso
                </Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-gray-400" />
                <Link
                   href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" 
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  linkedin.com/in/Nweke-Emmanuel
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid, dirty }) => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                          errors.name && touched.name
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-white/20 focus:ring-white/50"
                        }`}
                      />
                      <ErrorMessage 
                        name="name" 
                        component="div" 
                        className="text-red-400 text-sm mt-1" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                          errors.email && touched.email
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-white/20 focus:ring-white/50"
                        }`}
                      />
                      <ErrorMessage 
                        name="email" 
                        component="div" 
                        className="text-red-400 text-sm mt-1" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                      className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 transition-colors resize-vertical ${
                        errors.message && touched.message
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-white/20 focus:ring-white/50"
                      }`}
                    />
                    <ErrorMessage 
                      name="message" 
                      component="div" 
                      className="text-red-400 text-sm mt-1" 
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading || !isValid || !dirty}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}