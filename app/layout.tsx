import type { Metadata } from "next"
import { Josefin_Sans } from "next/font/google"
import "./globals.css"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

export const metadata: Metadata = {
  title: "Base Apparel Coming Soon Pag",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${josefinSans.className} flex min-h-screen flex-col items-center justify-center bg-gradient-body text-primary-dark`}
      >
        {children}
      </body>
    </html>
  )
}
