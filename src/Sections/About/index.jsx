import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Us" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					You can put any text over here
					And image on the right side
					Lorem Ipsum
					</p>
					<p className={styles.desc}>
					Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
					</p>
				</div>
				<div className={styles.right}>
					<img
						src=" "
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;