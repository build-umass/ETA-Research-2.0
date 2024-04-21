"use client"
import { useEffect } from 'react'
import styles from "@styles/research.module.css"

const ResearchItem = ({research}) => {

  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.js")
  })

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-sm-8">
          <div className={`row ${styles.researchTitle}`}>
            {research.fields.title}
          </div>
          <div className="row pe-5 pt-2">
            {research.fields.description.content[0].content[0].value}
          </div>
        </div>
        <div className={styles.researchImageContainer + " col-sm-4"}>
          <a href={research.fields.link} target='_blank'>
            <img className={styles.researchImage} src={research.fields.image.fields.file.url} width="100%" height="100%"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResearchItem