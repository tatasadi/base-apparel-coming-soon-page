"use client"
import Image from "next/image"
import Reference from "./components/Reference"
import logo from "../public/images/logo.svg"
import heroDesktop from "../public/images/hero-desktop.jpg"
import heroMobile from "../public/images/hero-mobile.jpg"
import iconArrow from "../public/images/icon-arrow.svg"
import iconError from "../public/images/icon-error.svg"
import { z } from "zod"
import { useState } from "react"

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Whoops! It looks like you forgot to add your email")
    .email("Please provide a valid email"),
})

export default function Home() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSuccess(false)
    setEmail(e.target.value)
    if (error) setError("")
  }

  function handlSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = emailSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.errors[0].message)
      setSuccess(false)
      return
    } else {
      setSuccess(true)
      setEmail("")
    }
  }

  return (
    <main className="flex h-full min-h-screen w-full max-w-5xl flex-col items-center sm:grid sm:grid-cols-2 md:min-h-0">
      <div className="flex w-full flex-col items-start p-8 sm:place-self-end">
        <Image src={logo} alt="logo" />
      </div>
      <div className="hidden w-full sm:row-span-2 sm:block">
        <Image src={heroDesktop} alt="hero desktop" layout="responsive" />
      </div>
      <div className="block w-full sm:hidden">
        <Image src={heroMobile} alt="hero mobile" layout="responsive" />
      </div>
      <div className="flex flex-col items-center px-8 py-20 sm:items-start md:pr-20">
        <h1 className="text-cnter flex flex-col items-center text-[2.5rem] font-light uppercase leading-[2.625rem] tracking-[0.67656rem] text-primary-desaturated-red sm:items-start sm:text-left md:text-[4rem] md:leading-[4rem] md:tracking-[1.08256rem]">
          <span>We&apos;re</span>
          <span className="max-w-60 text-center font-semibold text-primary-dark sm:text-left">
            coming soon
          </span>
        </h1>
        <p className="mb-8 mt-4 text-center text-sm leading-[1.375rem] text-primary-desaturated-red sm:text-left md:text-base md:leading-7">
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <form onSubmit={handlSubmit} className="w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className={`w-full rounded-full bg-transparent px-6 py-3 text-sm leading-7 placeholder:text-primary-desaturated-red placeholder:opacity-50 md:text-base ${
                error
                  ? "border-2 border-primary-soft-red"
                  : "border border-primary-desaturated-red"
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="submit"
              className="hover:bg-gradient-red-50 absolute right-0 top-0 h-full cursor-pointer rounded-full bg-gradient-red px-7 py-3 shadow-[0_15px_20px_0_rgba(198,110,110,0.25)] hover:bg-white sm:px-10"
            >
              <Image src={iconArrow} alt="arrow icon" className="" />
            </button>
            {error && (
              <Image
                src={iconError}
                alt="error icon"
                className="absolute right-20 top-[0.85rem] sm:right-[6.5rem]"
              />
            )}
          </div>
          {error && (
            <p className="ml-6 mt-2 text-[0.8125rem] leading-normal text-primary-soft-red md:text-base">
              {error}
            </p>
          )}
          {success && (
            <p className="ml-6 mt-4 text-center leading-normal text-green-600 md:text-base">
              Thank you for subscribing!
            </p>
          )}
        </form>
      </div>
      <Reference />
    </main>
  )
}
