import styles from "@styles/home.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ImageSlider from "@components/ImageSlider";
import 'bootstrap/dist/css/bootstrap.css';
import { getHomeData } from "@services/contentfulUtils";

const homeData = getHomeData();

export default function Home() {
  const slides = [
    { url: "http://localhost:3000/thompson_hall_2.jpeg", title: "Thompson2" },
    { url: "http://localhost:3000/thompson_hall.jpeg", title: "Thompson" },
    { url: "http://localhost:3000/BridgetteTeam.JPEG", title: "Team" }
  ];

  const containerStyles = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    width: "100%",
    padding: "10px 20px",
  };

  const textContainerStyles = {
    width: "calc(100% - 400px)", // Adjusted width for text container
    marginRight: "20px",
  };

  const sliderStyles = {
    width: "650px",
    height: "336px", // Added height to the image slider
    marginTop: "65px"
  };

  return (
    <>
      <div style={containerStyles}>
        <div style={sliderStyles}> {/* Adjusted width for image slider */}
          <ImageSlider slides={slides} />
        </div>
        <div style={textContainerStyles}>
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
        </div>
      </div>
      <div className={styles.spacingDiv} />
    </>
  );
}