import { Navbar } from "@components/Navbar"
import { ResearchCarousel } from "@components/ResearchCarousel"
import Image from "next/image"
import styles from "@styles/home.module.css"

export default function Home() {
  let data = Array(20).fill(["Hello", "/temporary-header.png"]);

  return (
      <> 
        <div className={styles.tempHeaderImage}>
          <Image src={"/temporary-header.png"} width="1080" height="240"></Image>
        </div>
        <Navbar></Navbar>
        
        <ResearchCarousel data={data}/>
      </>
    );
}
