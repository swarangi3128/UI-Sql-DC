import Heading from "../../Components/Heading";
import styles from "./style.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="04" heading="What's Next" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.desc}>
				Any details. 
			</p>
			<a href="">
				<button className={styles.btn}>
					<MailIcon />
				</button>
			</a>
			<a href="">
				<button className={styles.btn}>
					<GitHubIcon /> 
				</button>
			</a>
			<a href="">
				<button className={styles.btn}>
					<LinkedInIcon /> 
				</button>
			</a>
				<p className={styles.desc}>
                Phone Number: 911
            </p>
			
		</section>
	);
}

export default Contact;