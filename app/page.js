import styles from "@styles/home.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ImageSlider from "@components/ImageSlider";
import 'bootstrap/dist/css/bootstrap.css';
import { getHomeData, getHomeSlidesData } from "@services/contentfulUtils";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser'






export default async function Home() {
  const homeData = await getHomeData();
  const richTextHtmlString = documentToHtmlString(homeData[0].fields.textBox); // renders rich text (bold, italics, etc) in html

  const homeSlidesData = await getHomeSlidesData();
  const slides = homeSlidesData.map((slide) => {
    return {
      url: slide.fields.slideImage.fields.file.url,
      title: slide.fields.alternativeText,
    };
  });

  const containerStyles = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    width: "100%",
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
                    {parse(richTextHtmlString)}
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