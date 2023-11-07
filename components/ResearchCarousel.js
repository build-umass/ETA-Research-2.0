"use client"
import { useState, useEffect, useContext } from "react"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import 'react-horizontal-scrolling-menu/dist/styles.css';
import Image from "next/image"

import styles from "@styles/carousel.module.css"


function ImageWithOverlay({overlayText, imageUrl}) {
    const [showOverlay, setShowOverlay] = useState(false);
    
    return (
    <>
        <img src={imageUrl} className={styles.carouselImage}
        onMouseEnter={e => {
            e.stopPropagation();
            setShowOverlay(true);
        }}
        onMouseLeave={e => {
            e.stopPropagation();
            setShowOverlay(false);
        }}>
        </img>

        {showOverlay && (<div className={styles.overlay}>{overlayText}</div>)}
    </>
    );
}

// takes in array with [[overlay text, image url]]
// TODO: fix css styling for images and button, get rid of scroll bar, make buttons on bottom, put gaps between images
export function ResearchCarousel({data}) {

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((textAndUrl, index) => (
                <ImageWithOverlay overlayText={textAndUrl[0]} imageUrl={textAndUrl[1]} key={index}/>
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            Left
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return (
      <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </button>
    );
  }