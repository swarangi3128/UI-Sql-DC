import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Any Text</p>
			<h1 className={styles.heading_1}>SQL Injection</h1>
			<h1 className={styles.heading_2}>Lorem Ipsum</h1>
			<p className={styles.desc}>
			Lorem Ipsum
			Lorem Ipsum
			</p>
			<a href="#work">
				<button className={styles.btn}>TRY OUT!</button>
			</a>
		</section>
	);
}

export default Home;