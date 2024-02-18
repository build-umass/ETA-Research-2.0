import { Navbar } from "@components/Navbar"
import styles from "@styles/more.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import Header from "@components/Header"
import Footer from "@components/Footer"

const page = () => {

    return (
        <>
            <Header />

            <Navbar></Navbar>
            <nav className="pt-3 ps-2" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">More</li>
                </ol>
            </nav>

            <div className={styles.teamImage}>
                <img src={"/TeamPhoto.jpeg"} width="60%" alt="Contact Us Photo" style={{borderRadius: '5%'}}></img>
            </div>

            <div className="container p-5">
                <div className="row ps-5">
                    <div className="col-sm-3 ps-5">
                        <div className={`row ${styles.prospectTitle}`}>
                            CONTACTS:
                        </div>
                        <br></br>
                        <strong>
                        <div className="row">
                            John Doe:
                            <br></br>
                            TEST(AT)TEST.COM
                            <br></br>
                            (000)000-0000
                            <br></br>
                            <br></br>
                            Office Location:
                            <br></br>
                            Lorem ipsum dolor
                            <br></br>
                            sit amet
                            <br></br>
                            Little Whinging
                        </div>
                        </strong>
                        <br></br>
                    </div>
                    <div className="col-sm-9 ps-5 pe-5">
                        <div className={`row ps-2 ${styles.prospectTitle}`}>
                            PROSPECTIVE STUDENTS AND RESEARCHERS
                        </div>
                        <div className="row pt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean. Diam in arcu cursus euismod quis viverra nibh. Cras tincidunt lobortis feugiat vivamus at. Est ultricies integer quis auctor elit sed vulputate semper quis.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean. Diam in arcu cursus euismod quis viverra nibh. Cras tincidunt lobortis feugiat vivamus at. Est ultricies integer quis auctor elit sed vulputate semper quis.
                            </p>
                            <p>Thank you for your interest in our work!</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <Footer />
        </>
        
    )
}

export default page