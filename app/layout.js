import "@styles/globals.css"

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
      <body>{children}</body>
    </html>
  )
}
