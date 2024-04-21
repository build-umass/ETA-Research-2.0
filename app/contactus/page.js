import styles from "@styles/more.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import { getMoreInfo } from '@services/contentfulUtils'

const page = async () => {

    const moreInfo = await getMoreInfo()
    const morePageContent = moreInfo[0].fields

    return (
        <>
            <nav className="pt-3 ps-2" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </nav>

            <div className={styles.teamImage}>
                <img src={morePageContent.image.fields.file.url} width="60%" alt="Contact Us Photo" style={{borderRadius: '5%'}}></img>
            </div>

            <div className="container p-5">
                <div className="row ps-5">
                    <div className="col-sm-3 ps-5">
                        <div className={`row ${styles.prospectTitle}`}>
                            {morePageContent.contactTitle}
                        </div>
                        <br></br>
                        <strong>
                        <div className="row">
                            {morePageContent.contactDescription.content.map((moreItem) => (
                                <>
                                {moreItem.content[0].value} <br></br>
                                </>
                            ))}
                        </div>
                        </strong>
                        <br></br>
                    </div>
                    <div className="col-sm-9 ps-5 pe-5">
                        <div className={`row ${styles.prospectTitle}`}>
                            {morePageContent.title}
                        </div>
                        <div className={styles.descriptionContainer + "row pt-3"}>
                            {morePageContent.description.content.map((moreItem) => (
                                <>
                                {moreItem.content[0].value} <br></br>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default page