import "@styles/globals.css"
import Header from "@components/Header"
import Footer from "@components/Footer"
import { Navbar } from "@components/Navbar"

export const metadata = {
  title: 'ETA Research',
  description: 'Research done by Equitable Transitions to Adulthood',
  author: 'BUILD UMass',
  keywords: ['ETA Research', 'Equitable Transitions', 'Adulthood', 'research'],
  image: '/temporary-header.png', 
  siteName: 'ETA Research'
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mainContainer">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
