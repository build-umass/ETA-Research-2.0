"use client"
import { useEffect } from 'react'
import styles from "@styles/research.module.css"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser'

const ResearchItem = ({research}) => {

  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.js")
  })

  const richTextHtmlString = documentToHtmlString(research.fields.description); // renders rich text (bold, italics, etc) in html


  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-sm-8">
          <div className={`row ${styles.researchTitle}`}>
            {research.fields.title}
          </div>
          <div className="row pe-5 pt-2">
            {parse(richTextHtmlString)}
          </div>
        </div>
        <div className="col-sm-4">
          <a href={research.fields.link} target='_blank'>
            <img src={research.fields.image.fields.file.url} width="100%" height="100%"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResearchItem