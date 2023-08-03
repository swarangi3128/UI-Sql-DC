import styles from "./styles.module.css";
import ResumeButton from './ResumeButton';

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">DEEPCYTES</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About
				</a>
				<a href="#experience" className={styles.nav_link}>
					<span>02.</span>Link
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>04.</span>Command Execution
				</a>
				<ResumeButton />
				
			</div>
		</nav>
	);
}

export default Navbar;