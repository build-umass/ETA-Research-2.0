"use client"
import "@styles/globals.css"
import Header from "@components/Header"
import Footer from "@components/Footer"
import { Navbar } from "@components/Navbar"
import { useEffect, useState, useRef } from "react"
import { config } from "dotenv"

// export const metadata = {
  //   title: 'ETA Research',
  //   description: 'Research done by Equitable Transitions to Adulthood',
  //   author: 'BUILD UMass',
  //   keywords: ['ETA Research', 'Equitable Transitions', 'Adulthood', 'research'],
  //   image: '/temporary-header.png', 
  //   siteName: 'ETA Research'
  // };
  
export default function RootLayout({ children }) {

  const [ auth, setAuth ] = useState(false)
  useEffect(() => {
    config()
    if (localStorage.getItem("auth") === process.env.NEXT_PUBLIC_AUTH) {
      console.log(localStorage.getItem("auth"))
      setAuth(true)
    } else {
      console.log(localStorage.getItem("auth"))
      console.log(process.env.NEXT_PUBLIC_AUTH)
    }
    console.log(auth)
  }, [])

  const handleAuthSubmit = () => {
    if (inputRef.current.value === process.env.NEXT_PUBLIC_AUTH) {
      setAuth(true)
      localStorage.setItem("auth", inputRef.current.value)
    }
  }

  const inputRef = useRef(null)

  return (
    <html lang="en">
      <body>
        { auth ? 
          <>
            <Navbar />
            <div className="mainContainer">
              <Header />
              {children}
            </div>
            <Footer /> 
          </>
        :
          <>
            <input type="text" ref={inputRef}></input>
            <button onClick={handleAuthSubmit}>Submit</button>
          </>
        }
          
      </body>
    </html>
  )
}
