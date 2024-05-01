import "bootstrap/dist/css/bootstrap.css";
import styles from "@styles/research.module.css";
import Link from "next/link";
import ResearchList from "@components/ResearchList";

const page = () => {
  return (
    <>
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" className={styles.breadcrumbItem}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Research
          </li>
        </ol>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 pt-3">
            <ResearchList />
          </div>
          <div className="col-md-3 pt-3">
            <div className={`rounded p-3 ${styles.eventContainer}`}>
              <h4 className="mb-4">Upcoming Events</h4>
              <div className="d-flex align-items-start">
                <div className={`event-date align-self-start ${styles.dateCard}`}>
                  <div className={styles.dateText}>30</div>
                  <div className={styles.monthText}>Apr</div>
                </div>
                <div className={`ms-3 flex-grow-1 ${styles.eventDetails}`}>
                  <h5 className={styles.eventTitle}><strong>Event 1</strong></h5>
                  <p className={styles.eventInfo}>Location: Campus Center</p>
                  <p className={styles.eventInfo}>Time: 10:00 AM - 12:00 PM</p>
                  <p className={styles.eventInfo}>Description: provide free advice and professional guidance throughout the application process and offer informational events, writing workshops, and other assistance during the year.</p>
                </div>
              </div>
              <div className="mt-4 d-flex align-items-start">
                <div className={`event-date align-self-start ${styles.dateCard}`}>
                  <div className={styles.dateText}>15</div>
                  <div className={styles.monthText}>May</div>
                </div>
                <div className={`ms-3 flex-grow-1 ${styles.eventDetails}`}>
                  <h5 className={styles.eventTitle}><strong>Event 2</strong></h5>
                  <p className={styles.eventInfo}>Location: XYZ Hall</p>
                  <p className={styles.eventInfo}>Time: 2:00 PM - 4:00 PM</p>
                  <p className={styles.eventInfo}>Description: provide free advice and professional guidance throughout the application process and offer informational events, writing workshops, and other assistance during the year.</p>
                </div>
              </div>
              {/* Add more events here */}
            </div>
          </div>


        </div>
      </div>
      <hr />
    </>
  );
};

export default page;
