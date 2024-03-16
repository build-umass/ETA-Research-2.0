import styles from '@styles/footer.module.css'
import { getFooterInfo } from '@services/contentfulUtils'

const Footer = async () => {

  const moreInfo = await getFooterInfo()
  const morePageContent = moreInfo[0].fields

  return (
    <div className={styles.footerContainer}>
        <div className="row justify-content">
            <div className="col-sm-2 text-center">
                <img src={"/umass-seal.svg"} width="80" height="80"></img>
            </div>
            <div className="col-sm-8 text-center pt-4">
              <a href="/contactus" className={styles.navbarLink}>Contact Us</a> /<a href={morePageContent.socialMediaUrl} className={styles.navbarLink} target='_blank'>Social Media</a> /<a href={morePageContent.sitePoliciesUrl} className={styles.navbarLink} target='_blank'>Site Policies</a>
            </div>
        </div>
    </div>
  )
}

export default Footer