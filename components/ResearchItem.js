"use client"
import { useEffect } from 'react'
import styles from "@styles/research.module.css"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { BLOCKS } from "@contentful/rich-text-types";


const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height="100%"
          width="100%"
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};


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
            {documentToReactComponents(research.fields.description, renderOptions)}
          </div>
        </div>
        <div className="col-sm-4">
          <a href={research.fields.link} target='_blank'>
            <img src={research.fields.image.fields.file.url} className="img-fluid" width="100%" height="auto"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResearchItem