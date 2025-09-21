"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { AnimatedPage, AnimatedSection } from "@/components/ui/animated-page"
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

export default function ContactPage() {
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work, collaborations, and interesting projects. Let's work together!
            </p>
          </AnimatedPage>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isValid, dirty }) => (
                    <Form className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-200">
                            Name
                          </label>
                          <Field
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400 transition-colors ${
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
                          <label htmlFor="email" className="text-sm font-medium text-gray-200">
                            Email
                          </label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400 transition-colors ${
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
                        <label htmlFor="message" className="text-sm font-medium text-gray-200">
                          Message
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Your message here..."
                          className={`w-full px-3 py-2 bg-white/10 border rounded-md focus:outline-none focus:ring-2 text-white placeholder-gray-400 resize-vertical transition-colors ${
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
                        className="w-full hover:bg-white/20" 
                        disabled={isLoading || !isValid || !dirty}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Mail className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="mailto:manuchimsoemmanuel2k@gmail.com" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        manuchimsoemmanuel2k@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Social Media</h2>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Github className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://github.com/Manuel-co" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        github.com/Manuel-co
                      </Link>
                    </div>
                    <div className="flex items-center group">
                      <Twitter className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://x.com/NwekeManuchimso" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        @NwekeManuchimso
                      </Link>
                    </div>
                    <div className="flex items-center group">
                      <Linkedin className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        linkedin.com/in/Nweke Emmanuel
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                  <p className="text-gray-400">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM WAT
                  </p>
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}