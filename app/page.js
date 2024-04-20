import styles from "@styles/home.module.css"
import Header from "@components/Header"
import Footer from "@components/Footer"
import ImageSlider from "@components/ImageSlider"
import 'bootstrap/dist/css/bootstrap.css'
import { getHomeData } from "@services/contentfulUtils"

const homeData = getHomeData()
export default function Home() {
  const slides = [
    {url: "http://localhost:3000/thompson_hall_2.jpeg", title: "Thompson2"},
    {url: "http://localhost:3000/thompson_hall.jpeg", title: "Thompson"},
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
      <div className="pt-3">
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="row pe-5 pt-2">
                {homeData}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spacingDiv} />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className={styles.spacingDiv} />
    </>
  )
}
