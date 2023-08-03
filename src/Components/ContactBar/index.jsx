import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
			
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="" className={styles.email}>
					abc@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;