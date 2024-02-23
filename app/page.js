import styles from "@styles/home.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { getHomeData } from "@services/contentfulUtils"

export default function Home() {

  const homeData = getHomeData()
  return (
    <> 
      <div className={styles.spacingDiv} />
      <div className="pt-3">
         <div className="container p-5">
          <div className="row">
            <div className="col-sm-8">
              <div className={`row ${styles.title}`}>
                {"Title"}
              </div>
              <div className="row pe-5 pt-2">
                {homeData}
              </div>
            </div>
            <div className="col-sm-4">
              <img src={"/ThompsonHall.jpeg"} width="100%" height="100%"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
