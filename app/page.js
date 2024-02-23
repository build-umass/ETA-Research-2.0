import styles from "@styles/home.module.css"
import Header from "@components/Header"
import Footer from "@components/Footer"
import ImageSlider from "@components/ImageSlider"
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  const slides = [
    {url: "http://localhost:3000/students.jpeg", title: "Students"},
    {url: "http://localhost:3000/BridgetteTeam.JPEG", title: "Team"}
  ]
  const containerStyles = {
    width: "750px",
    height: "420px",
    margin: "0 auto",
  };
  return (
    <> 
      <div className={styles.spacingDiv} />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Footer />
    </>
  )
}
