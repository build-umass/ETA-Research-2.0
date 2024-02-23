import styles from '@styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerImageSmall} src={"/StackedLogo.jpg"} />
      <img className={styles.headerImageLarge} src={"/SideBySideLogo.jpg"} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Equitable Transitions to Adulthood</h1>
        <h2 className={styles.subtitle}>Research Center</h2>
      </div>
      
    </div>
  )
}

export default Header