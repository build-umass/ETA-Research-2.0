"use client"
import { useEffect } from 'react'
import styles from "@styles/people.module.css"

import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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


function formatEmail(email) {
  
  if (email === null || email === undefined) {
    return null
  }
  // Email: TEST(AT)TEST.COM
  return "Email: " + email.toUpperCase().split('@').join('(AT)')
}

const Student = ({student}) => {

  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.js")
  })

  return (
    <div className="container p-5">
        <div className="row">
          <div className="col-sm-4">
            <img src={student.fields.studentHeadshot?.fields.file.url} 
              className="img-fluid"
              width="100%" height="auto"></img>
          </div>
          <div className="col-sm-8 ps-5">
            <div className={`row ${styles.peopleTitle}`}>
              {student.fields.studentName}
            </div>
            <div className="row pt-3">
              {documentToReactComponents(student.fields.studentBio, renderOptions)}
            </div>
            <div className={`row pt-4 ${styles.email}`}>
              {formatEmail(student.fields?.studentEmail)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Student