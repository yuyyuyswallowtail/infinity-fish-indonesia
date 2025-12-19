"use client"
import * as z from "zod"
import { useForm } from "@tanstack/react-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { ChangeEvent, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import dataContact from "@/datas/contact.json"
import { TypographyH1, TypographyP } from "@/components/Typography"
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react"
import Marquee from "react-fast-marquee";
import FadeUp from "@/components/animation/FadeUp"

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Username must be at least 5 characters.")
    .max(30, "Username must be at most 30 characters."),
  email: z
    .email()
    .min(5, "Email must be at least 5 characters.")
    .max(30, "Email must be at most 30 characters."),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters.")
    .max(1000, "Description must be at most 1000 characters."),
})

const AlertInformation = ({ message }: { message: { title: string, description: string } }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true)
  return <AlertDialog open={isDialogOpen}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{message.title}</AlertDialogTitle>
        <AlertDialogDescription>
          {message.description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Close</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
}



const Contact = () => {
  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allertMessage, setAllertMessage] = useState({ title: "", description: "" });
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      setAllertMessage({ title: "", description: "" });
      setIsLoading(true)
      const token = captchaRef.current?.getValue();
      if (!token) {
        setIsLoading(false);
        setIsOpen(true);
        setAllertMessage({ title: "CAPTCHA Invalid!", description: "Please verify CAPTCHA again." });
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...value, token }),
      });

      captchaRef.current?.reset();

      if (res.ok) {
        setIsLoading(false)
        setIsOpen(true);
        setAllertMessage({
          title: "Sent Message Success", description: "Thank you for contacting us! We’ve received your description and will respond shortly."
        });
      } else {
        setIsLoading(false)
        setIsOpen(true);
        setAllertMessage({ title: "Something wrong!", description: "Please try again later!" })
      }

    },
  })
  return <>

    <Marquee className="border-y-4" direction="right">
      <TypographyH1 className="flex justify-center items-center gap-2 py-6">
        <PhoneCall size={32} />Contact Us
      </TypographyH1>
    </Marquee>

    <section className="container mt-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center gap-4 px-4">
      <FadeUp>
        <div className="flex flex-col justify-center items-center h-full gap-8 py-16">
          <div className="flex flex-col justify-center items-center text-center">
            <TypographyH1>{dataContact.name}</TypographyH1>
            <TypographyP>Reach out to us for any questions or concerns regarding our ornamental fish exporting services. <br /> We are here to assist you.</TypographyP>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <TypographyH1 className="flex justify-center items-center gap-2"><MapPin size={32} /> Address</TypographyH1>
            <TypographyP>{dataContact.address}</TypographyP>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <TypographyH1 className="flex justify-center items-center gap-3"><Mail size={32} />Email</TypographyH1>
            <TypographyP>{dataContact.email}</TypographyP>
          </div>

        </div>
      </FadeUp>
      <FadeUp>

        <div className="flex justify-center items-center w-full rounded-2xl p-4">
          {
            isOpen ? <AlertInformation message={allertMessage} /> : null
          }
          <Card className="w-full sm:max-w-md shadow">
            <CardHeader>
              <CardTitle className="flex flex-col justify-center items-center gap-2 py-4">
                <Phone />
                Contact
              </CardTitle>
              <CardDescription>
                Contact Us Today For Inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                id="contact"
                onSubmit={(e) => {
                  e.preventDefault()
                  form.handleSubmit()
                }}
              >
                <FieldGroup>
                  <form.Field
                    name="name"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Enter your gmail username"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="email"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            type={"email"}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => field.handleChange(e.target.value)}
                            aria-invalid={isInvalid}
                            placeholder="Enter your gmail email"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                  <form.Field
                    name="description"
                    children={(field) => {
                      const isInvalid =
                        field.state.meta.isTouched && !field.state.meta.isValid
                      return (
                        <Field data-invalid={isInvalid}>
                          <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                          <InputGroup>
                            <InputGroupTextarea
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => field.handleChange(e.target.value)}
                              placeholder="Input your description."
                              rows={6}
                              className="min-h-24 resize-none"
                              aria-invalid={isInvalid}
                            />
                            <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums">
                                {field.state.value.length}/1000 characters
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          {isInvalid && (
                            <FieldError errors={field.state.meta.errors} />
                          )}
                        </Field>
                      )
                    }}
                  />
                </FieldGroup>
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                  onChange={() => setIsCaptchaVerified(true)}
                  className="pt-4"
                />
                <CardDescription className="pt-4 text-left">Verify your CAPTCHA before send message</CardDescription>
              </form>
            </CardContent>
            <CardFooter>
              <Field orientation="horizontal">
                {
                  isLoading ? <Button variant={"outline"} className="cursor-not-allowed" disabled>
                    Loading...
                  </Button>
                    : <Button type="submit" form="contact" className="cursor-pointer"
                      disabled={!isCaptchaVerified ? true : false}>
                      Send Message
                    </Button>

                }
              </Field>
            </CardFooter>
          </Card>
        </div>
      </FadeUp>
    </section >
  </>
}

export default Contact;
