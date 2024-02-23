import styles from '@styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className="row justify-content">
            <div className="col-sm-1">
                <img src={"/umass-seal.svg"} width="80" height="80"></img>
            </div>
            <div className="col-sm-11 text-center pt-4 text-white">
                Contact / social media / copyright
            </div>
        </div>
    </div>
  )
}

export default Footer