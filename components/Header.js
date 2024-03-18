import styles from '@styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImageSmall} src={"/HeaderImageSmall.png"} />
      <img className={styles.headerImageLarge} src={"/HeaderImageLarge.png"} />
    </div>
  )
}

export default Header