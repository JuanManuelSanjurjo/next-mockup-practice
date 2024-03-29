import Nav from "../components/Nav"
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata = {
  title: 'curso Next',
  description: 'Generated by Next.js',
}

const font = Roboto({ 
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
      
      {children}
      </body>
    </html>
  )
}
 