import styles from '@styles/header.module.css'
import { getHeaderInfo } from '@services/contentfulUtils'

const Header = async () => {

  const headerData = await getHeaderInfo()
  const headerImgSmall = headerData[0].fields.headerImageSmall.fields.file.url
  const headerImgLarge = headerData[0].fields.headerImageLarge.fields.file.url

  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImageSmall} src={headerImgSmall} />
      <img className={styles.headerImageLarge} src={headerImgLarge} />
    </div>
  )
}

export default Header