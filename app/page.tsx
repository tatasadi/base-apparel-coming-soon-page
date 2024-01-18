import Image from "next/image"
import Reference from "./components/Reference"
import logo from "../public/images/logo.svg"
import heroDesktop from "../public/images/hero-desktop.jpg"
import heroMobile from "../public/images/hero-mobile.jpg"
import iconArrow from "../public/images/icon-arrow.svg"
import iconError from "../public/images/icon-error.svg"
import bgPatternDesktop from "../public/images/bg-pattern-desktop.svg"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-5xl flex-col items-center md:min-h-0">
      <div className="flex w-full flex-col items-start p-8">
        <Image src={logo} alt="logo" />
      </div>
      <div className="hidden w-full sm:block">
        <Image src={heroDesktop} alt="hero desktop" layout="responsive" />
      </div>
      <div className="block w-full sm:hidden">
        <Image src={heroMobile} alt="hero mobile" layout="responsive" />
      </div>
      <div className="flex flex-col items-center px-8 py-20">
        <h1 className="text-cnter flex flex-col items-center text-[2.5rem] font-light uppercase leading-[2.625rem] tracking-[0.67656rem] text-primary-desaturated-red">
          <span>We&apos;re</span>
          <span className="text-center font-semibold text-primary-dark">
            coming soon
          </span>
        </h1>
        <p className="mb-8 mt-4 text-center text-sm leading-[1.375rem] text-primary-desaturated-red">
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <form className="w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full rounded-full border border-primary-desaturated-red bg-transparent px-6 py-3 text-sm leading-7 placeholder:text-primary-desaturated-red placeholder:opacity-50"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full cursor-pointer rounded-full bg-gradient-red px-7 py-3"
            >
              <Image src={iconArrow} alt="arrow icon" className="" />
            </button>
          </div>
        </form>
      </div>
      <Reference />
    </main>
  )
}
